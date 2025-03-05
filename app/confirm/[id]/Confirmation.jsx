import React from 'react'
import { confirmOrder } from '@/lib/actions'

const Confirmation = async (orderId) => {
    const placeOrder = await confirmOrder(222)
    console.log(placeOrder);

    return (
        <>
            <div className='text-white text-2xl font-bold'>
                {placeOrder.data !== "Not Found" && (
                    <p>ORDER HAS BEEN PLACED</p>
                )}
            </div>
        </>
    )
}

export default Confirmation