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
// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './style.css';

// export default function MainPage(){

//     const fetchAllBlogs = api.bcall.getAllBlog.useQuery();

//     const blogsLoad = useRef([]);

//     useGSAP(() => {
//       const tl = gsap.timeline();
//       tl.from(blogsLoad.current, {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 0.5,
//       })
//     })


//     return <>
           
//                  <div className="  p-5 flex flex-row flex-wrap justify-around">
//             {fetchAllBlogs.data &&
//                 fetchAllBlogs.data.map((blog) => (
                 
//                  <div  ref={blogsLoad}>   
//                  <Card  key={blog.bid}
//                     className="my-4   rounded border bg-white shadow w-[26rem] h-[20rem]" >
//                       <CardMedia
//                       component="img"
//                       image={blog.image}
//                       className="h-[12rem]"
//                     />
                 
                  
//                   <CardContent >
//                        <Typography gutterBottom variant="h5" component="div">
//                        {blog.Bname}
//                        </Typography>
//                    </CardContent>
//                      <CardActions>
                       
//                        <Link href={`AllBlogs/${blog.bid}`}><Button size="small">Check Out</Button></Link>
//                        <Button size="small">Share</Button>
//                      </CardActions>
//                    </Card>
//                    </div>
//                 ))}
//                 </div>
//             </>
// }













function BlogList({blogPosts}) {

  return <>
  <div className="  p-5 flex flex-row flex-wrap justify-around">
      {blogPosts.data &&
        blogPosts.data.map((blog, index) => (
        <BlogPost key={blog.id} blog={blog} index={index} />
      ))}
  </div>
  </>
}

function BlogPost({ blog , index }){

  const blogsLoad = useRef();

    useEffect(() => {
    gsap.from(blogsLoad.current, {
      y: 30,
      duration: .5,
      // ease: 'power2.out',
      delay: index * .5, // Stagger the animations
    });
  }, [ index]);

 return <div ref={blogsLoad} >
 
<Card  key={blog.bid}
                    className="my-4   rounded border bg-slate-400 shadow w-[26rem] h-[20rem]" >
                      <CardMedia
                      component="img"
                      image={blog.image}
                      className="h-[12rem]"
                    />
                
                  {/* <div>{index}</div>  */}
                  <CardContent >
                       <Typography gutterBottom variant="h5" component="div">
                       {blog.Bname}
                       </Typography>
                   </CardContent>
                     <CardActions>
                       
                       <Link href={`AllBlogs/${blog.bid}`}><Button size="small">Check Out</Button></Link>
                       <Button size="small">Share</Button>
                     </CardActions>
                   </Card>
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




{/* <Card  key={blog.bid}
className="  p-5 flex flex-row flex-wrap justify-around"
                    className="my-4   rounded border bg-white shadow w-[26rem] h-[20rem]" >
                      <CardMedia
                      component="img"
                      image={blog.image}
                      className="h-[12rem]"
                    />
                 
                  {/* <div>{index}</div>  */}
                  // <CardContent >
                  //      <Typography gutterBottom variant="h5" component="div">
                  //      {blog.Bname}
                  //      </Typography>
                  //  </CardContent>
                  //    <CardActions>
                       
                  //      <Link href={`AllBlogs/${blog.bid}`}><Button size="small">Check Out</Button></Link>
                  //      <Button size="small">Share</Button>
                  //    </CardActions>
                  //  </Card> */}

 



// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// function BlogList({ blogPosts }) {
//   return (
//     <div>
//       {blogPosts.map((post, index) => (
//         <BlogPost key={post.id} post={post} index={index} />
//       ))}
//     </div>
//   );
// }

// function BlogPost({ post, index }) {
//   const postRef = useRef();

//   useEffect(() => {
//     gsap.from(postRef.current, {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       delay: index * 0.2, // Stagger the animations
//     });
//   }, [postRef, index]);

//   return (
//     <div ref={postRef}>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//     </div>
//   );
// }

// // Usage
// const blogPosts = [
//   { id: 1, title: 'First Post', content: 'Lorem ipsum...' },
//   // ... other blog posts
// ];

// function App() {
//   return <BlogList blogPosts={blogPosts} />;
// }

// export default App;


