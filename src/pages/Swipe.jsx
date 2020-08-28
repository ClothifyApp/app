/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSocks } from '@fortawesome/free-solid-svg-icons';

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

const Error = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 600px;
  text-align: center;
  & svg {
    color: orange;
  }
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
      {topGarment && (
        <SwipeComponent
          garment={{ ...topGarment }}
          onLike={handleLike}
          onSuperLike={handleSuperlike}
          onDislike={handleDisLike}
          initialOpen={false}
        />
      )}
      { !topGarment && (
        <Error>
          <FontAwesomeIcon icon={faSocks} size="3x" />
          <h3>
            Oops, parece que ya no hay mas prendas. Espera a que nuevos usuarios se registren,
            estamos seguros que pronto encontrarás tu media naranja ;)
          </h3>
        </Error>
      )}
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
