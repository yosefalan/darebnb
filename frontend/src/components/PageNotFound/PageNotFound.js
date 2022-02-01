
import './PageNotFound.css'

function PageNotFound () {

  return (
    <div>
      <h1 className="pageNotFound1">404</h1>
      <h2>Even we don't know where that place is</h2>
      <img
      className="pageNotFoundImg"
      src={'/images/middle.png'} alt="page not found"></img>
    </div>
  )

}


export default PageNotFound
