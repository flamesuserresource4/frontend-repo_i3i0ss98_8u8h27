import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#05070c] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something delightful</h2>
        <p className="mt-3 text-white/70">
          I’m open to freelance work, product design/development, and playful experiments. Tell me about your idea.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-black font-semibold px-6 py-3 shadow-lg hover:-translate-y-0.5 transition transform"
          >
            <Mail size={18} /> Say Hello
          </a>
        </div>
      </div>
      <footer className="relative mt-16 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Flames Portfolio. Built with love and a dash of 3D.
      </footer>
    </section>
  );
}
