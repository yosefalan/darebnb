import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm'
import '../LoginFormModal/form.css'

function SignupFormModal() {
  const [ showModal, setShowModal] = useState(false);

return (
  <>
    <a onClick={() => setShowModal(true)} id="signupButton">Sign Up</a>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <SignupForm />
      </Modal>
    )}
  </>
);
}

export default SignupFormModal;
