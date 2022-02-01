import { deleteSpot } from '../../store/spots'
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import '../LoginFormModal/form.css';
import './DeleteSpot.css'

function ConfirmDelete({ spot }){
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = (id) => {
    dispatch(deleteSpot(id))
    history.push('/anywhere')
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
