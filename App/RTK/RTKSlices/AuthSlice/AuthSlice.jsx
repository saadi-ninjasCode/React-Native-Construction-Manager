import { createSlice } from '@reduxjs/toolkit';
import { AuthStore } from './AuthStore';

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: AuthStore,
  reducers: {
    refreshToken: (state, { payload }) => {
      state.jwtToken = payload.jwtToken;
      state.userData = payload.userData;
    },
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

export default AuthSlice.actions;
export const { reducer } = AuthSlice;
