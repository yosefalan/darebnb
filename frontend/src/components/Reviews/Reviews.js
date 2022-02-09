import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import '../Reviews/Reviews.css'
import { addNewReview, fetchReviews } from "../../store/reviews";
// import { fetchReviews } from "../../store/reviews";
import { fetchUsers } from "../../store/users";
import { useParams } from 'react-router-dom'
import DeleteReview from "../DeleteReview/DeleteReview";
import UpdateReview from "../UpdateReview/UpdateReview"


function Reviews({ spot, sessionUser }) {

  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => Object.values(state?.users));
  const reviews = useSelector(state => Object.values(state?.reviews));
  const userId = sessionUser?.id
  const spotId = id
  // const reviews = Object.values(spot?.Reviews)

  const [ review, setReview ] = useState('')
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    const newReview = dispatch(addNewReview({
      review,
      userId,
      spotId
    }, id))
    .then(() => {
      setReview("");
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
        setErrors(newErrors);
      }
      });
      window.location.reload(true);
  };

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
    const findUser = (userId) => {
      function isUser(user) {
        return user.id === userId;
      }
    return users.find(isUser);
    }

  return (
  <>
    {/* <div className="reviewInput"> */}
      <div className="reviewCenter">
        <form
          className="reviewForm"
          onSubmit={handleSubmit}>
          <textarea
          className="reviewInputText"
          placeholder="  Leave a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          />
          <button type="submit" id="submitButton"
          className="reviewBtn"
          >Submit</button>
        </form>

    {/* </div> */}
    {/* <div className="reviewsContainer"> */}
        {/* <div className="reviews"> */}
          {reviews?.map((review)  => {
            return (
              <div className="reviewTile">
                <div className="reviewTileLeft">
                  <div className="reviewTileImgContainer">
                  {findUser(review?.userId)?.imageURL
                  ? <img
                  className="reviewTileImg"
                  src={findUser(review?.userId)?.imageURL
                  } alt=""></img>
                  : <div
                  className="faContainer"
                  ><i class="fas fa-user-circle"></i></div>
                  }
                  </div >
                  {findUser(review?.userId)?.username}
                </div>
                <div className="reviewTileBody">
                  <p>{review?.review}</p>
                </div>
                <div className="reviewTileButtons">
                {sessionUser?.id === review?.userId
                ?  <UpdateReview review={review} spotId={spotId} />
                // ? <button className="reviewBtn">Update</button>
                :null}
                {sessionUser?.id === review?.userId
                ? <DeleteReview reviewId={review.id} spotId={spotId} />
                : null
                }
                </div>
              </div>
            )})}
        {/* </div> */}
      {/* </div> */}
    </div>
  </>
  )
}


export default Reviews;
