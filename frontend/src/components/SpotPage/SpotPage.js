import AltNavigation from "../AltNavigation/AltNavigation";
import '../SpotPage/SpotPage.css'

function SpotPage() {



  return (
    <div className="spotPageMainContainer">
      <div className="anywhereNavContainer">
        <AltNavigation/>
      </div>
      <div className="spotPageCenterContainer">
        <h1>Quemada Grande: Snake Island</h1>
        <p className="location">Sao Paolo, Brazil</p>
      </div>
      <div className="spotPagePhotoGrid">
        <div className="spotPagePhotoGridLeft"><img className="gridImg" src="https://darebnb.s3.us-east-2.amazonaws.com/part_1/02_snake_island/!.jpg"></img></div>
        <div className="spotPagePhotoGridRight">
          <div className="r1"><img className="gridImg" src="https://darebnb.s3.us-east-2.amazonaws.com/part_1/02_snake_island/3-Earned-Its-Name.jpg"></img></div>
          <div className="r2"><img className="gridImg" src="https://darebnb.s3.us-east-2.amazonaws.com/part_1/02_snake_island/5b33fd9a7708e9436e60a166.jpg"></img></div>
          <div className="r3"><img className="gridImg" src="https://darebnb.s3.us-east-2.amazonaws.com/part_1/02_snake_island/maxresdefault.jpg"></img></div>
          <div className="r4"><img className="gridImg" src="https://darebnb.s3.us-east-2.amazonaws.com/part_1/02_snake_island/queimada_grand_0.jpg"></img></div>
        </div>
      </div>
    </div>
  );
}




export default SpotPage;
