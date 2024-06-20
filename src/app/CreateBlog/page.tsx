'use client';

import { useRouter } from 'next/navigation';
import { useState , useEffect} from "react"
import { api } from "~/trpc/react";
import "../../styles/globals.css"
import { Button } from '@mui/material';
import { z } from 'zod';
import TransitionAlerts from "~/app/_components/Alerts";
import { getSession } from 'next-auth/react'

const blogSchema = z.object({
          Bname: z.string(),
          article: z.string().min(500, "number of letters should be at least 500"),
          image: z.string(),
          imaget: z.optional(z.string()),
          createdBy: z.string()
        })

export default function CreateBlog(){

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [img, setImg] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [typerror, setError] = useState<z.ZodIssue[] | null>(null);

  const createB = api.bcall.blog.useMutation();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        router.replace('/User/Login');
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <p><b>Loading...</b></p>;
  }

    
    const handleUser = async() => {
        try{

          blogSchema.parse({
                Bname: title,
                article: article,
                image: img,
                imaget: image,
                createdBy: id
          })

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

          setError(null)

          router.push("./")

        }catch(e){
          if (e instanceof z.ZodError) {
            const errorMessage = e.errors;
            setError(errorMessage);
            console.log(errorMessage)
           
            
          } else {
            console.log('An unexpected error occurred');

            }
        }
       
      }

      useEffect(() => {
        if (typerror) {
          const timer = setTimeout(() => {
            setError("");
          }, 4000); 
          return () => clearTimeout(timer); 
        }
      }, [typerror]);

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

            {typerror? (
                      <div className="flex flex-col">
                      {typerror.map((error, index) => (
                        
                        <TransitionAlerts key={index} message={error.message} index={index} />
                  ))}
                </div>
                ):(<div></div>)}
              <center>
                  <div className=" relative flex flex-row justify-center mt-5  shadow-3xl bg-opacity-70  backdrop-blur-md bg-slate-600 w-[70rem] rounded-2xl ">
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
                                  <textarea
                                      className="w-full h-full p-2 border-none outline-none resize-none"
                                      placeholder="Write your blog here..."
                                      value={article}
                                      onChange={(e) => setArticle(e.target.value)}
                                      style={{ whiteSpace: 'pre-wrap' }}
                                    />
                                  </div>
                                </div>
                              <div className="mr-2 p-5">           
                                <Button  
                                     className=" w-[26rem] bg-slate-400 hover:bg-gray-200"
                                        onClick={handleUser}
                                          >
                                          Create Blog
                                    </Button>               
                                </div>    
                            </div>
                        </div>
               </center>
            </div>
        
          )  
    }

    