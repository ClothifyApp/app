/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../base/Buttons';
import { Tag } from '../base/Tag';

import { TagWrapper } from './styled';

const Tags = ({
  onEnds, tags, userData, hideTitle,
}) => {
  // eslint-disable-next-line prefer-const
  let [userPreferences, setUserPreferences] = useState(userData.preferences || []);

  const handleClick = (_id) => {
    if (userPreferences.some((preference) => preference === _id)) {
      userPreferences = userPreferences.filter((preference) => preference !== _id);
    } else {
      userPreferences = [...userPreferences, _id];
    }
    setUserPreferences(userPreferences);
  };

  const buttonDisabled = userPreferences.length < 3;

  return (
    <>
      {!hideTitle && <h2>Preferencias</h2>}
      <TagWrapper padding={!hideTitle}>
        {tags.map((tag) => (
          <Tag
            key={tag._id}
            active={userPreferences.includes(tag._id)}
            onClick={() => handleClick(tag._id)}
          >
            {tag.name}
          </Tag>
        ))}
      </TagWrapper>
      {onEnds && (
        <Button onClick={() => onEnds(userPreferences)} disabled={buttonDisabled}>
          Guardar cambios
        </Button>
      )}
    </>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
  hideTitle: PropTypes.bool,
  onEnds: PropTypes.func,
};

Tags.defaultProps = {
  hideTitle: false,
  onEnds: null,
};

export default Tags;
