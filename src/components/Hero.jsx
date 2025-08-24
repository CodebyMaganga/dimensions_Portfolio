// src/components/Hero.jsx
import Starfield from "./StarField";
import bgPattern from "../assets/african.jpg";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Starfield overlay */}
      <Starfield />

      {/* Dark gradient overlay to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Maganga Mwambonu
        </h1>
        <p className="mt-3 text-lg sm:text-2xl text-white/80">
          Senior Fullstack Engineer
        </p>
      </div>
    </section>
  );
}
