"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "@mui/material"

export default function Nav(){
    const {data: sessionData, status} = useSession()
    return(
        <div className="  flex justify-between fixed bg-slate-900 bg-opacity-70 shadow-md backdrop-blur-md w-[96rem] h-16 -mt-5 -ml-5">
        <div className="flex space-x-4 mt-5 ml-5">
        <div className="basis-7	">Home</div>
        <div className="order-1">About Us</div>
        </div>
        <div className="order-last p-5 mt-3">
            {sessionData? (<div className="flex flex-row space-x-4 w-full mr-5">
                <Button variant="contained" onClick={() => void signOut()}>LogOut</Button>
                <div><img src={sessionData.user.image} className="w-8 h-8 rounded-full"></img></div> <div> {sessionData.user.name}</div> </div>) 
                : (<div><Button><Link href="/User/Login" className="-mt-5 rounded ">Login</Link></Button> <Button><Link href="/User/SignUp" className="ml-2 -mt-5 rounded ">Register User</Link></Button></div>)}</div>
        </div>
    )
}

