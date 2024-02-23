"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function CreateBlogB(){
    const {data:sessionData, status} = useSession();
    
    return(
    <>
    {sessionData ?  (<Link className="btn" href="/CreateBlog" >Create Blogs</Link>) : (<Link href="/User/Login" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black">Login to Create Yours Blogs!!</Link>) }
    </>)
}