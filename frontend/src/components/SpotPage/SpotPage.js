import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AltNavigation from "../AltNavigation/AltNavigation";
import '../SpotPage/SpotPage.css'
import { fetchSpot } from "../../store/spots";
import { useParams } from 'react-router-dom'
import UpdateSpot from "../UpdateSpot/UpdateSpot";
import DeleteSpot from "../DeleteSpot/DeleteSpot";
import Reviews from "../Reviews/Reviews";

function SpotPage() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user);
  const spot = useSelector(state => state.spots?.spot);

  useEffect(() => {
    dispatch(fetchSpot(id));
  }, [id, dispatch]);

  return (
    <div className="spotPageMainContainer">
      <div className="anywhereNavContainer">
        <AltNavigation/>
      </div>
      <div className="spotPageCenterContainer">
          <div className="spotPageTop">
            <div className="spotPageL">
              <h1>{spot && spot.name}</h1>
            </div>
            <div className="spotPageR">
              {sessionUser && sessionUser.id === spot?.userId
              ? <UpdateSpot spot={spot}/>
              : null}
              {sessionUser && sessionUser.id === spot?.userId
              ? <DeleteSpot spot={spot}/>
              : null}
            </div>
          </div>
          {spot &&
          <p className="spotPageText">{spot?.city && spot.city}{spot?.city ? "," : null} {spot?.state && spot.state}{spot?.state ? ", " : null}
                {spot?.country && spot.country} </p>
          }
        <div className="spotPagePhotoGrid">
          <div className="spotPagePhotoGridLeft">
            {spot ? <img className="gridImg" src={spot?.Images[0]?.url} alt=""></img> : null}
          </div>
          <div className="spotPagePhotoGridRight">
            <div className="r1">
              {spot ? <img className="gridImg" src={spot?.Images[1]?.url} alt=""></img>: null}
            </div>
            <div className="r2">
              {spot ? <img className="gridImg" src={spot?.Images[2]?.url} alt=""></img>: null}
            </div>
            <div className="r3">
              {spot ? <img className="gridImg" src={spot?.Images[3]?.url} alt=""></img>: null}
            </div>
            <div className="r4">
              {spot ? <img className="gridImg" src={spot?.Images[4]?.url} alt=""></img>: null}
            </div>
          </div>
        </div>
        <div className="anywhereBottom">
          <div className="description">
            <div className="descriptionImgContainer">

              <img className="descriptionImg" src={'/images/db.jpg'} alt=""></img>
            </div>
            <div className="descriptionText">
              <p>{spot?.description}</p>
            </div>
          </div>
            <Reviews spot={spot} sessionUser={sessionUser} />
          </div>
      </div>
    </div>
  );
}




export default SpotPage;
