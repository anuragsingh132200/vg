import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
    image: "https://images.unsplash.com/photo-1678483789107-0029c61fdcca?w=800&h=450&fit=crop",
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
    image: "https://images.unsplash.com/photo-1684163761883-e384bd307f05?w=800&h=450&fit=crop",
    rating: 4.4,
    reviews: 487,
    price: 889,
    originalPrice: 3999,
    badges: ["Premium"],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-white mb-4">Our Courses</h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl">
            Browse our comprehensive selection of courses designed to help you achieve your learning goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
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
                          className={`${badge === "Premium" ? "bg-primary" : "bg-yellow-500"} text-white font-medium`}
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
          ))}
        </div>
      </div>
    </div>
  )
}

