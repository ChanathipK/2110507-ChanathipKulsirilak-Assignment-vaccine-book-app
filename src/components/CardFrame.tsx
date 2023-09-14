"use client"

let cardFrameClass: string = "";
let cardFrameClassArray: string[] = ["mx-8", "my-8", "rounded-lg", "shadow-lg", "duration-200", "bg-white"];

for (let i = 0; i < cardFrameClassArray.length; i++) {
    cardFrameClass += cardFrameClassArray[i] + " ";
}

export default ({children}: {children: React.ReactNode}) => {
    function handleHover(e: React.SyntheticEvent) {
        if (e.type === 'mouseover') {
            e.currentTarget.classList.remove("shadow-lg");
            e.currentTarget.classList.remove("bg-white");
            e.currentTarget.classList.add("shadow-2xl");
            e.currentTarget.classList.add("bg-neutral-200");
        } else {
            e.currentTarget.classList.remove("shadow-2xl");
            e.currentTarget.classList.remove("bg-neutral-200");
            e.currentTarget.classList.add("shadow-lg");
            e.currentTarget.classList.add("bg-white");
        }
    }
    return (
        <div className={cardFrameClass} onMouseOver={(e)=>handleHover(e)} onMouseLeave={(e)=>{handleHover(e)}}>
            {children}
        </div>
    )
}