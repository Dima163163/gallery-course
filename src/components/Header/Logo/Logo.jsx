import {Text} from '../../../UI/Text';
import style from './Logo.module.css';

export const Logo = () => (
  <Text As='a' href='/' className={style.link} color='violet'>Gallery</Text>
);
