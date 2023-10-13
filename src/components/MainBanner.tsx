'use client'
import Image from "next/image";
import styles from './mainbanner.module.css';
import { useState } from 'react';
import NavigateButton from "./NavigateButton";

let headingClassName:string = styles.bannerHeading + " " + styles.letterSpacingBig;

let imageNameArray: string[] = ["vaccine_a.jpg", "vaccine_b.jpg", "vaccine_c.jpg", "vaccine_d.jpg"];

export default () => {
    const [imageIndex, setImageIndex] = useState(0);
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
        </div>
    )
}