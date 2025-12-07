export default function ExperienceSection() {
  const experiences = [
    {
      title: "Customer Success Engineer",
      company: "Plivo",
      period: "3 months",
      description:
        "Ensuring customer satisfaction and driving business growth through technical expertise and proactive support.",
      highlights: [
        "Resolved complex customer issues with technical proficiency",
        "Maintained strong relationships with key accounts",
        "Contributed to product feedback and improvement initiatives",
      ],
    },
    {
      title: "AI & Machine Learning Specialist",
      company: "Personal Projects & Research",
      period: "Ongoing",
      description:
        "Developing innovative AI-powered solutions and contributing to research in automotive diagnostics and wellness systems.",
      highlights: [
        "Built AI-powered learning assistants with Supabase integration",
        "Developed personalized nutrition and fitness systems using Gemini AI",
        "Created smart vehicle diagnostic applications",
      ],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-balance">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-accent/30 pl-6 pb-8 last:pb-0">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
            </div>

            <p className="text-accent font-medium mb-3">{exp.company}</p>

            <p className="text-muted-foreground mb-4">{exp.description}</p>

            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
