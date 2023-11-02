import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { addHospital } from "@/libs/addHospital";

export default async function HospitalPage() {

    let isAdmin = false;
    const session = await getServerSession(authOptions);
    if (session !== null) {
        const profile = await getUserProfile(session.user.token);
        if (profile.data.role == "admin") {
            isAdmin = true;
        }
    }

    let hospitalData = getHospitals();

    return (
        <div className="pt-14">
            <h1 className="text-3xl mt-6 text-center">Hospitals</h1>
            <Suspense fallback={<p>Loading...<LinearProgress /></p>}>
                <HospitalCatalog fetchedData={hospitalData} />
            </Suspense>
            {
                
                isAdmin?
                <AddHospitalForm />: null
            }
        </div>
    )
}