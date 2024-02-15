import {createSlice} from '@reduxjs/toolkit';
import {fetchAuth} from './authAction';

const initialState = {
  auth: {},
  status: '',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state) => {
      state.auth = {};
      state.status = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.status = 'loaded';
        state.error = '';
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      });
  }
});
export const {authLogout} = authSlice.actions;
export default authSlice.reducer;
