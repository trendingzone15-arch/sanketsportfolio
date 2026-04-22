'use client'

import React, { useRef, useMemo } from 'react'
import { BorderBeam } from '@/components/ui/border-beam'
import { motion, useInView } from 'framer-motion'
import {
  Ban,
  ChartNoAxesCombined,
} from 'lucide-react'
import { Button } from './ui/button'

type Blog = {
  title: string
  desc: string
  date: string
  href: string
  Icon: React.ComponentType<{ className?: string }>
  beamColor: string
  iconBg: string
  iconColor: string
}

const blogs: Blog[] = [
  {
    title: 'How Generative AI Is Taking Over the IT Market',
    desc: 'Generative AI is quickly becoming a core part of the IT industry. It is changing how software is developed...',
    date: 'Jan 2026',
    href: '/blogs/generativeai',
    Icon: ChartNoAxesCombined,
    beamColor: 'from-transparent via-orange-500/40 to-transparent',
    iconBg: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Top 5 Mistakes Every Beginner Developer Makes',
    desc: 'Learning too many languages at once. Focus on one stack first...',
    date: 'March 2025',
    href: '/blogs/mistakes',
    Icon: Ban,
    beamColor: 'from-transparent via-pink-400/40 to-transparent',
    iconBg: 'from-pink-500/20 to-blue-500/5',
    iconColor: 'text-pink-500',
  },
]

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
    >
      <BorderBeam
        duration={8}
        size={300}
        className={blog.beamColor}
        reverse
      />

      <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${blog.iconBg} backdrop-blur-sm`}>
        <blog.Icon className={`h-8 w-8 ${blog.iconColor}`} />
      </div>

      <h2 className="mb-4 bg-gradient-to-r from-yellow-500/90 to-orange-500/70 bg-clip-text text-3xl font-bold text-transparent">
        {blog.title}
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed mb-1">
        {blog.desc}
      </p>

      <h3 className='text-gray-400 border-b-2 mt-1'>
        {blog.date}
      </h3>

      <a href={blog.href}>
        <Button variant={'outline'} className='mt-3'>
          Read Out
        </Button>
      </a>
    </motion.div>
  )
}

function Blogs() {
  const sectionRef = useRef(null)

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  })

  const renderedBlogs = useMemo(() => {
    return blogs.map((blog, idx) => (
      <BlogCard key={blog.title || idx} blog={blog} />
    ))
  }, [])

  return (
    <section ref={sectionRef} className="relative mx-auto mb-24 max-w-7xl">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="relative z-10 grid gap-12 md:grid-cols-2 mb-5"
      >
        {renderedBlogs}
      </motion.div>

      <a
        href={"/blogs"}
        className=" w-full p-2 link border border-gray-600 rounded flex items-center justify-center  gap-2 font-light"
      >
        <span className='text-white'>VIEW MORE</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999">
          <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
        </svg>
      </a>

    </section>
  )
}

export default Blogs