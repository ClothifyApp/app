import React, { useState } from 'react';

import BaseModal from '../components/modals/Base';
import { Button } from '../components/base/Buttons';
import AskNumber from '../components/modals/AskNumber';
import VerifyCode from '../components/modals/VerifyCode';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showClose, setShowClose] = useState(true);
  const [showBack, setShowBack] = useState(true);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <BaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        showClose={showClose}
        showBack={showBack}
      >
        {/* <AskNumber /> */}
        <VerifyCode />
      </BaseModal>

      <h1>Main View</h1>
      <Button onClick={handleOpenModal}>Let's go!</Button>
    </>
  );
}
