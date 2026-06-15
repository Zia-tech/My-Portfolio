// src/components/About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/about-bg.jpg')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/zia (2).jpg"
            alt="Zia"
            className="rounded-lg shadow-lg w-84 h-84 object-cover border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-black mb-4">About Me</h2>
  <p className="text-black mb-6">
            I’m Zia Fehamin Sarjas, a MERN Stack Developer and intern passionate about building 
            modern, responsive web applications. With a strong foundation in 
            React, Node.js, MongoDB, and Tailwind CSS, I love turning ideas into 
            clean, functional code.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-grey-200">
            <li className="bg-black/80 p-3 rounded-lg text-center">React</li>
            <li className="bg-black/80 p-3 rounded-lg text-center">Node.js</li>
            <li className="bg-black/80 p-3 rounded-lg text-center">MongoDB</li>
            <li className="bg-black/80 p-3 rounded-lg text-center">Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
