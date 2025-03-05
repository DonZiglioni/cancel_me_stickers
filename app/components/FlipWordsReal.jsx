import React from 'react'
import { FlipWords } from './ui/flip-words'
import Link from 'next/link';
function FlipWordsReal() {
    const words = ["STICKERS!", "FAGGOT!", "RETARD!", "TRANNY!", "KAREN!", "CHINK!", "BITCH!", "NOW!"];

    return (
        <div className="flex items-center">
            <Link href={'/'}>
                <div className="text-3xl font-bold text-neutral-200">
                    CANCEL ME
                    <FlipWords words={words} className='text-red-600 font-bold' />
                </div>
            </Link>
        </div>
    )
}

export default FlipWordsReal