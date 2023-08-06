import { createSlice } from '@reduxjs/toolkit';

import { MachineItemStore } from './MachineItemStore';
import { addMachineItem, removeMachineItem } from './MachineItemReducer';

const MachineItemSlice = createSlice({
  name: 'MachineItemSlice',
  initialState: MachineItemStore,
  reducers: {
    addMachineItem,
    removeMachineItem,
    // updateCategoryName,
    // removeCategory,
    // setCategoryTitleField,
    // addCategoryField,
    // updateCategoryFieldValue,
    // removeCategoryField,
  },
});

export default MachineItemSlice.actions;
export const { reducer } = MachineItemSlice;
