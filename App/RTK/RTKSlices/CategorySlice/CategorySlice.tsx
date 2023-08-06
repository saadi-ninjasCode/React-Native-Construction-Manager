import { createSlice } from '@reduxjs/toolkit';
import {
  addCategoryField,
  addNewCategory,
  removeCategory,
  removeCategoryField,
  setCategoryTitleField,
  updateCategoryFieldValue,
  updateCategoryName,
} from './CategoryReducer';
import { CategoryStore } from './CategoryStore';

const CategorySlice = createSlice({
  name: 'CategorySlice',
  initialState: CategoryStore,
  reducers: {
    addNewCategory,
    updateCategoryName,
    removeCategory,
    setCategoryTitleField,
    addCategoryField,
    updateCategoryFieldValue,
    removeCategoryField,
  },
});

export default CategorySlice.actions;
export const { reducer } = CategorySlice;
