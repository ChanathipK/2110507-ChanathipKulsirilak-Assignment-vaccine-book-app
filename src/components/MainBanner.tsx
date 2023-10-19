'use client'
import Image from "next/image";
import styles from './mainbanner.module.css';
import { useState } from 'react';
import NavigateButton from "./NavigateButton";
import { useSession } from "next-auth/react";

let headingClassName:string = styles.bannerHeading + " " + styles.letterSpacingBig;

let imageNameArray: string[] = ["vaccine_a.jpg", "vaccine_b.jpg", "vaccine_c.jpg", "vaccine_d.jpg"];

export default function mainBanner() {
    const [imageIndex, setImageIndex] = useState(0);
    const {data: session} = useSession();
    return (
        <div className={styles.banner} onClick={()=>{
            setImageIndex(imageIndex+1);
        }}>
            <h1 className={headingClassName + " select-none"}>Get The<br /><span className={styles.textDarkGreen}>Vaccine</span></h1>
            <div className={styles.transparentWhite}></div>
            <h2 className={styles.bookingsHeading + " select-none"}>Open For Bookings</h2>
            <NavigateButton prompt="View hospitals" path="/hospital" />
            <Image
                src={"/images/" + imageNameArray[imageIndex%4]}
                alt="Vaccine"
                fill={true}
                objectFit="cover"
            />
            {
                session?<h2 className="absolute z-50 right-6 top-4 text-3xl">{session.user?.name}</h2>:null
            }
        </div>
    )
}