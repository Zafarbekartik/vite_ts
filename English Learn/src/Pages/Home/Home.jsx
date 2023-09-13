import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
  const links = [
    { linkName: "Lesson 01", linkDate: "11.09.2023" },
    { linkName: "Lesson 02", linkDate: "13.09.2023" },
  ];
  return (
    <div className="home">
      {links.map((link) => {
        const { linkName, linkDate } = link;
        return (
          <NavLink to={linkName} key={linkName}>
            {linkName} <small>{linkDate && linkDate} </small>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Home;
