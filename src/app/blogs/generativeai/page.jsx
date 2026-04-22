'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import {  CornerUpRight, Dot, Highlighter, Milestone } from 'lucide-react';
import React, { useState } from 'react'
import { MdDateRange } from 'react-icons/md';

function Page() {
     const [color, setColor] = useState("#ffffff");
     const Bullet = ({ children }) => (
  <p className="flex gap-2 items-start">
    <Milestone size={25} className="flex-shrink-0 mt-1" />
    {children}
  </p>
);
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
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
    How Generative AI Is Taking Over the IT Market
  </h2>

  <p className="pt-4 flex items-center gap-2 text-base sm:text-lg text-gray-400">
    <MdDateRange size={25} />
    Jan 2026
  </p>

  <section className="border border-gray-700 p-4 sm:p-6 rounded-lg mt-6 bg-gray-900/30">
    <h2 className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
      <span className="pl-5"></span>
      Generative AI is quickly becoming a core part of the IT industry. It is changing how software is developed, how systems are managed, and how businesses use technology to scale faster.
    </h2>

    <div className="pl-3 sm:pl-5 pt-5">
      <ul className="flex flex-col gap-4 md:text-lg text-gray-300">
        {/* Section 1 */}
        <section className="border-b border-gray-700 pb-3">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Key ways Generative AI is impacting the IT market:
          </li>
          <div className="pl-5 sm:pl-10 pt-3 space-y-3">
            <p className="flex gap-2 items-start">
              <Milestone size={25} className="flex-shrink-0 mt-1" />Automates code generation, testing, and debugging, reducing development time
            </p>
            <p className="flex gap-2 items-start">
              <Milestone size={25}  className="flex-shrink-0 mt-1"/> Improves productivity of developers and IT teams
            </p>
            <p className="flex gap-2 items-start">
              <Milestone size={25} className="flex-shrink-0 mt-1" /> Enables smart automation beyond rule-based systems
            </p>
            <p className="flex gap-2 items-start">
              <Milestone size={25} className="flex-shrink-0 mt-1"/> Reduces operational costs for companies
            </p>

            <p className="flex gap-2 items-start">
              <Milestone size={25} className="flex-shrink-0 mt-1"/> Enhances customer support with AI-powered chat systems
            </p>
            <p className="flex gap-2 items-start">
              <Milestone size={25} className="flex-shrink-0 mt-1"/> Helps in data analysis and faster decision-making
            </p>
            <p className="flex gap-2 items-start">
              <Milestone size={25} className="flex-shrink-0 mt-1"co/> Creates new roles like AI engineers and prompt engineers
            </p>
            
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-b border-gray-700 pb-3">
         Overall, Generative AI is not replacing IT professionals but empowering them to work smarter and focus on innovation. It is shaping the future of IT and becoming essential for companies that want to stay competitive.
        </section>

        {/* Highlight Section */}
        
      </ul>
    </div>
  </section>
</div>

        </BlurUp>
    </main>
  )
}

export default Page