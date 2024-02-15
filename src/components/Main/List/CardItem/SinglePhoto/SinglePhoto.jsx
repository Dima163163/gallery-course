import {Link, useParams} from 'react-router-dom';
import style from './SinglePhoto.module.css';
import {useSinglePhotoData} from '../../../../../hooks/useSinglePhotoData';
import Layout from '../../../../Layout';
import {Preloader} from '../../../../../UI/Preloader/Preloader';
import {ReactComponent as BackIcon} from './img/back.svg';
import {Time} from '../Time/Time';
import {useSelector} from 'react-redux';
import {BtnLikeWrapper} from './BtnLikeWrapper/BtnLikeWrapper';

export const SinglePhoto = () => {
  const {id} = useParams();
  const [singlePhotoData, status] = useSinglePhotoData(id);
  console.log('singlePhotoData, status: ', singlePhotoData, status);
  const author = useSelector(state => state.auth.auth).name;
  const disabledBtn = !author;
  console.log('disabledBtn: ', disabledBtn);
  const statusLike = singlePhotoData.liked_by_user;
  console.log('statusLike: ', statusLike);


  return (
    <div className={style.wrapper}>
      <Layout>
        {status === 'error' && <p>Ошибка</p>}
        {status === 'loading' &&
        <div className={style.preloaderWrapper}>
          <Preloader css={{'display': 'block'}} size={90}/>
        </div>
        }
        {(status === 'loaded' && singlePhotoData.id) && (
          <>
            <Link className={style.backBtn} to={'..'}>
              <BackIcon className={style.btnBackIcon}/>
              Вернуться на главную страницу
            </Link>
            <img
              className={style.imageUser}
              src={singlePhotoData?.urls.regular}
            />
            <div className={style.timeWrapper}>
            Дата создания:
              <Time
                classImport={style.time}
                date={singlePhotoData.created_at} />
            </div>
            <div className={style.btnWrapper}>
              <a className={style.userLink}
                href={singlePhotoData.user.links.html}
              >
                <img className={style.userPhoto}
                  src={singlePhotoData.user.profile_image.large} />
                <span className={style.userName}>
                  {singlePhotoData.user.username}
                </span>
              </a>
              <BtnLikeWrapper
                id={id}
                likes={singlePhotoData.likes}
                statusLike={statusLike}
              />
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};
