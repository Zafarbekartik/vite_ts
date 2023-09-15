import { FormEvent } from "react";
import "./ForgotPassword.css";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  const handleSubmit = (e: FormEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="logSig">
      <p>! Hisobni tiklash uchun emailingizga ishonch kodlari yuboriladi</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="email" placeholder="email" required />
        <button className="logSigBtn">Send</button>
        <p className="backToLogSig">
          Back to <NavLink to="/Account">Login</NavLink>{" "}
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
