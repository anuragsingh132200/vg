"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

