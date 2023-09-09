/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IUsers } from "../../types";
import "./Account.css";

function Account() {
  const [user, setUsers] = useState<Record<string, IUsers[]>>(
    JSON.parse(localStorage.getItem("user")!) ?? []
  );

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return <div className="Account"></div>;
}

export default Account;
