import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlAuthToken} from '../../api/auth';
console.log('urlAuthToken: ', urlAuthToken);

export const fetchToken = createAsyncThunk(
  'token/fetchToken',
  (_, {getState}) => {
    const token = getState().token.token;
    console.log('token: ', token);

    if (token) return;

    return axios.post(urlAuthToken)
      .then(({data: {access_token: token}}) => {
        console.log('token', token);
        return token;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);
