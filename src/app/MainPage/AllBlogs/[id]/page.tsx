"use client"
import { useEffect , useState} from "react";
import {Card, Typography} from "@mui/material"
import SingleBlog from "./SingleBlog";
import { useParams } from "next/navigation";
import { api } from "~/trpc/react"

export default function() {
    const blogID = useParams()

    // const [content, setContent] = useState("")

    // const fetchComment = api.cment.showComment.useQuery();
    // const CreateComment = api.bcall.commentit.useMutation();

    // const handleCreate = async () => {
    //     try{
    //         await fetchComment.mutateAsync({
    //             content: content,
    //         });
    //         setContent("");
    //         // fetchComment
    //     }
    // }

    // const idString = String(blogID);
    let lid = blogID ? blogID.id : 4;
    let blid = parseInt(lid)
    // let id = toString(blid)
    return<>
    {JSON.stringify(blid)}
    <SingleBlog id = {blid}/>

    </>
}


// const { id } = useParams();

//   // Convert the id to a string
//   const idString = String(id);

//   // Return the id string
//   return <div>{idString}</div>;
// 