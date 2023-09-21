import { persist, createJSONStorage, devtools } from "zustand/middleware"
import { IProduct } from "../types"
import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/shallow"

const BASE_URL = import.meta.env.VITE_BASE_URL

export interface IUseProduct {
  products: IProduct[]
  productsLoading?: boolean
  categoryNames: string[]
  categories: Record<string, IProduct[]>
  fetchProducts: () => void
}

export const useProducts = createWithEqualityFn<IUseProduct>()(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        categoryNames: [],
        categories: {},
        fetchProducts: async () => {
          if (get().products.length > 0)
            return set((state) => ({ ...state, productsLoading: false }))
          set((state) => ({ ...state, productsLoading: true }))
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
            {}
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
      }
    ),
    { name: "PRODUCTS_DEBUG" }
  ),
  shallow
)
