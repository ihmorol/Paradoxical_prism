import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ArtworkServices } from './artwork.service';

const createArtwork = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const result = await ArtworkServices.createArtwork(userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Artwork created successfully',
        data: result,
    });
});

const getAllArtworks = catchAsync(async (req, res) => {
    const result = await ArtworkServices.getAllArtworks(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Artworks retrieved successfully',
        data: result.data,
        meta: result.meta,
    });
});

const getArtworkById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ArtworkServices.getArtworkById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Artwork retrieved successfully',
        data: result,
    });
});

const updateArtwork = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    const result = await ArtworkServices.updateArtwork(id, userId, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Artwork updated successfully',
        data: result,
    });
});

const deleteArtwork = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;
    await ArtworkServices.deleteArtwork(id, userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Artwork deleted successfully',
        data: null,
    });
});

export const ArtworkControllers = {
    createArtwork,
    getAllArtworks,
    getArtworkById,
    updateArtwork,
    deleteArtwork,
};
