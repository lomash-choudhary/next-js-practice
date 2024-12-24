"use client";
import axios from "axios";
import Link from "next/link"
import { useRef, useState } from "react";
// import { useRouter } from "next/navigation"

export const SignUpAndSingIn = () => {
    // const router = useRouter()
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);



    const signupFn = async () => {
        try{
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value
            const data = await axios.post("http://localhost:3000/api/v1/signup",{
            username,
            password
            })
            if(data.status === 200){
                alert("user signed up on the app successfully")
            }
            else{
                throw new Error("Error occured while signing up on the app")
            }
        }catch(err){
            alert(`Error occured ${err}`)
        }
    }

    return(
    <div className="flex items-center justify-center h-screen">
        <div className="border-slate-200 border-2 rounded-lg px-6 py-10 flex flex-col items-center gap-4">
            <div className=" flex flex-col gap-8">
                <LabelledInput label={"Username"} placeholder={"e.g.lomash01"} reference={usernameRef}/>
                <LabelledInput reference={passwordRef} label={"Password"} placeholder={"e.g.Lomash@01"} type={"password"}/>
            </div>
            <button onClick={signupFn}>
                Submit
            </button>
        </div>
        
        {/* <button onClick={() => {
            router.push("/success")
        }}>
                submit
        </button> */}
        
    </div>
    )
}


interface LabelledInputInterface{
    label:string,
    placeholder:string,
    type?: string,
    reference: React.RefObject<HTMLInputElement | null>
}

const LabelledInput = ({label, placeholder, type, reference}:LabelledInputInterface) => {
    return (
    <div className="flex flex-col">
        <label>{label}</label>
        <input ref={reference}placeholder={placeholder} type={type ? type : "text"}className="px-4 py-2 rounded-lg text-black"></input>
    </div>
    )
}