import React from 'react';
import styled from 'styled-components';
import SwipeComponent from '../components/Swipe';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
`;

export default function Swipe() {
  return (
    <Wrapper>
      <SwipeComponent />
    </Wrapper>
  );
}
