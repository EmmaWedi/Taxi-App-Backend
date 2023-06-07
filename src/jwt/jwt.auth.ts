import * as jwt from 'jsonwebtoken';
import { token_secret } from './jwt.config';

const generateToken = (data: any, expiresIn: string = "30m") => jwt.sign(
    data,
    token_secret,
    { expiresIn: expiresIn }
);

export default generateToken;