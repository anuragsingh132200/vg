"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { PlayCircle, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import VideoModal from "@/components/video-modal"

const YOUTUBE_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "Introduction to Mathematics",
    description: "Learn the basics of mathematics with our expert instructors.",
  },
  {
    id: "8bNlffXEXF0",
    title: "Advanced Algebra",
    description: "Master advanced algebraic concepts and problem-solving techniques.",
  },
  {
    id: "RF5_MPSNAtU",
    title: "Geometry Fundamentals",
    description: "Explore the world of geometry with practical examples.",
  },
  {
    id: "pTn6Ewhb27k",
    title: "Calculus Made Easy",
    description: "Understand calculus concepts through simple explanations.",
  },
  { id: "8mAITcNt710", title: "Statistics Basics", description: "Get started with statistics and data analysis." },
]

const TUTOR_BOOKS = [
  {
    title: "Mastering Mathematics: A Comprehensive Guide",
    description: "A complete guide to mastering mathematics from basic to advanced levels.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=750&fit=crop",
    price: "$39.99",
  },
  {
    title: "Problem Solving Strategies in Mathematics",
    description: "Learn effective strategies to tackle complex mathematical problems.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=750&fit=crop",
    price: "$34.99",
  },
  {
    title: "The Art of Mathematical Thinking",
    description: "Develop critical thinking skills through mathematical reasoning.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=750&fit=crop",
    price: "$29.99",
  },
]

