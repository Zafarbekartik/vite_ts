import { NavLink } from "react-router-dom";

function ThemesLinks({ links }) {
  return (
    links &&
    links.map((link, index) => {
      return (
        <NavLink to={link} key={link}>
          {`${index + 1}`}
        </NavLink>
      );
    })
  );
}

export default ThemesLinks;
