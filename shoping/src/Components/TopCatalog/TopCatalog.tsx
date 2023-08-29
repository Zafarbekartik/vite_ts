import "./TopCatalog.css";
import { UseFetch } from "../API/UseFetch/UseFetch";
import { v4 as uuidv4 } from "uuid";

function TopCatalog() {
  UseFetch("https://dummyjson.com/products");
  const data = JSON.parse(localStorage.getItem("Market"));
  return (
    <div className="TopCatalog">
      {data &&
        data.map((product) => {
          return (
            <div key={uuidv4()}>
              <div className="product">
                <img src={product.images[0]} alt={product.title} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TopCatalog;
