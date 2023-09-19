import { useNavigate } from "react-router-dom"

import "./TopHeader.css"
// import { useStore } from "../../store/useStore"

function TopHeader() {
  // const ismim = useStore((state) => state.name)
  const navigate = useNavigate()
  return (
    <div className="topheaderbox">
      <div>
        <div className="header">
          <div className="item1">
            <p>Joylashuv</p>
          </div>
          <div
            className="item2"
            onClick={() => {
              navigate("/Manzil")
            }}
          >
            <p>Manzil</p>
          </div>
          <div className="item3">
            <p>Chegirmalar</p>
          </div>
          <div
            className="item4"
            onClick={() => {
              navigate("/SavolJavob")
            }}
          >
            <p>Savol-Javoblar</p>
          </div>
          <div
            className="item5"
            onClick={() => {
              navigate("/Buyurtmalarim")
            }}
          >
            <p>Buyurtmalarim</p>
          </div>
          <div className="item6">
            <p>{"Tilni tanlash"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
