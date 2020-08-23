import React from 'react';
import PropTypes from 'prop-types';

import { IndicatorWrapper, IndicatorElement } from './styled';

const ImageIndicator = ({ currentPage, totalPages, color }) => (
  <IndicatorWrapper>
    {new Array(totalPages).fill(null).map((_, index) => (
      <IndicatorElement
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        isActive={currentPage === index + 1}
        totalElements={totalPages}
        color={color}
      />
    ))}
  </IndicatorWrapper>
);

ImageIndicator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ImageIndicator;
