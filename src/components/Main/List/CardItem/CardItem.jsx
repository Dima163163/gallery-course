import {Link} from 'react-router-dom';
import style from './CardItem.module.css';
import {Time} from './Time/Time';
import {ReactComponent as LikeIcon} from './img/like.svg';
import PropTypes from 'prop-types';


export const CardItem = ({photoData}) => {
  const {
    urls: {small: img},
    alt_description: alt,
    user: {username},
    user: {profile_image: {
      small: userAvatar,
    }},
    likes,
    user: {links: {html: userLink}},
    created_at: date,
    id,
  } = photoData;

  return (
    <li className={style.item}>
      <Link to={id} className={style.link}>
        <img className={style.image} src={img} alt={alt} />
      </Link>
      <div className={style.btn}>
        <LikeIcon className={style.icon}/>
        <span className={style.btnSpan}>{likes}</span>
      </div>
      <a
        className={style.userLink}
        href={userLink}
        target='_blank'
        rel="noreferrer"
      >
        <span className={style.userName}>{username}</span>
        <img className={style.userImg} src={userAvatar} alt={username} />
      </a>
      <Time classImport={style.time} date={date} />
    </li>
  );
};

CardItem.propTypes = {
  photoData: PropTypes.object,
  classImport: PropTypes.string,
  date: PropTypes.string,
};
