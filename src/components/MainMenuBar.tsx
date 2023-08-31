import Image from "next/image";
import Link from "next/link";

let menuBarClass: string = "";
let menuBarClassArray: string[] = ["w-full", "m-0", "h-14", "fixed", "top-0", "left-0", "right-0", "flex", "flex-row-reverse", "z-50", "bg-slate-950", "text-slate-50"];
for (let i = 0; i < menuBarClassArray.length; i++) {
    menuBarClass += " " + menuBarClassArray[i];
}

let logoClass: string = "";
let logoClassArray: string[] = ["relative", "flex", "justify-center", "items-center", "me-2", "h-full", "ms-3"];
for (let i = 0; i < logoClassArray.length; i++) {
    logoClass += " " + logoClassArray[i];
}

let menuItemBookingClass: string = "";
let menuItemBookingClassArray: string[] = ["relative", "flex", "justify-center", "items-center", "me-3", ""];
for (let i = 0; i < menuItemBookingClassArray.length; i++) {
    menuItemBookingClass += " " + menuItemBookingClassArray[i];
}

let linkLogoClass: string = "";
let linkLogoClassArray: string[] = ["rounded-md", "border-2", "border-solid", "border-slate-50", "py-2", "px-2"];
for (let i = 0; i < linkLogoClassArray.length; i++) {
    linkLogoClass += " " + linkLogoClassArray[i];
}

let linkBookingClass: string = "";
let linkBookingClassArray: string[] = [];
for (let i = 0; i < linkBookingClassArray.length; i++) {
    linkBookingClass += " " + linkBookingClass[i];
}



export default () => {
    return (
        <div className={menuBarClass}>
            <div className={logoClass}>
                <Link
                 href={"/"}
                 replace={false}
                 scroll={true}
                 prefetch={true}
                 className={linkLogoClass}
                >Vaccing Booking App</Link>
            </div>
            <div className={menuItemBookingClass}>
                <Link
                    href={"/booking"}
                    replace={false}
                    scroll={true}
                    prefetch={true}
                >Booking</Link>
            </div>
        </div>
    )
}