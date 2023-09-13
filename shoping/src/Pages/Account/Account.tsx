import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import "./Account.css";
import Signup from "../Signup/Signup";
import LogSigToggle from "./LogSigToggle/LogSigToggle";
import AccountRek from "./AccountRek/AccountRek";

function Account() {
  // const [user, setUsers] = useState<Record<string, IUsers[]>>(
  //   JSON.parse(localStorage.getItem("user")!) ?? []
  // );

  // const navigate = Navigate();

  return (
    <div className="Account">
      <LogSigToggle />
      <Routes>
        <Route path="/" element={<AccountRek />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default Account;
