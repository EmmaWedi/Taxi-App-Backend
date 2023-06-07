import * as nodemailer from 'nodemailer';
import { mailConfig } from '../config/mailer.config';
import { messageInterface } from './mailer.model';

const send = (mailOptions: messageInterface) => new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport(mailConfig);
    
    transporter.sendMail(mailOptions, (err, info) => {
        try{
            if(err) reject(err);
            resolve(info);
        }catch(err){
            reject(err);
        }
    })
})

export default send;