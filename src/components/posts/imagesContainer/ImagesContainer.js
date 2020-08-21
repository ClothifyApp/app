import React from 'react';
import { Wrapper, Pictures, Input, Icon } from './style';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ImagesContainer = () => {
  return (
    <Wrapper>
      <Pictures>
        <Icon icon={faPlus} />
        <Input type='file' />
      </Pictures>
      <Pictures>
        <Icon icon={faPlus} />
        <Input type='file' />
      </Pictures>
      <Pictures>
        <Icon icon={faPlus} />
        <Input type='file' />
      </Pictures>
      <Pictures>
        <Icon icon={faPlus} />
        <Input type='file' />
      </Pictures>
      <Pictures>
        <Icon icon={faPlus} />
        <Input type='file' />
      </Pictures>
    </Wrapper>
  );
};
