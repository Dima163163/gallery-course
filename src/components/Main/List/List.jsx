import {useDispatch, useSelector} from 'react-redux';
import {CardItem} from './CardItem/CardItem';
import style from './List.module.css';
import {useEffect, useRef} from 'react';
import {fetchPhotos} from '../../../store/photos/photosAction';

export const List = () => {
  const photosData = useSelector(state => state.photos.photos);
  const status = useSelector(state => state.photos.status);
  const endList = useRef(null);
  const dispatch = useDispatch();
  console.log('status: ', status);
  console.log('photosData: ', photosData);
  useEffect(() => {
    if (!endList.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(fetchPhotos());
      }
    },
    {
      rootMargin: '50px',
    });
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, status]);

  return (
    <>
      <ul className={style.list}>
        {photosData.length !== 0 &&
          (photosData.map(photoData =>
            (<CardItem key={photoData.id} photoData={photoData}/>)
          ))}
        {status === 'loaded' && <li ref={endList} className={style.end}></li>}
      </ul>
      {status === 'error' && <p className={style.error}>Ошибка при загрузке</p>}
    </>
  );
};
