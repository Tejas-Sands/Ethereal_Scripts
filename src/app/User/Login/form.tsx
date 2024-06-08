'use client';

import { Button, Card } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

export default function Form(){

const imgO = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
  };
  return (
    <div className=' flex justify-center ' style={{
      position: 'relative',
      width: '100%',
          height: '663px',

          filter: 'blur(0px)', 
          zIndex: 2,
          backgroundImage: `url(${"https://images.unsplash.com/photo-1504202765451-e04e08e0fe58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
    }} 
    >
      <img src={imgO} className=' h-[41rem]' style={{ position: 'relative',  }} />
    <div className='flex justify-center absolute inset-0 ' >
      <Card className='flex justify-center w-[36rem] h-[27rem] p-5 bg-opacity-70 shadow-md backdrop-blur-md mt-20 round-md bg-slate-500 ' style={{
        position: 'absolute',}}>
    <form 
      onSubmit={handleSubmit}
      className=" flex flex-col justify-center gap-2 mt-3 p-5"
    >
     <center> Welcome Back!</center>
      <br/>
      <br/>
      Email:
      <input
        name="email"
        className="border border-cyan-800  text-blue-900 rounded"
        type="email"
      />
      Password
      <input
        name="password"
        className="border border-cyan-800  text-blue-900 rounded"
        type="password"
      />
      
      <div className='flex flex-col align-middle gap-2 mt-14 '>
        <Button variant='contained' className='w-[20rem]' type="submit">Login</Button>
         <div>_____________________or____________________</div> 
        <Button className='w-[20rem] bg-slate-300 hover:bg-sky-200 ' onClick={() => void signIn("google")}><GoogleIcon/></Button>  
      </div>
      
    </form>
    </Card>
    </div>
    </div>
  );
}