import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BaseModal from '../modals/Base';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ProgressIndicator = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;
  border: 8px solid ${({ theme }) => theme.colors.greyLighter};
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  animation: ${rotate} 1s linear infinite;
`;

const Loader = ({ isLoading }) => (
  <BaseModal isOpen={isLoading}>
    <ProgressIndicator />
    <h3>Por favor esperanos...</h3>
  </BaseModal>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  };
}

export default connect(mapStateToProps)(Loader);
