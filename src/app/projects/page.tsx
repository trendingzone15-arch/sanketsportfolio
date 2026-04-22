import AboutUs1 from '@/components/mvpblocks/about-us-1'
import React from 'react'
import { Poppins, Inter, Space_Grotesk, Sora, Great_Vibes ,Tangerine , Fugaz_One,Shojumaru, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});


function page() {
  return (
    <div className={`${ubuntu.className}`}>
        <AboutUs1/>
    </div>
  )
}

export default page