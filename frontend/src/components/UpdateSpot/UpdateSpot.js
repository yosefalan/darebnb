import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import UpdateSpotForm from "./UpdateSpotForm";
import '../UpdateSpot/UpdateSpot.css'

const UpdateSpot = ({spot}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
      // onClick={() => setShowModal(true)}
      className="spotButtonContainer"
      >Update Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <UpdateSpotForm spot={spot}/> */}
        </Modal>
      )}
    </>
  )

}

export default UpdateSpot;


// ? <div className="spotButtonContainer"
// onClick={() => setShowModal(true)}>
// <p className="spotButtonText">Update Spot</p></div>
// : null}
//   {showModal && (
//     <Modal onClose={() => setShowModal(false)}>

//     </Modal>
//   )}
