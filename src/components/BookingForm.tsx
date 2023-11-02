"use client"

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingForm() {

    const [firstName, setFirstName] = useState<string|undefined>(undefined);
    const [lastName, setLastName] = useState<string|undefined>(undefined);
    const [id, setId] = useState<string|undefined>(undefined);
    const [hospitalName, setHospitalName] = useState<string|undefined>("Chulalongkorn Hospital");
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null);

    // to control form programmatically
    const formRef = useRef<HTMLFormElement>(null);

    const dispatch = useDispatch<AppDispatch>();
    
    const makeBooking = () => {
        if (
            firstName != undefined &&
            lastName != undefined &&
            id != undefined &&
            hospitalName != undefined &&
            bookingDate != null
        ) {
            const myBooking: BookingItem = {
                firstName: firstName,
                lastName: lastName,
                id: id,
                hospitalName: hospitalName,
                date: dayjs(bookingDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(myBooking));
        } else {
            alert("Submit Error!");
        }
    }

    return (
        <div className="w-full flex justify-center pt-12 px-2">
            <form className="w-full sm:w-7/12 lg:w-5/12 2xl:w-4/12 bg-lime-200 py-4 px-4 rounded-lg shadow-md mb-4" ref={formRef}>
                <div className="flex justify-center"><h1 className="inline-block text-2xl rounded-md bg-lime-600 text-white px-4 py-2 select-none hover:shadow-md duration-150">Booking Form</h1></div>
                <div className="mt-6 flex flex-row">
                    <div className="mx-2">
                        <label className="block">First Name</label><input type="text" value={firstName} className="focus:ring-2 focus:outline-0 focus:ring-emerald-300 duration-100 w-full inline-block mt-1 leading-6 pl-2 rounded-sm" placeholder="Angela" onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                    </div>
                    <div className="mx-2">
                        <label className="block">Lase Name</label><input type="text" value={lastName} className="focus:ring-2 focus:outline-0 focus:ring-emerald-300 duration-100 w-full inline-block mt-1 leading-6 pl-2 rounded-sm" placeholder="Hensen" onChange={(e) => {
                            setLastName(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="mt-4 mx-2">
                    <label className="block">National ID</label><input type="text" value={id} className="focus:ring-2 focus:outline-0 focus:ring-emerald-300 duration-100 w-full inline-block mt-1 leading-6 pl-2 rounded-sm" placeholder="1198765432123" onChange={(e) => {
                        setId(e.target.value);
                    }} />
                </div>
                <div className="mt-4 mx-2">
                    <label className="block">Hospital</label>
                    <select className="block w-3/5 rounded-sm border-0 text-gray-900 shadow-sm mt-1 focus:ring-2 focus:ring-emerald-300 focus:outline-0 duration-100" value={hospitalName} onChange={(e) => {
                        setHospitalName(e.target.value);
                    }} >
                        <option value="Chulalongkorn Hospital">Chulalongkorn Hospital</option>
                        <option value="Rajavithi Hospital">Rajavithi Hospital</option>
                        <option value="Thammasat Hospital">Thammasat Hospital</option>
                    </select>
                </div>
                <div className="mt-4 mx-2">
                    <label className="block">Booking Date</label>
                    <div className="mt-2 bg-white inline-block rounded-md">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={bookingDate} onChange={(value) => {
                                setBookingDate(value);
                            }} />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="mt-8 mx-2 flex justify-center">
                    <input type="submit" value="Submit" className="bg-slate-400 text-white px-4 rounded-md duration-150 select-none hover:cursor-pointer" onMouseOver={(e)=>{
                        e.currentTarget.classList.remove("bg-slate-400");
                        e.currentTarget.classList.add("bg-slate-950");
                    }} onMouseLeave={(e)=>{
                        e.currentTarget.classList.remove("bg-slate-950");
                        e.currentTarget.classList.add("bg-slate-400");
                    }} 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            if (
                                firstName != undefined &&
                                lastName != undefined &&
                                id != undefined &&
                                hospitalName != undefined &&
                                bookingDate != null
                            ) {
                                if (confirm("Are you submitting the form?")) {
                                    makeBooking();
                                    setFirstName("");
                                    setLastName("");
                                    setId("");
                                    setHospitalName("");
                                    setBookingDate(null);
                                    // formRef.current!.submit();
                                }
                            } else {
                                alert("You need to fill out the needed fill.");
                            }
                        }
                    }
                    />
                </div>
            </form>
        </div>
    )
}
