"use client"
import React, { useState, useEffect } from 'react'
import Dropdown from '@/app/components/Dropdown'
import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'

const ProductPage = ({ item }) => {
    const { qty, incQty, decQty, onAdd, showCart, setShowShipping } = useStateContext()
    const [selectedSize, setSelectedSize] = useState(0)
    useEffect(() => {
        setShowShipping(false)
    }, [])
    return (
        <div className='w-screen flex items-center justify-center'>
            <div className='px-4 flex flex-col items-center justify-center md:flex-row md:max-w-[70%] md:mt-10'>
                <div>
                    <div className='flex flex-col items-center justify-center p-6 min-h-100'>
                        <img src={item.sync_variants[0].files[0].preview_url} className='h-full w-full' />
                    </div>
                </div>
                <div>
                    <div className='flex flex-col  items-center justify-center shadow-md py-4 shadow-[rgba(255,255,255,.10)]'>
                        <h1 className='text-white text-2xl font-bold'>{item.sync_product.name}</h1>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center justify-between mt-6 px-12 '>
                            <Dropdown variants={item.sync_variants} selectedVariant={selectedSize} visible={showCart} setSelectedSize={setSelectedSize} />
                            <div className='text-white mr-4 text-2xl font-semibold'>
                                ${item.sync_variants[selectedSize].retail_price}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <button
                            type='button'
                            className=' py-3 border-1 font-bold text-xl hover:bg-red-600 hover:text-white hover:border-white border-[#f02d34] rounded-2xl bg-white text-[#f02d34] cursor-pointer w-[200px]'
                            onClick={() => onAdd(item.sync_variants[selectedSize], 1)}
                        >
                            Add to Cart
                        </button>
                        <Link href={'/'}>
                            <button
                                type='button'
                                className=' py-3 mt-4 border-1 font-bold text-md hover:bg-red-600 hover:text-white hover:border-white border-[#f02d34] rounded-2xl bg-white text-[#f02d34] cursor-pointer w-[200px]'
                            >
                                Continue Shopping
                            </button>
                        </Link>
                        <div className='shadow-md shadow-[rgba(255,255,255,.25)] mb-10 pb-8'>
                            <div className='text-white font-bold text-2xl text-center mt-8'>
                                PRODUCT DETAILS
                            </div>
                            <div className='text-white font-bold text-center mt-8 px-4 '>
                                <p>
                                    {item.sync_product.name} is avaible in 4 different sizes!  There are no order minimums, so you can get a single sticker or a whole bunch.  Expressing yourself with stickers has never been so offensive!
                                </p>
                            </div>
                            <ul className='text-white flex flex-col justify-center gap-2 mt-8 list-disc px-16'>
                                <li >High opacity film that’s impossible to see through</li>
                                <li>Durable vinyl</li>
                                <li>95µ thickness</li>
                                <li>Fast and easy bubble-free application</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage