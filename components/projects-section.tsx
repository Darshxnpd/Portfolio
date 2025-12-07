export default function ProjectsSection() {
  const projects = [
    {
      title: "Clever Learn: AI-Powered Interactive Learning Assistant",
      date: "09/2024 - 01/2025",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Supabase", "OpenAI API", "Gemini API"],
      description:
        "An AI-powered learning assistant that enables users to engage with PDF content through intelligent queries. Leveraged Supabase for secure data handling and storage.",
    },
    {
      title: "Fitness Fizz: AI-Powered Nutrition and Fitness System",
      date: "06/2024 - 08/2024",
      tech: ["Google Gemini AI", "Streamlit", "Python"],
      description:
        "Developed a personalized wellness system providing customized health recommendations, detailed meal plans, and fitness metrics to optimize user health outcomes.",
    },
    {
      title: "AutoHelp: Smart Vehicle Diagnostic App",
      date: "06/2024 - 06/2024",
      tech: ["React Native", "Google Gemini AI", "Firebase"],
      description:
        "Revolutionized automotive care with an intuitive vehicle diagnostics application providing maintenance advice and actionable solutions.",
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-balance">Featured Projects</h2>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-secondary rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{project.date}</span>
            </div>

            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
