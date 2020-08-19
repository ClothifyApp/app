import React from 'react';
import BaseModal from '../components/modals/Base';
import AskNumber from '../components/modals/AskNumber';
import VerifyCode from '../components/modals/VerifyCode';

export default function Main() {
  return (
    <div>
      <h1>Main View</h1>
      <BaseModal>
        {/* <AskNumber /> */}
        <VerifyCode />
      </BaseModal>
    </div>
  );
}
