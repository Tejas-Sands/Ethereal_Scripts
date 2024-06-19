"use client"

import Link from "next/link";
import { useState } from "react";
import { api } from "~/trpc/react";
import Someshhh from "./_components/someshit";
import "../styles/globals.css"
import { signIn, signOut, useSession } from "next-auth/react";
import CreateBlogB from "./_components/toCreateB";                                                  
import LoginPage from "./User/Login/page";
import Nav from "./_components/Nav";
import Ltext from "./_components/Maintext";
import FooterText from "./_components/Footext";
import Stuffs from "./_components/landingStuff";

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
  }

    return (
            <div className="mb-8 -mt-7 p-5 bg-slate-900">
         
                
                  <Ltext/>

                  <Stuffs/>

                  <br/>
                  {/* <h2 className="mb-4 text-2xl font-bold">gett 'em All</h2>
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
                    SignIn</button> */}
            {/* <div>
          </div>
        </div>
      </div> */}
      <footer>
      <FooterText/>
      </footer>
    </div>
  )}
