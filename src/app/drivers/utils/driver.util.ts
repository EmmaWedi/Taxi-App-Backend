import * as moment from 'moment'

export const calAge = async (dob: string) => {
    let stat: boolean = false;
    const age = moment(dob, "YYYYMMDD").fromNow();
    parseFloat(age) >= 25 || parseFloat(age) <= 65 ? stat = true : stat = false;
    return stat;
}