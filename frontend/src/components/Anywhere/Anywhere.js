import AltNavigation from "../AltNavigation/AltNavigation";
import '../Anywhere/Anywhere.css'
import AnywhereTile from "../AnywhereTile/AnywhereTile";

function Anywhere() {

  let spots = []
  for (let i = 0; i < 16; i++){
    spots.push(i)
  }

  console.log("@@@@@@@@@@@@@@", spots)
  return (
    <>
      <div className="anywhereMainContainer">
        <div className="anywhereCenterContainer"></div>
          <div className="anywhereNavContainer">
            <AltNavigation/>
          </div>
        <div className="anywhereTilesContainer">
          <h1>Welcome to Anywhere!</h1>
            {spots.map((spot, idx) => {
              return (
                <div className="tiles">
                  <AnywhereTile spot={spot}/>
                  <h2>{spot}</h2>
                </div>
              )})}
        </div>
      </div>
    </>
  );
}

export default Anywhere;
