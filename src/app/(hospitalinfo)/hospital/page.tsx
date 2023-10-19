import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default () => {

    let hospitalData = getHospitals();

    return (
        <div className="pt-14">
            <h1 className="text-3xl mt-6 text-center">Hospitals</h1>
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                <HospitalCatalog fetchedData={hospitalData} />
            </Suspense>
        </div>
    )
}