"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function CreateBlogB(){
    const {data:sessionData, status} = useSession();
    
    return(
    <>
    {sessionData ?  (<LoadingButton><Link href="/CreateBlog" >Start Writing!</Link></LoadingButton>) : (<LoadingButton><Link href="/User/Login" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black">Login to Write Yours Blogs!!</Link></LoadingButton>) }
    </>)
}