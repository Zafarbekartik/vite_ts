import "../Login/logSig.css";
import LoginWithMore from "../../Components/LoginWithMore/LoginWithMore";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="logSig">
      <h3>Signup</h3>
      <form>
        <input type="email" placeholder="email" required />
        <input
          type="password"
          placeholder="create password"
          minLength={6}
          required
        />
        <input
          type="password"
          placeholder="confirm password"
          minLength={6}
          required
        />
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

export default Signup;
