"use client"

import { api } from "~/trpc/react";
import "../../../styles/globals.css"
import Link from "next/link";
import { useParams } from "next/navigation";
import {Card, Typography} from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useRef , useState ,useEffect} from 'react';
import gsap from 'gsap';
import './style.css';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface BlogPostData {
  id: number;
  bid: string;
  Bname: string;
  image: string;
  content: string;
  comments: Comment[];
}

interface BlogPostsResponse {
  data: BlogPostData[];
}

interface BlogListProps {
  blogPosts: BlogPostsResponse;
}

interface BlogPostProps {
  blog: BlogPostData;
  index: number;
}


        function BlogList({blogPosts}: BlogListProps) {

              return <>
              <div className="  p-5 flex flex-row flex-wrap justify-around">
                  {blogPosts.data &&
                    blogPosts.data.map((blog, index) => (
                    <BlogPost key={blog.id} blog={blog} index={index} />
                  ))}
              </div>
              </>
            }


        function BlogPost({ blog , index }: BlogPostProps){

          const blogsLoad = useRef<HTMLDivElement>(null);

            useEffect(() => {
            gsap.from(blogsLoad.current, {
              y: 30,
              duration: .5,
            // ease: 'power2.out',
              delay: index * .5, 
                });
              }, [ index]);

                    return <div ref={blogsLoad} >
                     <Link href={`AllBlogs/${blog.bid}`}>
                             <Card  key={blog.bid}
                                        className="my-4  rounded border bg-slate-400 shadow w-[26rem] h-[20rem] hover:bg-slate-300" >
                                          <CardMedia
                                          component="img"
                                          image={blog.image}
                                          className="h-[12rem]"
                                        />
                              
                                      <CardContent >
                                          <Typography gutterBottom variant="h6" component="div">
                                          {blog.Bname}
                                          </Typography>
                                      </CardContent>
                                  </Card>
                                  </Link>
                              </div>
        }

export default function AllBlogs(){

  const fetchAllBlogs = api.bcall.getAllBlog.useQuery();

  return <> 
  <div className="scrolling-container">
    <div className="scrolling-content"></div>
    <BlogList blogPosts={fetchAllBlogs} />
    </div>
    </>
}
