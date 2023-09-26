import "./TopCatalog.css"
import { v4 as uuidv4 } from "uuid"
import { NavLink } from "react-router-dom"
import { useProducts } from "../../store/useProducts"
import { shallow } from "zustand/shallow"
import { useEffect } from "react"

function TopCatalog() {
  console.log("Top Catalog")
  const { categoryNames, fetch } = useProducts(
    (state) => ({
      categoryNames: state.categoryNames,
      fetch: state.fetchProducts,
    }),
    shallow
  )

  useEffect(() => void fetch(), [fetch])

  return (
    <div className="catalogBox">
      {/* {isPending ? (
        <Load />
      ) : ( */}
      <ul className="catalogName">
        {categoryNames &&
          categoryNames.map((product) => {
            return (
              <li key={uuidv4()}>
                <NavLink to={"/" + product}>{product}</NavLink>
              </li>
            )
          })}
      </ul>
      {/* )} */}
    </div>
  )
}

export default TopCatalog
