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

import NoProfilePicture from '../../../../assets/images/no-profile-picture.jpg';
import { urlGenerator } from '../../../../services/whatsapp';
import { Avatar } from '../../../base/Images';
import { WhatsAppButton } from '../../../base/Buttons';

const MatchCard = ({
  match,
  user,
}) => {
  const secondUser = user._id === match.firstUser._id ? match.secondUser : match.firstUser;
  return (
    <CardContainer>
      <Avatar src={secondUser.photoUrl || NoProfilePicture} alt={secondUser.fullName} />
      <DescriptionContainer>
        <Title>{secondUser.fullName}</Title>
        <InfoText>{`${match.garments.length} Prendas`}</InfoText>
        <WhatsAppButton as="a" href={urlGenerator(match, user._id)} target="_blank">
          Enviar Mensaje
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </WhatsAppButton>
      </DescriptionContainer>
    </CardContainer>
  );
};

MatchCard.propTypes = {
  user: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MatchCard;
