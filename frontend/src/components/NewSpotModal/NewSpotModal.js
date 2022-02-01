import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import NewSpotModalForm from "./NewSpotModalForm";

const NewSpotModal = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <a onClick={() => setShowModal(true)} id="signupButton">Post a Spot</a>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <NewSpotModalForm hideForm={() => setShowModal(false)}/>
      </Modal>
    )}
  </>
  )

}

export default NewSpotModal;
