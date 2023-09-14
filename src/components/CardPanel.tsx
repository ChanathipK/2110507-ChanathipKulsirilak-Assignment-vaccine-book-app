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

    console.log(ratingMap);
    return (
        <div>
            <div className="w-full flex justify-center mt-10">
                <CardFrame>
                <Card hospitalName='Chulalongkorn Hospital' imgSrc='/images/chula.jpg' onRating={(hospitalName: string, rating: number) => dispatchRating({type: "add", hospitalName: hospitalName, rating: rating})} />
                </CardFrame>
                <CardFrame>
                <Card hospitalName='Rajavithi Hospital' imgSrc='/images/rajavithi.jpg' onRating={(hospitalName: string, rating: number) => dispatchRating({type: "add", hospitalName: hospitalName, rating: rating})} />
                </CardFrame>
                <CardFrame>
                <Card hospitalName='Thammasat Hospital' imgSrc='/images/thammasat.jpg' onRating={(hospitalName: string, rating: number) => dispatchRating({type: "add", hospitalName: hospitalName, rating: rating})} />
                </CardFrame>
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