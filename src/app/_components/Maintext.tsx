"use client"
import { useRef , useState} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Ltext(){

  const router = useRouter()

  const imgUrl = "https://images.unsplash.com/photo-1469719847081-4757697d117a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const textRef = useRef();
    const textreff = useRef();
    const parareff = useRef();
    const imgSiz = useRef();
    const button = useRef();

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
            }) 
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
    {/* <div style={
      containerStyle
    }> */}
      <div className="relative">
  <img src={imgUrl} alt="Etherealism" className="w-[68rem] h-[42rem] border-7 border-black"  ref={imgSiz} />
  <div className="absolute inset-0 flex h-full flex-col items-center justify-center">
  <h1 className=" shrink text-45xl font-fantany text-center  text-slate-500 " style={{ textShadow: '5px 5px 8px black'}} ref={textRef}>Ethereal</h1>
  <br/>
    {/* <img src='https://images.unsplash.com/photo-1601315488950-3b5047998b38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> */}
    <h2 className="drop-shadow-md hover:drop-shadow-2xl text-zz -mt-40 font-fantany text-center text-slate-500 flex justify-center" style={{ textShadow: '5px 5px 8px black'}} ref={textreff}>Scripts</h2>
    <Button size="large" variant="outlined" ref={button} onClick={handleClick}>All Blogs</Button>
  </div>
</div>
    {/* <h1 className="flex justify-center shrink text-45xl font-fantany text-center  text-slate-500 " style={{ textShadow: '5px 5px 8px black'}} ref={textRef}>Ethereal</h1>
    {/* <img src='https://images.unsplash.com/photo-1601315488950-3b5047998b38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> */}
    {/* <h2 className="drop-shadow-md hover:drop-shadow-2xl text-zz -mt-40 font-fantany text-center  text-slate-500 flex justify-center" style={{ textShadow: '5px 5px 8px black'}} ref={textreff}>Scripts</h2> */} 
    {/* </div> */}
    {/* {!isLoading && ( */}
        
      
      {/* {isLoading && (
        <p>Loading...</p>
      )} */}
     
    {/* {isLoading ? (
        <p></p>):(
    <Link href="/MainPage/AllBlogs">here</Link>)}
    <Button variant='contained' onClick={handleClick}>All Blogs</Button> */}
    </center>
    <br />
    <center ref={parareff}>
    <p className=" w-3/4 text-xl font-bold text-slate-400 hover:text-slate-300 transition duration-300 ease-in-out text-pretty text-center" >
            In the dynamic landscape of the digital era, blogging and online presence have evolved into 
            indispensable tools for personal and professional growth. Engaging in blogging not only serves
            as a creative outlet but also opens doors to a myriad of opportunities. Through the power of
            words, individuals can share their unique perspectives, insights, and expertise, establishing 
            themselves as thought leaders in their respective fields. The online realm provides an expansive
            platform for networking, fostering connections with like-minded individuals, potential collaborators,
            and even business prospects. Moreover, blogging cultivates a strong online presence, enhancing personal
            branding and credibility. As the world increasingly relies on digital communication, a well-maintained 
            blog becomes a powerful asset, allowing individuals to showcase their skills, build a diverse audience,
            and even monetize their content. In an era where information is king, the act of blogging empowers
            individuals to contribute to the collective wisdom of the internet, leaving an indelible mark on 
            the global conversation. Embrace the transformative potential of blogging, and unlock a world of
            possibilities that await you in the vast digital landscape.
    </p>
    </center>
    </>
}

// 
// import React, { useState } from 'react';
// import { gsap } from 'gsap';

// function AnimatedComponent() {
//   const [isAnimated, setIsAnimated] = useState(false);

//   const handleAnimation = () => {
//     setIsAnimated(true);
//     // GSAP animation code goes here
//     gsap.to('.box', { duration: 1, x: 200, backgroundColor: 'red' });
//   };

//   return (
//     <div>
//       <button onClick={handleAnimation}>Animate</button>
//       <div className={isAnimated ? 'box animated' : 'box'}></div>
//     </div>
//   );
// }

// export default AnimatedComponent;