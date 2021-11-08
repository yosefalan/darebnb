import Navigation from "../Navigation/Navigation";
import '../LandingPage/LandingPage.css'

function App() {

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
      </div>
    </>
  );
}

export default App;
