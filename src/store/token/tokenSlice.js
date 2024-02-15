import {createSlice} from '@reduxjs/toolkit';
import {fetchToken} from './tokenAction';

const initialState = {
  token: localStorage.getItem('bearer') || '',
  status: '',
  error: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
      state.status = 'loaded';
    },
    deleteToken: (state) => {
      state.token = '';
      state.status = '';
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        console.log('AP', action.payload);
        state.status = 'loaded';
        state.token = action.payload;
        state.error = '';
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  }
});

export const tokenMiddleware = store => next => (action) => {
  if (action.type.endsWith('fetchToken/fulfilled')) {
    localStorage.setItem('bearer', action.payload);
  }
  if (action.type.endsWith('deleteToken')) {
    localStorage.removeItem('bearer');
  }
  return next(action);
};

export const {deleteToken, updateToken} = tokenSlice.actions;
export default tokenSlice.reducer;

