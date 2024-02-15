import MoonLoader from 'react-spinners/ClipLoader';
import PropsTypes from 'prop-types';

export const Preloader = ({css, size}) => (
  <MoonLoader color='#CC00CC' css={css} size={size} />
);

Preloader.propTypes = {
  css: PropsTypes.object,
  size: PropsTypes.number,
};
