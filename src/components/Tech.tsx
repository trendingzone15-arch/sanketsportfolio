'use client'

import React, { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import BlurUp from './Blurup'

type SkillItem = {
  name: string
  img: string
}

const frontendSkills: SkillItem[] = [
  { name: 'Typescript', img: '/typescript.png' },
  { name: 'Javascript', img: '/javascript.png' },
  { name: 'React.js', img: '/react.png' },
  { name: 'Next.js', img: '/next.png' },
  { name: 'Tailwind CSS', img: '/telwind.png' },
]

const backendSkills: SkillItem[] = [
  { name: 'MongoDB', img: '/mongo.png' },
  { name: 'Django', img: '/django.png' },
  { name: 'Node.js', img: '/node.png' },
  { name: 'Fast API', img: '/FastAPI.png' },
  { name: 'Python', img: '/python.png' },
  { name: 'Express.js', img: '/express2.png' },
  { name: 'PL SQL', img: '/plsql.png' },
  { name: 'Postgre SQL', img: '/postgre.png' },
]

const otherSkills: SkillItem[] = [
  { name: 'Git & GitHub', img: '/git.png' },
  { name: 'Vs Code', img: '/vs2.png' },
  { name: 'Postman', img: '/Postman.png' },
]

function Tech() {
  const [value, setValue] = useState<number>(1)

  const renderSkills = useCallback((skills: SkillItem[]) => {
    return (
      <section className="px-1 text-white md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
        {skills.map((skill, index) => (
          <BlurUp key={index}>
            <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
              <Image
                src={skill.img}
                width={40}
                height={40}
                alt={skill.name}
                loading="lazy"
              />
              <h3>{skill.name}</h3>
            </div>
          </BlurUp>
        ))}
      </section>
    )
  }, [])

  const content = useMemo(() => {
    switch (value) {
      case 1:
        return renderSkills(frontendSkills)
      case 2:
        return renderSkills(backendSkills)
      case 3:
        return renderSkills(otherSkills)
      default:
        return <h1>No skill selected</h1>
    }
  }, [value, renderSkills])

  return (
    <BlurUp>
      <section className='relative overflow-hidden '>
        <div
          className="absolute inset-0  mx-auto h-60 z-[-1] max-w-xs blur-[130px]"
          style={{
            background:
              'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
          }}
        ></div>

        <h2 className=" w-full  p-2 cursor-crosshair font-semibold text-white flex items justify-center sm:text-3xl mb-10 bg-gradient-to-r from-black via-red-500 to-black">
          Tech Stack
        </h2>

        <div className="h-10  items-center justify-center rounded-md bg-gray-950 p-1 text-muted-foreground mb-2 grid w-full grid-cols-3">

          <button
            onClick={() => setValue(1)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  ${value === 1 ? "bg-slate-800 text-pink-500" : "bg-transparent "} `}
          >
            Frontend
          </button>

          <button
            onClick={() => setValue(2)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  ${value === 2 ? "bg-slate-800 text-pink-500" : "bg-transparent "} `}
          >
            Backend
          </button>

          <button
            onClick={() => setValue(3)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded -sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all ${value === 3 ? "bg-slate-800 text-pink-500" : "bg-transparent "} `}
          >
            Other
          </button>

        </div>

        {content}
      </section>
    </BlurUp>
  )
}

export default Tech