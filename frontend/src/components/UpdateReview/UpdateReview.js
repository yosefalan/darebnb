
import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import UpdateReviewForm from "./UpdateReviewForm";
import { editReview } from "../../store/reviews";
import './UpdateReview.css'

const UpdateReview = ({ review, spotId }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="spotButtonContainer"
    id>Update</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <UpdateReviewForm currentReview={review} spotId={spotId}
        hideForm={() => setShowModal(false)}
        />
      </Modal>
    )}
  </>
  )

}

export default UpdateReview;
