// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/computer.jpg')] bg-cover bg-center"></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hey, I'm Zia 
        </h1>
        <p className="text-white mb-6 leading-relaxed">
          MERN Stack Developer | Passionate about building modern web apps
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
