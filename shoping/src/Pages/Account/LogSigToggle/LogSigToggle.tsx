import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./logSigToggle.css";

function LogSigToggle() {
  const [logSig, setLogSig] = useState("-> Hisobga kirish <-");

  function togg() {
    if (logSig == "-> Hisobga kirish <-") setLogSig("-> Yangi hisob ochish <-");
    else setLogSig("-> Hisobga kirish <-");
  }

  return (
    <div className="logSigToggle">
      <p>
        {logSig == "-> Hisobga kirish <-" && (
          <NavLink
            to={"Login"}
            onClick={() => {
              togg();
            }}
          >
            {logSig}
          </NavLink>
        )}
        {logSig == "-> Yangi hisob ochish <-" && (
          <NavLink to={"Signup"} onClick={togg}>
            {logSig}
          </NavLink>
        )}
      </p>
    </div>
  );
}

export default LogSigToggle;
