import Image from "next/image"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">Darshan P Didagur</h1>
            <p className="text-lg text-accent font-medium">Customer Success Engineer | AI & Data Science Enthusiast</p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            As a proactive computer science student, I specialize in data analytics, artificial intelligence, and
            machine learning. I'm passionate about applying technical skills to solve complex challenges and drive
            innovative solutions across various fields.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:darshanpdidagur@gmail.com"
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-lg overflow-hidden border-2 border-accent/20 hover:border-accent/50 transition-colors shadow-lg">
            <Image src="/images/darshan.jpg" alt="Darshan Didagur" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
