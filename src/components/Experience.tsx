'use client'

import Image from 'next/image'
import React, { useState, useMemo } from 'react'
import BlurUp from './Blurup'

type ExperienceItem = {
  company: string
  role: string
  points: string[]
  img: string
}

type EducationItem = {
  institute: string
  duration: string
  degree: string
  img: string
}

const workData: ExperienceItem[] = [
  {
    company: 'RepliQ.in',
    role: 'Junior developer | Sept 2025 – Feb 2026',
    img: '/repliq.jpeg',
    points: [
      'Assisted to build full-stack Instagram Automation SaaS platform to schedule posts, automate workflows.',
      'Built automation workflows using Instagram Graph API.',
      'Developed secure backend using API routes of Next.js and Express.js to handle automation logic, user authentication, and task scheduling.',
      'Integrated Razorpay for subscriptions & billing.',
      'Managed scaling, performance & product lifecycle.',
    ],
  },
  {
    company: 'Sarathi Foundation',
    role: 'Front-end developer (Freelanced)',
    img: '/sarthi.png',
    points: [
      'Built event-management platform (React + Tailwind).',
      'Improved engagement by 35% across 20+ events.',
    ],
  },
  {
    company: 'Alphinity Soft tech pvt ltd',
    role: 'Intern | Feb – July 2025.',
    img: '/alphiity.jpg',
    points: [
      ' Developed a responsive institute portfolio used by 500+ users, improving load time by 30% using React.js, and Tailwind CSS',
      'Implemented RESTful APIs and backend logic using Node.js and Express.js.',
      'Integrated MongoDB for secure data storage and performed CRUD operations.',
      ' Built reusable UI components and optimized application performance collaborated using Git and GitHub.'
    ],
  },
]

const educationData: EducationItem[] = [
  {
    institute: 'D. Y. Patil Technical Campus, Talsande, Kolhapur',
    duration: '2022 - 2026',
    degree: 'B.Tech in Computer Science & Engineering',
    img: '/dyp.png',
  },
  {
    institute: 'New English School & Junior College of Science, Shirala, Sangli',
    duration: '2020 - 2022',
    degree: ' Higher Secondary Certificate',
    img: '/ness.png',
  },
]

function WorkItem({ item }: { item: ExperienceItem }) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
          <Image src={item.img} alt={item.company} fill className="object-cover" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <h2 className="font-semibold leading-none text-2xl">{item.company}</h2>
        <p className="text-sm text-gray-400">{item.role}</p>

        <ul className="ml-4 list-disc">
          {item.points.map((point, idx) => (
            <li key={idx} className="prose pr-8 text-sm dark:prose-invert">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

function EducationItemCard({ item }: { item: EducationItem }) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
          <Image src={item.img} alt={item.institute} fill className="object-cover" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <time className="text-xs text-gray-400">{item.duration}</time>
        <h2 className="font-semibold leading-none text-2xl">{item.degree}</h2>
        <p className="text-sm text-gray-400">{item.institute}</p>
      </div>
    </li>
  )
}

function Experience() {
  const [tab, setTab] = useState<number>(1)

  const content = useMemo(() => {
    if (tab === 1) {
      return (
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <div className="rounded-lg border border-gray-500 shadow-sm">
            <div className="p-0">
              <ul className="ml-10 border-l border-gray-500">
                {workData.map((item, idx) => (
                  <WorkItem key={item.company || idx} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <BlurUp>
          <div className="rounded-lg border bg-black border-gray-500 text-white shadow-sm">
            <div className="p-0">
              <ul className="ml-10 border-l border-gray-500">
                {educationData.map((item, idx) => (
                  <EducationItemCard key={item.institute || idx} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </BlurUp>
      </div>
    )
  }, [tab])

  return (
    <BlurUp>
      <section className='text-white'>

        <h2 className=" w-full mt-15 p-2 cursor-crosshair font-semibold text-white flex items justify-center sm:text-3xl mb-10 bg-gradient-to-r from-black via-red-500 to-black">
          Professional Experience
        </h2>

        <div className="h-10 items-center justify-center rounded-md bg-slate-900 p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">

          <button
            onClick={() => setTab(1)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  ${tab === 1 ? "bg-gray-800 text-pink-500" : "bg-transparent "} `}
          >
            Work
          </button>

          <button
            onClick={() => setTab(2)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all   ${tab === 2 ? "bg-gray-800 text-pink-500" : "bg-transparent "}  `}
          >
            Education
          </button>

        </div>

        {content}

      </section>
    </BlurUp>
  )
}

export default Experience