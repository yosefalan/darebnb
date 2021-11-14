import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import '../Reviews/Reviews.css'
import { fetchReviews } from "../../store/reviews";
import { fetchUsers } from "../../store/users";
import { useParams } from 'react-router-dom'

function Reviews({ spot, sessionUser }) {

  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => Object.values(state?.users));
  const reviews = useSelector(state => Object.values(state?.reviews));
  // const reviews = Object.values(spot?.Reviews)

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
                {review?.review}
              </div>
              <div className="reviewTileButtons">
              {sessionUser.id === review?.userId
              ? <button className="reviewBtn">Update</button>
              :null}
              {sessionUser.id === review?.userId
              ? <button className="reviewBtn">Delete</button>
              : null
              }
              </div>
            </div>
          )})}
    </>
  )
}


export default Reviews;
