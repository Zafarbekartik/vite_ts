import { useEffect } from "react"
import { useProducts } from "../../store/useProducts"
import useBreadcrumbs from "../../Layout/breadCrumbs/breadCrumbs"
import Load from "../../Components/Loading/Load"
import { shallow } from "zustand/shallow"
import "./Home.css"

function Home() {
  console.log("Home page for Products")
  const { fetch, products, loading, categories } = useProducts(
    (state) => ({
      products: state.products,
      categories: state.categories,
      loading: state.productsLoading,
      fetch: state.fetchProducts,
    }),
    shallow
  )
  useEffect(() => {
    void fetch()
  }, [fetch])

  const crumbs = useBreadcrumbs()
  const [category] = crumbs

  return (
    <div className="CatalogBox">
      {loading == true ? (
        <Load />
      ) : category ? (
        categories[category].map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>
                <b>Price</b> - {product.price}$
              </p>
            </div>
          )
        })
      ) : (
        products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>
                <b>Price</b> - {product.price}$
              </p>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Home
