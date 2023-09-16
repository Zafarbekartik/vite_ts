import { useEffect, useState } from "react"
import { IProduct } from "../../../types"
const BASE_URL = import.meta.env.VITE_BASE_URL
export const useFetch = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [categories, setCategories] = useState<Record<string, IProduct[]>>({})
  const [categoryNames, setCategoryNames] = useState<string[]>([])

  const goFilter = (data: IProduct[]) => {
    const allCats = { ...categories }
    data.forEach((item) => {
      const key = item.category
      if (key in allCats) {
        allCats[key].push(item)
      } else {
        Object.assign(allCats, { [key]: [item] })
      }
    })
    setCategories(allCats)
    // console.log(allCats);
    setCategoryNames(Object.keys(allCats))
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const req = await fetch(BASE_URL)
        const data = await req.json()
        setData(data.products)
        goFilter(data.products)
      } catch {
        console.error("Ma'lumotlar kelmadi! Qaytadan urunib ko'ring")
      } finally {
        setIsPending(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { data, isPending, categories, categoryNames }
}
