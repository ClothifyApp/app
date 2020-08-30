import styled from 'styled-components';
import { textHeight } from '../constants';

export const InfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 0 0 8px 8px;
  margin-top: -35px;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '100px')};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  transition: 0.5s;
  z-index: 1;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
  }
  & > .info {
    height: ${({ isOpen }) => (isOpen ? 0 : textHeight)}px;
    padding-top: 15px;
    text-align: center;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    & h2,
    & p {
      margin: 0;
    }
  }
  & > .open-info {
    padding: 20px;
    opacity: ${({ isOpen }) => (!isOpen ? '0' : '1')};
    visibility: ${({ isOpen }) => (!isOpen ? 'hidden' : 'visible')};
    transform: scale(${({ isOpen }) => (isOpen ? '1' : '0')});
  }
`;

export const Heading = styled.header`
  display: flex;
  align-items: center;
  & h3,
  & p {
    margin: 0;
  }
  & .avatar {
    width: 60px;
    height: 60px;
    margin-right: 12px;
    border-radius: 50%;
    overflow: hidden;
    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & .name-gender {
    & svg {
      margin-right: 5px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Body = styled.article`
  & p {
    margin: 0;
    text-align: justify;
    font-size: 14px;
  }
  & h3 {
    margin-top: 12px;
    margin-bottom: 7px;
  }
  & .tags-container {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
