import {createSlice} from "@reduxjs/toolkit";
import {getAllMentors} from "./thunks/getAllMentors";
import {IMentor, IMentorFull} from "../../interfaces";
import {getMentorById} from "./thunks/getMentorById";

export type MentorsState = {
  mentors: {
    entities: {
      totalMentorsCount: number,
      mentors: IMentor[]
    },
    isLoading: boolean,
    error: string | undefined,
  },
  mentor: {
    user: IMentorFull,
    isLoading: boolean,
    error: string | undefined,
  }
}

const initialState: MentorsState = {
  mentors: {
    entities: {
      totalMentorsCount: 0,
      mentors: []
    },
    isLoading: false,
    error: undefined
  },
  mentor: {
    user: {} as IMentorFull,
    isLoading: false,
    error: undefined
  }
}

const mentorReducer = createSlice({
    name: 'mentor',
    initialState,
    reducers: {
      clearMentors: (state) => {
        state.mentors.entities = initialState.mentors.entities;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllMentors.pending, ({mentors}) => {
          mentors.isLoading = true;
        })
        .addCase(getAllMentors.fulfilled, ({mentors}, {payload}) => {
          mentors.isLoading = false;
          mentors.entities.mentors.push(...payload.mentors);
          mentors.entities.totalMentorsCount = payload.totalMentorsCount;
        })
        .addCase(getAllMentors.rejected, ({mentors}, {error}) => {
          mentors.isLoading = false;
          mentors.error = error.message;
        })
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

export const { clearMentors } = mentorReducer.actions

export default mentorReducer.reducer;
