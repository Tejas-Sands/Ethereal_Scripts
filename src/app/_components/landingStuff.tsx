import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useRef, useEffect } from "react"
import CreateBlogB from "./toCreateB"
import { Button } from "@mui/material"
gsap.registerPlugin(ScrollTrigger)

export default function Stuffs(){

    const imgref = useRef()
    const textr = useRef()
    const imgx = useRef()
    const botton = useRef()
    const textl = useRef()

    gsap.fromTo(imgx.current, {
        opacity: 0,
        x: -500,
},
{opacity: 1,
    x: 0,
    // duration: 1,
    scrollTrigger: {
            trigger: imgx.current,
            scrub: 2,
            start: "top 80%",
            end: "top 30%",
    }
})

gsap.fromTo(textl.current, {
    opacity: 0,
    x: 500,
},
{opacity: 1,
x: 0,
// duration: 1,
scrollTrigger: {
        trigger: textl.current,
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
}
})

    gsap.fromTo(imgref.current, {
                opacity: 0,
                x: -100,
    },
        {opacity: 1,
            x: 0,
          
            scrollTrigger: {
                    trigger: imgref.current,
                    scrub: 2,
                    start: "top 80%",
                    end: "top 30%",
                    // markers:true
            }
        })

        gsap.fromTo(textr.current, {
            opacity: 0,
            x: 300,
},
    {opacity: 1,
        x: 0,
        // duration: 1,
        scrollTrigger: {
                trigger: textr.current,
                scrub: 2,
                start: "top 80%",
                end: "top 50%",
                // markers:true
        }
    })

    gsap.fromTo(botton.current, {
        opacity: 0,
        x: 300,
},
{opacity: 1,
    x: 0,
    // duration: 1,
    scrollTrigger: {
            trigger: botton.current,
            scrub: true,
            start: "top 80%",
            end: "top 50%",
            // markers:true
    }
})
   
    return <>
    <div className=" flex-col overflow-hidden">
        <img ref={imgx} className=" h-96 align-middle w-auto" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <div className=" bg-sky-500 w-3/4 text-blue-950 text-balance text-2xl p-5 " ref={textl}>Unleash your imagination and share your unique voice! Writing an article lets you explore ideas, tell stories, and inspire others. Dive in, embrace your creativity, and let your thoughts flow. Your story matters!</div>
    </div>
    <center><CreateBlogB ref={botton} /></center>
    <div className=" mt-16 flex flex-row w-full h-24 lg:h-60 md:h-32 sm:h-28 xl:h-64 overflow-hidden">
        <img ref={imgref} src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className=" bg-blue-500 w-3/4 text-blue-950 text-balance p-5 lg:text-2xl  md:text-xl text-sm " ref={textr}>“There is no greater agony than bearing an untold story inside you.”<br/><i>- Maya Angelou</i></div>
    </div>
    </>
}