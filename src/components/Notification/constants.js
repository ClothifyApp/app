/* eslint-disable import/prefer-default-export */
import {
  faHeart,
  faExclamationCircle,
  faTimesCircle,
  faCheckCircle,
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
  success: {
    icon: faCheckCircle,
    color: 'green',
  },
};

export const notificationTypes = {
  warning: 'warning',
  match: 'match',
  like: 'match',
  error: 'error',
  success: 'success',
};
