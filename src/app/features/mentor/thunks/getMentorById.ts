import {createAsyncThunk} from "@reduxjs/toolkit";
import {MentorApi} from "./MentorApi";
import {Exception} from "../../../createException";
import {IMentorFull} from "../../../interfaces";

export interface IMentorFullResponse {
  readonly user: IMentorFull;
}

export const getMentorById = createAsyncThunk(
  'mentor/getMentorById',
  async (id: number) => {
    return await MentorApi.POST<IMentorFullResponse>('user/getById', {id})
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
)