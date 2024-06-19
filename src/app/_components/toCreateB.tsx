"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@mui/material";

export default function CreateBlogB(){
    const {data:sessionData, status} = useSession();
    
    return(
    <>
    {sessionData ?  (<Button><Link href="/CreateBlog" >Start Writing!</Link></Button>) : (<Button><Link href="/User/Login" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black">Login to Write Yours Blogs!!</Link></Button>) }
    </>)
}