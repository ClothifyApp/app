import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  CardContainer,
  Title,
  Tag,
  InfoText,
  DescriptionContainer,
} from './styled';
import { Avatar } from '../../../base/Images';

const MatchCard = ({
  photoUrl, title, description, tag,
}) => (
  <Link to="/swipe" style={{ textDecoration: 'none' }}>
    <CardContainer>
      <Avatar src={photoUrl} alt={title} />
      <DescriptionContainer>
        <Title>{title}</Title>
        <Tag>{tag}</Tag>
        <InfoText>{description}</InfoText>
      </DescriptionContainer>
    </CardContainer>
  </Link>
);

MatchCard.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default MatchCard;
