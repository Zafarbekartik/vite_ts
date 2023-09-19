import { create } from "zustand"

interface IProductStore {
  name: string
  setName: (name: string) => void
}

export const useStore = create<IProductStore>((set) => ({
  name: "Allayor",
  setName: (name) => set({ name }),
}))
