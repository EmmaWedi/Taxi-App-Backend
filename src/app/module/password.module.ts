import * as bcrypt from 'bcrypt';

export const generateSalt = async () => {
    return await bcrypt.genSalt(15);
}

export const generatePassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt);
}

export const validatePassword = async (enteredPassword: string, salt: string, savedPassword: string) => {
    return (await generatePassword(enteredPassword, salt)) === savedPassword;
}