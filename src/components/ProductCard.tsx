import Image from 'next/image'
import React from 'react'

interface propsType {
  img: string
  title: string
  desc: string
  price: string
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, price }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <Image className="w-full h-auto" src={img} width={200} height={300} alt={title} />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>

        <div className="font-bold flex flex-col gap-2">
          <span>${price} <del>$100</del></span>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-[12px] px-1 font-bold py-2 rounded">
              Add to cart
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white text-[12px] px-1 font-bold py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard