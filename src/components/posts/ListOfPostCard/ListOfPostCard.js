import React from 'react';
import { PostCard } from '../post-card/PostCard.js';
import { CreatePost } from '../post-card/CreatePost';
import { Contain, Wrapper } from './style';

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
  {
    id: '5',
    url: 'https://i.ibb.co/m5SF36z/5.jpg',
  },
  {
    id: '6',
    url: 'https://i.ibb.co/m5SF36z/5.jpg',
  },
  {
    id: '7',
    url:
      'https://s3-eu-central-1.amazonaws.com/synthesis.cloud/photos/reatom-jacket/techwear-winter-mask-pt-1-synthesis-store-15.jpg',
  },
  {
    id: '8',
    url:
      'https://www.stylesofman.com/wp-content/uploads/2019/05/9a5d355705e0b33a47192e5a96999e56.jpg',
  },
  {
    id: '9',
    url: 'https://i.ibb.co/m5SF36z/5.jpg',
  },
  {
    id: '10',
    url:
      'https://s3-eu-central-1.amazonaws.com/synthesis.cloud/photos/reatom-jacket/techwear-winter-mask-pt-1-synthesis-store-15.jpg',
  },
  {
    id: '11',
    url:
      'https://www.stylesofman.com/wp-content/uploads/2019/05/9a5d355705e0b33a47192e5a96999e56.jpg',
  },
];

export const ListOfPostCard = () => {
  return (
    <Contain>
      <Wrapper>
        <CreatePost />
        {Images.map((images) => (
          <PostCard {...images} key={images.id} />
        ))}
      </Wrapper>
    </Contain>
  );
};
