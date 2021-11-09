import AltNavigation from "../AltNavigation/AltNavigation";
import '../Anywhere/Anywhere.css'
import AnywhereTile from "../AnywhereTile/AnywhereTile";

function Anywhere() {

  let spots = []
  for (let i = 0; i < 16; i++){
    spots.push(i)
  }

  return (
      <div className="anywhereMainContainer">
        <div className="anywhereCenterContainer">
          <div className="anywhereNavContainer">
            <AltNavigation/>
          </div>
          <h1 className="anywhereHeading">Welcome to Anywhere!</h1>
          <div className="anywhereTilesContainer">
            {spots.map((spot, idx) => {
              return (
                <div className="tiles">
                  <AnywhereTile spot={spot}/>
                  <h2>{spot}</h2>
                </div>
              )})}
          </div>
        </div>
      </div>
  );
}

export default Anywhere;
