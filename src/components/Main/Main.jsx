import {useDispatch, useSelector} from 'react-redux';
import Layout from '../Layout';
import {List} from './List/List';
import style from './Main.module.css';
import {useEffect} from 'react';
import {fetchPhotos} from '../../store/photos/photosAction';

export const Main = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [token]);

  return (
    <main className={style.main}>
      <Layout>
        <List/>
      </Layout>
    </main>
  );
};
