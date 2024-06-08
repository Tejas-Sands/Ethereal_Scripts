'use client';

import { useRouter } from 'next/navigation';
import { useState } from "react"
import { api } from "~/trpc/react";
import "../../styles/globals.css"
import { Button } from '@mui/material';

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
          await createB.mutateAsync(
            {
                Bname: title,
                article: article,
                image: img,
                imaget: image,
                createdBy: id
            }
          );
          setTitle("");
          setArticle("");
          setImg("");
          setImage("");
          setId("");
        }catch(error){
          console.log(error);
          window.location.reload();
        }
        finally{
          router.push("./")
        }
      }
    return (
            
              <div className=' flex justify-center ' style={{
                  position: 'relative',
                  width: '100%',
                      height: '663px',

                      filter: 'blur(0px)', 
                      zIndex: 2,
                      backgroundImage: `url(${"https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg"})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                }} 
                >
                  <center>
              <div className=" relative flex flex-row justify-center mt-5  shadow-3xl bg-opacity-70  backdrop-blur-md bg-slate-600 w-[70rem] rounded-2xl ">
              {/* <img className=" h-[40rem]" src="https://cdn.pixabay.com/photo/2023/12/01/21/50/sunset-8424565_1280.jpg" alt="random_Stuff"/> */}
                <div className=" w-3/5">
                <h2 className="mb-4 text-2xl font-bold">Create Your Article</h2>
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
                        placeholder="Url of Cover Image"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                      />
                    </div>

                    <div className="max-w-screen-lg mx-auto mt-5">
                    <div className="p-4 border-2 border-gray-300 rounded-lg shadow-md h-96  whitespace-nowrap">
                      {/* <input 
                        // className="mr-2  border   border-gray-300 p-2 rounded-md w-full h-full resize-none outline-none"
                        className='w-full h-full resize-none outline-none overflow-hidden'
                        style={{ whiteSpace: 'pre-wrap',overflowWrap: 'break-word'  }}
                        placeholder="Article"
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                      /> */}
                       <textarea
                          className="w-full h-full p-2 border-none outline-none resize-none"
                          placeholder="Write your blog here..."
                          value={article}
                          onChange={(e) => setArticle(e.target.value)}
                          style={{ whiteSpace: 'pre-wrap' }}
                        />
                      </div>
                    </div>
                    {/* <div className="mb-4 ">
        


                    </div> */}
                 
                    {/* <div className="mb-4 ">
                      <input
                        className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                        placeholder="Image2"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div> */}
                    <div className="mr-2 p-5"> 
                              <Button  
                                className=" w-[26rem] bg-slate-400 hover:bg-gray-200"
                                onClick={handleUser}
                              >
                                Create Blog
                              </Button>               
                              </div>    
                    {/* <div className="mb-4 "> */}
                      {/* <input
                        className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                        placeholder="Autofill"
                        value={id}
                        onChange={(e) => setArticle(e.target.value)}
                      /> */}
                    {/* </div> */}
                              
              </div>
            </div>
            </center>
            </div>
        
          )  
    }

    