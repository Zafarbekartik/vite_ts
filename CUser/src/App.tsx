//style and library
import "./App.css";
import { useState } from "react";

//components
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import UserList from "./component/users/UserList";
import NewUserForm from "./component/newUserForm/NewUserForm";

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

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showModal, setShowModal] = useState(false);

  const createUser = (user: IUser) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  return (
    <div className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No users</h2>}
        </div>
        <UserList
          users={users}
          onDelete={(id) => {
            setUsers((prev) => {
              return prev.filter((user) => user.id !== id);
            });
          }}
        />
      </main>
      {showModal && (
        <NewUserForm
          onClose={(e) => {
            if (
              e.target.className === "overlay" ||
              e.target.className === "modal-btn"
            )
              setShowModal(false);
            if (e.key === "Escape") setShowModal(false);
          }}
          createUser={createUser}
        />
      )}
      <button
        className="create-user"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
// {
//   id: 12,
//   imgUrl: `https://picsum.photos/400?random=12`,
//   firstName: "Zafarbek",
//   lastName: "Artikboev",
//   age: 26,
//   from: "Uzbekistan",
//   job: "Frontend Developer",
//   gender: "male",
// },
