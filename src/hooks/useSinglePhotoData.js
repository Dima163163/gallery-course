import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSinglePhoto} from '../store/singlePhoto/singlePhotoAction';


export const useSinglePhotoData = (id) => {
  const singlePhotoData = useSelector(state => state.singlePhotoData.data);
  const status = useSelector(state => state.singlePhotoData.status);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;
    dispatch(fetchSinglePhoto(id));
  }, [id, token]);


  return [singlePhotoData, status];
};
