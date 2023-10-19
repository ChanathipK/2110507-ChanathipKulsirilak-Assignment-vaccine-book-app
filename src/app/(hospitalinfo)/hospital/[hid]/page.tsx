import Image from "next/image";
import getHospital from "@/libs/getHospital";

type HospitalDetail = {
    success: boolean,
    data: {
        _id: string,
        name: string,
        address: string,
        district: string,
        province: string,
        postalcode: string,
        tel: string,
        picture: string,
        __v: number,
        id: string
    }   
}

export default async function Page({ params }: { params: { hid: string }}) {
    
    let hospitalDetail: HospitalDetail = await getHospital(params.hid);

    return (
        <div className="pt-16 flex flex-col justify-center items-center">
            <div className="bg-slate-800 mt-10 w-3/4 min-w-[700px] h-[500px] rounded-xl flex justify-between shadow-xl transition duration-200 hover:shadow-2xl">
                <div className="w-2/5 h-full relative rounded-s-xl">
                    <Image 
                    src={hospitalDetail!.data!.picture}
                    alt={hospitalDetail!.data!.name}
                    fill={true}
                    objectFit="cover"
                    className="rounded-s-xl"
                    />
                </div>
                <div className="w-3/5 h-full rounded-e-xl px-8 py-12 text-slate-50">
                    <h1 className="text-3xl text-center">{hospitalDetail!.data!.name}</h1>
                    <div className="mx-4 my-8">
                        <h2 className="text-xl">Details</h2>
                        <p>{hospitalDetail!.data!.address}</p>
                        <p>{hospitalDetail!.data!.province}</p>
                        <p>{hospitalDetail!.data!.postalcode}</p>
                        <p>{hospitalDetail!.data!.tel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
