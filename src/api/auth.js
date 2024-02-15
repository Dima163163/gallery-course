import {
  URL_TOKEN,
  URL_AUTH,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
  CLIENT_SECRET,
} from './const';

const searchParams = new URLSearchParams('');

searchParams.append('client_id', CLIENT_ID);
searchParams.append('response_type', RESPONSE_TYPE);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('scope', SCOPE);

export const urlAuth = `${URL_AUTH}${searchParams.toString()}`;

export const getCodeAuth = () => {
  let code;
  console.log(location.search.includes('code'));
  if (location.search.includes('code')) {
    code = new URLSearchParams(window.location.search.substring(1)).get('code');
    console.log('code: ', code);
  }
  return code;
};

const searchParamsToken = new URLSearchParams('');
searchParamsToken.append('client_id', CLIENT_ID);
searchParamsToken.append('redirect_uri', REDIRECT_URI);
searchParamsToken.append('client_secret', CLIENT_SECRET);
searchParamsToken.append('code', getCodeAuth());
searchParamsToken.append('grant_type', 'authorization_code');

export const urlAuthToken = `${URL_TOKEN}${searchParamsToken.toString()}`;
