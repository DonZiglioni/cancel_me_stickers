"use client"
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import FlipWordsReal from './FlipWordsReal';
import { useStateContext } from '@/context/StateContext';
import Cart from './Cart';

const NavBar = () => {
    const { showCart, setShowCart, totalQuantities, showShipping } = useStateContext()
    return (
        <div className='min-h-14 min-w-full flex justify-between items-center px-4 border-b-1 border-b-white shadow-md shadow-[rgba(255,255,255,.25)]'>
            <FlipWordsReal />
            <button type='button' onClick={() => {
                if (showShipping) {
                    return;
                } else {
                    setShowCart(true)
                }
            }}>
                <AiOutlineShoppingCart size={25} color='rgba(255,255,255,.9)' />
                <span className='absolute right-2 top-2 flex items-center justify-center font-md text-[#eee] bg-[#b60006ba] w-[20px] h-[20px] rounded-full text-center font-bold '>{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
        </div>
    )
}

export default NavBar