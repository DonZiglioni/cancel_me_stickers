import React from 'react'
import { confirmOrder } from '@/lib/actions'

const Confirmation = async (orderId) => {
    // console.log("FROM COMPONENT: ", orderId);

    const placeOrder = await confirmOrder(orderId)

    // console.log("RESPONSE: ", placeOrder);
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