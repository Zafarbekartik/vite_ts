import { NavLink } from "react-router-dom";
import LoginWithMore from "../../Components/LoginWithMore/LoginWithMore";
import "./logSig.css";
import { useState } from "react";

function Login() {
  const [logSig, setLogSig] = useState("Signup");
  return (
    <div className="logSig">
      <form>
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" minLength={6} required />
        {logSig == "Login" && (
          <input
            type="password"
            placeholder="confirm password"
            minLength={6}
            required
          />
        )}
        {logSig == "Signup" && (
          <NavLink to={"./ForgotPassword"}> Forgot Password</NavLink>
        )}
        <button className="logSigBtn">
          {logSig == "Login" ? "Signup" : "Login"}
        </button>
        <div className="logSigOr">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        {logSig == "Login" && (
          <p>
            Already have an account?{" "}
            <NavLink
              to={""}
              onClick={() => {
                setLogSig("Signup");
              }}
            >
              {" "}
              {logSig}{" "}
            </NavLink>{" "}
          </p>
        )}
        {logSig == "Signup" && (
          <p>
            Don't have an account?{" "}
            <NavLink
              to={""}
              onClick={() => {
                setLogSig("Login");
              }}
            >
              {" "}
              {logSig}{" "}
            </NavLink>{" "}
          </p>
        )}

        <LoginWithMore />
      </form>
    </div>
  );
}

export default Login;
