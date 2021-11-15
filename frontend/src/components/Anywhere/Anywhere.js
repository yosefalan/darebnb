import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AltNavigation from "../AltNavigation/AltNavigation";
import '../Anywhere/Anywhere.css'
import { fetchSpots } from "../../store/spots";

function Anywhere() {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state?.spots));
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
      <div className="anywhereMainContainer">
        <div className="anywhereCenterContainer">
          <div className="anywhereNavContainer">
            <AltNavigation/>
          </div>
          <h1 className="anywhereHeading">Welcome to Anywhere!</h1>

          <div className="anywhereTilesContainer">
          {spots?.map(spot => {
              return (
                <div>
                  <div className="anywhereTile">
                    <NavLink to={`/spots/${spot?.id}`}> <img className="gridImg" src={spot?.Images[0]?.url} alt=""></img></NavLink>
                  </div>
                <NavLink className="anywhereTextLink" to={`/spots/${spot?.id}`}>{spot?.name}</NavLink>
                <p className="anywhereText">{spot?.city && spot?.city}{spot?.city ? "," : null} {spot?.state && spot?.state}{spot?.state ? ", " : null}
                {spot?.country && spot?.country} </p>
                </div>
              )})}
          </div>
        </div>
      </div>
  );
}





export default Anywhere;
