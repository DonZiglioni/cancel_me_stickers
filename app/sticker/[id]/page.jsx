import React from 'react'
import { fetchProduct } from '@/lib/actions'
import ProductPage from '@/app/components/ProductPage'

const page = async (params) => {
    const param = await params.params
    const productId = await param.id
    const response = await fetchProduct(productId)
    const item = await response.data

    return (
        <ProductPage item={item} />
    )
}

export default page