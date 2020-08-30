import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  CardContainer,
  Title,
  InfoText,
  DescriptionContainer,
} from './styled';

import { urlGenerator } from '../../../../services/whatsapp';
import { Avatar } from '../../../base/Images';
import { WhatsAppButton } from '../../../base/Buttons';

const MatchCard = ({
  match,
}) => (
  <CardContainer>
    <Avatar src={match.secondUser.photoUrl} alt={match.secondUser.fullName} />
    <DescriptionContainer>
      <Title>{match.secondUser.fullName}</Title>
      <InfoText>{`${match.garments.length} Prendas`}</InfoText>
      <WhatsAppButton as="a" href={urlGenerator(match, match.firstUser._id)} target="_blank">
        Enviar Mensaje
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </WhatsAppButton>
    </DescriptionContainer>
  </CardContainer>
);

MatchCard.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MatchCard;
