import {createAsyncThunk} from "@reduxjs/toolkit";
import {Exception} from "../../../createException";
import {MentorApi} from "./MentorApi";
import {IMentorCard} from "../../../interfaces";
import {Sort} from "../../../../types/Sort";

type MentorsResponse = {
  readonly totalMentorsCount: number;
  readonly mentors: IMentorCard[];
}

type MentorsParams = {
  pagination?: {
    limit: number;
    page: number;
  };
  filters?: {
    tagIds: number[];
    language: string[];
  };
  sort?: Sort;
}

export const getAllMentors = createAsyncThunk(
  'mentor/getAllMentors',
  async ({
           pagination = {limit: 10, page: 0},
           filters = {language: ['ru'], tagIds: []},
           sort = {}
         }: MentorsParams) => {
    return await MentorApi.POST<MentorsResponse>('mentor/getFiltered', {
        pagination,
        filters,
        sort
      }
    );
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