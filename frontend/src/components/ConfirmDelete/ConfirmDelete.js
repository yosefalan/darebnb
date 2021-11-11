// ? <div className="spotButtonContainer"
// onClick={() => setShowModal(true)}
// ><p className="spotButtonText">Delete Spot</p></div>
// : null}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import ConfirmDeleteForm from "./ConfirmDeleteForm";

const ConfirmDelete = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <a onClick={() => setShowModal(true)} id="signupButton">Post a Spot</a>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteForm />
      </Modal>
    )}
  </>
  )

}

export default ConfirmDelete;
