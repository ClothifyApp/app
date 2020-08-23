import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper, Pictures, Input, Icon,
} from './styled';

const ImagesContainer = () => (
  <Wrapper>
    <Pictures>
      <Icon icon={faPlus} />
      <Input type="file" />
    </Pictures>
    <Pictures>
      <Icon icon={faPlus} />
      <Input type="file" />
    </Pictures>
    <Pictures>
      <Icon icon={faPlus} />
      <Input type="file" />
    </Pictures>
    <Pictures>
      <Icon icon={faPlus} />
      <Input type="file" />
    </Pictures>
    <Pictures>
      <Icon icon={faPlus} />
      <Input type="file" />
    </Pictures>
  </Wrapper>
);

export default ImagesContainer;
