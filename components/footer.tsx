import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#5362D0] text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src="/placeholder.svg" alt="Logo" width={36} height={36} className="w-9 h-9" />
              <span className="font-bold text-xl">Vikas Gupta</span>
            </Link>
            <p className="text-teal-100 mb-6">
              Your trusted partner in online education. Learn from the best and achieve your goals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-teal-100 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-teal-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-teal-100 hover:text-white">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-teal-100 hover:text-white">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-teal-100 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-teal-100 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-teal-100 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-teal-100 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-100 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-teal-100 mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <Button className="rounded-l-none bg-white text-teal-600 hover:bg-teal-50">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-teal-500 mt-12 pt-8 text-center text-teal-100">
          <p>&copy; {new Date().getFullYear()} Zisaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

