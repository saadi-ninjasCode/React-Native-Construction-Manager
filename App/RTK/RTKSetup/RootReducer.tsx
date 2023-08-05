import { combineReducers } from '@reduxjs/toolkit';
import { AuthSliceReducer } from '../RTKSlices';

const RootReducer = combineReducers({
  AuthSlice: AuthSliceReducer,
});

export default RootReducer;
