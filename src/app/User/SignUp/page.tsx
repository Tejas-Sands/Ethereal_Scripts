"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { api } from "~/trpc/react";


export default function SignUp(){

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const pushUser = api.auths.signUp.useMutation();


    const handleUser = async() => {
        try{
          await pushUser.mutateAsync(
            {
              name: name,
              email: email,
              password: password,
              image: image
            }
          );
          setName("");
          setEmail("");
          setPassword("");
          setImage("");
            // fetchAllUsers.refetch();
        }catch(error){
          console.log(error);
        }
        finally{
          router.push("./Login")
        }
        }

    return (
      <center> <div className=" mt-5 card lg:card-side shadow-xl w-4/5  bg-slate-600">
  <figure><img className=" h-350px" src="https://cdn.pixabay.com/photo/2020/03/31/16/02/hoian-4988319_1280.jpg" alt="random_Stuff"/></figure>
  <div className="card-body w-3/5">
  <h2 className="mb-4 text-2xl font-bold">Create New User</h2>
            <div className="mb-4 ">
            <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="UserName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                placeholder="Url of display Picture"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mr-2"> 
            <button
              className="btn btn-wide "
              onClick={handleUser}
            >
              Create User
            </button>
         
            </div>
      {/* <button className="btn btn-primary">Listen</button> */}
   
  </div>
</div>
</center>
      // <center><div className="mb-8 p-5 flex flex-col w-46 rounded-md bg-zinc-400 shadow-lg ">
      //       <h2 className="mb-4 text-2xl font-bold">Create New User</h2>
      //       <div>
      //       <input
      //           className="mb-4 w-1/2 border border-gray-300 p-2"
      //           placeholder="UserName"
      //           value={name}
      //           onChange={(e) => setName(e.target.value)}
      //         />
      //       </div>
      //       <div className="mb-4 ">
      //         <input
      //           className="mr-2 w-1/2 border border-gray-300 p-2"
      //           placeholder="Email"
      //           value={email}
      //           onChange={(e) => setEmail(e.target.value)}
      //         />
      //       </div>
      //       <div className="mb-4 ">
      //         <input
      //           className="mr-2 w-1/2 border border-gray-300 p-2"
      //           placeholder="password"
      //           value={password}
      //           onChange={(e) => setPassword(e.target.value)}
      //         />
      //       </div>
      //       <div className="mb-4 ">
      //         <input
      //           className="mr-2 w-1/2 border border-gray-300 p-2"
      //           placeholder="Url of display Picture"
      //           value={image}
      //           onChange={(e) => setImage(e.target.value)}
      //         />
      //       </div>

      //       <div>
      //       <button
      //         className="btn btn-wide"
      //         onClick={handleUser}
      //       >
      //         Create User
      //       </button>
      //       </div>

      //   {/* <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-black"
      //   onClick={}></button> */}
      //   </div>
      //   </center> 
        )  
    }

    