import Image from 'next/image';

let cardClass: string = ""

let cardClassArray: string[] = ["mt-16", "mb-12", "mx-6", "shadow-[0_0_12px_6px_rgba(0,0,0,0.1)]", "px-5", "py-5", "rounded-lg", "text-justify", "h-[400px]", "w-1/4", "max-w-[300px]", "flex", "flex-col", "items-center", "min-w-[250px]", "flex-wrap"];
for (let i = 0; i < cardClassArray.length; i++) {
    cardClass += " " + cardClassArray[i];
}

let imageDivClass: string = "";
let imageDivClassArray: string[] = ["w-full", "h-4/5", "bg-amber-600", "relative"];
for (let i = 0; i < imageDivClassArray.length; i++) {
    imageDivClass += " " + imageDivClassArray[i];
}

let infoHeadingClass: string = "";
let infoHeadingClassArray: string[] = ["font-semibold", "mt-4"];
for (let i = 0; i < infoHeadingClassArray.length; i++) {
    infoHeadingClass += " " + infoHeadingClassArray[i];
}

export default ({hospitalName, imgSrc}: {hospitalName: string, imgSrc: string}) => {
    return (
        <div className={cardClass}>
            <div className={imageDivClass}>
                <Image 
                    src={imgSrc}
                    alt={hospitalName + "'s image"}
                    fill={true}
                    objectFit='cover'
                    className={"rounded-md"}
                />
            </div>
            <h1 className={infoHeadingClass}>{hospitalName}</h1>
        </div>
    )
}