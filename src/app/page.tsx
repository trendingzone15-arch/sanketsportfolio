import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";
import Project from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import BlurUp from "@/components/Blurup";



export default function Home() {
    
  return (
    <div className="w-full  m-0 p-0">
       <Hero/>
    <BlurUp>
      <div className=" z-10 w-full  mb-50 flex items-center gap-2 justify-center">
            <Link href='https://github.com/Sanketmane135' className='text-sm rounded flex px-2 py-1 gap-1 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'>GitHub <Github/></Link>
            <Link  href={'/sanket mane resume.pdf'} className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 px-3 py-2 rounded">Resume</Link>
            <Link href='https://www.linkedin.com/in/sanket-mane-1986092ab' className='text-md rounded flex px-2 py-1 gap-1 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50'>Linked <Linkedin className="h-5"/></Link>   
       </div>
       </BlurUp>
      <div className="w-full px-10 sm:px-6 md:px-10 lg:px-40 xl:px-80 -mt-40 relative overflow-hidden ">
   
         <Tech/>
      </div>
      {/* <Feature3/> */}

      <div className="w-full px-10 sm:px-6 md:px-10 lg:px-40 xl:px-80  mt-5">
         <Experience/>
      </div>

      <div className="w-full relative px-10 sm:px-6 md:px-10 lg:px-40 xl:px-80  mt-5">
         <div
            className="absolute inset-0 mx-auto h-64 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        
        <Project/>
      </div>
    
      <div className="w-full relative px-10 sm:px-6 md:px-10 lg:px-40 xl:px-80  mt-5">
        <div
            className="absolute inset-0 mx-auto h-64 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
          <BlurUp>
          <h2 className=" w-full  p-2 cursor-crosshair font-semibold text-white flex items justify-center sm:text-3xl mt-10 mb-5 bg-gradient-to-r from-black via-red-500 to-black">Blogs </h2>
           </BlurUp>
            <Blogs/>
      </div>
        
    </div>
  );
}
