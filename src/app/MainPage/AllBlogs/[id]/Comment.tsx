"use client"
import { useState } from "react"
import { api } from "~/trpc/react"


export default function Comments(){

    const [content, setContent] = useState("")

    const fetchComment = api.cment.showComment.useQuery();
    const CreateComment = api.cment.commentit.useMutation();

    const handleCreate = async () => {
        try{
            await fetchComment.mutateAsync({
                content: content,
            });
            setContent("");
            // fetchComment
        }
    }

    return<>
    


    </>
}