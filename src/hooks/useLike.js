import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useLike = (statusLike) => {
  const {data: dataLike} = useSelector(state => state.like);
  const [isLiked, setIsLiked] = useState(statusLike);

  useEffect(() => {
    setIsLiked(statusLike);
  }, [setIsLiked]);

  const changeLiked = () => setIsLiked(!isLiked);

  return [dataLike, isLiked, changeLiked];
};
