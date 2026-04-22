'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  title: string
  desc: string
  img: string
  tech: string[]
  href: string
  website?: string
  repo: string
  status?: 'live' | 'ongoing'
}

const projects: Project[] = [
  {
    title: 'Bag-Pack Trip Booking Web App',
    desc: 'Book trips with built-in packages & custom trip planning...',
    img: '/bagpacktrips2.png',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    href: '/projects/bagpack',
    website: 'https://bagpacktrips.vercel.app',
    repo: 'https://github.com/Sanketmane135/tripbooking',
    status: 'live',
  },
  {
    title: 'Advanced Steganography',
    desc: 'Hide secret messages inside images using cryptographic techniques...',
    img: '/stegno2.png',
    tech: ['Next.js', 'Tailwind CSS'],
    href: '/projects/stegano',
    website: 'https://stegenography.vercel.app',
    repo: 'https://github.com/Sanketmane135/stegano',
    status: 'live',
  },
  {
    title: 'ResumeIQ',
    desc: 'AI mock interviewer analyzing resumes & voice responses...',
    img: '/aiinterviewer.png',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    href: '/projects/interviewer',
    website: 'https://interviewer-swart.vercel.app',
    repo: 'https://github.com/Sanketmane135/ai-interview',
    status: 'live',
  },
  {
    title: 'AI Powered SEO Assistant',
    desc: 'Analyze and optimize website SEO performance using AI...',
    img: '/seoimg.png',
    tech: ['Next.js', 'Typescript', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    href: '/projects/seo',
    repo: 'https://github.com/Sanketmane135/seo',
    status: 'ongoing',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex justify-center items-center">
      <div className="border border-neutral-800 rounded-xl p-4 w-80 shadow-lg hover:shadow-neutral-700/40 transition-all duration-300">

        <Link href={project.href}>
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
        </Link>

        <Link href={project.href}>
          <h2 className="text-white text-lg font-semibold mb-1">
            {project.title}
          </h2>

          <p className="text-gray-400 text-sm mb-3">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </Link>

        <div className="w-full flex gap-1">

          {project.status === 'ongoing' ? (
            <button className="flex cursor-not-allowed items-center gap-2 text-sm text-gray-200 bg-green-700 border border-neutral-800 hover:bg-green-800 px-3 py-1.5 rounded-md transition">
              Ongoing
            </button>
          ) : (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition"
            >
              website
            </a>
          )}

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

export default function AboutUs1() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const renderedProjects = useMemo(() => {
    return projects.map((project, idx) => (
      <ProjectCard key={project.title || idx} project={project} />
    ))
  }, [])

  return (
    <section className="relative w-full overflow-hidden pt-20">

      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            My Projects
          </h1>

          <p className="text-muted-foreground mt-6 text-xl">
            Projects that helped me grow as a developer
          </p>
        </motion.div>

        {/* Projects */}
        <div ref={ref} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 1, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-3"
          >
            {renderedProjects}
          </motion.div>
        </div>

      </div>
    </section>
  )
}