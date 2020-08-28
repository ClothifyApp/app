import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGarmentThunk } from '../../../actions/createGarments';

/* Others components */
import Pic from '../Pictures';

/* Styles */
import { Wrapper } from '../ImagesContainer/styled';
import { Name, Entry, Text } from '../InputContainer/styled';
import { Tag, WrapperTag } from '../TagPost/styled';

import { Button } from '../../base/Buttons';

function CreateCardPost({ createMyGarment }) {
  useEffect(() => {
    createMyGarment();
  }, []);
  const pictures = [1, 2, 3, 4, 5];
  const [arrayImg, setArrayImg] = useState([]);
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  const handleChangeInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const guardarDatos = (e) => {
    e.preventDefault();
    createMyGarment({ ...input, photos: arrayImg });
  };
  return (
    <>
      <Wrapper>
        {pictures.map(() => (
          <Pic arrayImg={arrayImg} setArrayImg={setArrayImg} />
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
        <Tag>whatever</Tag>
        <Tag>pants</Tag>
        <Tag active>t-shirt</Tag>
        <Tag>skirt</Tag>
        <Tag>shoes</Tag>
        <Tag>tie</Tag>
        <Tag>whatever</Tag>
        <Tag>pants</Tag>
        <Tag active>t-shirt</Tag>
        <Tag>skirt</Tag>
        <Tag>shoes</Tag>
        <Tag>tie</Tag>
      </WrapperTag>
      <Button margin="30px 0 0 0" onClick={guardarDatos}>
        Guardar
      </Button>
    </>
  );
}

CreateCardPost.propTypes = {
  createMyGarment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myGarments: state.myGarments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createMyGarment: createGarmentThunk,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardPost);
