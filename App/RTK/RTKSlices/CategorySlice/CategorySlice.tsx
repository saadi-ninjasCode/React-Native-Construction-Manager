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
    // addNewCategory: state => {
    //   state.push({
    //     categoryId: uniqueId('category_'),
    //     categoryName: '',
    //     titleField: '-',
    //     fieldsArray: [
    //       {
    //         fieldId: uniqueId('field_'),
    //         fieldType: FIELD_TYPES.TEXT,
    //         fieldValue: '',
    //       },
    //     ],
    //   });
    // },
    // refreshToken: (state, { payload }) => {
    //   state.jwtToken = payload.jwtToken;
    //   state.userData = payload.userData;
    // },
  },
  extraReducers: builder => {
    // builder.addMatcher(AuthApi.endpoints.userLogin.matchFulfilled, (state, { payload }) => {
    //   const { jwtToken, ...useData } = payload;
    //   state.jwtToken = jwtToken;
    //   state.userData = useData;
    // });
    // builder.addMatcher(AuthApi.endpoints.userLogout.matchFulfilled, (state, { payload }) => {
    //   state.jwtToken = payload.jwtToken;
    //   state.userData = payload.useData;
    // });
  },
});

export default CategorySlice.actions;
export const { reducer } = CategorySlice;
