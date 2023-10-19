import Card from "./Card";
import CardFrame from "./CardFrame";

type Hospitals = {
    success: boolean,
    count: number,
    pagination: {},
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
    }[]
}

export default async function HospitalCatalog({fetchedData}: {fetchedData: Promise<Hospitals>}) {

    const dataReady = await fetchedData;

    let cardList = dataReady.data.map((hospital) => {
        return (
            <CardFrame>
                <Card hospitalName={hospital.name} imgSrc={hospital.picture} id={hospital.id} />
            </CardFrame>
        )
    })

    return (
        <div className="w-full flex justify-center mt-10">
            {cardList}
        </div>
    )
}