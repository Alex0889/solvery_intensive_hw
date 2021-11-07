import { createAsyncThunk } from '@reduxjs/toolkit';
import { TagApi } from './TagApi';
import {ITag} from "../../../interfaces";

export const getTagById = createAsyncThunk(
  'tag/getTagById',
  async (id: number) => {
    return await TagApi.POST<ITag>('getById', { id });
  }
)