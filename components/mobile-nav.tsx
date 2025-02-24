"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="grid gap-4 py-6">
          <Link href="/courses" className="text-lg font-semibold">
            Courses
          </Link>
          <Link href="#" className="text-lg font-semibold">
            Success Stories
          </Link>
          <Link href="#" className="text-lg font-semibold">
            About Us
          </Link>
          <Link href="#" className="text-lg font-semibold">
            Contact
          </Link>
          <Button className="mt-4">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

