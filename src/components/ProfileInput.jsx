import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputWrapper } from './styled';

const ProfileInput = ({ icon, text, children }) => (
  <InputWrapper>
    <div>
      <FontAwesomeIcon icon={icon} />
      <span className="m-left-xs">{text}</span>
    </div>
    {children}
  </InputWrapper>
);

ProfileInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProfileInput;
