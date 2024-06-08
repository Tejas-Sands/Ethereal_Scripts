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
        <div className=" flex justify-between fixed bg-slate-900 bg-opacity-70 shadow-md backdrop-blur-md w-[97rem] h-16 -mt-5 -ml-5 ">
        <div className="flex space-x-4 mt-6 ml-5">
        <div className="basis-7 font-bold text-blue-500"><Link href="/">Home</Link></div>
        <div className="order-1 font-bold text-blue-500">About Us</div>
        </div>
        <div className="order-last p-5 mt-3">
            {sessionData? (<div className="flex flex-row space-x-4 w-full mr-5">
                <Button variant="contained" onClick={() => void signOut()}>LogOut</Button>
                <div><img src={sessionData.user.image? (sessionData.user.image):(sessionData.user.name)}  className="w-8 h-8 rounded-full"></img></div> <div> {sessionData.user.name}</div> </div>) 
                : (<div className="flex flex-row flex-wrap"><LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    
                    // variant="outlined"
                   className="-mt-5 rounded bg-blue-900 ">Login</LoadingButton> 
                   <LoadingButton
                    onClick={handleClickReg}
                    loading={rloading}
                    
                    // variant="outlined"
                    className="-mt-5 rounded bg-blue-900 ">Register</LoadingButton></div>)}</div>
        </div>
        </div>
        // </div>
    )
}



