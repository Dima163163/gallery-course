import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';
import {deleteToken} from '../token/tokenSlice';


export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  (_, {dispatch, getState}) => {
    const token = getState().token.token;
    console.log('tokenAUth: ', token);

    if (!token) return;
    console.log('Загрузка');
    return axios(`${URL_API}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(({data}) => {
        const {username: name, profile_image: {small: img}} = data;
        return {name, img};
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          dispatch(deleteToken());
        }
        console.log(error);
        throw new Error(error.message);
      });
  }
);
