import { Schema, model } from 'mongoose';
import { TReport } from './report.interface';
import { ReportStatus, ReportSeverity } from './report.constant';

const reportSchema = new Schema<TReport>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        severity: {
            type: String,
            enum: ReportSeverity,
            default: 'medium',
        },
        status: {
            type: String,
            enum: ReportStatus,
            default: 'open',
        },
        reporterId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        assigneeId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        resolution: {
            type: String,
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

reportSchema.index({ title: 1 });
reportSchema.index({ status: 1 });
reportSchema.index({ reporterId: 1 });
reportSchema.index({ assigneeId: 1 });

reportSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

reportSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

export const Report = model<TReport>('Report', reportSchema);
