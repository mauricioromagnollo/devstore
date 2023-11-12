import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data'
import { Product } from '@/data/types'
import { getFormattedCurrency } from '@/helpers'

export const metadata: Metadata = {
  title: 'Home'
}

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60 // 1 hour
    }
  })
  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className={`
          group relative col-span-6 row-span-6 rounded-lg overflow-hidden
          flex justify-center items-end bg-zinc-900
        `}
      >
        <Image
          src={highlightedProduct.image}
          width={920}
          height={920}
          quality={100}
          alt='Product Image'
          className='group-hover:scale-105 transition-transform duration-500'
        />

        <div className={`
          absolute bottom-28 rigth-28 h-12 flex items-center gap-2 max-w-[280px]
          rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5
        `}>
          <span className='text-sm truncate'>{highlightedProduct.title}</span>
          <span
            className={`
              flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'
            `}>
            {getFormattedCurrency(highlightedProduct.price, true)}
          </span>
        </div>
      </Link>

      {otherProducts.map(product => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className={`
          group relative col-span-3 row-span-3 rounded-lg overflow-hidden
          flex justify-center items-end bg-zinc-900
        `}
          >
            <Image
              src={product.image}
              width={920}
              height={920}
              quality={100}
              alt='Product Image'
              className='group-hover:scale-105 transition-transform duration-500'
            />

            <div className={`
          absolute bottom-10 rigth-10 h-12 flex items-center gap-2 max-w-[280px]
          rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5
        `}>
              <span className='text-sm truncate'>{product.title}</span>
              <span
                className={`
              flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'
            `}>
                {getFormattedCurrency(product.price, true)}
              </span>
            </div>
          </Link>
        )
      })}

    </div>
  )
}
