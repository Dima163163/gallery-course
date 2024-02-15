import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API, CLIENT_ID} from '../../api/const';

export const fetchSinglePhoto = createAsyncThunk(
  'singlePhoto/fetchSinglePhoto',
  (id, {getState}) => {
    const token = getState().token.token;
    console.log('FetchSingletoken: ', token);
    console.log('idFETCHSINGLE', id);

    if (!id) return;

    return axios(`${URL_API}/photos/${id}`, {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': token ? `Bearer ${token}` : `Client-ID ${CLIENT_ID}`,
      }
    })
      .then(({data}) => {
        console.log('dataSinglePhoto', data);
        return {data};
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
);
