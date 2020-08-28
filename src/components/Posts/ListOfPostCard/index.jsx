import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import CreatePost from '../PostCard/CreatePost';
import { Contain, Wrapper } from './styled';

const Images = [
  {
    id: '1',
    url: 'https://i.ibb.co/SNJ7nh6/1.jpg',
  },
];
const images = [
  'https://i.pinimg.com/originals/b9/c4/53/b9c4539c094848a95548a26e1fe6a207.jpg',
  'https://i.pinimg.com/originals/77/42/6c/77426ca1fd324f1c96f6fef71c5d5b50.jpg',
  'https://i.pinimg.com/564x/6f/5f/ea/6f5fea506c85da0ee892b7b498fe8706.jpg',
  'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2016/01/how_to_find_models_lead.jpg',
];

function ListOfPostCard({ myGarments }) {
  console.log(myGarments);
  return (
    <Contain>
      <Wrapper>
        <CreatePost />
        {myGarments.map((garment) => (
          <PostCard garment={garment} id={garment.id} key={garment.id} />
        ))}
      </Wrapper>
    </Contain>
  );
}

ListOfPostCard.propTypes = {
  garment: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  myGarments: PropTypes.array.isRequired,
};

export default ListOfPostCard;
