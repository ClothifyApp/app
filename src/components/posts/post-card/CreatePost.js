import React, { useState } from 'react';
import { CreateCardPost } from '../create-card-post/CreateCardPost' 
import { ImgWrapper, IconPlus, PlusCircle, Title } from './style';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TagsPost } from '../tags-post/TagsPost';



//Import ModalBase
import ModalCreatePost from '../BaseModalPost/ModalCreatePost';



export const CreatePost = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [step, setStep] = useState(1);
  const handleBack = () => setStep(step - 1);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleContinue = () => setStep(step + 1);

  return (
    <>
      <ImgWrapper direction='column' align='center'>
        <ModalCreatePost
          position='fixed'
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showBack={[2].includes(step)}
          onBack={handleBack}
          showClose
        >  
          {step === 1 && <CreateCardPost onContinue={handleContinue} /> }  
          {step === 2 && <TagsPost  />}
          </ModalCreatePost>
        <PlusCircle onClick={handleOpenModal}>
          <IconPlus icon={faPlus} />
        </PlusCircle>
        <Title>
          Crear Publicación
        </Title>
      </ImgWrapper>
    </>
  );
};
