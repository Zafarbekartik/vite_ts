import { FormEvent } from "react";
import "./ForgotPassword.css";

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
        <button>Send</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
