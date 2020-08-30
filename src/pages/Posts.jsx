import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { listMyGarmentsThunk } from '../actions/myGarmentsActions';
import ListOfPostCard from '../components/Posts/ListOfPostCard';

// import PostIlustration from '../assets/images/new-post.svg';

/* styles */

function Posts({ listMyGarments, myGarments }) {
  useEffect(() => {
    listMyGarments();
  }, []);

  return (
    <div>
      <ListOfPostCard myGarments={myGarments} />
      {/* <MainWrapper>
        <MainImage>
          <img src={PostIlustration} alt="Ilustracion de new post" />
        </MainImage>
      </MainWrapper> */}
    </div>
  );
}

Posts.propTypes = {
  listMyGarments: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  myGarments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  myGarments: state.myGarments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      listMyGarments: listMyGarmentsThunk,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
