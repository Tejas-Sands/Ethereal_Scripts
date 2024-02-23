"use client"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
// status === "authenticated"
export default function Situation(){
    const {data:sessionData, status} = useSession();
//     if(session){
//         return <button onClick={() => void signOut()}>LogOut</button>

//     }
    
    return(
    <>
    {sessionData ?  (<button onClick={() => void signOut()}>LogOut</button>) : (<Link href="/Login" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black">Login</Link>) }
    </>)
}
//     return <Link href="/Login" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black">Login</Link>
// }