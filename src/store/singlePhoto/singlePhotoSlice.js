import {createSlice} from '@reduxjs/toolkit';
import {fetchSinglePhoto} from './singlePhotoAction';


const initialState = {
  data: {},
  status: '',
  error: '',
};

const singlePhotoSlice = createSlice({
  name: 'singlePhoto',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSinglePhoto.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSinglePhoto.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.status = 'loaded';
        state.error = '';
      })
      .addCase(fetchSinglePhoto.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  }
});

export default singlePhotoSlice.reducer;
