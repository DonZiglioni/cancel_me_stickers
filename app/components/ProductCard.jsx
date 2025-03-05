import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {

    return (
        <Link href={`/sticker/${product.id}`}>
            <div className=' flex flex-col justify-center items-center cursor-pointer group hover:text-green-500 text-white '>
                <img src={product.thumbnail_url} className='h-48 w-48 rounded-2xl ' />
                <div className='flex flex-col justify-center items-center rounded-xl w-[90%] my-2 group-hover:shadow-[rgba(0,255,0,.7)]  shadow-[rgba(255,255,255,.25)] shadow-md px-4'>
                    <h1 className=' text-xl font-bold '>{product.name}</h1>
                    <h1 className='text-xl font-bold mb-2'>$5.00 - $8.00</h1>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard