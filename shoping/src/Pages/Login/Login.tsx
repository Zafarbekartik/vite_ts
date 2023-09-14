import { NavLink } from "react-router-dom";
import LoginWithMore from "../../Components/LoginWithMore/LoginWithMore";
import "./logSig.css";

function Login() {
  return (
    <div className="logSig">
      <h3>Login</h3>
      <form>
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" minLength={6} required />
        <NavLink to={"../ForgotPassword"}> Forgot Password</NavLink>
        <button className="logSigBtn">Login</button>
        <div className="logSigOr">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        <LoginWithMore />
      </form>
    </div>
  );
}

export default Login;
