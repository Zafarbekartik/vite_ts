import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio earum
        dicta culpa architecto pariatur exercitationem porro, sit eum aut
        laborum.3
      </p>
      <nav>
        <NavLink to={"faq"}>Faq</NavLink>
        <NavLink to={"form"}>Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
