import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import NewSpotModalForm from "./NewSpotModalForm";

const NewSpotModal = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <a onClick={() => setShowModal(true)} id="signupButton">Post a Spot</a>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <NewSpotModalForm />
      </Modal>
    )}
  </>
  )

}

export default NewSpotModal;
