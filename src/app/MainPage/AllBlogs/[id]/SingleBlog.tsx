"use client";
import { api } from "~/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { stringify } from "querystring";

// import { useParams } from "react-router-dom";
export default function SingleBlog(props) {

    // const {BlogId} = useParams();
    // const blid = props.blogId.id;
    const {id} = props;
    const {did} = useParams();
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState("")
    const [blogs, setBlogs] = useState([]);
    const [image, setImage] = useState("");
    const [cid, setCid] = useState("");
    const [name,setName] = useState("");
    // const [blogId, setBlogId] = useState("");

    // const data = api.bcall.getAllBlog.useQuery();

    // setBlogs(data.data);
    // const blo = data.data

    const fetchIdBlog = api.bcall.getById.useQuery({bid : id})
    const CreateComment = api.bcall.commentit.useMutation();

    const handleCreate = async () => {
        try{
            await CreateComment.mutateAsync({
                image: image,
                name : name,
                content: content,
                createdBy: cid,
                blogId: parseInt(did),

            });
            setImage("");
            setName("")
            setContent("");
            setCid("");
            setBlogId("");
            fetchIdBlog.refetch();
        }
        catch(error){
            console.log(error);
        }
    }

    return<>
    {/* {props} */}
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
    // if(!blo){
    //     return<>wedasfda</>
    // }
    // else{
    //     const selectedData = blo.find((item) => item.bid === blid);
    //     setBlogs(selectedData)
    //     return <>
    //     <div className="bg-zinc-950">
    //         {/* {
    //             selectedData &&
    //             selectedData.data.map((blog) => ( */}
    //                 <div
    //                     // key={selectedData.bid}
    //                     className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
    //                 >
    //                     <p>{JSON.stringify(selectedData)}</p>
    //                     {/* <p>{selectedData.Bname}</p>
    //                     <p>{selectedData.article}</p>
    //                     <Link href={`AllBlogs/${blog.bid}`}>click</Link> */}
    //                 </div>
                    
    //             {/* ))} */}
    //     </div>
    // </>;
    // }
    
    





































































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
