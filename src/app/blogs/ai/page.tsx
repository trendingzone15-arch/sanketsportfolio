'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import {  CornerUpRight, Dot, Highlighter } from 'lucide-react';
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
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
    Will AI Replace Developers? The Truth Behind the Hype
  </h2>

  <p className="pt-4 flex items-center gap-2 text-base sm:text-lg text-gray-400">
    <MdDateRange size={25} />
    Sept 2025
  </p>

  <section className="border border-gray-700 p-4 sm:p-6 rounded-lg mt-6 bg-gray-900/30">
    <h2 className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
      <span className="pl-5"></span>
      Artificial Intelligence (AI) is transforming industries faster than ever—from automating customer
      support to writing code with tools like GitHub Copilot and ChatGPT. This rapid growth raises a big
      question in every developer’s mind: “Will AI replace human developers?”
    </h2>

    <div className="pl-3 sm:pl-5 pt-5">
      <ul className="flex flex-col gap-4 md:text-lg text-gray-300">
        {/* Section 1 */}
        <section className="border-b border-gray-700 pb-3">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> What AI Can Do in Software Development
          </li>
          <div className="pl-5 sm:pl-10 pt-3 space-y-3">
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Suggest code completions and fix errors automatically
            </p>
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Generate functions, test cases, and even small apps from prompts
            </p>
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Help with debugging, documentation, and code review
            </p>
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Automate repetitive or boilerplate coding tasks
            </p>
            <h3 className="pt-2 text-gray-400 italic">
              In short, AI acts like a super-assistant for developers, saving hours of manual work.
            </h3>
          </div>
        </section>

        {/* Section 2 */}
        <section className="border-b border-gray-700 pb-3">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> What AI Can’t Do
          </li>
          <div className="pl-5 sm:pl-10 pt-3 space-y-3">
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Complex system design and architecture decisions
            </p>
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Understanding vague client requirements
            </p>
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Writing code that involves deep business logic or innovation
            </p>
            <p className="flex gap-2 items-start">
              <CornerUpRight size={25} /> Ethical decision-making and trade-offs
            </p>
            <h3 className="pt-2 text-gray-400 italic">That’s where human developers shine.</h3>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="pb-3">
          <li className="flex items-center gap-2 text-yellow-500 font-bold text-lg">
            <Highlighter color="red" /> AI is here to stay, but it’s not here to replace you.
          </li>
        </section>
      </ul>
    </div>
  </section>
</div>

        </BlurUp>
    </main>
  )
}

export default Page