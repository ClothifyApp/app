/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  Title,
  Tag,
  InfoText,
  DescriptionContainer,
} from './styled';

import { urlGenerator } from '../../../../services/whatsapp';
import { Avatar } from '../../../base/Images';

const MatchCard = ({
  match,
}) => (
  <CardContainer href={urlGenerator(match, match.firstUser._id)} target="_blank">
    <Avatar src={match.secondUser.photoUrl} alt={match.secondUser.fullName} />
    <DescriptionContainer>
      <Title>{match.secondUser.fullName}</Title>
      <InfoText>{`${match.garments.length} Prendas`}</InfoText>
    </DescriptionContainer>
  </CardContainer>
);

MatchCard.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MatchCard;
