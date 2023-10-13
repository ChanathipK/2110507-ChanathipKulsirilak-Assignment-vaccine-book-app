'use client'

import Card from "./Card";
import CardFrame from "./CardFrame";
import { useReducer } from 'react';

export default () => {

    const ratingReducer = (ratingMap: Map<string, number>, action: {type: string, hospitalName: string, rating: number}) => {
        if (action.type === "add" && action.rating != null) {
            const newState = new Map(ratingMap);
            newState.set(action.hospitalName, action.rating);
            return newState;
        } else if (action.type === "remove" || action.rating == null) {
            const newState = new Map(ratingMap);
            newState.delete(action.hospitalName);
            return newState;
        }
        return new Map<string, number>();
    }

    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, number>());

    type Hospital = {
        id: string,
        name: string,
        imgSrc: string
    }

    let hospitalArray: Hospital[] = [
        {id: "001", name: "Chulalongkorn Hospital", imgSrc: "/images/chula.jpg"},
        {id: "002", name: "Rajavithi Hospital", imgSrc: "/images/rajavithi.jpg"},
        {id: "003", name: "Thammasat Hospital", imgSrc: "/images/thammasat.jpg"}
    ];

    let hospitalCard = hospitalArray.map((hospital) => {
        return (
            <CardFrame>
                <Card
                hospitalName={hospital.name} 
                imgSrc={hospital.imgSrc}
                onRating={(hospitalName: string, rating: number) => dispatchRating({type: "add", hospitalName: hospitalName, rating: rating})}
                id={hospital.id}
                />
            </CardFrame>
        )
    })
    
    return (
        <div>
            <div className="w-full flex justify-center mt-10">
                {hospitalCard}
            </div>
            <div className="ml-12 mt-12 mb-8">
                <h2 className="text-xl">Hospital Rating</h2>
                <div>
                    {Array.from(ratingMap).map(([hospitalName, rating]) => {
                        return (
                            <div key={hospitalName} onClick={()=> {
                                dispatchRating({type: "remove", hospitalName: hospitalName, rating: rating})
                            }}>{hospitalName}: {rating}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}