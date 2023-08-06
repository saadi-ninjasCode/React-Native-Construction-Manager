import { createSlice } from '@reduxjs/toolkit';

import { MachineItemStore } from './MachineItemStore';
import { addMachineItem, removeMachineItem, updateMachineItemInputValue } from './MachineItemReducer';

const MachineItemSlice = createSlice({
  name: 'MachineItemSlice',
  initialState: MachineItemStore,
  reducers: {
    addMachineItem,
    removeMachineItem,
    updateMachineItemInputValue,
  },
});

export default MachineItemSlice.actions;
export const { reducer } = MachineItemSlice;
