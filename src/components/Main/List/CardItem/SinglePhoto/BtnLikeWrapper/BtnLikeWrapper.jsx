import style from './BtnLikeWrapper.module.css';
// import {ReactComponent as LikeIcon} from '../img/like.svg';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {useLike} from '../../../../../../hooks/useLike';
import {
  fetchChangeLike
} from '../../../../../../store/like/likeAction';
import {LikeBlock} from '../../../LikeBlock/LikeBlock';

export const BtnLikeWrapper = ({id, likes, statusLike}) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const [dataLike, isLiked, changeLiked] = useLike(statusLike);
  const author = useSelector(state => state.auth.auth).name;

  const disabledBtn = !author;
  const disabledStyle = disabledBtn ? `${style.disabled}` : '';
  const styleBtn = isLiked ?
  `${style.btnLike} ${style.btnLikeActive}` : `${style.btnLike}`;

  const handleLiked = () => {
    if (!token) return;

    changeLiked();
    dispatch(fetchChangeLike({id, isLiked}));
  };


  return (
    <div className={style.btnLikeWrapper}>
      <LikeBlock
        classNameContainer={style.containerLike}
        classNameIcon={style.likeIcon}
        classNameText={style.containerLikeText}
        id={id}
        likes={dataLike?.id === id ? dataLike?.likes : likes}
        statusLike={statusLike}
      />
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
