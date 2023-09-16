export interface IProduct {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface IUsers {
  uEmail: string | undefined
  uPassword: string | undefined
  uConfPass: string | undefined
  id: string
  admin: boolean
}
