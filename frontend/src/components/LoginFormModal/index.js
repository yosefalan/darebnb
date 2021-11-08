import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../LoginFormModal/form.css'

function LoginFormModal() {
  const [ showModal, setShowModal] = useState(false);

return (
  <>
    <a onClick={() => setShowModal(true)} id="loginButton">Log In</a>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <LoginForm />
      </Modal>
    )}
  </>
);
}

export default LoginFormModal;
