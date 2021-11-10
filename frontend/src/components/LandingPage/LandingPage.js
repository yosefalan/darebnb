import Navigation from "../Navigation/Navigation";
import '../LandingPage/LandingPage.css'
import { NavLink } from 'react-router-dom';


function LandingPage() {

  return (
    <>
      <div className="landingImgContainer">
        <div className="landingImgGrad"></div>
        <div className="imgWrap">
        <img src={'images/bone-church-1.png'}className="landingImg"></img>
        </div>
      </div>
      <div className="navContainer">
        <Navigation/>
        <div className="anywhereContainer">
          <h2 className="somewhere">Just take me...</h2>
          <div className="anywhereButton"><a className="anywhereLink" href="/anywhere">Anywhere</a></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
