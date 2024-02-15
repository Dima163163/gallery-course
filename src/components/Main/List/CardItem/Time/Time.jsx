import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';


export const Time = ({classImport, date}) => (
  <time className={classImport} dateTime={date}>{formatDate(date)}</time>
);

Time.propTypes = {
  date: PropTypes.string,
  classImport: PropTypes.string,
};
