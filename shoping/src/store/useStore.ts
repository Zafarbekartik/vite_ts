import { create } from "zustand"
import { IUsers } from "../types"

interface IUsersStore {
  users: Record<string, IUsers>
  setUsers: (users: Record<string, IUsers>) => void
}

export const useStore = create<IUsersStore>((set) => ({
  users: JSON.parse(localStorage.getItem("users")!) ?? {},
  setUsers: (users) => set({ ...users, users }),
}))
