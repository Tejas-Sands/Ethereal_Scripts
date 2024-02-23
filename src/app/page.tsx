
// import Link from "next/link";
// // import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
// import "~/styles/main.css" 
// import { postRouter } from "~/server/api/routers/post";
// import Nav from "./_components/nav";
"use client"
  import Link from "next/link";
  import { useState } from "react";
  import { api } from "~/trpc/react";
  import Someshhh from "./_components/someshit";
  import "../styles/globals.css"
import { signIn, signOut, useSession } from "next-auth/react";
import CreateBlogB from "./_components/toCreateB";
// import SignUp from "./SignUp/signUp";                                                   
import LoginPage from "./User/Login/page";
// import Situation from "./_components/loginOrlogOut";
import Nav from "./_components/Nav";
import Ltext from "./_components/Maintext";
// import Home from "./Home";

export default function Home(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameToUpdate, setNameToUpdate] = useState("");
  const [emailToUpdate, setEmailToUpdate] = useState("");
  const [userId, setUserId] = useState("");
  const [userIdToUpdate, setUserIdToUpdate] = useState("");
  const [userIdToDelete, setUserIdToDelete] = useState("");

  const fetchAllUsers = api.exam.getAll.useQuery();

  const createUserMutation = api.exam.createUsers.useMutation();

  const {data:sessionData, status} = useSession();
  
  // console.log("here??")

// handers
const handleUser = async() => {
  try{
    await createUserMutation.mutateAsync(
      {
        name: name,
        email: email,
      }
      
    );
    setName("");
    setEmail("");
      fetchAllUsers.refetch();
  }catch(error){
    console.log(error);
  }
  console.log("here??")
  // if(!fetchAllUsers.data){
  //   return
  //   <div>
  //     loding...........
  //   </div>
  }
  // else{
  return (
  <div className="mb-8 p-5">
    <Nav/>
    <Ltext/>
    <br/>
    
      <h2 className="mb-4 text-2xl font-bold">gett 'em All</h2>
      <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={() =>fetchAllUsers.refetch()}> GET ALL USERS</button>
      <div className="text- mb-4 mt-4 grid grid-cols-3 gap-4 font-bold">
        <p>Id</p>
        <p>Name</p>
        <p>Email</p>
      </div>

      {fetchAllUsers.data &&
        fetchAllUsers.data.map((user) => (
          <div
            key={user.id}
            className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
          >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
<div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Create New User</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 w-1/2 border border-gray-300 p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          onClick={handleUser}
        >
          Create User
        </button>
        <div>
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black"
        onClick={() => void signIn()}>
          SignIn</button>
        
        <CreateBlogB/>
        {/* <h2> User Login </h2> */}
        <div>
        {/* {session ? (<Link href="/Login" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black">Login</Link>) : (<button onClick={() => void signOut()}>LogOut</button>)} */}
        {/* <button onClick={() => void signOut()}>LogOut</button> */}
        {/* <Situation/> */}
    
        </div>
          </div>
   
      {/* <LoginPage/> */}
      </div>
    </div>
  )}


// }

// export default Nav;