import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ButtonsWrapper } from './styles';
import { WhatsAppButton, ReactionButton } from '../../base/Buttons';

export default function ButtonsContainer({
  showWhatsapp,
  showReactions,
  onDislike,
  onSuperLike,
  onLike,
  onWhatsapp,
}) {
  return (
    <ButtonsWrapper>
      {showWhatsapp && (
        <WhatsAppButton onClick={onWhatsapp}>
          Enviar Mensaje
          <FontAwesomeIcon icon={faWhatsapp} size='lg' />
        </WhatsAppButton>
      )}
      {showReactions && (
        <ReactionButton onClick={onDislike}>
          <FontAwesomeIcon icon={faTimes} size='2x' />
        </ReactionButton>
      )}
      {showReactions && (
        <ReactionButton onClick={onSuperLike} size='sm' color='yellow'>
          <FontAwesomeIcon icon={faBolt} size='lg' />
        </ReactionButton>
      )}
      {showReactions && (
        <ReactionButton onClick={onLike} color='secondary'>
          <FontAwesomeIcon icon={faHeart} size='2x' />
        </ReactionButton>
      )}
    </ButtonsWrapper>
  );
}
