"use client"
import { useEffect , useState} from "react";
import {Card, Typography} from "@mui/material"
import SingleBlog from "./SingleBlog";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react"

export default function Singular() {
    const blogID = useParams()

    let lid: string | string[] | undefined = blogID?.id ?? "4";

    if (Array.isArray(lid)) {
        lid = lid[0]; 
    }

    if (lid === undefined) {
        lid = "4";
    }

    const blid = parseInt(lid)

    return<>
            <SingleBlog id = {blid}/>
         </>
}

