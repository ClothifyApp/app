/* eslint-disable import/prefer-default-export */
import {
  faHeart,
  faExclamationCircle,
  faTimesCircle,
  faCheckCircle,
  faBolt,
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
  superlike: {
    icon: faBolt,
    color: 'secondary',
  },
};

export const notificationTypes = {
  warning: 'warning',
  match: 'match',
  like: 'match',
  superlike: 'superlike',
  error: 'error',
  success: 'success',
};
