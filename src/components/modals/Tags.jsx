import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../base/Buttons';
import { Tag } from '../base/Tag';

import { TagWrapper } from './styled';

const Tags = ({
  onEnds, tags, userData, updateUser,
}) => {
  const handleClick = (_id) => {
    const userPreferences = userData.preferences;
    userPreferences.push(_id);
    updateUser({ ...userData, preferences: userPreferences });
  };

  const buttonDisabled = userData.preferences.length < 3;

  return (
    <>
      {onEnds && <h2>Selecciona al menos 3 preferencias.</h2>}
      <TagWrapper padding={!!onEnds}>
        <Tag>whatever</Tag>
        {tags.map((tag) => (
          <Tag
            key={tag._id}
            active={userData.preferences.includes(tag._id)}
            onClick={() => handleClick(tag._id)}
          >
            {tag.name}
          </Tag>
        ))}
      </TagWrapper>
      {onEnds && (
        <Button onClick={onEnds} disabled={buttonDisabled}>
          Finalizar
        </Button>
      )}
    </>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
  updateUser: PropTypes.func.isRequired,
  onEnds: PropTypes.func,
};

Tags.defaultProps = {
  onEnds: null,
};

export default Tags;
