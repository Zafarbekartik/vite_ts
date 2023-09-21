// import { useEffect } from "react";
import { IUsers } from "../../types"
import { useStore } from "../../store/useStore"
import "./Users.css"
import { useState } from "react"

function Users() {
  // const usersObject = useStore<Record<string, IUsers>>((state) => state)
  const localStor = JSON.parse(localStorage.getItem("Users")!)
  const { state: allUsers }: { state: Record<string, IUsers> } = localStor
  const setAllUsers = useStore((state) => state.setUsers)
  const [isRender, setIsRender] = useState<boolean>(false)

  return (
    <div className="usersWrapper">
      {Object.values(allUsers).length ? (
        Object.values(allUsers).map((user, index) => {
          if (user.uEmail)
            return (
              <p className={user.admin ? `userDataAdmin` : ``} key={index}>
                {user.admin ? "Admin - " : "User - "} {user.uEmail}
                <input
                  type="checkbox"
                  checked={user.admin}
                  onChange={() => {
                    const newObj = {
                      [user.uEmail!]: {
                        admin: !user.admin,
                        id: user.id,
                        uConfPass: user.uConfPass,
                        uEmail: user.uEmail,
                        uPassword: user.uPassword,
                      },
                    }
                    setAllUsers(newObj)
                    setIsRender(!isRender)
                  }}
                />
              </p>
            )
        })
      ) : (
        <h1>{""}</h1>
      )}
    </div>
  )
}

export default Users
