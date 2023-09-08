import { useFetch } from "../../Components/API/UseFetch/useFetch";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./Catalog.css";

function Catalog({ thisShowModal }: { thisShowModal: boolean }) {
  const { categoryNames: data, isPending } = useFetch(
    "https://dummyjson.com/products"
  );
  return (
    <div className={thisShowModal ? "modalCatalog" : "modalCatalog hidden"}>
      {!isPending && (
        <ul className="mCUl">
          {data &&
            data.map((product) => {
              return (
                <li key={uuidv4()} className="modalLi">
                  <NavLink to={"/" + product}>{product}</NavLink>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default Catalog;
