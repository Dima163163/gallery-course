import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import {useState} from 'react';
import {deleteToken} from '../../../store/token/tokenSlice';


export const Auth = () => {
  const {token} = useSelector(state => state.token);
  console.log('token: ', token);
  const [auth, status, clearAuth, error] = useAuth();
  console.log('status: ', status);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img className={style.img}
              src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
            <Text className={style.btnText}>{auth.name}</Text>
          </button>
          {showLogout && (
            <button className={style.logout} onClick={logOut}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <>
          <Text
            className={style.authLink}
            As='a'
            href={urlAuth}
            color='violet'>
            <LoginIcon className={style.svg} />
          </Text>
          {error && <p>Ошибка</p>}
        </>
      )}
    </div>
  );
};
