export const randOtp = async () => {
    let min = 10000000, max = 99999999;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

export const formatPhoneNumber = (phone: string) => {
    phone.replace(/ /g, "");
    const extension: string = "233"
    const mobile = parseInt(phone)
    return extension + mobile;
}