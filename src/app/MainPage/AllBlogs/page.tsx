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

export default function MainPage(){

    const fetchAllBlogs = api.bcall.getAllBlog.useQuery();

    return <>
            {/* <div className="bg-zinc-950">
            {fetchAllBlogs.data &&
                fetchAllBlogs.data.map((blog) => (
                  <div
                    key={blog.bid}
                    className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
                  >
                    <p>{blog.bid}</p>
                    <p>{blog.Bname}</p>
                    <p>{blog.article}</p>
                    <Link href={`AllBlogs/${blog.bid}`}>click</Link>
                  </div>
                ))}
                </div> */}
                 <div className="-mt-5  p-5 flex flex-row flex-wrap justify-around">
            {fetchAllBlogs.data &&
                fetchAllBlogs.data.map((blog) => (
                  // <div
                  //   key={blog.bid}
                  //   className="my-4 grid grid-flow-row gap-4 rounded border bg-white p-4 shadow w-36"
                  // >
                    <Card  key={blog.bid}
                    className="my-4   rounded border bg-white shadow w-[26rem] h-[20rem]" >
                      <CardMedia
                      component="img"
                      // height="10"
                      image={blog.image}
                      className="h-[12rem]"
                    />
                    {/* <p>{blog.bid}</p>
                    <p>{blog.Bname}</p>
                    <p>{blog.article}</p> */}
                    
                  
                  <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                       {blog.Bname}
                       </Typography>
                   </CardContent>
                     <CardActions>
                       
                       <Link href={`AllBlogs/${blog.bid}`}><Button size="small">Check Out</Button></Link>
                       <Button size="small">Share</Button>
                     </CardActions>
                   </Card>
                 
                ))}
                </div>
            </>
}

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }