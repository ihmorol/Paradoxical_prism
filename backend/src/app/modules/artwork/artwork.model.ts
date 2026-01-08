import { Schema, model } from 'mongoose';
import { TArtwork } from './artwork.interface';
import { ArtworkStatus } from './artwork.constant';

const artworkSchema = new Schema<TArtwork>(
    {
        id: { // We might not need a separate custom ID if we just use _id, but following demoModule pattern
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
        },
        svgContent: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ArtworkStatus,
            default: 'draft',
        },
        createdBy: {
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

artworkSchema.index({ title: 1 });
artworkSchema.index({ status: 1 });
artworkSchema.index({ createdBy: 1 });

artworkSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

artworkSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

export const Artwork = model<TArtwork>('Artwork', artworkSchema);
