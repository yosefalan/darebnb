import { editReview } from '../../store/reviews'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../LoginFormModal/form.css';
import './UpdateReview.css'


function UpdateReviewForm({ currentReview, spotId, hideForm}){
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewId = currentReview.id

  const [review, setReview] = useState(currentReview.review);
  const updateReview = (e) => setReview(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReview = dispatch(editReview({
      review
    },spotId, reviewId))

    if (updatedReview) {
    window.location.reload(true);
    hideForm();
      }
  }

  return (
    <div className="confirmDeleteContainer">
      <form
      onSubmit={handleSubmit}>
        <textarea
        value={review}
        onChange={updateReview}
        className="updateReview"
        />
        <button
        type="submit"
        className="updateButton"
        >Update</button>
      </form>
    </div>
  );
}

export default UpdateReviewForm;
