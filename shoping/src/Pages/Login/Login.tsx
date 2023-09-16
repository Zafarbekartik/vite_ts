import { NavLink } from "react-router-dom";
import LoginWithMore from "../../Components/LoginWithMore/LoginWithMore";
import "./logSig.css";
import { FormEvent, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IUsers } from "../../types";

function Login() {
  const [logSig, setLogSig] = useState("Login");

  //eslint-disable-next-line
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const userEmail = useRef<HTMLInputElement>(null);
  const userPassword = useRef<HTMLInputElement>(null);
  const userConfPass = useRef<HTMLInputElement>(null);

  const [allUsers, setAllUsers] = useState<Record<string, IUsers>>(
    JSON.parse(localStorage.getItem("users")!) ?? {}
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userData: IUsers = {
      uEmail: userEmail.current?.value,
      uPassword: userPassword.current?.value,
      uConfPass: userConfPass.current?.value,
      admin: JSON.parse(localStorage.getItem("users")!) ? false : true,
      id: uuidv4(),
    };

    if (
      userData.uPassword == userData.uConfPass &&
      regEx.test(userData.uEmail!) &&
      !allUsers[userData.uEmail!]
    ) {
      setAllUsers((prev) => {
        return { ...prev, [userData.uEmail!]: userData };
      });
      console.log(allUsers);
      localStorage.setItem("users", JSON.stringify(allUsers));
      userEmail.current!.value = "";
      userPassword.current!.value = "";
      userConfPass.current!.value = "";
    }

    if (
      allUsers[userData.uEmail!] &&
      allUsers[userData.uEmail!].uPassword == userData.uPassword
    )
      console.log(allUsers[userData.uEmail!].id);
    else console.log("Email yoki parol kiritishda hatolik bor");
  };

  return (
    <div className="logSig">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="Email" required ref={userEmail} />
        <input
          type="password"
          placeholder="Password"
          minLength={6}
          required
          ref={userPassword}
        />
        {logSig == "Signup" && (
          <input
            type="password"
            placeholder="Confirm password"
            minLength={6}
            required
            ref={userConfPass}
          />
        )}
        {logSig == "Login" && (
          <NavLink to={"./ForgotPassword"}> Forgot Password</NavLink>
        )}
        <button className="logSigBtn">{logSig}</button>
        <div className="logSigOr">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        {logSig == "Login" && (
          <p>
            Already have an account?
            <NavLink
              to={""}
              onClick={() => {
                setLogSig("Signup");
              }}
            >
              {" Signup"}
            </NavLink>
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
              {" Login"}
            </NavLink>{" "}
          </p>
        )}

        <LoginWithMore />
      </form>
    </div>
  );
}

export default Login;
