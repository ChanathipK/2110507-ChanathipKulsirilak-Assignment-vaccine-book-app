"use server"
import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function addHospital ({
    hospitalName,
    address,
    district,
    province,
    postalCode,
    tel,
    imageUrl
}: {
    hospitalName: string,
    address: string,
    district: string,
    province: string,
    postalCode: string,
    tel: string,
    imageUrl: string,
}) {
    try {
        await dbConnect();
        const hospital = await Hospital.create({
            "name": hospitalName,
            "address": address,
            "district": district,
            "province": province,
            "postalcode": postalCode,
            "tel": tel,
            "picture": imageUrl,
        });
    } catch (error) {
        console.log(error);
    }
    revalidateTag("hospital");
    redirect("/hospital");
}