import React from 'react';
import { CardContainer, Title, Tag } from './styled';
import { Avatar } from '../../../base/Images';
import { InfoText } from '../../../base/Texts';
const MatchCard = ({ avatarUrl, name, description }) => {
  return (
    <CardContainer>
      <Avatar src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <div style={{marginLeft: 10}}>
        <Title>Jairo de las Priella</Title>
        <Tag>T-shirt</Tag>
        <InfoText>
          Lorem ipsum dolor sit amet..Lorem ipsum..
        </InfoText>
      </div>
    </CardContainer>
  );
};

export default MatchCard;
