import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="antialiased selection:bg-cyan-300 selection:text-black">
      <Navbar />
      <main>
        <Hero3D />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
