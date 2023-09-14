import "./TopCatalog.css";
import { useFetch } from "../API/UseFetch/useFetch";
// import Load from "../Loading/Load";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

function TopCatalog() {
  const { categoryNames: data } = useFetch("https://dummyjson.com/products");

  return (
    <div className="catalogBox">
      {/* {isPending ? (
        <Load />
      ) : ( */}
      <ul className="catalogName">
        {data &&
          data.map((product) => {
            return (
              <li key={uuidv4()}>
                <NavLink to={"/" + product}>{product}</NavLink>
              </li>
            );
          })}
      </ul>
      {/* )} */}
    </div>
  );
}

export default TopCatalog;
