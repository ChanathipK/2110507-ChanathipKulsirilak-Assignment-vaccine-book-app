'use client'

export default ({children}: {children: React.ReactNode}) => {
    function handleHover(e: React.SyntheticEvent) {
        if (e.type === 'mouseover') {
            e.currentTarget.classList.remove("shadow-md");
            e.currentTarget.classList.remove("bg-white");
            e.currentTarget.classList.add("shadow-lg");
            e.currentTarget.classList.add("bg-neutral-200");
        } else {
            e.currentTarget.classList.remove("shadow-md");
            e.currentTarget.classList.remove("bg-neutral-200");
            e.currentTarget.classList.add("shadow-lg");
            e.currentTarget.classList.add("bg-white");
        }
    }
    return (
        <div className="mx-8 my-8 rounded-lg duration-200 bg-white shadow-md" onMouseOver={(e)=>handleHover(e)} onMouseLeave={(e)=>{handleHover(e)}}>
            {children}
        </div>
    )
}