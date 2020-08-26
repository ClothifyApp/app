import React from 'react';
import PostCard from '../PostCard';
import CreatePost from '../PostCard/CreatePost';
import { Contain, Wrapper } from './styled';

const Images = [
  {
    id: '1',
    url: 'https://i.ibb.co/SNJ7nh6/1.jpg',
  },
]; 

const ListOfPostCard = () => (
  <Contain>
    <Wrapper>
      <CreatePost />
      {Images.map((image) => (
        <PostCard id={image.id} key={image.id} src={image.url} />
      ))}
    </Wrapper>
  </Contain>
);

export default ListOfPostCard;
