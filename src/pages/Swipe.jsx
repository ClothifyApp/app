/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getGarments as getGarmentsAction,
  makeReactionAction,
} from '../actions/swipeActions';
import SwipeComponent from '../components/Swipe';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
`;

function Swipe({
  getGarments,
  makeReaction,
  topGarment,
}) {
  useEffect(() => {
    getGarments();
  }, []);

  const handleLike = () => {
    makeReaction('like', topGarment._id);
  };

  const handleSuperlike = () => {
    makeReaction('superlike', topGarment._id);
  };

  const handleDisLike = () => {
    makeReaction('dislike', topGarment._id);
  };

  return (
    <Wrapper>
      <SwipeComponent
        garment={{ ...topGarment }}
        onLike={handleLike}
        onSuperLike={handleSuperlike}
        onDislike={handleDisLike}
        initialOpen={false}
      />
    </Wrapper>
  );
}

Swipe.propTypes = {
  getGarments: PropTypes.func.isRequired,
  makeReaction: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  topGarment: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  topGarment: state.topGarment,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getGarments: getGarmentsAction,
    makeReaction: makeReactionAction,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);
