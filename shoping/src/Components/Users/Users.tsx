// import { useEffect } from "react";
import { IUsers } from "../../types";
import "./Users.css";

function Users() {
  const allUsers: Record<string, IUsers> =
    JSON.parse(localStorage.getItem("users")!) ?? {};

  return (
    <div className="usersWrapper">
      {Object.values(allUsers).length ? (
        Object.values(allUsers).map((user) => {
          return (
            <p className={user.admin ? `userDataAdmin` : ``} key={user.id}>
              {user.admin ? "Admin - " : "User - "} {user.uEmail}
            </p>
          );
        })
      ) : (
        <h1>No users yet</h1>
      )}
    </div>
  );
}

export default Users;
