'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import BlurUp from './Blurup'

type ProjectType = {
  title: string
  desc: string
  img: string
  tech: string[]
  website: string
  repo: string
}

const projects: ProjectType[] = [
  {
    title: 'Bag-Pack Trips Booking Web App',
    desc: 'This is used to book and plan trips where you can book trip from build in packages and also provide custom trip booking facility',
    img: '/bagpacktrips2.png',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    website: 'https://bagpacktrips.vercel.app',
    repo: 'https://github.com/Sanketmane135/tripbooking',
  },
  {
    title: 'Advanced steganography for image encoding and decoding',
    desc: 'It takes input like image and hide(encode) secret messages within images using cutting-edge cryptographic techniques after',
    img: '/stegno2.png',
    tech: ['Next.js', 'Tailwind CSS'],
    website: 'https://stegenography.vercel.app',
    repo: 'https://github.com/Sanketmane135/stegano',
  },
]

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" border border-neutral-800 rounded-xl p-4 w-80 shadow-lg hover:shadow-neutral-700/40 transition-all duration-300">

        <div className="rounded-lg overflow-hidden mb-4 w-full h-40">
          <Image
            src={project.img}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        <h2 className="text-white text-lg font-semibold mb-1">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm mb-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full flex gap-1">

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
            website
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition"
          >
            Repo
          </a>

        </div>
      </div>
    </div>
  )
}

function Project() {

  const renderedProjects = useMemo(() => {
    return projects.map((project, idx) => (
      <ProjectCard key={project.title || idx} project={project} />
    ))
  }, [])

  return (
    <BlurUp>
      <section className="flex relative flex-col gap-8">

        <div
          className="absolute inset-0 mx-auto h-30 md:h-64  z-[-1] max-w-xs blur-[118px]"
          style={{
            background:
              'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
          }}
        ></div>

        <div className="flex justify-between">
          <h2 className=" w-full  p-2 cursor-crosshair font-semibold text-white flex items justify-center sm:text-3xl mt-10 bg-gradient-to-r from-black via-red-500 to-black">
            Featured Projects
          </h2>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2  gap-2">
          {renderedProjects}
        </section>

        <a
          href={"/projects"}
          className=" w-full p-2 link border border-gray-600 rounded flex items-center justify-center  gap-2 font-light"
        >
          <span className='text-white'>VIEW MORE</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999">
            <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
          </svg>
        </a>

      </section>
    </BlurUp>
  )
}

export default Project