import {createSlice} from '@reduxjs/toolkit';
import {fetchChangeLike} from './likeAction';

const initialState = {
  data: {},
  status: '',
  error: '',
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchChangeLike.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchChangeLike.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
        state.error = '';
      })
      .addCase(fetchChangeLike.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'error';
      });
  }
});

export default likeSlice.reducer;
