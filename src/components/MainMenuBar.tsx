import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export default async function MainMenuBar() {

    const session = await getServerSession(authOptions);

    return (
        <div className="w-full m-0 h-14 fixed top-0 left-0 flex flex-row-reverse z-50 bg-slate-800 text-slate-50 justify-between">
            <div className="flex flex-row-reverse">
                <div className="relative flex justify-center items-center me-2 h-full ms-3">
                    <Link
                    href={"/"}
                    replace={false}
                    scroll={true}
                    prefetch={true}
                    className="rounded-md border-2 border-solid border-slate-50 py-2 px-2"
                    >Vaccing Booking App</Link>
                </div>
                <div className="relative flex justify-center items-center me-3">
                    <Link
                        href={"/booking"}
                        replace={false}
                        scroll={true}
                        prefetch={true}
                    >Booking</Link>
                </div>
                <div className="flex justify-center items-center me-8">
                    <Link
                    href={"/hospital"}
                    replace={false}
                    scroll={true}
                    prefetch={true}
                    >
                        Hospitals
                    </Link>
                </div>
            </div>
            <div className="relative flex justify-center items-center h-full ms-4">
                {
                    session?
                        <Link
                        href={"/api/auth/signout"}
                        replace={false}
                        scroll={true}
                        prefetch={true}
                        >
                            Sign out of {session.user?.name}
                        </Link>
                    : <Link
                        href={"api/auth/signin"}
                        replace={false}
                        scroll={true}
                        prefetch={true}
                        >
                            Sign in
                        </Link>
                }
                <div className="ms-6">
                    <Link
                        href="/mybooking"
                    >
                        My Booking
                    </Link>
                </div>
            </div>
        </div>
    )
}