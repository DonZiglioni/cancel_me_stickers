"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '@/context/StateContext';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove, setShowShipping } = useStateContext();

    return (
        <div className='w-[100vw] bg-[rgba(0,0,0,.5)] fixed right-0 top-0 z-50' ref={cartRef}>
            <div className='h-[100vh] max-w-[600px] bg-gray-200 float-right  py-2.5 relative'>
                <button type='button' className='flex items-center text-lg font-medium cursor-pointer gap-0.5 ml-2.5 mt-4 bg-transparent' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className='ml-2.5'>Your Cart</span>
                    <span className='ml-2.5 text-center'>({totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 && (
                    <div className='m-10 text-center'>
                        <h3 className='font-semibold text-xl'>Your cart is empty</h3>
                        <Link href={'/'}>
                            <button type='button' onClick={() => setShowCart(false)} className='w-[100%] max-w-[400px] px-2.5 py-3 rounded-2xl cursor-pointer text-lg mt-2.5 text-white bg-[#f02d34]'>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='mt-4 max-h-[70vh] py-2.5'>
                    {cartItems.length >= 1 && cartItems.map((item, index) => {
                        return (
                            <div className='flex gap-4 p-5' key={item.id}>
                                <img src={item.files[0].preview_url} className='w-40 h-40 p-4  rounded-2xl border-1 border-r-gray-400 ' />
                                <div className="w-full flex flex-col overflow-auto ">
                                    <div className="flex justify-between text-black w-full">
                                        <h5 className='text-lg font-bold'>{item.name}</h5>
                                    </div>

                                    <div className="flex justify-between px-4 text-[#324d67]">
                                        <div>
                                            <p className=" flex gap-2  px-4 items-center   p-1.5">
                                                <span className="border-r-1 pr-4 h-full border-r-gray-400" onClick={() => toggleCartItemQuanitity(item.id, 'dec')}>
                                                    <AiOutlineMinus color='red' size={20} />
                                                </span>
                                                <span className="font-bold text-xl" >{item.quantity}</span>
                                                <span className="border-l-1 pl-4 h-full border-l-gray-400" onClick={() => toggleCartItemQuanitity(item.id, 'inc')}>
                                                    <AiOutlinePlus color='green' size={20} />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between px-4'>
                                        <h4 className='text-2xl font-bold'>${item.retail_price}</h4>
                                        <button
                                            type="button"
                                            className="text-4xl text-[#f02d34] cursor-pointer bg-transparent"
                                            onClick={() => onRemove(item)}
                                        >
                                            <TiDeleteOutline />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                {cartItems.length >= 1 && (
                    <div className='absolute bottom-3 right-1 w-[100%] px-8 py-16'>
                        <div className='flex mb-6 justify-between'>
                            <h3 className='text-2xl'>Subtotal:</h3>
                            <h3 className='text-2xl'>${totalPrice}</h3>
                        </div>
                        <div className='flex justify-center items-center m-auto'>
                            <Link href={'/checkout'}>
                                <button type='button' className='text-2xl font-bold p-2 rounded-2xl text-[#f02d34] cursor-pointer bg-white border-1 border-red-600 hover:bg-red-600 hover:border-white hover:text-white'
                                    onClick={() => {
                                        setShowShipping(true)
                                        setShowCart(false)
                                    }}
                                >
                                    CHECKOUT
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Cart