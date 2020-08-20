import styled from 'styled-components';
import AddAvatar from '../../assets/images/add-user.svg';

export const FormField = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLigther};
  outline: none;
  & .prefix {
    border-right: 1px solid ${(props) => props.theme.colors.greyLigther};
  }
  & input,
  & select {
    width: 100%;
    font-size: 16px;
    outline: none;
    font-weight: bold;
    border: 0;
  }
`;

export const CircularPhotoSelector = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-image: ${({ image }) => image || `url('${AddAvatar}')`};
  background-size: 30px 30px;
  background-position: center;
  background-repeat: no-repeat;
  & input {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
