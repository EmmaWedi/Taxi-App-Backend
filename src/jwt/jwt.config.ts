import * as dotenv from 'dotenv';

const {
    SECRET
}: any = dotenv.config().parsed;

export const token_secret = SECRET;