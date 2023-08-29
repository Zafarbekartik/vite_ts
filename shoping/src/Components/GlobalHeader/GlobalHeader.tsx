import "./GlobalHeader.css";

function GlobalHeader() {
  return (
    <div className="globalheader">
      <div className="headerwrapper">
        <div className="wrapperleft">
          <div className="logotip">
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
              OFHome
            </h4>
          </div>
          <div className="catalog">
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
          <div className="profil">
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
          <div className="likedaproducts">
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
          <div className="basket">
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
  );
}

export default GlobalHeader;
