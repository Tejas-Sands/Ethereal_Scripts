"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton"
import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function Nav(){

   
    const {data: sessionData, status} = useSession()

    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [rloading, setLoadingR] = useState(false);

   const handleClick = () => {
     setLoading(true);
     router.push("/User/Login")
     setTimeout(() => {
        setLoading(false);
      }, 2500);
   };

   const handleClickReg = () => {
    setLoadingR(true);
    router.push("/User/SignUp")
    setTimeout(() => {
       setLoadingR(false);
     }, 2500);
  };


    return(
        <div className="relative z-50">
            <div className=" flex flex-wrap justify-between fixed bg-slate-900 bg-opacity-70 shadow-md backdrop-blur-md w-full h-16 top-0 ">
                      <div className="flex items-center space-x-4 -mt-10 ml-5">
                            <div className="flex-shrink-0 basis-7 font-bold text-blue-500"><Link href="/">Home</Link></div>
                            <div className="order-1 font-bold text-blue-500"><Link href="/About">About Us</Link></div>
                      </div>
               <div 
                className="order-last p-5" >
               
                    {sessionData? (<div className="flex justify-items-end  p-5 -mt-8">                                
                                    <div><img src={sessionData.user.image? (sessionData.user.image):(sessionData.user.name)}  className="w-8 h-8 rounded-full p-2"></img></div> 
                                    <div className=" text-neutral-400 mr-4"> {sessionData.user.name}</div> 
                                    <div><Button variant="contained" onClick={() => void signOut()}>LogOut</Button></div></div>) 
                                : (<div 
                                className="flex justify-items-end  p-5 -mt-8 "
                                >
                                  <div><LoadingButton
                                    onClick={handleClick}
                                    loading={loading}
                                  className=" rounded bg-blue-950  px-4 py-2 ">Login</LoadingButton></div>
                                  <div><LoadingButton
                                    onClick={handleClickReg}
                                    loading={rloading}
                                    className=" rounded bg-blue-950  px-4 py-2 ml-2">Register</LoadingButton></div></div>)}
               </div>
            </div>
        </div>
    )
}



