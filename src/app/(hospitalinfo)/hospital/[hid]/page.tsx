import Image from "next/image";

export default function Page({ params }: { params: { hid: string }}) {
    type HospitalBasicInfo = {
        name: string,
        imgSrc: string
    }
    const hospitalMap = new Map<string,HospitalBasicInfo>();
    hospitalMap.set("001", {name: "Chulalongkorn Hospital", imgSrc: "/images/chula.jpg"});
    hospitalMap.set("002", {name: "Rajavithi Hospital", imgSrc: "/images/rajavithi.jpg"});
    hospitalMap.set("003", {name: "Thammasat Hospital", imgSrc: "/images/thammasat.jpg"})

    return (
        <div className="pt-16 flex flex-col justify-center items-center">
            <div className="bg-slate-800 mt-10 w-3/4 min-w-[700px] h-[500px] rounded-xl flex justify-between shadow-xl transition duration-200 hover:shadow-2xl">
                <div className="w-2/5 h-full relative rounded-s-xl">
                    <Image 
                    src={hospitalMap.get(params.hid)!.imgSrc}
                    alt={hospitalMap.get(params.hid)!.name}
                    fill={true}
                    objectFit="cover"
                    className="rounded-s-xl"
                    />
                </div>
                <div className="w-3/5 h-full rounded-e-xl px-8 py-12">
                    <h1 className="text-3xl text-center text-slate-50">{hospitalMap.get(params.hid)!.name}</h1>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return [{hid: "001"}, {hid: "002"}, {hid: "003"}];
}
