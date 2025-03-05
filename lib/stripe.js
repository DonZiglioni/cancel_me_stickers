"use server"

import Stripe from 'stripe';

const stripe = Stripe(process.env.ST_KEY)

export const createSession = async (amount, orderId) => {
    let price = amount.toString().replace('.', '')
    //console.log("From Stripe", parseInt(price));

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: "Cancel Me Stickers Order"
                    },
                    unit_amount: parseInt(price),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/confirm/${orderId}`,
        cancel_url: `${`http://localhost:3000/canceled`}?canceled=true`,
    });

    const data = JSON.parse(JSON.stringify(session))

    return { data: data }

}