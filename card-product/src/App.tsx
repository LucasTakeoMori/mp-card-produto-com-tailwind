import { RatingStar } from './components/rating-star'
import { Product } from './data'
import './globals.css'

export function App() {
  const formatPrice = (price: number) => {
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return formattedPrice
  }

  return (
    <>
      <div className='flex items-center justify-center min-h-screen mx-auto bg-neutral-300'>
        {Product.map((product) => {
          return (
            <div className='mx-auto max-w-md md:max-w-2xl bg-neutral-100 rounded-3xl w-[475px] drop-shadow-lg'>
              <div className='flex flex-col'>
                <img
                  className='rounded-t-3xl hover:opacity-90 transition duration-300 ease-in-out'
                  src={product.image}
                  alt={product.alt}
                />

                <div className='p-14.5'>
                  <h1 className='text-3xl font-bold'>{product.name}</h1>

                  <p className='mt-4'>{product.description}</p>

                  <div className='flex items-center gap-4 mt-4'>
                    <RatingStar />

                    <span className='text-neutral-500'>
                      4.8 (42 avaliações)
                    </span>
                  </div>

                  <div className='flex justify-between mt-4'>
                    <span className='text-sky-500 text-4xl font-bold mt-1'>{formatPrice(product.price)}</span>

                    <button className='bg-gradient-to-r from-sky-500 to-violet-800 opacity-75 text-white p-3.5 rounded-full'>
                      Comprar agora
                    </button>
                  </div>

                  <div className='flex items-center justify-start gap-2 mt-4'>
                    <img src="./frete.svg" alt="" className='mt-3' />

                    <span className='mt-4 block text-sm text-neutral-500'>Frete grátis para todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

