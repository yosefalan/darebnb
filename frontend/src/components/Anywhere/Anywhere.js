import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AltNavigation from "../AltNavigation/AltNavigation";
import '../Anywhere/Anywhere.css'
import { fetchSpots } from "../../store/spots";
import AnywhereTile from "../AnywhereTile/AnywhereTile";

function Anywhere() {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state?.spots));
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  console.log("$$$$$$$$$$$$$", spots[0].Images[0].url)

  return (
      <div className="anywhereMainContainer">
        <div className="anywhereCenterContainer">
          <div className="anywhereNavContainer">
            <AltNavigation/>
          </div>
          <h1 className="anywhereHeading">Welcome to Anywhere!</h1>

          <div className="anywhereTilesContainer">
          {spots.map(spot => {
              return (
                <div>
                  <div className="anywhereTile">
                    <img className="gridImg" src={spot.Images[0].url}></img>
                  </div>
                {spot.name}
                </div>
              )})}
          </div>
        </div>
      </div>
  );
}

export default Anywhere;
