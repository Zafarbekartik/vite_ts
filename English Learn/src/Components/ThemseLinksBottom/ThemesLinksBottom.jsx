import { NavLink } from "react-router-dom";

function ThemesLinksBottom({ links }) {
  console.log(Array.isArray(links));
  return links.map((link, index) => {
    return (
      <NavLink to={link} key={index}>
        {index}
      </NavLink>
    );
  });
}

export default ThemesLinksBottom;
