"use client"
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { api } from "~/trpc/react";
// import Err from "~/app/_components/notifications";
import { showError } from "~/app/_components/Notifications";
import TransitionAlerts from "~/app/_components/Alerts";
import { authOptions } from "~/server/auth";
import { z } from 'zod';

const schema =z.object ({email: z.string().email(),
  password: z.string().min(6 , "please check the length of your goddamn password"),
  name: z.string().min(5 , "Atleast five letters needed").max(23 , "big enough..."),
  image: z.string(),
})

export default function SignUp(){

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState('');

    const pushUser = api.auths.signUp.useMutation();

    

    const handleUser = async() => {

    
        try{

          schema.parse( {
            name: name,
            email: email,
            password: password,
            image: image
          });

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

        // if(pushUser.error?.data?.zodError){
        //   {showError(pushUser.error?.data?.zodError)}
        // }
        router.push("./Login")

        }
        // catch(error){
        //   console.log(error);
        //   // showError(error)
        //   window.location.reload();
        //   return <>
        //   <TransitionAlerts message={"dfgdbd"}/>
        //   </>
          
        // }
        catch (e) {
          
          if (e instanceof z.ZodError) {
            const errorMessage = e.errors;
            setError(errorMessage);
            console.log(errorMessage)
            // alert(errorMessage);
            // window.location.reload();
            // return<>
            // <TransitionAlerts message={errorMessage} />
            // </>
            router.push("./SignUp")
            
          } else {
            console.log('An unexpected error occurred');

          }
          // setOpen(true);
          // 
        }
        // finally{
        //   router.push("./Login")
        // }
        }

    return (
     <div  style={{
      position: 'relative',
      width: '100%',
          height: '663px',
          filter: 'blur(0px)', 
          zIndex: 1,
          backgroundImage: `url(${"https://images.unsplash.com/photo-1531081025701-9726898ad08b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
    }} >
     
     {/* <div className=" mt-10 flex items-center justify-center bg-gray-100">
      <Err message="This is a custom error message!" />
    </div> */}
   {error? (<div className=" mt-10 flex flex-col p-5 items-center justify-center">
    {error.map((error, index) => (<TransitionAlerts key={index} message={error.message} />))}
    </div>):(<div></div>)}
    {/* {JSON.stringify(error)}
    {console.log(error)} */}
                {/* <h2 className="mb-4 text-2xl font-bold">Create New User</h2> */}
               <center>
                <div className=" flex flex-col justify-center align-middle mb-4 p-5 w-[35rem] h-[30rem] relative bg-opacity-70 backdrop-blur-md mt-20 space-y-6 bg-zinc-900 rounded-md shadow-xl	">
                  <Typography variant="h6" className=" text-stone-300">Create User</Typography>
                    <div><input
                        className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                        placeholder="UserName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      </div>
                      
                    <div><input
                        className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        
                    <div><input
                      className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      </div>
                      
                    <div><input
                      className="mr-2 w-3/5 border border-gray-300 p-2 rounded-md"
                      placeholder="Url of display Picture"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      />
                    </div>

                    <div><Button
                      className="w-[21rem]"
                      variant="contained"
                      onClick={handleUser}
                    >
                      Create User
                    </Button>
                    </div>
                    </div>
                    </center>
              </div>
        
          
        )  
    }

    