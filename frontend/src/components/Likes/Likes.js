import { useState } from "react"
import { useSelector } from 'react-redux';
import "./Likes.css"


function Likes({ spot }) {

  const sessionUser = useSelector(state => state.session.user);
  // let isLiked = false
  const likes = spot?.likes
  const id = sessionUser?.id
  const [ isLiked, setIsLiked ] = useState(likes?.includes(id) ? true : false)

  console.log(isLiked)

  // if (likes?.includes(id)) isLiked = true;


  const toggleLike = (e) => {
    e.preventDefault();
    if (isLiked) {
      setIsLiked(false)
    } else {
      setIsLiked(true)
    }
  }


  return (
    <>
      {isLiked ?
        <img
        onClick={toggleLike}
        className="likeIcon" src="/images/darered.png" /> :
        <img
        onClick={toggleLike}
        className="likeIcon" src="/images/dareol.png" />
      }
    </>
  )
}

export default Likes;
