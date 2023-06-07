import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Validator } from './jwt.model';
import { token_secret } from './jwt.config';

const validate = (custom?: Validator) => {
    return (req: Request | any, res: Response, next: NextFunction) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(403);
        jwt.verify(token, token_secret, (err: any, auth: any) => {
            if (err) return res.sendStatus(403);
            if (custom) {
                const value = custom(auth);
                if (value.isValid) {
                    return res.sendStatus(403)
                }
            }
            req.user = auth;
            if (req.user.isBlocked) {
                return res.send('Account blocked, contact system administrator');
            }
            next();
        })
    }
}

export default validate;