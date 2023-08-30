import Image from "next/image";
import styles from './mainbanner.module.css';

let headingClassName:string = styles.bannerHeading + " " + styles.letterSpacingBig;

export default () => {
    return (
        <div className={styles.banner}>
            <h1 className={headingClassName}>Get The<br /><span className={styles.textDarkGreen}>Vaccine</span></h1>
            <div className={styles.transparentWhite}></div>
            <h2 className={styles.bookingsHeading}>Open For Bookings</h2>
            <Image
                src="/images/diana-polekhina-ZBstHWt9vLc-unsplash.jpg"
                alt="Vaccine"
                fill={true}
                objectFit="cover"
            />
        </div>
    )
}