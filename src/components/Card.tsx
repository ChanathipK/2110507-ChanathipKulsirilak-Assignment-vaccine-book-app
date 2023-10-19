'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Rating } from '@mui/material';
import React from 'react';

export default ({hospitalName, imgSrc, onRating, id}: {hospitalName: string, imgSrc: string, onRating?: Function, id: string}) => {

    const [rating, setRating] = React.useState<number | null>(null);
    
    return (
        <div className="px-0 py-0 rounded-lg text-justify h-[440px] w-[20%] max-w-[350px] flex flex-col items-center min-w-[280px] flex-wrap">
            <div className="w-full h-[75%] relative rounded-t-lg">
                <Link
                href={"/hospital/" + id}
                prefetch={true}
                >
                    <Image 
                    src={imgSrc}
                    alt={hospitalName + "'s image"}
                    fill={true}
                    objectFit='cover'
                    className="rounded-t-lg"
                    />
                </Link>
                
            </div>
            <h1 className="font-semibold mt-4">{hospitalName}</h1>
            {
                onRating?<Rating
                    name={hospitalName + "'s rating"}
                    value={rating}
                    onChange={(e, newValue) => {
                        setRating(newValue);
                        onRating(hospitalName, newValue);
                    }}
                />:''
            }
        </div>
    )
}