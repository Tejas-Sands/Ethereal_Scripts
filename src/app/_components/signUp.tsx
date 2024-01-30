"use client"
import { useState } from "react"
import { api } from "~/trpc/react";

export default function SignUp(){

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const pushUser = api.auths.signUp.useMutation();


    const handleUser = async() => {
        try{
          await pushUser.mutateAsync(
            {
              
              email: email,
              password: password
            }
          );
          
          setEmail("");
          setPassword("");
            // fetchAllUsers.refetch();
        }catch(error){
          console.log(error);
        }
        console.log("here??")
        }




return (
    <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Create New User</h2>
        <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <div className="mb-4 flex">
          <input
            className="mr-2 w-1/2 border border-gray-300 p-2"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>

        <button
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          onClick={handleUser}
        >
          Create User
        </button>

    {/* <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black"
    onClick={}></button> */}
    </div>
    )  
}