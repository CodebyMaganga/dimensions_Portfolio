import { useRef, useEffect } from "react";

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.8) {
        aboutRef.current.classList.add("animate-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={aboutRef} className="about-section py-24">
      <div className="about-content max-w-6xl mx-auto px-6">
        <p className="text-fuchsia-400 uppercase tracking-[0.3em] text-sm mb-3">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Building software that solves real problems.
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
            <h3 className="text-3xl font-bold text-fuchsia-400">15+</h3>
            <p className="text-white/70 mt-2">Production Projects</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
            <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
            <p className="text-white/70 mt-2">Industries</p>
            <p>Fintech, HR,AgriFin, Property Management & Ecommerce</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
            <h3 className="text-3xl font-bold text-purple-400">Among Top</h3>
            <p className="text-white/70 mt-2">
              Kenya AI Challenge Project
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
            <h3 className="text-3xl font-bold text-emerald-400">4+</h3>
            <p className="text-white/70 mt-2">
              Years of Experience in Software Engineering
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6 text-lg leading-8 text-white/80">
          <p>
            I'm a Fullstack Software Engineer who enjoys building products that
            solve real problems. I love taking an idea from a simple sketch all
            the way to a polished application that people genuinely enjoy using.
            Whether I'm designing beautiful interfaces, building APIs, or
            architecting scalable systems, I enjoy every part of the journey.
          </p>

          <p>
            Over the years I've built products across fintech, HR, property
            management, ecommerce, and artificial intelligence. My work includes
            payroll systems, HR platforms, CRMs, SSO solutions, onboarding
            platforms, and Progressive Web Apps. More recently I've been focused
            on applying AI to real world problems through <span className="text-fuchsia-400 font-semibold">ShambAI</span>, an
            intelligent agricultural credit assessment platform that was
            recognized among the top projects in the Kenya AI Challenge.
          </p>

          <p>
            I enjoy solving problems that go beyond writing code. Whether it's
            integrating payment systems, designing flexible platforms, building
            real time dashboards, or creating intelligent decision support
            tools, I'm always looking for simple solutions to complex
            challenges.
          </p>

          <p>
            Outside of product development, I enjoy teaching and mentoring.
            I've taught the MERN stack, reviewed student projects, and helped
            shape software engineering bootcamp curricula. Watching developers
            grow is just as rewarding as shipping great software.
          </p>
        </div>

        {/* Current Focus */}
        <div className="mt-12 rounded-2xl border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 p-6">
          <h3 className="text-xl font-semibold mb-3">
            Currently Exploring
          </h3>

          <p className="text-white/75">
            Artificial Intelligence, Graph Databases, Intelligent Financial
            Systems, Agentic AI, Geospatial Applications, and immersive web
            experiences with Three.js.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Vue 3",
                "Three.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "PWAs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-fuchsia-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Django",
                "Go",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "REST APIs",
                "WebSockets",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              AI & Data
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "AI Engineering",
                "Neo4j",
                "Graph Databases",
                "Prompt Engineering",
                "Risk Scoring",
                "Data Visualization",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">
              DevOps & Cloud
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "AWS",
                "Docker",
                "Git",
                "CI/CD",
                "Linux",
                "System Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}