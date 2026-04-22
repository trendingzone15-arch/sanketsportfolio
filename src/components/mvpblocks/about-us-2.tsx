'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '../ui/button'
import {
  Ban,
  Brain,
  ChartNoAxesCombined,
  Rocket,
} from 'lucide-react'

type Blog = {
  title: string
  desc: string
  date: string
  href: string
  Icon: React.ComponentType<{ className?: string }>
  beamColor: string
  iconColor: string
  iconBg: string
}

const blogs: Blog[] = [
  {
    title: 'How Generative AI Is Taking Over the IT Market',
    desc: 'Generative AI is quickly becoming a core part of the IT industry...',
    date: 'Jan 2026',
    href: '/blogs/generativeai',
    Icon: ChartNoAxesCombined,
    beamColor: 'from-transparent via-orange-500/40 to-transparent',
    iconColor: 'text-orange-500',
    iconBg: 'from-blue-500/20 to-blue-500/5',
  },
  {
    title: 'Will AI Replace Developers?',
    desc: 'AI is transforming industries faster than ever...',
    date: 'Sept 2025',
    href: '/blogs/ai',
    Icon: Brain,
    beamColor: 'from-transparent via-blue-500/40 to-transparent',
    iconColor: 'text-blue-500',
    iconBg: 'from-blue-500/20 to-blue-500/5',
  },
  {
    title: 'Top 5 Mistakes Every Beginner Developer Makes',
    desc: 'Focus on one stack first...',
    date: 'March 2025',
    href: '/blogs/mistakes',
    Icon: Ban,
    beamColor: 'from-transparent via-pink-400/40 to-transparent',
    iconColor: 'text-pink-500',
    iconBg: 'from-pink-500/20 to-blue-500/5',
  },
  {
    title: 'Beginner Developer Guide 2025',
    desc: 'Start your dev journey the right way...',
    date: 'Jan 2025',
    href: '/blogs/beginners',
    Icon: Rocket,
    beamColor: 'via-primary/40 from-transparent to-transparent',
    iconColor: 'text-primary',
    iconBg: 'from-primary/20 to-primary/5',
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

      <p className="text-muted-foreground text-lg mb-1">
        {blog.desc}
      </p>

      <h3 className="text-gray-400 border-b-2">
        {blog.date}
      </h3>

      <a href={blog.href}>
        <Button variant="outline" className="mt-3">
          Read Out
        </Button>
      </a>
    </motion.div>
  )
}

export default function BlogsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const renderedBlogs = useMemo(() => {
    return blogs.map((blog, idx) => (
      <BlogCard key={blog.title || idx} blog={blog} />
    ))
  }, [])

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">

      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-4">Read Out</Badge>

          <h1 className="text-4xl font-bold sm:text-5xl">
            The Featured Blogs
          </h1>

          <p className="text-muted-foreground mt-4 text-xl">
            Where beginners learn, and experts stay inspired
          </p>
        </div>

        {/* Blogs */}
        <div ref={ref} className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="grid gap-12 md:grid-cols-2"
          >
            {renderedBlogs}
          </motion.div>
        </div>

      </div>
    </section>
  )
}