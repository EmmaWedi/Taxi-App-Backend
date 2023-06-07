import { Request, Response } from 'express';
import * as moment from 'moment';
import { randOtp, formatPhoneNumber } from '../utils/otp.utils';
import { ValidateModel } from '../model/otp.model';

const sendEmail = async (req: Request | any, res: Response) => {
    try {
        const { email } = req.body;
        const code = await randOtp();
        const result = await req.dbOtp.findOneAndUpdate({ email },
            {
                $set: {
                    otp: code,
                    updatedAt: Date.now(),
                    expiresAt: moment().add(30, 'minutes')
                },
            },
            {
                upsert: true,
                new: true
            }
        )
        return res.json({
            success: true,
            message: 'success',
            data: result
        })
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const sendPhone = async (req: Request | any, res: Response) => {
    try {
        const { phone } = req.body;
        const code = await randOtp();
        const number = formatPhoneNumber(phone);
        const result = await req.dbOtp.findOneAndUpdate({ phone: number },
            {
                $set: {
                    otp: code,
                    updatedAt: Date.now(),
                    expiresAt: moment().add(30, 'minutes')
                },
            },
            {
                upsert: true,
                new: true
            }
        )
        return res.json({
            success: true,
            message: 'success',
            data: result
        })
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const getOtps = async (req: Request | any, res: Response) => {
    try {
        const results = await req.dbOtp.find({});
        return res.json({
            success: true,
            message: 'success',
            data: results
        })
    } catch (error: any) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const validateOtp = async (req: Request | any, { channel, otp }: ValidateModel) => {
    try {
        const result = await req.dbOtp.findOne({ $or: [{ email: channel, otp }, { phone: channel, otp }] });
        if (!result || !result._id) {
            throw Error('OTP Invalid');
        }
        return moment().isBefore(result.expiresAt);
    } catch (err) {
        return false;
    }
}

export default {
    sendEmail,
    getOtps,
    sendPhone,
    validateOtp
}