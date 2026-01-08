/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TCreateReportPayload, TReportQuery, TUpdateReportPayload } from './report.interface';
import { Report } from './report.model';
import { generateReportId } from './report.utils';
import { ReportSearchableFields } from './report.constant';

const createReport = async (userId: string, payload: TCreateReportPayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const reportId = await generateReportId();

    const newReport = await Report.create({
        id: reportId,
        ...payload,
        reporterId: user._id,
    });

    return newReport;
};

const getAllReports = async (query: TReportQuery) => {
    const { search, status, severity, type, page = 1, limit = 10 } = query;
    const filter: any = { isDeleted: { $ne: true } };

    if (search) {
        filter.$or = ReportSearchableFields.map((field) => ({
            [field]: { $regex: search, $options: 'i' },
        }));
    }

    if (status) {
        filter.status = status;
    }
    if (severity) {
        filter.severity = severity;
    }
    if (type) {
        filter.type = type;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const reports = await Report.find(filter)
        .populate('reporterId', 'id fullName email')
        .populate('assigneeId', 'id fullName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit));

    const total = await Report.countDocuments(filter);

    return {
        data: reports,
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
            totalPage: Math.ceil(total / Number(limit)),
        },
    };
};

const getReportById = async (id: string) => {
    const report = await Report.findOne({ id })
        .populate('reporterId', 'id fullName email')
        .populate('assigneeId', 'id fullName email');

    if (!report) {
        throw new AppError(httpStatus.NOT_FOUND, 'Report not found');
    }
    return report;
};

const updateReport = async (id: string, userId: string, payload: TUpdateReportPayload) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const report = await Report.findOne({ id });
    if (!report) {
        throw new AppError(httpStatus.NOT_FOUND, 'Report not found');
    }

    // Permissions logic: Reporter can update some things? Admin/Reviewer can update status/assignee?
    // For now, allowing update if logged in, but in real app logic would be tighter

    if (payload.assigneeId) {
        const assignee = await User.findOne({ id: payload.assigneeId });
        if (!assignee) throw new AppError(httpStatus.NOT_FOUND, "Assignee not found");
        // @ts-ignore - explicitly setting _id from string id lookup
        payload.assigneeId = assignee._id;
    }

    const result = await Report.findOneAndUpdate({ id }, payload, {
        new: true,
        runValidators: true,
    });

    return result;
};

const deleteReport = async (id: string, userId: string) => {
    const user = await User.findOne({ id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const report = await Report.findOne({ id });
    if (!report) {
        throw new AppError(httpStatus.NOT_FOUND, 'Report not found');
    }

    if (report.reporterId.toString() !== user._id.toString()) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized to delete this report');
    }

    await Report.findOneAndUpdate({ id }, { isDeleted: true, deletedAt: new Date() });
    return null;
};

export const ReportServices = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport,
};
