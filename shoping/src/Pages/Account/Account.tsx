import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import "./Account.css";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

function Account() {
  return (
    <div className="Account">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default Account;
