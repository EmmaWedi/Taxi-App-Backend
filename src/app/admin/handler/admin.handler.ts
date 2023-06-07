import { Request, Response } from "express";
import { generatePassword, generateSalt, validatePassword } from "../../module/password.module";
import { Uid } from '../../module/formatter.module';

const addAdmin = async (req: Request | any, res: Response) => {
    try {
        const {
            email,
            fullname,
            password,
            phone
        } = req.body;

        const userExists = await req.dbAdmin.findOne({ where: { email: email } });

        if (userExists !== null) throw Error(`${email} already exists`);

        const hash = await generateSalt();
        const securePassword = await generatePassword(password, hash);

        const uid: string = await Uid();

        const result = await req.dbAdmin.create({
            email,
            fullname,
            password: securePassword,
            phone,
            uid,
            salt: hash
        })

        return res.json({
            success: true,
            message: 'success',
            data: result
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const signin = async (req: Request | any, res: Response) => {
    try {
        const {
            email,
            password
        } = req.body;

        const userExists = await req.dbAdmin.findOne({ where: { email: email, isBlocked: false } });

        if (userExists === null) throw Error(`Account Not Valid`);

        const verified = await validatePassword(password, userExists.salt, userExists.password)

        if (!verified) throw Error('Wrong Credentials');

        const token = await req.generateToken({
            uid: userExists.uid,
            isBlocked: userExists.isBlocked
        })

        const uid: string = await Uid();

        await req.dbAdmin.update({ isActive: true, uid }, { where: { id: userExists.id } });

        return res.json({
            success: true,
            message: "success",
            data: token
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const getAdminDetails = async (req: Request | any, res: Response) => {
    try {
        const auth = req.user;
        const details = await req.dbAdmin.findOne({ where: { uid: auth.uid } });

        if (details === null) throw Error('Invalid Account');

        return res.json({
            success: true,
            message: "success",
            data: details
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const updateAdmin = async (req: Request | any, res: Response) => {
    try {
        const auth = req.user;
        const data = req.body;

        const result = await req.dbAdmin.update({ ...data }, { where: { uid: auth.uid } });

        if (result === null) throw Error('Could not update record');

        return res.json({
            success: true,
            message: "Update Successful"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

const logout = async (req: Request | any, res: Response) => {
    try {
        const auth = req.user;
        const result = await req.dbAdmin.update({ isActive: false }, { where: { uid: auth.uid } });

        if (result === null) throw Error('Could not update record');

        return res.json({
            success: true,
            message: "Logout Successful"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: (error as Error)?.message
        })
    }
}

export default {
    addAdmin,
    signin,
    getAdminDetails,
    updateAdmin,
    logout
}