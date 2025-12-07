"use client"

import { FileText } from "lucide-react"

export default function NavigationMenu({ activeSection, setActiveSection }: any) {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch("/images/darshan-didagur-resume-fiuwg.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Darshan-Didagur-Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold">
            D
          </div>
          <span className="font-semibold hidden sm:inline">Darshan Didagur</span>
        </div>

        <button
          onClick={handleResumeDownload}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
        >
          <FileText size={16} />
          <span className="hidden sm:inline">Resume</span>
        </button>
      </div>
    </header>
  )
}
