/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faVenusMars } from '@fortawesome/free-solid-svg-icons';

import { Tag } from '../../base/Tag';
import { InfoWrapper, Heading, Body } from './styled';

const Info = ({ isOpen, garment }) => (
  <InfoWrapper isOpen={isOpen}>
    <div className="info">
      <h2>{garment.name}</h2>
      <p>{garment.user.name}</p>
    </div>
    <div className="open-info">
      <Heading>
        <div className="avatar">
          <img
            src={garment.user.avatar}
            alt={garment.user.name}
          />
        </div>
        <div className="name-gender">
          <h3>
            {garment.user.name}
            {' '}
            <FontAwesomeIcon icon={faCheckCircle} />
          </h3>
          <p>
            <FontAwesomeIcon icon={faVenusMars} />
            Female
          </p>
        </div>
      </Heading>
      <Body>
        <h3>{garment.name}</h3>
        <p>
          {garment.description}
        </p>
        <div className="tags-container">
          {garment.tags && garment.tags.map((tag) => <Tag active key={tag}>{tag}</Tag>)}
          {(!garment.tags || !garment.tags.length) && <span>Ninguna categoría :(</span>}
        </div>
      </Body>
    </div>
  </InfoWrapper>
);

Info.propTypes = {
  isOpen: PropTypes.bool,
  garment: PropTypes.object.isRequired,
};

Info.defaultProps = {
  isOpen: false,
};

export default Info;
