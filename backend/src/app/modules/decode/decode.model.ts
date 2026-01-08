import { Schema, model } from 'mongoose';
import { TDecode } from './decode.interface';
import { DecodeStatus } from './decode.constant';

const decodeSchema = new Schema<TDecode>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        sourceId: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
        },
        decodedData: {
            type: String,
        },
        status: {
            type: String,
            enum: DecodeStatus,
            default: 'pending',
        },
        requestedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    },
);

decodeSchema.index({ sourceId: 1 });
decodeSchema.index({ requestedBy: 1 });

decodeSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

decodeSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

export const Decode = model<TDecode>('Decode', decodeSchema);
