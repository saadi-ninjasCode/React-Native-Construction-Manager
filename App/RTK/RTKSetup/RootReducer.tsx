import { combineReducers } from '@reduxjs/toolkit';
import { CategorySliceReducer } from '../RTKSlices';

const RootReducer = combineReducers({
  CategorySlice: CategorySliceReducer,
});

export default RootReducer;
