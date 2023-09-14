import Image from 'next/image';

let cardClass: string = ""

let cardClassArray: string[] = ["px-0", "py-0", "rounded-lg", "text-justify", "h-[440px]", "w-[20%]", "max-w-[300px]", "flex", "flex-col", "items-center", "min-w-[250px]", "flex-wrap"];
for (let i = 0; i < cardClassArray.length; i++) {
    cardClass += " " + cardClassArray[i];
}

let imageDivClass: string = "";
let imageDivClassArray: string[] = ["w-full", "h-[75%]", "bg-amber-600", "relative", "rounded-t-lg"];
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
                    className={"rounded-lg"}
                />
            </div>
            <h1 className={infoHeadingClass}>{hospitalName}</h1>
        </div>
    )
}