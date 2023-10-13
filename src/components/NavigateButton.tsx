'use client'
import { useRouter } from "next/navigation";

export default function NavigateButton({prompt, path} : {prompt: string, path: string}) {
    const router = useRouter();
    router.prefetch(path);
    return (
        <div className="flex flex-row-reverse px-14 mt-4">
            <button
            className="bg-slate-800 text-slate-50 px-4 py-2 rounded-md shadow transition duration-200 hover:shadow-md"
            onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                router.push(path);
            }}
            >
                {prompt}
            </button>
        </div>
    );
}