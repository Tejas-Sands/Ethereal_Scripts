"use client"
import { useEffect , useState} from "react";
import {Card, Typography} from "@mui/material"
import SingleBlog from "./SingleBlog";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react"

export default function() {
    const blogID = useParams()

    let lid = blogID ? blogID.id : 4;
    let blid = parseInt(lid)

    return<>
            <SingleBlog id = {blid}/>
         </>
}

