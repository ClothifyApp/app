import React, { useState } from 'react';
import styled from 'styled-components'
import { ListOfPostCard } from '../components/posts/ListOfPostCard/ListOfPostCard';

import PostIlustration from '../assets/images/newPost.svg';

import { device } from '../components/posts/device';


const MainImage = styled.div`
  display: none;
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    & img {
      height: 60%;
      max-width: 100%;
      object-fit: contain;
    }
  }
  @media ${device.laptopL} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    & img {
      height: 60%;
      max-width: 100%;
      object-fit: contain;
    }
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    & img {
      height: 60%;
      max-width: 100%;
      object-fit: contain;
    }
  }
`;

export const MainWrapper = styled.div`
 @media ${device.mobileM} {
  width: 380px;
    height: 620px;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 620px;
  }
  @media ${device.laptop} {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptopL} {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

`;


export default function Posts() {
  return (
    <div>
        <ListOfPostCard />
      <MainWrapper>
         {/*  <MainImage>
            <img src={PostIlustration} alt='Ilustracion de new post' />
          </MainImage> */}
      </MainWrapper>
    </div>
  );
}
