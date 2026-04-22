'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import {  CornerUpRight, Dot } from 'lucide-react';
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
    Top 5 Mistakes Every Beginner Developer Makes
  </h2>

  {/* Date */}
  <p className="pt-4 flex items-center gap-2 text-base sm:text-lg text-gray-400">
    <MdDateRange size={25} />
    March 2025
  </p>

  {/* Article Container */}
  <section className="border border-gray-700 p-4 sm:p-6 rounded-lg mt-6 bg-gray-900/30">
    {/* Intro */}
    <h2 className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
      <span className="pl-5"></span>
      Every developer starts as a beginner — and mistakes are part of the process. But understanding these early on can save you months of confusion and frustration.
      <br />
      <br />
      Here are the most common beginner developer mistakes and how to avoid them:
    </h2>

    {/* List Section */}
    <div className="pl-3 sm:pl-5 pt-6">
      <ul className="flex flex-col gap-6 md:text-lg text-gray-300">
        {/* Mistake 1 */}
        <section className="border-b border-gray-700 pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Learning Too Many Languages at Once
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Pick one tech stack (for example, HTML, CSS, and JavaScript for web) and stick with it until you can build small projects confidently.
          </p>
        </section>

        {/* Mistake 2 */}
        <section className="border-b border-gray-700 pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Skipping Fundamentals
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Master HTML, CSS, and Vanilla JavaScript first — everything else builds on them.
          </p>
        </section>

        {/* Mistake 3 */}
        <section className="border-b border-gray-700 pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Copy-Pasting Code Without Understanding It
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Always ask yourself “why does this work?” and try to write code from scratch once you understand it.
          </p>
        </section>

        {/* Mistake 4 */}
        <section className="border-b border-gray-700 pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Not Using Git Early
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Learn basic Git commands — commit, push, and pull. Create a GitHub account and upload every project.
          </p>
        </section>

        {/* Mistake 5 */}
        <section className="border-b border-gray-700 pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Giving Up Too Soon
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Remember — every developer, even senior ones, face bugs daily. Be patient, and track your progress instead of perfection.
          </p>
        </section>

        {/* Mistake 6 */}
        <section className="border-b border-gray-700 pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Ignoring Documentation
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Learn to read and understand official documentation (MDN, React Docs, etc.). It builds independence and confidence.
          </p>
        </section>

        {/* Mistake 7 */}
        <section className="pb-4">
          <li className="flex items-center gap-2 font-semibold">
            <Dot /> Not Asking for Help
          </li>
          <p className="pl-5 sm:pl-10 pt-3 flex gap-2 items-start">
            <CornerUpRight size={22} />
            Use communities like Stack Overflow, Reddit, Discord, or GitHub Discussions. The dev community is friendly — everyone has been a beginner once.
          </p>
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