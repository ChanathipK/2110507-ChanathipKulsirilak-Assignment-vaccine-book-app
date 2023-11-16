import Card from "./Card";
import CardFrame from "./CardFrame";
import { Hospitals } from "../../interfaces";

export default async function HospitalCatalog({fetchedData}: {fetchedData: Promise<Hospitals> | Hospitals}) {

    const dataReady = await fetchedData;

    let cardList = dataReady.data.map((hospital) => {
        return (
            <CardFrame key={hospital.name}>
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