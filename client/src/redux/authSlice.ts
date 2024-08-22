import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface LoggednInUserState {
  email: string;
  _id: string;
  name: string;
  coverImage: string;
}

export interface AuthState {
  user: LoggednInUserState | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    const backendUri: string = import.meta.env.VITE_BACKEND_URI as string;
    try {
      const response = await fetch(`${backendUri}/api/v1/user/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }
      const resultData = await response.json();

      return resultData.data.user as LoggednInUserState;
    } catch (error) {
      return rejectWithValue('Failed to login!');
    }
  },
);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
