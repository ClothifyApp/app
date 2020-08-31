import styled from 'styled-components';
import { flexCenter } from '../base/Mixins';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  & div:first-child {
    width: 60px;
    margin-right: 10px;
  }
`;

export const Overlay = styled.dialog`
  ${flexCenter};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  position: ${(props) => props.position || 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  overflow: ${(props) => props.overflow || ''};
  z-index: 10;
`;

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 15px;
  padding: 35px 25px;
  padding-top: 60px;
  background: ${({ theme, transparent }) => (transparent ? 'transparent' : theme.colors.white)};
  box-shadow: ${({ theme, transparent }) => (transparent ? 'none' : theme.shadows.regular)};
  text-align: center;
  border-radius: 10px;
  cursor: auto;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px ${({ margin }) => (margin ? '30px' : 0)};
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Small = styled.small`
  display: block;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 5px;
`;

export const TagWrapper = styled.div`
  padding: 25px ${({ padding }) => (padding ? '50px' : 0)};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Strong = styled.strong`
  display: block;
  font-size: 14px;
`;

export const VerifyCodeWrapper = styled.div`
  padding: 0 50px;
  & input {
    text-align: center;
  }
`;
