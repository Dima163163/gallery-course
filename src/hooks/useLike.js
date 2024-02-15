import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useLike = (statusLike) => {
  console.log('statusLike: ', statusLike);
  const token = useSelector(state => state.token.token);
  const {data: dataLike} = useSelector(state => state.like);
  const [isLiked, setIsLiked] = useState(statusLike || false);

  useEffect(() => {
    if (!token) {
      setIsLiked(false);
    } else {
      setIsLiked(statusLike);
    }
  }, [setIsLiked, token]);

  const changeLiked = () => setIsLiked(!isLiked);

  return [dataLike, isLiked, changeLiked];
};
