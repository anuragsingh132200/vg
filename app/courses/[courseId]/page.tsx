"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  CheckCircle,
  Clock,
  Globe,
  GraduationCap,
  Languages,
  PlayCircle,
  Star,
  Subtitles,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const COURSE_DATA = {
  "chatgpt-complete-guide": {
    title: "ChatGPT Complete Guide: Learn Generative AI & More",
    subtitle:
      "Master ChatGPT, Midjourney, DALL-E & other AI tools. Create content, art & code. Boost productivity & transform your career!",
    rating: 4.5,
    reviews: 44617,
    students: 225890,
    price: 2649,
    originalPrice: 8999,
    lastUpdated: "January 2024",
    language: "English",
    subtitles: ["English", "Spanish", "French", "German"],
    instructor: {
      name: "Dr. Sarah Johnson",
      title: "AI Research Scientist & Educator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      students: 458920,
      rating: 4.8,
      reviews: 162480,
      courses: 12,
    },
    whatYouWillLearn: [
      "Master ChatGPT for content creation, coding, and problem-solving",
      "Create stunning AI art with Midjourney and DALL-E",
      "Understand AI capabilities and limitations",
      "Build AI-powered workflows and automation",
      "Write effective prompts for optimal results",
      "Apply AI tools in business and personal projects",
      "Stay ahead of AI trends and developments",
      "Implement AI safety and ethical practices",
    ],
    requirements: [
      "No prior AI or technical experience needed",
      "Basic computer skills and internet access",
      "Willingness to learn and experiment with AI tools",
    ],
    content: [
      {
        title: "Getting Started with ChatGPT",
        items: [
          {
            title: "Welcome to the Course",
            duration: "5:22",
            type: "video",
            isPreview: true,
          },
          {
            title: "What is ChatGPT?",
            duration: "10:15",
            type: "video",
          },
          {
            title: "Setting Up Your Account",
            duration: "7:45",
            type: "video",
          },
        ],
      },
      {
        title: "Mastering Prompts",
        items: [
          {
            title: "Prompt Engineering Basics",
            duration: "15:30",
            type: "video",
          },
          {
            title: "Advanced Prompt Techniques",
            duration: "12:45",
            type: "video",
          },
          {
            title: "Practice Exercise",
            type: "exercise",
          },
        ],
      },
      {
        title: "AI Art Creation",
        items: [
          {
            title: "Introduction to Midjourney",
            duration: "8:55",
            type: "video",
          },
          {
            title: "DALL-E Masterclass",
            duration: "14:20",
            type: "video",
          },
          {
            title: "Art Project",
            type: "project",
          },
        ],
      },
    ],
  },
}

export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const [selectedTab, setSelectedTab] = useState("overview")
  const course = COURSE_DATA[params.courseId]

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Course Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{course.subtitle}</p>
              <div className="flex items-center gap-4 text-sm mb-4">
                <div className="flex items-center">
                  <span className="font-bold text-yellow-500 mr-1">{course.rating}</span>
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
                  <span className="text-primary ml-1">({course.reviews.toLocaleString()} ratings)</span>
                </div>
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Last updated {course.lastUpdated}
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  {course.language}
                </div>
                <div className="flex items-center gap-1">
                  <Subtitles className="w-4 h-4" />
                  {course.subtitles.length} subtitles
                </div>
              </div>
            </div>
            <Card className="p-6">
              <div className="relative aspect-video mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop"
                  alt={course.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="gap-2">
                    <PlayCircle className="w-5 h-5" />
                    Preview Course
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold">₹{course.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                </div>
                <Button className="w-full text-lg" size="lg">
                  Enroll Now
                </Button>
                <p className="text-center text-sm text-gray-500">30-Day Money-Back Guarantee</p>
                <div className="space-y-2 pt-4">
                  <h3 className="font-bold">This course includes:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-gray-600" />
                      <span>14 hours on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-gray-600" />
                      <span>25 articles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-gray-600" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-gray-600" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-gray-600" />
                      <span>Projects and exercises</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* What you'll learn */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, i) => (
                      <div key={i} className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Requirements */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {course.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Course Content</h2>
                    <p className="text-sm text-gray-600">
                      {course.content.reduce((acc, section) => acc + section.items.length, 0)} lessons •{" "}
                      {course.content.reduce(
                        (acc, section) =>
                          acc +
                          section.items.reduce(
                            (sectionAcc, item) =>
                              sectionAcc + (item.duration ? Number.parseInt(item.duration.split(":")[0]) : 0),
                            0,
                          ),
                        0,
                      )}{" "}
                      hours total
                    </p>
                  </div>
                  <Button variant="outline">Expand All</Button>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {course.content.map((section, sectionIndex) => (
                    <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between items-center w-full pr-4">
                          <div className="font-bold">{section.title}</div>
                          <div className="text-sm text-gray-600">
                            {section.items.length} lessons •{" "}
                            {section.items.reduce(
                              (acc, item) => acc + (item.duration ? Number.parseInt(item.duration.split(":")[0]) : 0),
                              0,
                            )}{" "}
                            hours
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                {item.type === "video" ? (
                                  <PlayCircle className="w-5 h-5 text-gray-600" />
                                ) : item.type === "exercise" ? (
                                  <BookOpen className="w-5 h-5 text-gray-600" />
                                ) : (
                                  <Trophy className="w-5 h-5 text-gray-600" />
                                )}
                                <span className="font-medium">{item.title}</span>
                                {item.isPreview && (
                                  <Badge variant="outline" className="ml-2">
                                    Preview
                                  </Badge>
                                )}
                              </div>
                              {item.duration && <span className="text-sm text-gray-600">{item.duration}</span>}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="instructor">
                <Card className="p-6">
                  <div className="flex items-start gap-6">
                    <Image
                      src={course.instructor.image || "/placeholder.svg"}
                      alt={course.instructor.name}
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-xl font-bold mb-2">{course.instructor.name}</h2>
                      <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>
                            {course.instructor.rating} Instructor Rating ({course.instructor.reviews.toLocaleString()}{" "}
                            reviews)
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-gray-600" />
                          <span>{course.instructor.students.toLocaleString()} Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PlayCircle className="w-4 h-4 text-gray-600" />
                          <span>{course.instructor.courses} Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6">
                  <div className="flex items-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-yellow-500 mb-2">{course.rating}</div>
                      <div className="flex justify-center mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">Course Rating</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-4">
                          <div className="flex items-center gap-1 w-20">
                            {Array.from({ length: stars }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <Progress
                            value={
                              ((stars === 5 ? 35000 : stars === 4 ? 8000 : stars === 3 ? 1000 : 400) / course.reviews) *
                              100
                            }
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

