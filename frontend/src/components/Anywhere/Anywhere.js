import AltNavigation from "../AltNavigation/AltNavigation";
import '../Anywhere/Anywhere.css'
import AnywhereTile from "../AnywhereTile/AnywhereTile";

function Anywhere() {

  let spots = []
  for (let i = 0; i < 16; i++){
    spots.push(i)
  }

  const pics = [
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/01_sull_church/DSC08752.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/02_snake_island/!.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/03_red_forest/23e20d7765756e3c786a0d70d7a1a25666103379.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/04_bikini_atoll/image-20160622-7158-1n1hzb0.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/05_mt_washigton/8.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/06_death_valley/ratio3x2_2400.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/07_danakil/4a155073-9632-4812-a935-64beacd11643-1400.jpg',
    'https://darebnb.s3.us-east-2.amazonaws.com/part_1/08_sinubung/volcano-sinabung-explosion-indonesia-01.jpg'
  ]


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
                <div className={`tiles${idx}`}>
                  <div className="anywhereTileMainContainer">
                    {pics.map(pic => {
                      return (
                      <img className="gridImg" src={pic}></img>
                    )})}
                  </div>
                  {/* <AnywhereTile spot={spot}/> */}
                  <a href={`/spots/${spot}`}>{spot}</a>
                </div>
              )})}
          </div>
        </div>
      </div>
  );
}

export default Anywhere;
