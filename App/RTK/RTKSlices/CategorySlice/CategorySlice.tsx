import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoryStore } from './CategoryStore';
import { uniqueId } from 'lodash';
import { FIELD_TYPES } from '../../../Utility';
import { addNewCategory } from './CategoryReducer';

const CategorySlice = createSlice({
  name: 'CategorySlice',
  initialState: CategoryStore,
  reducers: {
    addNewCategory,
  },
  extraReducers: builder => {},
});

export default CategorySlice.actions;
export const { reducer } = CategorySlice;
