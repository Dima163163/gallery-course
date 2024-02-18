import {useLike} from '../../../../hooks/useLike';
import {ReactComponent as LikeIcon} from './img/like.svg';
import PropTypes from 'prop-types';


export const LikeBlock = ({
  classNameContainer,
  classNameIcon,
  classNameText,
  id,
  likes,
  statusLike
}) => {
  const [dataLike] = useLike(statusLike);
  return (
    <div className={classNameContainer}>
      <LikeIcon className={classNameIcon}/>
      <span
        className={classNameText}
      >
        {dataLike?.id === id ? dataLike?.likes : likes}
      </span>
    </div>
  );
};

LikeBlock.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  statusLike: PropTypes.bool,
  classNameContainer: PropTypes.object,
  classNameIcon: PropTypes.object,
  classNameText: PropTypes.object,
};
