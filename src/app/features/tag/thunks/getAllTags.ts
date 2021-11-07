import {createAsyncThunk} from '@reduxjs/toolkit';
import {Exception} from '../../../createException';
import {TagApi} from './TagApi';
import {ITag} from "../../../interfaces";

export const getAllTags = createAsyncThunk(
  'tag/getAllTags',
  async () => {
    return await TagApi.POST<ITag[]>('getAll');
  },
  {
    serializeError: (x) => {
      const exception = x as Exception;

      return {
        code: exception.key,
        message: exception.details,
      }
    }
  }
);
