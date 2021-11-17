import {createSlice} from "@reduxjs/toolkit";
import {ITag} from "../../interfaces";
import {Sort} from "../../../types/Sort";

type FiltersState = {
  filters: {
    tagIds: number[];
    language: string[];
  };
  sort: Sort;
  pagination: {
    page: number;
    limit: number;
  };
  usedTags: ITag[],
  isUsedMentorTag: boolean
}

const initialState: FiltersState = {
  filters: {
    tagIds: [],
    language: ['ru'],
  },
  sort: {},
  pagination: {
    page: 1,
    limit: 10,
  },
  usedTags: [],
  isUsedMentorTag: false,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addUsedTag({usedTags, filters}, action) {
      usedTags.push(action.payload);
      filters.tagIds = usedTags.map(tag => Number(tag.id));
    },
    removeTag(state, {payload}) {
      state.usedTags = state.usedTags.filter(item => item.id !== payload.id);
      state.filters.tagIds = state.usedTags.map(tag => Number(tag.id));
    },
    setMentorsTag(state, action) {
      state.usedTags.length = 0;
      state.filters.tagIds.length = 0;
      state.usedTags.push(action.payload);
      state.filters.tagIds = state.usedTags.map(tag => Number(tag.id));
      state.isUsedMentorTag = true
    },
    setIsUsedMentorTag(state) {
      state.isUsedMentorTag = false;
    },
    setLanguage(state, {payload}) {
      state.filters.language = payload;
    },
    toggleSortByPrice(state) {
      if (Object.keys(state.sort).length === 0) {
        state.sort = {rate: true}
      } else {
        state.sort = {}
      }
    },
    nextPage(state) {
      state.pagination.page += 1;
    },
  }
});

export const {
  addUsedTag,
  removeTag,
  setMentorsTag,
  setLanguage,
  toggleSortByPrice,
  nextPage,
  setIsUsedMentorTag
} = filtersSlice.actions;

export default filtersSlice.reducer