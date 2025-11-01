"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const Background = ({
  src,
}: {
  src: string
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true)
      }

      const handleCanPlay = () => {
        // Try to play the video
        const playPromise = video.play()
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video is playing continuously")
            })
            .catch((error) => {
              console.log("Autoplay prevented:", error)
              // If autoplay fails, we can still show the video
              // User can click to play
            })
        }
      }

      const handleError = (e: Event) => {
        console.error("Video error:", e)
      }

      // Ensure video keeps playing even when tab is not active
      const handleVisibilityChange = () => {
        if (!document.hidden && video.paused) {
          video.play().catch(console.error)
        }
      }

      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("canplay", handleCanPlay)
      video.addEventListener("error", handleError)
      document.addEventListener("visibilitychange", handleVisibilityChange)

      // Force load the video
      video.load()

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("canplay", handleCanPlay)
        video.removeEventListener("error", handleError)
        document.removeEventListener("visibilitychange", handleVisibilityChange)
      }
    }
  }, [src])

  // Add click handler to play video if autoplay failed
  const handleVideoClick = () => {
    const video = videoRef.current
    if (video && video.paused) {
      video.play().catch(console.error)
    }
  }

  const classNames = "absolute bg-background left-0 top-0 w-full h-full object-cover cursor-pointer"

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      controls={false}
      preload="auto"
      className={cn(classNames, {
        "opacity-40": isLoaded,
        "opacity-0": !isLoaded
      })}
      onClick={handleVideoClick}
      style={{
        transition: "opacity 0.3s ease-in-out"
      }}
    />
  )
}