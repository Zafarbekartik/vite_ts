import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import "./Account.css";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Users from "../../Components/Users/Users";

function Account() {
  return (
    <div className="Account">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <Users />
    </div>
  );
}

export default Account;
