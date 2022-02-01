
import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import DeleteSpotForm from "./DeleteSpotForm";
import './DeleteSpot.css'

const DeleteSpot = ({ spot }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="spotButtonContainer"
    id>Delete Spot</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <DeleteSpotForm spot={spot} />
      </Modal>
    )}
  </>
  )

}

export default DeleteSpot;
