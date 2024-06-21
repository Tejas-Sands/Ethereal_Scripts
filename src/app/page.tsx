"use client"

import Link from "next/link";
import { useState } from "react";
import { api } from "~/trpc/react";
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

      <footer>
      <FooterText/>
      </footer>
    </div>
  )}
