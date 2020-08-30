/* eslint-disable import/prefer-default-export */
import {
  faHeart,
  faExclamationCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export default {
  warning: {
    icon: faExclamationCircle,
    color: 'yellow',
  },
  error: {
    icon: faTimesCircle,
    color: 'pink',
  },
  match: {
    icon: faHeart,
    color: 'gradient',
  },
};

export const notificationTypes = {
  warning: 'warning',
  match: 'match',
  like: 'match',
  error: 'error',
};
