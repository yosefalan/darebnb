
import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import DeleteReviewForm from "./DeleteReviewForm";
import './DeleteReview.css'

const DeleteReview = ({ spot }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="spotButtonContainer"
    id>Delete Spot</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <DeleteReviewForm spot={spot} />
      </Modal>
    )}
  </>
  )

}

export default DeleteReview;
