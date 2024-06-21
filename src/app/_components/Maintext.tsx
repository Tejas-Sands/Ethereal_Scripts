"use client"
import { useRef , useState} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Ltext(){

  const router = useRouter()

  const imgUrl = "https://images.unsplash.com/photo-1469719847081-4757697d117a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const textRef = useRef<HTMLDivElement>(null);
    const textreff = useRef<HTMLDivElement>(null);
    const parareff = useRef<HTMLParagraphElement>(null);
    const imgSiz = useRef<HTMLImageElement>(null);
    const button = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
      setIsClicked(true);
      gsap.to(imgSiz.current, { duration: 2, scale: 23 });
      gsap.to(textRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.5,
          });
      gsap.to(textreff.current, {
              opacity: 0,
              y: 20,
              duration: 1,
              delay: 0.1,
            });
      gsap.to(button.current, {
              opacity: 0,
              y: 20,
              duration: 1,
              delay: 0.1,
            });
      gsap.to(parareff.current, {
              opacity: 0,
              y: 20,
              duration: 1,
              delay: 0.1,
            });

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false); // Reset loading state if needed
        router.push("/MainPage/AllBlogs")
      }, 1500);
      
    };

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(textRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.5,
        })
        .from(textreff.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.1,
          })
          .from(parareff.current, {
            opacity: 0,
            y: 40,
            duration: 2,
            delay: 0.1,
          });
      });
      
    return <>
   
    <center>

  <div className="relative overflow-hidden">
  <img 
  src={imgUrl} 
  alt="Etherealism" 
  className="w-[75vm] h-[70vm] border-7 border-black "  
  ref={imgSiz}
   />
  <div className="absolute inset-0 flex h-full flex-col items-center justify-center" >
  <div 
      className=" font-fantany text-center  text-slate-500 text-xxl md:text-zz lg:text-45xl lg:mt-0 md:-mt-2 mt-16 p-8" 
      style={{ textShadow: '5px 5px 8px black',}} 
      ref={textRef}>
        Ethereal
      </div>
  
    <div className="drop-shadow-md hover:drop-shadow-2xl font-fantany text-center text-slate-500 flex justify-center text-ll  md:text-zz lg:text-45xl lg:mt-0 md:-mt-2 sm:-mt-36" -mt-56 style={{ textShadow: '5px 5px 8px black'}} ref={textreff}>Scripts</div>
   
    <Button size="large" variant="outlined" ref={button} onClick={handleClick}>All Blogs</Button>
  </div>
</div>
    
    </center>
    <br />
    <center ref={parareff}>
    <p className=" mt-5 w-3/4 text-5xl text-opacity-80 font-bold font-fant text-slate-400 hover:text-slate-300 transition duration-300 ease-in-out text-pretty text-center" >
           Little Space To Be Creative
    </p>
    </center>
    </>
}
