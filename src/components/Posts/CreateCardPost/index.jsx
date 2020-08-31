import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGarmentThunk } from '../../../actions/createGarments';
import { listMyGarmentsThunk } from '../../../actions/myGarmentsActions';
import * as globalActions from '../../../actions/globalActions';
import { getTags } from '../../../api';

/* Others components */
import Pic from '../Pictures';

/* Styles */
import { Wrapper } from '../ImagesContainer/styled';
import { Name, Entry, Text } from '../InputContainer/styled';
import { Tag, WrapperTag } from '../TagPost/styled';

import { Button } from '../../base/Buttons';

function CreateCardPost({ listMyGarments, createMyGarment, onSave }) {
  const [tags, setTags] = useState([]);
  const [userPreferences, setUserPreferences] = useState([]);
  const pictures = [1, 2, 3, 4, 5];
  const [arrayImg, setArrayImg] = useState([]);
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    const getAllTags = async () => {
      const tagsResponse = await getTags();
      setTags(tagsResponse);
    };
    if (!tags || !tags.length) {
      getAllTags();
    }
  }, [setTags, tags]);

  const handleChangeInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (_id) => {
    let updatedUserPreferences;
    if (userPreferences.some((preference) => preference === _id)) {
      updatedUserPreferences = userPreferences.filter(
        (preference) => preference !== _id,
      );
    } else {
      updatedUserPreferences = [...userPreferences, _id];
    }
    setUserPreferences(updatedUserPreferences);
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    await createMyGarment({
      ...input,
      photos: arrayImg,
      tags: userPreferences,
    });
    onSave();
    listMyGarments();
  };
  return (
    <>
      <Wrapper>
        {pictures.map((index) => (
          <Pic arrayImg={arrayImg} setArrayImg={setArrayImg} key={index} />
        ))}
      </Wrapper>
      <form onSubmit={guardarDatos}>
        <div>
          <Name>Nombre de la prenda</Name>
          <Entry
            name="name"
            onChange={handleChangeInputChange}
            type="text"
            placeholder="name"
            value={input.name}
            required
          />
          <Name>Descripcion</Name>
          <Text
            name="description"
            onChange={handleChangeInputChange}
            value={input.description}
          />
        </div>
      </form>
      <h2>Preferencias</h2>
      <WrapperTag>
        {tags
          ? tags.map((tag) => (
            <Tag
              key={tag._id}
              active={userPreferences.includes(tag._id)}
              onClick={() => handleClick(tag._id)}
            >
              {tag.name}
            </Tag>
          ))
          : null}
      </WrapperTag>
      <Button margin="30px 0 0 0" onClick={guardarDatos}>
        Guardar
      </Button>
    </>
  );
}

CreateCardPost.propTypes = {
  createMyGarment: PropTypes.func.isRequired,
  listMyGarments: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { tags }) => ({
  myGarments: state.myGarments,
  tags,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    createMyGarment: createGarmentThunk,
    listMyGarments: listMyGarmentsThunk,
    setTags: globalActions.setTags,
    setLoading: globalActions.setLoading,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardPost);
