import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

export default async function Booking()  {

    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) {
        return (
            <div className="mt-28">
                <h1 className="text-2xl text-center">You must sign in in order to book for the vaccine.</h1>
            </div>
        );
    }

    const profile = await getUserProfile(session.user.token);
    let createdAt = new Date(profile.data.createdAt);

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <BookingForm />
        </div>
    )
}

{/* <div className="bg-slate-800 shadow-md rounded-lg w-3/5 h-[60vh] flex flex-col items-center text-slate-50">
    <h1 className="text-3xl my-8">Welcome, {session.user.name}!</h1>
    <div>
        <h2 className="text-lg text-center">Profile Information</h2>
        <p>Email: {session.user.email}</p>
        <p>Tel.: {profile.data.tel}</p>
        <p>Member Since: {(createdAt.getFullYear()).toString()}</p>
    </div>
</div> */}