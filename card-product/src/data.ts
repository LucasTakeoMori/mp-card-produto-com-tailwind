type productProps = {
  id: number;
  image: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

export const Product: productProps[] = [
  {
    id: 1,
    image: './airmax.png',
    alt: 'Air Max Image',
    name: 'Nike Air Max 90',
    description: 'Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador',
    price: 899
  }
]