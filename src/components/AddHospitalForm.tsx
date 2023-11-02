"use client"

import { useRef, useState } from "react";
import { addHospital } from "@/libs/addHospital";

export default function AddHospitalForm() {

    const [hospitalName, setHospitalName] = useState<string|undefined>(undefined);
    const [address, setAddress] = useState<string|undefined>(undefined);
    const [district, setDistrict] = useState<string|undefined>(undefined);
    const [province, setProvince] = useState<string|undefined>(undefined);
    const [postalCode, setPostalCode] = useState<string|undefined>(undefined);
    const [tel, setTel] = useState<string|undefined>(undefined);
    const [imageUrl, setImageUrl] = useState<string|undefined>(undefined);

    const formRef = useRef<HTMLFormElement>(null);


    return (
        <div className="w-full h-[110vh] flex justify-center items-center">
            <div className="w-1/2 h-[90vh] rounded-lg bg-slate-500">
                <h1 className="text-4xl text-center mt-12 text-white">Add Hospital</h1>
                <form className="w-full flex justify-center" ref={formRef} action={() => {
                    if (
                        hospitalName != undefined &&
                        address != undefined &&
                        district != undefined &&
                        province != undefined &&
                        postalCode != undefined &&
                        tel != undefined &&
                        imageUrl != undefined
                    ) {
                        alert("Before submit success or fail")
                        addHospital({
                            hospitalName: hospitalName,
                            address: address,
                            district: district,
                            province: province,
                            postalCode: postalCode,
                            tel: tel,
                            imageUrl: imageUrl,
                        });
                        alert("Success")
                    }
                }}>
                    <div className="flex flex-col justify-center w-[400px] mt-4">
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">Hospital Name:</label>
                            </div>
                            <input value={hospitalName} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="Example Hospital" onChange={(e) => {
                                setHospitalName(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">Address:</label>
                            </div>
                            <input value={address} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="100/2 Example Road" onChange={(e) => {
                                setAddress(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">District:</label>
                            </div>
                            <input value={district} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="Samyan" onChange={(e) => {
                                setDistrict(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">Province:</label>
                            </div>
                            <input value={province} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="Bangkok" onChange={(e) => {
                                setProvince(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">Postal Code:</label>
                            </div>
                            <input value={postalCode} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="10330" onChange={(e) => {
                                setPostalCode(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">Tel:</label>
                            </div>
                            <input value={tel} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="0812345678" onChange={(e) => {
                                setTel(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-evenly my-4 items-center">
                            <div className="w-[160px]">
                                <label className="text-slate-50">Image URL:</label>
                            </div>
                            <input value={imageUrl} type="" className="w-[240px] rounded-sm h-8 px-2" placeholder="https://www.exampleurlpath.com/image.png" onChange={(e) => {
                                setImageUrl(e.target.value);
                            }} />
                        </div>
                        <input className="bg-slate-100 px-2 py-4 rounded-md mt-4 hover:cursor-grab" type="submit" value="Submit" onClick={(e) => {
                            
                        }} />
                    </div>
                </form>
            </div>
        </div>
    );
}