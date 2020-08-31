import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

import { Wrapper } from './styled';

export default function NoMatch() {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSadCry} size="2x" />
      <h3>Lo sentimos, aún no tienes matches, ¡pero no te rindas!</h3>
    </Wrapper>
  );
}
