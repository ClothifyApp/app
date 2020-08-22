import styled from 'styled-components';

import { device } from '../device.js';

export const Contain = styled.div`
  width: 80%;
  height: 800px;
  overflow: auto;
  margin: 100px auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  justify-content: center;
  @media ${device.mobileM} {
    grid-template-columns: repeat(1, auto);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, auto);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(3, auto);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, auto);
  }
`;
