import {createSlice} from '@reduxjs/toolkit';
import {fetchPhotos} from './photosAction';

const initialState = {
  photos: [],
  page: 1,
  status: '',
  error: '',
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photos.push(...action.payload.data);
        state.status = 'loaded';
        state.error = '';
        state.page += 1;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
        state.page = 1;
      });
  }
});

export default photosSlice.reducer;
