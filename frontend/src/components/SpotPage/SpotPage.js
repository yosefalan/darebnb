import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AltNavigation from "../AltNavigation/AltNavigation";
import '../SpotPage/SpotPage.css'
import { fetchSpot } from "../../store/spots";
import { useParams } from 'react-router-dom'

function SpotPage() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  // const spott = useSelector(state => Object.values(state?.spots));
  const spot = useSelector(state => state.spots.spot);
  // const spot = spott[0]
  console.log("??????????????????", spot, sessionUser)

  useEffect(() => {
    dispatch(fetchSpot(id));
  }, [dispatch]);

  return (
    <div className="spotPageMainContainer">
      {/* <div className="anywhereNavContainer">
        <AltNavigation/>
      </div>
      <div className="spotPageCenterContainer">
          <div className="spotPageTop">
            <div className="spotPageL">
              <h1>{spot && spot.name}</h1>
            </div>
            <div className="spotPageR">
              {sessionUser && sessionUser.id === spot.userId
              ? <div className="spotButtonContainer"><p className="spotButtonText">Update Spot</p></div>
              : null}
              {sessionUser && sessionUser.id === spot.userId
              ? <div className="spotButtonContainer"><p className="spotButtonText">Delete Spot</p></div>
              : null}
            </div>
          </div>

          <p className="spotPageText">{spot.city && spot.city} {spot.state && spot.state}
                  {spot.country && spot.country} </p>
        <div className="spotPagePhotoGrid">
          <div className="spotPagePhotoGridLeft"><img className="gridImg" src={spot.Images[0].url}></img></div>
          <div className="spotPagePhotoGridRight">
            <div className="r1"><img className="gridImg" src={spot.Images[1].url}></img></div>
            <div className="r2"><img className="gridImg" src={spot.Images[2].url}></img></div>
            <div className="r3"><img className="gridImg" src={spot.Images[3].url}></img></div>
            <div className="r4"><img className="gridImg" src={spot.Images[4].url}></img></div>
          </div>
        </div>
        <div className="anywhereBottom">
            <div className="description">
              <div className="descriptionImgContainer">

                <img className="descriptionImg" src={'/images/db.jpg'}></img>
              </div>
              <div className="descriptionText">
                <p>{spot.description}</p>
              </div>
            </div>
            <div className="reviews"></div>
        </div>
      </div> */}
    </div>
  );
}




export default SpotPage;
