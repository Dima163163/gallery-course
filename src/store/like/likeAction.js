import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const fetchChangeLike = createAsyncThunk(
  'like/fetchChangeLike',
  ({id, isLiked}, {getState}) => {
    const token = getState().token.token;

    if (!token || !id) return;

    return axios(`${URL_API}/photos/${id}/like`, {
      method: isLiked ? 'DELETE' : 'POST',
      headers: {
        'Accept-Version': 'v1',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(({data}) => {
        const {photo} = data;
        console.log(photo);
        return photo;
      })
      .catch(error => {
        console.log(error);
        throw new Error(error.message);
      });
  }
);
