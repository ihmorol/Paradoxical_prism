/* eslint-disable no-unused-vars */

import { Document, Types } from 'mongoose';

export type TArtworkStatus = 'draft' | 'published' | 'archived';

export interface TArtwork extends Document {
  id: string;
  title: string;
  description?: string;
  svgContent: string;
  status: TArtworkStatus;
  createdBy: Types.ObjectId;
  isDeleted: boolean;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface TCreateArtworkPayload {
  title: string;
  description?: string;
  svgContent: string;
}

export interface TUpdateArtworkPayload {
  title?: string;
  description?: string;
  svgContent?: string;
  status?: TArtworkStatus;
}

export interface TArtworkQuery {
  search?: string;
  status?: TArtworkStatus;
  page?: number;
  limit?: number;
}
