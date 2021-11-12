import { deleteSpot } from '../../store/spots'
import { useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import '../LoginFormModal/form.css';
import './ConfirmDelete.css'

function ConfirmDelete({ spot }){
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("YYYYYYYYYYYYYYYYYY", id)

  const handleDelete = (id) => {
    console.log("22222222222222222222222", id)
    dispatch(deleteSpot(id))
    
  }

  return (
    <div className="confirmDeleteContainer">
      <h2>Are you sure you want to delete this spot?</h2>
      <button
      onClick={() => handleDelete(id)}
      className="confirmDeleteButton"
      >Delete</button>
    </div>
  );
}

export default ConfirmDelete;
