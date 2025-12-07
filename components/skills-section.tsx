export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "C++", "SQL"],
    },
    {
      category: "Web Development",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "AI & Data Science",
      skills: ["Machine Learning", "Data Analytics", "Data Visualization", "OpenAI GPT", "Google Gemini", "Streamlit"],
    },
    {
      category: "Databases & Tools",
      skills: ["Supabase", "Firebase", "DBMS", "Git", "React Native"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Teamwork", "Critical Thinking", "Leadership"],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-balance">Skills & Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-secondary rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-background rounded-full text-sm text-foreground border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
