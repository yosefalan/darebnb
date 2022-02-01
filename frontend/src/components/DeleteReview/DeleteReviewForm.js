import { deleteReview } from '../../store/reviews'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../LoginFormModal/form.css';
import './DeleteReview.css'

function DeleteReviewForm({ spot, reviewId, spotId }){
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteReview(spotId, reviewId))
    window.location.reload(true);
  }

  return (
    <div className="confirmDeleteContainer">
      <h2>Are you sure you want to delete this review?</h2>
      <button
      onClick={() => handleDelete(id)}
      className="confirmDeleteButton"
      >Delete</button>
    </div>
  );
}

export default DeleteReviewForm;
