import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../base/Buttons';
import { Tag } from '../base/Tag';

import { TagWrapper } from './styled';

const Tags = ({
  onEnds, tags, userData, updateUser, hideTitle,
}) => {
  const handleClick = (_id) => {
    let userPreferences = userData.preferences;

    if (userPreferences.some((preference) => preference === _id)) {
      userPreferences = userPreferences.filter((preference) => preference !== _id);
    } else {
      userPreferences.push(_id);
    }
    updateUser({ ...userData, preferences: userPreferences });
  };

  const buttonDisabled = userData.preferences.length < 3;

  return (
    <>
      {onEnds && !hideTitle && <h2>Preferencias</h2>}
      <TagWrapper padding={!!onEnds}>
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
          Guardar cambios
        </Button>
      )}
    </>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
  updateUser: PropTypes.func.isRequired,
  hideTitle: PropTypes.bool,
  onEnds: PropTypes.func,
};

Tags.defaultProps = {
  hideTitle: false,
  onEnds: null,
};

export default Tags;
