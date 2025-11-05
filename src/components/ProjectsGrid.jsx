import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neon HUD Dashboard",
    description: "A reactive dashboard with glassmorphism and real-time charts.",
    tags: ["React", "Tailwind", "D3"],
    live: "#",
    code: "#",
  },
  {
    title: "3D Product Showcase",
    description: "WebGL-powered interactive product explorer with Spline.",
    tags: ["Spline", "Three.js", "UX"],
    live: "#",
    code: "#",
  },
  {
    title: "AI Portfolio Assistant",
    description: "Chat-driven content editor for designers.",
    tags: ["FastAPI", "OpenAI", "MongoDB"],
    live: "#",
    code: "#",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative bg-[#070b12] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-white/70">A selection of playful experiments and real-world builds.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/[0.06]"
            >
              <div className="h-36 w-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 border border-white/10" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] tracking-wide rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1 text-cyan-300 text-sm hover:text-cyan-200"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={p.code}
                  className="inline-flex items-center gap-1 text-white/70 text-sm hover:text-white"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
