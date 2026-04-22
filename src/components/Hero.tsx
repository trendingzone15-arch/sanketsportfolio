'use client'

import React, { memo } from 'react'
import { SparklesCore } from '@/components/ui/sparkles'
import TextGenerateEffect from '@/components/ui/typewriter'
import BlurUp from './Blurup'

function Hero() {
  return (
    <section className=" w-full overflow-hidden bg-black">

      <div className="mx-auto mt-32 w-screen max-w-2xl z-10">
        <div className="text-center text-3xl text-white cursor-crosshair">
          
          <TextGenerateEffect
            words=" Sanket Mane"
            className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-5xl md:text-6xl font-bold text-transparent"
          />

          <br />

          <BlurUp>
            <span className='text-xl'>Full-Stack Developer</span>
          </BlurUp>

        </div>
      </div>

      <div className="relative  -mt-32 h-70 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">

        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />

      </div>

    </section>
  )
}

export default memo(Hero)