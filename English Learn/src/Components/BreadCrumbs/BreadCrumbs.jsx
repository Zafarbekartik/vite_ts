import { NavLink, useLocation } from "react-router-dom";

import "./BreadCrumbs.css";

function BreadCrumbs() {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink.join("")}>
            {crumb.replaceAll("%20", " ")}
          </NavLink>
        </div>
      );
    });

  return (
    <div className="BreadCrumbs">
      <NavLink to={"/"}>Home</NavLink>
      {crumbs}
    </div>
  );
}

export default BreadCrumbs;
