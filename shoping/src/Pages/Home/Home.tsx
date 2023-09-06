import useBreadcrumbs from "../../Layout/breadCrumbs/breadCrumbs";
import { useFetch } from "../../Components/API/UseFetch/useFetch";
import Load from "../../Components/Loading/Load";
import { v4 as uuidv4 } from "uuid";
import { IProduct } from "../../types";
import "./Home.css";

function Catalog() {
  const crumbs = useBreadcrumbs();
  const { categories, isPending, data } = useFetch(
    "https://dummyjson.com/products"
  );
  const category = crumbs.length ? categories[crumbs[0]] : data;

  return (
    <div className="CatalogBox">
      {isPending ? (
        <Load />
      ) : (
        category &&
        category.map((product) => (
          <div className="product" key={uuidv4()}>
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>
              <b>Price</b> - {product.price}$
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Catalog;
