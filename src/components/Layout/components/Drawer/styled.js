import styled from 'styled-components';

export const DrawerContainer = styled.aside`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navbarHeight}px;
  background: ${({ theme }) => theme.colors.white};
  bottom: 0;
  right: ${({ open }) => (open ? 0 : '-300px')};
  width: 270px;
  box-shadow: ${({ theme }) => theme.shadows.regular}!important;
  z-index: 10;
  transition: 0.3s;
`;

export const CloseArrow = styled.div`
  position: relative;
  background-color: red;
  cursor: pointer;
  & > * {
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContentContainer = styled.div`
  padding: 0 15px;
`;

export const Title = styled.h3`
  margin-top: 50px;
  text-align: center;
`;