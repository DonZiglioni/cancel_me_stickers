import React from 'react'
import Confirmation from './Confirmation';

const page = async ({ params }) => {
    const param = await params
    const orderId = await param.id
    //  console.log("FROM PAGE: ", orderId);

    return (
        <div className='min-w-screen min-h-screen flex flex-col justify-center items-center text-white text-5xl'>
            <p> Thank you for your order!</p>
            <div>Order ID: {orderId}</div>
            <Confirmation orderId={orderId} />
        </div>
    )
}

export default page