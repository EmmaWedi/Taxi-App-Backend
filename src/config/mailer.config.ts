import * as dotenv from 'dotenv';

interface MailConfigProps {
    MAIL_SERVICE: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_TRUTHY: boolean;
    MAIL_USER: string;
    MAIL_PASS: string;
}

const {
    MAIL_SERVICE,
    MAIL_HOST,
    MAIL_PORT,
    MAIL_TRUTHY,
    MAIL_USER,
    MAIL_PASS
}: MailConfigProps | any = dotenv.config().parsed;

export const mailConfig = {
    service: MAIL_SERVICE,
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: MAIL_TRUTHY,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
    }
}