import { createSlice } from '@reduxjs/toolkit';

const INITIAL_AUTH_STATE = {
  isAuthenticated: false,
  accessToken: null,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setAuthSuccess: (state) => {
      state.isAuthenticated = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginUserRequest: (_, action) => {},
    logout: () => INITIAL_AUTH_STATE,
  },
});
export const { setToken, setAuthSuccess, logout, loginUserRequest } = LoginSlice.actions;

export default LoginSlice;
