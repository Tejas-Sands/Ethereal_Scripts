'use client';

import { useRouter } from 'next/navigation';
import { useState } from "react"
import { api } from "~/trpc/react";


export default function CreateBlog(){

  
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [img, setImg] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");

    const createB = api.bcall.blog.useMutation();


    const handleUser = async() => {
        try{
          console.log("dx")
          // console.log(ctx.session.user.id,)
          await createB.mutateAsync(
            {
                Bname: title,
                article: article,
                image: img,
                imaget: image,
                createdBy: id
                // Bname: title,
                // article: article,
                // image: img,
                // image2: image
            }
          );
          setTitle("");
          setArticle("");
          setImg("");
          setImage("");
          setId("");
            // fetchAllUsers.refetch();
        }catch(error){
          console.log(error);
        }
        finally{
          // console.log(ctx.session.user.id)
          router.push("./")
        }
        }

    return (
      <center> <div className=" mt-5 card lg:card-side shadow-xl w-4/5  bg-slate-600">
        
  <figure><img className=" h-350px" src="https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg" alt="random_Stuff"/></figure>
  <div className="card-body w-3/5">
  <h2 className="mb-4 text-2xl font-bold">Create YOur Articler</h2>
            <div className="mb-4 ">
            <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}

              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Article"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Imag1"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Image2"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Autofill"
                value={id}
                onChange={(e) => setArticle(e.target.value)}
              />
            </div>
            <div className="mr-2"> 
            <button
              className="btn btn-wide "
              onClick={handleUser}
            >
              Create Blog
            </button>
         
            </div>
      {/* <button className="btn btn-primary">Listen</button> */}
   
  </div>
</div>
</center>
      )  
    }

    