const COURSES = [
  {
    id: "chatgpt-complete-guide",
    title: "ChatGPT Complete Guide: Learn Generative AI & More",
    instructors: ["Julian Melanson", "Renza Maman", "Leap Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    rating: 4.5,
    reviews: 44617,
    price: 2649,
    originalPrice: 8999,
    badges: ["Premium", "Bestseller"],
  },
  {
    id: "ai-copywriting",
    title: "The Complete AI-Powered Copywriting Course & ChatGPT",
    instructors: ["Ing. Tomas Moravek", "Learn Digital with Tomas"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=750&fit=crop",
    rating: 4.3,
    reviews: 1752,
    price: 3099,
    originalPrice: 9999,
    badges: ["Premium"],
  },
  {
    id: "marketing-tools",
    title: "ChatGPT, Midjourney, Gemini, DeepSeek: Marketing Tools",
    instructors: ["Anton Voroniuk", "Anton Voroniuk Support"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=750&fit=crop",
    rating: 4.4,
    reviews: 487,
    price: 889,
    originalPrice: 3999,
    badges: ["Premium"],
  },
]

const STUDY_MATERIALS = [
  {
    title: "JEE Main Previous Year Papers",
    description: "Download JEE Main Previous Year Papers with solutions",
    type: "PDF",
    icon: FileText,
    iconColor: "text-green-500",
  },
  {
    title: "JEE Advanced Previous Year Papers",
    description: "Download JEE Advanced Previous Year Papers with solutions",
    type: "PDF",
    icon: FileText,
    iconColor: "text-orange-500",
  },
]

const TESTIMONIAL_VIDEOS = [
  {
    id: "hBh_CC5y8-s",
    title: "How I Cracked JEE Advanced",
    author: "Rahul Sharma",
    role: "IIT Delhi Student",
  },
  {
    id: "0PAMqxFIn-U",
    title: "My Journey to IIT Bombay",
    author: "Priya Patel",
    role: "IIT Bombay Student",
  },
  {
    id: "YN7BdC3r_vU",
    title: "Success Story: From Average to AIR 1",
    author: "Amit Kumar",
    role: "IIT Madras Student",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How to Prepare for JEE Mains",
    author: "Neha Singh",
    role: "JEE Mentor",
  },
  {
    id: "8bNlffXEXF0",
    title: "Tips for JEE Advanced Preparation",
    author: "Dr. Rajesh Kumar",
    role: "Senior Faculty",
  },
]

export default function Page() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-scroll testimonials with improved behavior
  useEffect(() => {
    const interval = setInterval(() => {
      if (!testimonialsRef.current) return

      const nextIndex = (currentTestimonial + 1) % TESTIMONIAL_VIDEOS.length
      setCurrentTestimonial(nextIndex)

      testimonialsRef.current.scrollTo({
        left: nextIndex * (testimonialsRef.current.clientWidth / 2.5),
        behavior: "smooth",
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentTestimonial])

  // Add this function to handle manual navigation
  const scrollToTestimonial = (index: number) => {
    if (!testimonialsRef.current) return
    setCurrentTestimonial(index)
    testimonialsRef.current.scrollTo({
      left: index * (testimonialsRef.current.clientWidth / 2.5),
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Remove the progress bar */}

      {/* Update Hero Section - remove scroll animations */}
      <section
        className="relative pt-20 overflow-hidden bg-gradient-to-br from-[#5362D0] to-[#5362D0]"
        style={{
          backgroundImage: "linear-gradient(rgba(83, 98, 208, 0.5), rgba(83, 98, 208, 0.5)), url('/dsc_0794.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 pt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <p className="text-white text-lg">Your Online Learning Partner</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Learn, Grow, and
                <br />
                Achieve with
                <br />
                <span className="text-white">Expert Guidance</span>
              </h1>
              <p className="text-white text-lg max-w-xl">
                Access high-quality courses anytime, anywhere, and take control of your learning journey with ease.
              </p>
              <Button size="lg" className="bg-white hover:bg-gray-200 text-[#5362D0] font-bold px-8 text-lg h-12">
                Get Started Now
              </Button>

              <div className="pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop"
                      width={55}
                      height={55}
                      alt="Student"
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop"
                      width={55}
                      height={55}
                      alt="Student"
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
                      width={55}
                      height={55}
                      alt="Student"
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">4.8</div>
                    <div className="text-teal-50/90">Student Review</div>
                    <div className="text-teal-50/75 text-xs">Based on more than 10,000 feedbacks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/maxresdefault-Photoroom (1)-Photoroom (1).png"
                alt="Hero"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-8 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                <div className="text-3xl font-bold">1200+</div>
                <div className="text-sm">Total Courses</div>
              </div>
              <div className="absolute bottom-32 right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                <div className="text-3xl font-bold">400+</div>
                <div className="text-sm">Total Instructors</div>
              </div>
              <div className="absolute bottom-48 left-[-70px] bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                <div className="text-3xl font-bold">20,000+</div>
                <div className="text-sm">Total Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update other sections - remove scroll animations */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of courses designed to help you master mathematics and advance your career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, index) => (
              <div key={course.id} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={`/courses/${course.id}`}>
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <div className="relative h-[200px]">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {course.badges.length > 0 && (
                        <div className="absolute top-2 left-2 flex gap-2">
                          {course.badges.map((badge) => (
                            <Badge
                              key={badge}
                              variant={badge === "Bestseller" ? "secondary" : "default"}
                              className={`${badge === "Premium" ? "bg-[#5362D0]" : "bg-yellow-500"} text-white font-medium`}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{course.instructors.join(", ")}</p>
                      <div className="flex items-center gap-1 mb-2">
                        <span className="font-bold text-yellow-500">{course.rating}</span>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">({course.reviews.toLocaleString()})</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold">₹{course.price}</span>
                        <span className="text-gray-500 line-through text-sm">₹{course.originalPrice}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Video Lectures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our comprehensive video lectures that break down complex mathematical concepts into simple,
              understandable parts.
            </p>
          </div>
          <div className="grid gap-6">
            {YOUTUBE_VIDEOS.map((video, i) => (
              <div key={i}>
                <Card
                  className="group p-4 bg-white border-gray-100 hover:border-teal-200 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="flex gap-6">
                    <div className="relative w-64 h-36 flex-shrink-0">
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl group-hover:bg-black/40 transition-colors">
                        <PlayCircle className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className="py-2">
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{video.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Study Materials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access a variety of study materials to support your learning journey and reinforce key concepts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STUDY_MATERIALS.map((material, i) => (
              <div key={i}>
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-2">
                    <material.icon className={`w-8 h-8 ${material.iconColor}`} />
                    <h3 className="font-semibold text-lg">{material.title}</h3>
                    <p className="text-gray-600 text-sm">{material.description}</p>
                    <Link href="#" className="inline-flex items-center text-[#5362D0] hover:underline mt-2">
                      Download
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Testimonials section - simplify animations */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students about their learning journey and achievements.
            </p>
          </div>
          <div className="relative">
            <div ref={testimonialsRef} className="flex gap-6 overflow-x-hidden scroll-smooth">
              {TESTIMONIAL_VIDEOS.map((video, i) => (
                <motion.div
                  key={i}
                  className="flex-none w-[300px] md:w-[400px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-[#5362D0]"
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="relative h-[225px]">
                        <Image
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="bg-[#5362D0]/90 p-4 rounded-full"
                          >
                            <PlayCircle className="w-10 h-10 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-3 line-clamp-1 group-hover:text-[#5362D0] transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#5362D0]/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#5362D0]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{video.author}</p>
                          <p className="text-sm text-gray-600">{video.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIAL_VIDEOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === i ? "bg-[#5362D0] w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() =>
                scrollToTestimonial(currentTestimonial === 0 ? TESTIMONIAL_VIDEOS.length - 1 : currentTestimonial - 1)
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() =>
                scrollToTestimonial(currentTestimonial === TESTIMONIAL_VIDEOS.length - 1 ? 0 : currentTestimonial + 1)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-sm transition-all"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal remains the same */}
      <VideoModal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} videoId={selectedVideo || ""} />
    </div>
  )
}
;<style jsx global>{`
  .scroll-smooth {
    scroll-behavior: smooth;
  }
`}</style>

