import { combineReducers } from '@reduxjs/toolkit';
import { CategorySliceReducer, MachineItemSliceReducer } from '../RTKSlices';

const RootReducer = combineReducers({
  CategorySlice: CategorySliceReducer,
  MachineItemSlice: MachineItemSliceReducer,
});

export default RootReducer;
