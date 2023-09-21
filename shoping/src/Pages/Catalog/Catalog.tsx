import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import "./Catalog.css"
import { useProducts } from "../../store/useProducts"
import { shallow } from "zustand/shallow"
import { useEffect } from "react"

function Catalog({ thisShowModal }: { thisShowModal: boolean }) {
  const { fetch, names, loading } = useProducts(
    (state) => ({
      names: state.categoryNames,
      loading: state.productsLoading,
      fetch: state.fetchProducts,
    }),
    shallow
  )
  useEffect(() => {
    void fetch()
  }, [fetch])

  return (
    <div className={thisShowModal ? "modalCatalog" : "modalCatalog hidden"}>
      {!loading && (
        <ul className="mCUl">
          {names &&
            names.map((product) => {
              return (
                <li key={uuidv4()} className="modalLi">
                  <NavLink to={"/" + product}>{product}</NavLink>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}

export default Catalog
