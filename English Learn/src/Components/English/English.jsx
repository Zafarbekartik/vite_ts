import { NavLink } from "react-router-dom";
import "./English.css";

function English() {
  return (
    <div className="englishLesson">
      <NavLink to={"/"}>
        <h1>English Lesson</h1>
      </NavLink>
    </div>
  );
}

export default English;
