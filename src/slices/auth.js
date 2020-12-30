import { createSlice } from '@reduxjs/toolkit';

const _initialState = {
  user: {
    _id: null,
    name: null,
    username: null,
    email: null,
  },
  accessToken: null,
  refreshToken: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: _initialState,
  reducers: {
    login: (state, action) => state,
    loginSuccess: (state, action) => ({ isAuth: true, ...action.payload }),
    logout: (state, action) => state,
    logoutSuccess: (state, action) => _initialState,
  },
});

const { reducer, actions } = authSlice;
export const { login, loginSuccess, logout, logoutSuccess } = actions;
export default reducer;
