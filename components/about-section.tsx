export default function AboutSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-balance">About</h2>

      <div className="space-y-6">
        <p className="text-base text-muted-foreground leading-relaxed">
          I'm a B.E. Computer Science student specializing in Data Science from New Horizon College of Engineering,
          Bengaluru, with a strong CGPA of 9.59. My academic journey has equipped me with a robust foundation in
          programming, AI, and machine learning technologies.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          Currently, I'm working as a Customer Success Engineer at Plivo, where I leverage my technical and
          communication skills to ensure customer satisfaction and drive business growth. My passion lies at the
          intersection of technology and problem-solving, creating innovative solutions that make a real impact.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          I have co-authored multiple research papers and patents on AI-driven systems, IoT applications, and innovative
          hardware designs. Beyond work, I actively participate in hackathons and competitions, consistently achieving
          top placements.
        </p>

        <div className="pt-4 grid grid-cols-2 gap-4">
          <div className="p-4 bg-secondary rounded-lg border border-border">
            <div className="text-2xl font-bold text-accent mb-1">11</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-4 bg-secondary rounded-lg border border-border">
            <div className="text-2xl font-bold text-accent mb-1">3</div>
            <div className="text-sm text-muted-foreground">Research Publications</div>
          </div>
        </div>
      </div>
    </section>
  )
}
