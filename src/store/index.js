import {configureStore} from '@reduxjs/toolkit';
import tokenReducer, {tokenMiddleware} from './token/tokenSlice';
import authReducer from './auth/authSlice';
import photosReducer from './photos/photosSlice';
import singlePhotoReducer from './singlePhoto/singlePhotoSlice';
import likeReducer from './like/likeSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
    singlePhotoData: singlePhotoReducer,
    like: likeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware)
});
