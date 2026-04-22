'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import { Dot } from 'lucide-react';
import React, { useState } from 'react'
import { MdDateRange } from 'react-icons/md';

function Page() {
     const [color, setColor] = useState("#ffffff");
  return (
    <main className="relative flex min-h-screen w-full  overflow-hidden pt-20">

    <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
        color={color}
      />
      <BlurUp>
        <div className="w-full px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 mt-20 flex flex-col">
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
    A Beginner’s Guide to Starting a Developer Journey in 2025
  </h2>

  {/* Date */}
  <p className="pt-4 flex items-center gap-2 text-base sm:text-lg text-gray-400">
    <MdDateRange size={25} />
    Jan 2025
  </p>

  {/* Article Section */}
  <section className="border border-gray-700 p-4 sm:p-6 rounded-lg mt-6 bg-gray-900/30">
    {/* Intro */}
    <h2 className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
      <span className="pl-5"></span>
      The tech world is growing faster than ever, and 2025 is one of the best times to start your journey as a
      developer. Whether you dream of building websites, mobile apps, or AI systems, the opportunities in the IT
      industry are endless. But the real challenge? Knowing where to begin.
    </h2>

    <p className="pt-4 text-base sm:text-lg md:text-xl text-gray-300">
      Becoming a developer doesn’t start with learning a programming language — it starts with curiosity and
      consistency. Here’s your starting roadmap:
    </p>

    {/* List Section */}
    <div className="pl-3 sm:pl-5 pt-5">
      <ul className="flex flex-col gap-4 md:text-lg text-gray-300">
        <li className="flex items-start gap-2">
          <Dot />
          <span>Step 1: Learn the basics of how the web and computers work.</span>
        </li>

        <li className="flex items-start gap-2">
          <Dot />
          <span>Step 2: Start with HTML, CSS, and JavaScript to understand how websites are made.</span>
        </li>

        <li className="flex items-start gap-2">
          <Dot />
          <span>Step 3: Build small projects — a portfolio site, a to-do app, a calculator.</span>
        </li>

        <li className="flex items-start gap-2">
          <Dot />
          <span>
            Step 4: Gradually explore backend technologies like Node.js, Express, and databases (MongoDB,
            PostgreSQL).
          </span>
        </li>

        <li className="flex items-start gap-2">
          <Dot />
          <span>Learn Git, GitHub, and deployment platforms like Vercel or Netlify.</span>
        </li>
      </ul>
    </div>
  </section>
</div>

        </BlurUp>
    </main>
  )
}

export default Page