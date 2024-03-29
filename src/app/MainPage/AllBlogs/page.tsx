"use client"
import { api } from "~/trpc/react";
import "../../../styles/globals.css"
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MainPage(){

  // let {BlogId} = useParams();

    const fetchAllBlogs = api.bcall.getAllBlog.useQuery();

    return <>
    <div className="bg-zinc-950">
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
        </div>
    </>
}