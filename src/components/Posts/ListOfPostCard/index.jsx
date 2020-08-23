import React from 'react';
import PostCard from '../PostCard';
import CreatePost from '../PostCard/CreatePost';
import { Contain, Wrapper } from './styled';

const Images = [
  {
    id: '1',
    url: 'https://i.ibb.co/SNJ7nh6/1.jpg',
  },
  {
    id: '2',
    url: 'https://i.ibb.co/Z6K6v9c/2.jpg',
  },
  {
    id: '3',
    url: 'https://i.ibb.co/nr7s3MR/3.png',
  },

  {
    id: '4',
    url: 'https://i.ibb.co/0hGCHgZ/4.jpg',
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
