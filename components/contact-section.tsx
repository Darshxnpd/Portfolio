import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-balance">Get In Touch</h2>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          connect or discuss how I can help with your technical challenges.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:darshanpdidagur@gmail.com"
            className="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors group"
          >
            <Mail className="text-accent group-hover:scale-110 transition-transform" size={20} />
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">darshanpdidagur@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+916360925865"
            className="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-lg">📱</div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="font-medium">+91 6360925865</div>
            </div>
          </a>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors text-sm font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors text-sm font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
