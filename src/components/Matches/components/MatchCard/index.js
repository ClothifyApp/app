import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, Title, Tag, InfoText, DescriptionContainer } from './styled';
import { Avatar } from '../../../base/Images';
const MatchCard = ({ photoUrl, title, description, tag }) => {
  return (
    <Link to='/swipe' style={{ textDecoration: 'none' }}>
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
};

export default MatchCard;
