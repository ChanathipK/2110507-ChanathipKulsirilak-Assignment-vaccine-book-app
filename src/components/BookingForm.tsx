'use client'

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default () => {
    return (
        <div className="w-full flex justify-center mt-14 pt-12 px-2">
            <form className="w-full sm:w-7/12 lg:w-5/12 2xl:w-4/12 bg-lime-200 py-4 px-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-center"><h1 className="inline-block text-2xl rounded-md bg-lime-600 text-white px-4 py-2 select-none hover:shadow-md duration-150">Booking Form</h1></div>
                <div className="mt-6 flex flex-row">
                    <div className="mx-2">
                        <label className="block">First Name</label><input type="text" className="focus:ring-2 focus:outline-0 focus:ring-emerald-300 duration-100 w-full inline-block mt-1 leading-6 pl-2 rounded-sm" placeholder="Angela" />
                    </div>
                    <div className="mx-2">
                        <label className="block">Lase Name</label><input type="text" className="focus:ring-2 focus:outline-0 focus:ring-emerald-300 duration-100 w-full inline-block mt-1 leading-6 pl-2 rounded-sm" placeholder="Hensen" />
                    </div>
                </div>
                <div className="mt-4 mx-2">
                    <label className="block">National ID</label><input type="text" className="focus:ring-2 focus:outline-0 focus:ring-emerald-300 duration-100 w-full inline-block mt-1 leading-6 pl-2 rounded-sm" placeholder="1198765432123" />
                </div>
                <div className="mt-4 mx-2">
                    <label className="block">Hospital</label>
                    <select className="block w-3/5 rounded-sm border-0 text-gray-900 shadow-sm mt-1 focus:ring-2 focus:ring-emerald-300 focus:outline-0 duration-100">
                        <option selected={true}>Chulalongkorn Hospital</option>
                        <option>Rajavithi Hospital</option>
                        <option>Thammasat Hospital</option>
                    </select>
                </div>
                <div className="mt-4 mx-2">
                    <label className="block">Booking Date</label>
                    <div className="mt-2 bg-white inline-block rounded-md">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
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
                    }} />
                </div>
            </form>
        </div>
    )
}
