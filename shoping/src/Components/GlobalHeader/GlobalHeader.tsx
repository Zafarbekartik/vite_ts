import { useNavigate } from "react-router-dom"
import Catalog from "../../Pages/Catalog/Catalog"
import "./GlobalHeader.css"
import { useState } from "react"
import { ClickAway } from "../ClickAway"

function GlobalHeader() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const navigate = useNavigate()
  return (
    <div className="globalheader">
      <div className="headerwrapper">
        <div className="wrapperleft">
          <div
            className="logotip"
            onClick={() => {
              navigate("/")
            }}
          >
            <h3
              style={{
                color: "mediumslateblue",
              }}
            >
              <i className="fa-solid fa-shop"></i>
            </h3>
            <h4
              style={{
                marginLeft: "10px",
                color: "mediumslateblue",
              }}
            >
              {/* BlessedMarket */}
            </h4>
          </div>
          {
            <ClickAway onClickAway={() => setShowModal(false)}>
              <Catalog thisShowModal={showModal} />
            </ClickAway>
          }
          <div
            className="catalog"
            onClick={() => {
              setShowModal(!showModal)
            }}
          >
            <div>
              <i
                className="fa-regular fa-rectangle-list"
                style={{
                  color: "crimson",
                  fontSize: "18px",
                }}
              ></i>
            </div>
            <p
              style={{
                marginLeft: "10px",
                color: "crimson",
              }}
            >
              Catalog
            </p>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Maxsulotni qidirish" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="wrapperright">
          <div
            className="profil"
            onClick={() => {
              navigate("/Account")
            }}
          >
            <div className="btn">
              <i
                className="fa-solid fa-user"
                style={{
                  color: "coral",
                  fontSize: "18px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="likedaproducts"
            onClick={() => {
              navigate("/Yoqtirilgan")
            }}
          >
            <div className="btn">
              <i
                className="fa-solid fa-heart"
                style={{
                  color: "deeppink",
                  fontSize: "18px",
                }}
              ></i>
            </div>
            <p
              style={{
                color: "deeppink",
              }}
            >
              Yoqtirilgan
            </p>
          </div>
          <div
            className="basket"
            onClick={() => {
              navigate("/Savat")
            }}
          >
            <div className="btn">
              <i
                className="fa-solid fa-cart-plus"
                style={{
                  color: "cornflowerblue",
                  fontSize: "18px",
                }}
              ></i>
            </div>
            <p
              style={{
                color: "cornflowerblue",
              }}
            >
              Savat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalHeader
