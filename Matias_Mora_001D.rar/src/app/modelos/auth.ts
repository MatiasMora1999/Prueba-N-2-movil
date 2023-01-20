export type usuario = {
  username: string;
  password: string;
}
export type respuestaUsuario = {
  id:	string;
  username:	string;
  email:	string;
  firstName:	string;
  lastName:	string;
  gender:	'male' | 'female'
  token:	string;
}
export type productos = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]
}
export type respuestaProduc= {
  products: productos[]
  total: number,
  skip: number | null
  limit: number
}
