import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import CreatePost from '../PostCard/CreatePost';
import { Contain, Wrapper } from './styled';


function ListOfPostCard({ myGarments }) {
  return (
    <Contain>
      <Wrapper>
        <CreatePost />
        {myGarments.map((garment) => (
          <PostCard garment={garment} key={garment._id} />
        ))}
      </Wrapper>
    </Contain>
  );
}

ListOfPostCard.propTypes = {
  garment: PropTypes.object,
  myGarments: PropTypes.array.isRequired,
};

export default ListOfPostCard;
