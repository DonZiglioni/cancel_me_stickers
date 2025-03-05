import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
    return (
        <div className='min-h-100 min-w-full bg-black flex items-center justify-center p-8  '>
            <img src={'/cms_logo1.png'} className='h-100 w-100 object-contain' />
        </div>
    )
}

export default HeroBanner