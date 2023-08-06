import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoryStore } from './CategoryStore';
import { filter, uniqueId } from 'lodash';
import { FIELD_TYPES } from '../../../Utility';
import { addNewCategory, removeCategory } from './CategoryReducer';

const CategorySlice = createSlice({
  name: 'CategorySlice',
  initialState: CategoryStore,
  reducers: {
    addNewCategory,
    removeCategory,
  },
  extraReducers: builder => {},
});

export default CategorySlice.actions;
export const { reducer } = CategorySlice;
