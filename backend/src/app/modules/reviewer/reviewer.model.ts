import { Schema, model } from 'mongoose';
import { TReviewer } from './reviewer.interface';
import { ReviewerStatus } from './reviewer.constant';

const reviewerSchema = new Schema<TReviewer>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true, // One profile per user
        },
        specialization: {
            type: [String],
            default: [],
        },
        rating: {
            type: Number,
            default: 0,
        },
        totalReviews: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: ReviewerStatus,
            default: 'active',
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

reviewerSchema.index({ userId: 1 });
reviewerSchema.index({ status: 1 });
reviewerSchema.index({ specialization: 1 });

reviewerSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

reviewerSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

export const Reviewer = model<TReviewer>('Reviewer', reviewerSchema);
