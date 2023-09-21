import { create } from "zustand"
import { IUsers } from "../types"
import { createJSONStorage, persist } from "zustand/middleware"

interface IUsersStore {
  users: Record<string, IUsers>
  setUsers: (users: Record<string, IUsers>) => void
}

export const useStore = create<IUsersStore>()(
  persist(
    (set) => ({
      users: {},
      setUsers: (users) => set({ ...users, users }),
    }),
    { name: "Users", storage: createJSONStorage(() => localStorage) }
  )
)
