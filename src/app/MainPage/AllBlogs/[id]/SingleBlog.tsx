"use client";
import { api } from "~/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { stringify } from "querystring";
import { Button , Card ,  } from "@mui/material";

export default function SingleBlog(props) {
 
    const {id} = props;
    // const {did} = useParams();
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState("")
    const [blogs, setBlogs] = useState([]);
    const [image, setImage] = useState("");
    const [cid, setCid] = useState("");
    const [name,setName] = useState("");

    const fetchIdBlog = api.bcall.getById.useQuery({bid : id})
    const CreateComment = api.bcall.commentit.useMutation();

    const handleCreate = async () => {
        try{
                await CreateComment.mutateAsync({
                    image: image,
                    name : name,
                    content: content,
                    createdBy: cid,
                    blogId: parseInt(id),
                    });
                setImage("");
                setName("")
                setContent("");
                setCid("");
                fetchIdBlog.refetch();
        }
        catch(error){
                console.log(error);
        }
    }

    return<>
            <div>
                <h2>Comments</h2>
                <div>
                    <input
                    placeholder="your comment...."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                onClick = {handleCreate}
                >
                    comment
                </button>
                </div>
                </div>
            {JSON.stringify(fetchIdBlog.data)}

            </>
}
    
    





































































    //   const fetchAllBlogs =  api.bcall.getAllBlog.useQuery();
    //   let data = fetchAllBlogs.data
    //  
    //     const fetchAllBlogs = api.bcall.getAllBlog.useQuery();
    //     let data = fetchAllBlogs.data
    //     useEffect(() => {
    //     if(data){
    //         console.log("here")
    //         const fun = async (data) => {
    //             try{
    //                 setLoading(true)
    //                 console.log("here")
    //                 // const data = fetchAllBlogs.data
    //                     const course = await data.find((course) => course.bid === blid);
    //                     if (course){ setBlogs(course) 
    //                         console.log("here")}
    //                     else console.log("no match..")
    //             }
    //             catch(err){ 
    //                 console.log(err)
    //             }
    //             setLoading(false)
    //             };
    //             fun();
    //     }
    //     else{
    //         console.log("setloading is true here")
    //         setLoading(true)
    //     }
    // },[blid]);
    //     // const fun = async (data) => {
    //     // try{
    //     //     setLoading(true)
    //     //     console.log("here")
    //     //     // const data = fetchAllBlogs.data
    //     //         const course = await data.find((course) => course.bid === blid);
    //     //         if (course){ setBlogs(course) 
    //     //             console.log("here")}
    //     //         else console.log("no match..")
    //     // }
    //     // catch(err){ 
    //     //     console.log(err)
    //     // }
    //     // setLoading(false)
    //     // }
    // // function setb(data){
    // //     setBlogs(data.fetchAllBlogs)
    // // }
    // // setTimeout(functionRef, delay)
    // if (isLoading) return <>loading...</>
    // return<>
    // {JSON.stringify(blid)}
    // {JSON.stringify(BlogId)}
    // {JSON.stringify(blogs)}
    // </>
    // const fetchAllBlogs = api.bcall.getAllBlog.useQuery();
    // if(fetchAllBlogs.data!) {
    //     return <> loading...</>
// }
