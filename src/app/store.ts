import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter';
import tagReducer from './features/tag';
import mentorReducer from './features/mentor';
import filtersReducer from './features/filters';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tag: tagReducer,
    mentor: mentorReducer,
    filters: filtersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;