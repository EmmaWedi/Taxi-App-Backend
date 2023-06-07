import * as mongoose from 'mongoose';
import * as moment from 'moment';

interface otpDoc extends mongoose.Document {
    phone: string,
    email: string,
    otp: string,
    expiresAt: Date
}

const schema = new mongoose.Schema(
    {
        phone: String,
        email: String,
        otp: { type: String, max: 8 },
        expiresAt: {
            type: Date,
            default: moment().add(30, 'minutes')
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
            },
        },
        timestamps: true,
    }
)

export default mongoose.model<otpDoc>('Otps', schema);