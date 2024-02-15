import style from './BtnLikeWrapper.module.css';
import {ReactComponent as LikeIcon} from '../img/like.svg';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {useLike} from '../../../../../../hooks/useLike';
import {
  fetchChangeLike
} from '../../../../../../store/like/likeAction';

export const BtnLikeWrapper = ({id, likes, statusLike}) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const [dataLike, isLiked, changeLiked] = useLike(statusLike);
  const author = useSelector(state => state.auth.auth).name;

  const disabledBtn = !author;
  const disabledStyle = disabledBtn ? `${style.disabled}` : '';
  const styleBtn = isLiked ?
  `${style.btnLike} ${style.btnLikeActive}` : `${style.btnLike}`;
  console.log('isLiked', isLiked);
  const handleLiked = () => {
    if (!token) return;

    changeLiked();
    dispatch(fetchChangeLike({id, isLiked}));
  };


  return (
    <div className={style.btnLikeWrapper}>
      <div className={style.containerLike}>
        <LikeIcon className={style.likeIcon}/>
        <span
          className={style.containerLikeText}
        >
          {dataLike?.id === id ? dataLike?.likes : likes}
        </span>
      </div>
      <button
        className={`${styleBtn} ${disabledStyle}`}
        disabled={disabledBtn}
        onClick={handleLiked}
      >
        Нравится
      </button>
    </div>
  );
};

BtnLikeWrapper.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  statusLike: PropTypes.bool,
};
