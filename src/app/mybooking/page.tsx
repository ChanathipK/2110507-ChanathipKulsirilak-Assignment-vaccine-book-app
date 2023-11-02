"use client"

import { AppDispatch, useAppSelector } from "@/redux/store";
import { BookingItem } from "../../../interfaces";
import { useDispatch } from "react-redux";
import { cancelBooking } from "@/redux/features/bookSlice";

export default function MyBooking() {

    const bookingData = useAppSelector(state => state.bookingSlice.bookingState);

    const dispatch = useDispatch<AppDispatch>();

    if (bookingData.length === 0) {
        return (
            <div className="mt-20 w-full">
                <h1 className="text-2xl text-center">No Vaccine Booking</h1>
            </div>
        );
    } else {
        return (
            <div className="h-[100vh] flex justify-center items-center">
                <div className="w-[50%] h-[400px] bg-slate-300 px-8 py-8 rounded-lg flex flex-col items-center justify-evenly">
                    <div>
                        <h1 className="text-2xl text-center mb-4">{bookingData[0].firstName} {bookingData[0].lastName}</h1>
                        <p>ID: {bookingData[0].id}</p>
                        <p>Hospital: {bookingData[0].hospitalName}</p>
                        <p>Date: {bookingData[0].date}</p>
                    </div>
                    <div>
                        <button className="bg-slate-800 text-white px-2 py-1 rounded-md" onClick={(e) => {
                            dispatch(cancelBooking({
                                firstName:"",
                                lastName:"",
                                id: "",
                                hospitalName: "",
                                date: ""
                            }))
                        }} >cancel vaccine booking</button>
                    </div>
                </div>
            </div>
        );
    }

}