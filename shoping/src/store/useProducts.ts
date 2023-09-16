import create from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { IProduct } from "../types"

const BASE_URL = import.meta.env.VITE_BASE_URL

interface IUseProduct {
  products: IProduct[]
  productsLoading?: boolean
  categoryNames: string[]
  categories: Record<string, IProduct[]>
  fetchProducts: () => void
}

export const useProducts = create<IUseProduct>()(
  persist(
    (set, get) => ({
      products: [],
      categoryNames: [],
      categories: {},
      fetchProducts: async () => {
        set((state) => ({ ...state, productsLoading: true }))
        if (get().products.length > 0) return
        const response = await fetch(BASE_URL)
        const result = (await response.json()) as {
          products: IProduct[]
          skip: number
          total: number
          limit: number
        }

        const categories = result.products.reduce<Record<string, IProduct[]>>(
          (acc, item) => {
            if (item.category in acc) acc[item.category].push(item)
            else Object.assign(acc, { [item.category]: [item] })
            return acc
          },
          {},
        )
        return set({
          categoryNames: Object.keys(categories),
          categories,
          productsLoading: false,
          products: result.products,
        })
      },
    }),
    {
      name: "PRODUCT_STORE",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
