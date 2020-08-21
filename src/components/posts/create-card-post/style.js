import styled from 'styled-components';

import { device } from '../device.js';

export const Contain = styled.div`
  width: 400px;
  height: 620px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px rgba(26, 22, 32, 0.2);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 100px;
  margin-top: 100px;
  overflow: auto;
  padding: 10px 28px 28px 28px;
  @media ${device.mobileM} {
    width: 97%;
    height: 620px;
  }
  @media ${device.mobileL} {
    width: 90%;
    height: 620px;
  }
  @media ${device.laptop} {
    width: 37%;
    height: 620px;
  }
  @media ${device.laptopL} {
    width: 27%;
    height: 620px;
  }
  @media ${device.desktop} {
    width: 17%;
    height: 620px;
  }
`;
