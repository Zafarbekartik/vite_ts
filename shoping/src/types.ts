export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface IUsers {
  name: string;
  telNumber: number;
  password: string;
  id: string;
  active: boolean;
  admin: boolean;
}

export interface IOpenRegBox {
  kirish: boolean;
  registratsiya: boolean;
}
