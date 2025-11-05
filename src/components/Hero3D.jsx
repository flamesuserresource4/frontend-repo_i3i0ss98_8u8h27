import Spline from "@splinetool/react-spline";
import { Rocket } from "lucide-react";

export default function Hero3D() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#04060a] via-[#0a0f17] to-[#0b1220] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* subtle gradient vignette that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} className="text-cyan-300" />
            Interactive 3D Portfolio
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Tech-forward designer & developer crafting playful, modern experiences
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Explore featured work, experiments, and case studies. The hero is fully interactive — drag, orbit, and play with the 3D scene.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 text-black font-semibold px-5 py-3 shadow-lg shadow-cyan-400/30 hover:-translate-y-0.5 transition transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/90 px-5 py-3 hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
