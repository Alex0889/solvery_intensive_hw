import {createSlice} from "@reduxjs/toolkit";
import {getAllMentors} from "./thunks/getAllMentors";
import {IMentorCard, IMentor} from "../../interfaces";
import {getMentorById} from "./thunks/getMentorById";

export type MentorsState = {
  mentors: {
    totalMentorsCount: number,
    mentors: IMentorCard[],
    isLoading: boolean,
    error: string | undefined,
  },
  mentor: {
    user: IMentor | null,
    isLoading: boolean,
    error: string | undefined,
  };
}

const initialState: MentorsState = {
  mentors: {
    totalMentorsCount: 0,
    mentors: [],
    isLoading: false,
    error: undefined
  },
  mentor: {
    user: null,
    isLoading: false,
    error: undefined
  },
}

const mentorSlice = createSlice({
    name: 'mentor',
    initialState,
    reducers: {
      clearMentors(state) {
        state.mentors = initialState.mentors;

      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllMentors.pending, ({mentors}) => {
          mentors.isLoading = true;
        })
        .addCase(getAllMentors.fulfilled, ({mentors}, {payload}) => {
          mentors.isLoading = false;
          mentors.mentors.push(...payload.mentors);
          mentors.totalMentorsCount = payload.totalMentorsCount;
        })
        .addCase(getAllMentors.rejected, ({mentors}, {error}) => {
          mentors.isLoading = false;
          mentors.error = error.message;
        });

      builder
        .addCase(getMentorById.pending, ({mentor}) => {
          mentor.isLoading = true;
        })
        .addCase(getMentorById.fulfilled, ({mentor}, {payload}) => {
          mentor.isLoading = false;
          mentor.user = payload.user;
        })
        .addCase(getMentorById.rejected, ({mentor}, {error}) => {
          mentor.isLoading = false;
          mentor.error = error.message;
        });
    }
  }
);

export const {clearMentors} = mentorSlice.actions

export default mentorSlice.reducer;
