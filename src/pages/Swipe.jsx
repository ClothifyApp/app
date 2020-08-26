import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getGarments as getGarmentsAction } from '../actions/swipeActions';
import SwipeComponent from '../components/Swipe';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
`;

const images = [
  'https://i.pinimg.com/originals/b9/c4/53/b9c4539c094848a95548a26e1fe6a207.jpg',
  'https://i.pinimg.com/originals/77/42/6c/77426ca1fd324f1c96f6fef71c5d5b50.jpg',
  'https://i.pinimg.com/564x/6f/5f/ea/6f5fea506c85da0ee892b7b498fe8706.jpg',
  'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2016/01/how_to_find_models_lead.jpg',
];

function Swipe() {
  return (
    <Wrapper>
      <SwipeComponent images={images} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  garments: state.garments,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getGarments: getGarmentsAction }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Swipe);
