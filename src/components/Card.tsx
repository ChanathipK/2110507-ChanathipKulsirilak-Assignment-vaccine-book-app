import Image from 'next/image';
import { Rating } from '@mui/material';
import React from 'react';

export default ({hospitalName, imgSrc, onRating}: {hospitalName: string, imgSrc: string, onRating: Function}) => {
    const [rating, setRating] = React.useState<number | null>(null);
    return (
        <div className="px-0 py-0 rounded-lg text-justify h-[440px] w-[20%] max-w-[300px] flex flex-col items-center min-w-[250px] flex-wrap">
            <div className="w-full h-[75%] relative rounded-t-lg">
                <Image 
                    src={imgSrc}
                    alt={hospitalName + "'s image"}
                    fill={true}
                    objectFit='cover'
                    className="rounded-lg"
                />
            </div>
            <h1 className="font-semibold mt-4">{hospitalName}</h1>
            <Rating
                name={hospitalName + "'s rating"}
                value={rating}
                onChange={(e, newValue) => {
                    setRating(newValue);
                    onRating(hospitalName, newValue);
                }}
            />
        </div>
    )
}