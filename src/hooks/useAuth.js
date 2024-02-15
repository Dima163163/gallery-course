import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAuth} from '../store/auth/authAction';
import {authLogout} from '../store/auth/authSlice';


export const useAuth = () => {
  const token = useSelector(state => state.token.token);
  const {auth, status, error} = useSelector(state => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!token || status) return;

    dispatch(fetchAuth());
  }, [token]);


  const clearAuth = () => dispatch(authLogout());

  return [auth, status, clearAuth, error];
};
