import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <NavLink to={"/Developer"}> Developer </NavLink>
    </div>
  );
}

export default Footer;
