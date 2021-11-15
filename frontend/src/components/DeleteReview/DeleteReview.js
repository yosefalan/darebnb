
import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import DeleteReviewForm from "./DeleteReviewForm";
import './DeleteReview.css'

const DeleteReview = ({ spot, reviewId, spotId }) => {

  const [showModal, setShowModal] = useState(false);

  console.log("REVIEW ID:", reviewId)
  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="spotButtonContainer"
    id>Delete</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <DeleteReviewForm spot={spot} reviewId={reviewId} spotId={spotId}/>
      </Modal>
    )}
  </>
  )

}

export default DeleteReview;
