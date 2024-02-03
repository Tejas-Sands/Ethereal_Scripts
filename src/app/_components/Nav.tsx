"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
// import LoginPage from "./Login/page";

export default function Nav(){
    const {data:session, status} = useSession()
    return(
        <div className="  flex justify-between fixed bg-gray-950 bg-opacity-80 shadow-md backdrop-blur-md w-full h-16 -mt-5 -ml-5">
        <div className="flex space-x-3 mt-5 ml-5">
        <div className="basis-7	">Home</div>
        <div className="order-1">About Us</div>
        </div>
        <div className="order-last p-5">
            {session? (<div className="flex space-x-5 w-full mr-5">
                <button className="btn btn-sm btn-info" onClick={() => void signOut()}>LogOut</button>
                <div>{session.user.name}</div> </div>) 
                : (<Link href="/Login" className="-mt-5 rounded btn btn-sm btn-outline btn-info">Login</Link>)}</div>
        </div>
    )
}

{/* <button className="btn btn-info">Info</button> */}
