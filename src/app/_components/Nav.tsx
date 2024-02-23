"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Nav(){
    const {data: sessionData, status} = useSession()
    return(
        <div className="  flex justify-between fixed bg-gray-950 bg-opacity-70 shadow-md backdrop-blur-md w-full h-16 -mt-5 -ml-5">
        <div className="flex space-x-3 mt-5 ml-5">
        <div className="basis-7	">Home</div>
        <div className="order-1">About Us</div>
        </div>
        <div className="order-last p-5">
            {sessionData? (<div className="flex flex-row space-x-4 w-full mr-5">
                <button className="btn btn-sm btn-info" onClick={() => void signOut()}>LogOut</button>
                <div><img src={sessionData.user.image} className="w-8 h-8 rounded-full"></img></div> <div> {sessionData.user.name}</div> </div>) 
                : (<div><Link href="/User/Login" className="-mt-5 rounded btn btn-sm btn-outline btn-info">Login</Link> <Link href="/User/SignUp" className="ml-2 -mt-5 rounded btn btn-sm btn-info">Register User</Link></div>)}</div>
        </div>
    )
}

