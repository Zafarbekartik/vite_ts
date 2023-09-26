import "./Loading.css"

function Load() {
  console.log("Loading")
  return (
    <div className="loading">
      <div className="loadingCircle"></div>
      <div className="inCircle"></div>
      {/* <div className="littleCircle"></div> */}
    </div>
  )
}

export default Load
