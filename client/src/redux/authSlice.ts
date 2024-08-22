import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface loggednInUserState {
  email: string;
  _id: string;
  name: string;
  coverImage: string;
}

const initialState: { user: loggednInUserState | null; isLoggedIn: boolean } = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loggednInUserState>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
