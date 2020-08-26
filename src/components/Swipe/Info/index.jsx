import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faVenusMars } from '@fortawesome/free-solid-svg-icons';

import { Tag } from '../../base/Tag';
import { InfoWrapper, Heading, Body } from './styled';

const Info = ({ isOpen }, props) => (
  <InfoWrapper isOpen={isOpen}>
    <div className="info">
      <h2>Image title</h2>
      <p>Some description</p>
    </div>
    <div className="open-info">
      <Heading>
        <div className="avatar">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="name-gender">
          <h3>
            {props.userName}
            <FontAwesomeIcon icon={faCheckCircle} />
          </h3>
          <p>
            <FontAwesomeIcon icon={faVenusMars} />
            {' '}
            Female
          </p>
        </div>
      </Heading>
      <Body>
        <h3>{props.name}</h3>
        <p>
          {props.description}
        </p>
        <div className="tags-container">
          <Tag active>Stuff</Tag>
          <Tag active>tie</Tag>
          <Tag active>t-shirt</Tag>
        </div>
      </Body>
    </div>
  </InfoWrapper>
);

Info.propTypes = {
  isOpen: PropTypes.bool,
};

Info.defaultProps = {
  isOpen: false,
};

export default Info;
