import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ButtonsWrapper } from './styled';
import { WhatsAppButton, ReactionButton } from '../../base/Buttons';

const ButtonsContainer = ({
  showWhatsapp,
  showReactions,
  onDislike,
  onSuperLike,
  onLike,
  onWhatsapp,
}) => (
  <ButtonsWrapper>
    {showWhatsapp && (
      <WhatsAppButton onClick={onWhatsapp}>
        Enviar Mensaje
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </WhatsAppButton>
    )}
    {showReactions && (
      <ReactionButton onClick={onDislike}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </ReactionButton>
    )}
    {showReactions && (
      <ReactionButton onClick={onSuperLike} size="sm" color="yellow">
        <FontAwesomeIcon icon={faBolt} size="lg" />
      </ReactionButton>
    )}
    {showReactions && (
      <ReactionButton onClick={onLike} color="secondary">
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </ReactionButton>
    )}
  </ButtonsWrapper>
);

ButtonsContainer.propTypes = {
  showWhatsapp: PropTypes.bool,
  showReactions: PropTypes.bool,
  onDislike: PropTypes.func.isRequired,
  onSuperLike: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onWhatsapp: PropTypes.func.isRequired,
};

ButtonsContainer.defaultProps = {
  showWhatsapp: false,
  showReactions: false,
};

export default ButtonsContainer;
