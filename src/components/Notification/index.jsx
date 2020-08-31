import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// REDUX
import { connect } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { NotificationContainer, NotificationCloseIcon } from './styled';

import options, { notificationTypes } from './constants';

const Notification = ({ notification }) => {
  const [spacing, setSpacing] = useState(-150);
  const closeNotification = () => {
    setSpacing(-150);
    clearTimeout(closeNotification);
  };
  const openNotification = () => setSpacing(10);

  useEffect(() => {
    if (notification.message && notification.title) {
      closeNotification();
      openNotification();
      setTimeout(closeNotification, 5000);
    }
    return () => closeNotification();
  }, [notification]);

  return (
    <NotificationContainer type={notification.type} spacing={spacing}>
      <FontAwesomeIcon icon={options[notification.type].icon} size="3x" />
      <div>
        <NotificationCloseIcon icon={faTimes} onClick={closeNotification} />
        <h3>{notification.title}</h3>
        <p>{notification.message}</p>
      </div>
    </NotificationContainer>
  );
};

Notification.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.oneOf(Object.keys(notificationTypes)).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

Notification.defaultProps = {
  notification: {
    type: notificationTypes.warning,
  },
};

const mapStateToProps = ({ notification }) => ({
  notification,
});

export default connect(mapStateToProps)(Notification);
