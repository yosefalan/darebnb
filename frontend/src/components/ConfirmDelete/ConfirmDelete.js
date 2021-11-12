
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import './ConfirmDelete.css'

const ConfirmDelete = ({ spot }) => {
 
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="spotButtonContainer"
    id>Delete Spot</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteForm spot={spot} />
      </Modal>
    )}
  </>
  )

}

export default ConfirmDelete;
