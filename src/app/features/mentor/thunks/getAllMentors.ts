import {createAsyncThunk} from "@reduxjs/toolkit";
import {Exception} from "../../../createException";
import {MentorApi} from "./MentorApi";
import {IMentor} from "../../../interfaces";

export interface IMentorsResponse {
  readonly totalMentorsCount: number,
  readonly mentors: IMentor[]
}

export const getAllMentors = createAsyncThunk(
  'mentor/getAll',
  async ({pagination, filters, sort}: any) => {
    return await MentorApi.POST<IMentorsResponse>('mentor/getFiltered', {
      pagination,
      filters,
      sort
    });
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