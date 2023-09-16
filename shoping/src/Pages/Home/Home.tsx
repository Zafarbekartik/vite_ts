import Load from "../../Components/Loading/Load"
import { v4 as uuidv4 } from "uuid"
import { useProducts } from "../../store/useProducts"
// import { IProduct } from "../../types";
import "./Home.css"
import { useEffect } from "react"
function Catalog() {
  const { fetch, products, categoryNames, loading } = useProducts((state) => ({
    products: state.products,
    categoryNames: state.categoryNames,
    loading: state.productsLoading,
    fetch: state.fetchProducts,
  }))
  useEffect(() => {
    void fetch()
  }, [fetch])
  return (
    <div className="CatalogBox">
      {loading ? (
        <Load />
      ) : (
        categoryNames &&
        cate.map((product) => (
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
  )
}

export default Catalog
