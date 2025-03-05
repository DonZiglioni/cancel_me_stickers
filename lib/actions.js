"use server";

export const fetchProducts = async (page) => {
    const printfulKey = process.env.PF_KEY
    const response = await fetch(`https://api.printful.com/store/products?offset=${page}&limit=6?`, {
        headers: {
            'Authorization': `Bearer ${printfulKey}`
        }
    });
    let data = await response.json()
    return { data: data.result }
}

export const fetchProduct = async (id) => {
    const printfulKey = process.env.PF_KEY
    const productInfo = await fetch(`https://api.printful.com/store/products/${id}`, {
        headers: {
            'Authorization': `Bearer ${printfulKey}`
        }
    });
    const info = await productInfo.json()
    return { data: info.result }
}

export const calculateShipping = async (items, recipient) => {

    let req = JSON.stringify({
        recipient: recipient,
        items: items,
    })
    const printfulKey = process.env.PF_KEY
    const productInfo = await fetch(`https://api.printful.com/shipping/rates`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${printfulKey}`,
        },
        body: req,
    });
    const response = await productInfo.json()
    return { data: response.result }
}

export const createOrder = async (recipient, items) => {

    let req = JSON.stringify({
        recipient: recipient,
        items: items,
    })
    const printfulKey = process.env.PF_KEY
    const productInfo = await fetch(`https://api.printful.com/orders`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${printfulKey}`,
        },
        body: req,
    });
    const response = await productInfo.json()
    return { data: response.result }
}

export const confirmOrder = async (orderId) => {
    const printfulKey = process.env.PF_KEY
    const productInfo = await fetch(`https://api.printful.com/orders/${orderId}/confirm`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${printfulKey}`,
        },
    });
    const response = await productInfo.json()
    return { data: response.result }
}


