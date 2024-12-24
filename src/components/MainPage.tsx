import Link from "next/link"

export const MainPage = () =>{
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center">
                <div className="text-4xl font-bold pt-6">Welcome to our App</div>
            </div>
            <Link className="text-2xl font-semibold border-slate-200 rounded-lg p-4 border-2" href={"/signup"}>Sign Up on our App if New User</Link>
            <Link className="text-2xl font-semibold border-slate-200 rounded-lg p-4 border-2" href={"/signin"}>Sign In on our App if Old User</Link>
        </div>
        
    )
}