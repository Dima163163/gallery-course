import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API, CLIENT_ID} from '../../api/const';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  (_, {getState}) => {
    const {token, status} = getState().token;

    const {page} = getState().photos;
    console.log('page: ', page);

    if (status && status !== 'loaded') return;

    return axios(`${URL_API}/photos?page=${page}&per_page=30`, {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': token ? `Bearer ${token}` : `Client-ID ${CLIENT_ID}`,
      }
    })
      .then(({data}) => {
        console.log('PhotosData', data);
        return {data};
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);
