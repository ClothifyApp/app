import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// REDUX
import { connect } from 'react-redux';

import { NotificationContainer } from './styled';

import options from './constants';

const Notification = ({ notification }) => {
  if (notification.message && notification.type) {
    return (
      <NotificationContainer type={notification.type}>
        <FontAwesomeIcon icon={options[notification.type].icon} size="3x" />
        <div>
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
        </div>
      </NotificationContainer>
    );
  }
  return null;
};

Notification.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.oneOf(['warning', 'error', 'like']).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ notification }) => ({
  notification,
});

export default connect(mapStateToProps)(Notification);
