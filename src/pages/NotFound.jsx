import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundIllustration from '../assets/images/not-found.svg';
import { Button } from '../components/base/Buttons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
  text-align: center;
`;

const MainIllustration = styled.img`
  width: 60%;
  max-width: 900px;
`;
export default function NotFound() {
  return (
    <Wrapper>
      <MainIllustration
        src={NotFoundIllustration}
        alt="Ilustración: No Encontrado"
      />
      <h2>Oops! Por acá no está lo que buscas.</h2>
      <Link to="/">
        <Button>Volver al inicio</Button>
      </Link>
    </Wrapper>
  );
}
