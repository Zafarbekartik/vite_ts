import "./UserList.css";
import "../../App";

interface IUser {
  id?: number;
  img?: string;
  first?: string;
  last?: string;
  age?: number;
  from?: string;
  job?: string;
  gender?: string;
}

function UserList({
  users,
  onDelete,
}: {
  users: IUser[];
  onDelete: (id?: number) => void;
}) {
  return (
    <div>
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.img}
                  alt={user.first + ".img"}
                  height={150}
                  width={150}
                />
                <h3>
                  {user.first} {user.last} <br /> {user.age} age,
                  <p>From: {user.from}</p>
                  <p>Job: {user.job}</p>
                  <p>Geder: {user.gender}</p>
                  <button
                    onClick={() => {
                      onDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
