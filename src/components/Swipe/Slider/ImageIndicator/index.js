import React from 'react';
import { IndicatorWrapper, IndicatorElement } from './styles';

export default function ImageIndicator({ currentPage, totalPages }) {
  return (
    <IndicatorWrapper>
      {new Array(totalPages).fill(null).map((_, index) => (
        <IndicatorElement
          key={index}
          isActive={currentPage === index + 1}
          totalElements={totalPages}
        />
      ))}
    </IndicatorWrapper>
  );
}
