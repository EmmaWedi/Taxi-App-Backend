import { Request, Response } from 'express';
import { generatePassword, generateSalt, validatePassword } from '../../module/password.module';
import { calAge } from '../utils/driver.util';
import { Uid } from '../../module/formatter.module';

const addDriver = async (req: Request | any, res: Response) => {
    try {
        const {
            email,
            fullname,
            password,
            phone,
            DoB
        } = req.body;

        const userExists = await req.dbDrivers.findOne({ where: { email: email } });

        if (userExists !== null) throw Error(`${email} already exists`);

        const age = await calAge(DoB);

        if(!age) throw Error ('Age cannot be below 25');

        const hash = await generateSalt();
        const securePassword = await generatePassword(password, hash);

        const uid: string = await Uid();

        const result = await req.dbDrivers.create({
            email,
            fullname,
            password: securePassword,
            phone,
            uid,
            DoB,
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

        const userExists = await req.dbDrivers.findOne({ where: { email: email, isBlocked: false } });

        if (userExists === null) throw Error(`Account Not Valid`);

        const verified = await validatePassword(password, userExists.salt, userExists.password)

        if (!verified) throw Error('Wrong Credentials');

        const token = await req.generateToken({
            uid: userExists.uid,
            isBlocked: userExists.isBlocked
        })

        const uid: string = await Uid();

        await req.dbDrivers.update({ isActive: true, uid }, { where: { id: userExists.id } });

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

const getDriverDetails = async (req: Request | any, res: Response) => {
    try {
        const auth = req.user;
        const details = await req.dbDrivers.findOne({ where: { uid: auth.uid } });

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

const updateDriver = async (req: Request | any, res: Response) => {
    try {
        const auth = req.user;
        const data = req.body;

        const result = await req.dbDrivers.update({ ...data }, { where: { uid: auth.uid } });

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
        const result = await req.dbDrivers.update({ isActive: false }, { where: { uid: auth.uid } });

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
    addDriver,
    signin,
    getDriverDetails,
    updateDriver,
    logout
}