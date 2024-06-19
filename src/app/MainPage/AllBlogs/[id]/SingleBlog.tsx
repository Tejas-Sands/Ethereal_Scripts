"use client";

import { api } from "~/trpc/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { stringify } from "querystring";
import { getSession } from 'next-auth/react'
import { Button , Card, Typography ,  } from "@mui/material";

export default function SingleBlog(props) {
 
    const {id} = props;

    const router = useRouter();
    const [loading, setLoadingz] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState("")
    const [blogs, setBlogs] = useState([]);
    const [image, setImage] = useState("");
    const [cid, setCid] = useState("");
    const [name,setName] = useState("");

    const fetchIdBlog = api.bcall.getById.useQuery({bid : id})
    const CreateComment = api.bcall.commentit.useMutation();

    const checkSession = async () => {
        const session = await getSession();
        if (!session) {
          setTimeout(() => {
              router.replace('/User/Login');
          }, 3000);
          
        } else {
          setLoadingz(false);
        }
      };

    const handleCreate = async () => {

    
    checkSession();
 

  if (loading) {
    return <p><b>Loading...</b></p>;
  }

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
              
           <img className="relative h-full w-full z-0 blur-2xl " src={fetchIdBlog.data?.image}/>  
             <div className="relative ml-5 -mt-[38rem]  z-20"><img className="w-auto h-[15rem] p-4 border-2 border-gray-500 border-solid  rounded-md " src={fetchIdBlog.data?.image}/></div>
                <div className="relative flex flex-wrap z-10 p-5 pr-96 bg-slate-400">
                    <br/><br/><br/><br/><br/><br/>
                        <Typography  variant="h3">{fetchIdBlog.data?.Bname}</Typography>                                            
                        <br/>
                        <Typography variant="h6" className="flex flex-shrink flex-wrap">{fetchIdBlog.data?.article}</Typography>
                                </div> 
                                    <div className="p-5 relative z-20 ">
                                        <h2>Comments</h2>
                                        <div>
                                            <input className="rounded-lg bg-slate-800 p-2"
                                            placeholder=" your comment...."
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            />
                                            <Button
                                                onClick = {handleCreate}>
                                                comment
                                            </Button>
                                        </div>
                                                {fetchIdBlog.data?.comments.map((coms) => (
                                                    <div className="p-3  rounded-xl bg-slate-600" key={coms.cid}>
                                                        <img className="h-10 w-10 rounded-full" src={coms.image} /> 
                                                        <div className=" p-3 bg-slate-500 text-cyan-950"> {coms.name} </div> 
                                                        {coms.content}
                                                    </div>
                                                ))}  
                                    </div> 
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
