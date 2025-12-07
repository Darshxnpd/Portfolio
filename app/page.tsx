"use client"

import { useState } from "react"
import NavigationMenu from "@/components/navigation-menu"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavigationMenu activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <HeroSection />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          <aside className="md:col-span-1">
            <nav className="space-y-4 sticky top-20">
              {[
                { id: "about", label: "ABOUT" },
                { id: "experience", label: "EXPERIENCE" },
                { id: "skills", label: "SKILLS" },
                { id: "projects", label: "PROJECTS" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`block text-sm font-medium tracking-wider transition-all ${
                    activeSection === item.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  } border-l-2 pl-4 ${activeSection === item.id ? "border-accent" : "border-border"}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="md:col-span-3 space-y-20">
            {activeSection === "about" && <AboutSection />}
            {activeSection === "experience" && <ExperienceSection />}
            {activeSection === "skills" && <SkillsSection />}
            {activeSection === "projects" && <ProjectsSection />}
          </div>
        </div>

        <ContactSection />
      </div>
    </main>
  )
}
