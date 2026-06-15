// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/footer-bg.jpg')] bg-cover bg-center opacity-20"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">Zia</h2>
          <p className="mt-2 text-gray-300">
            MERN Stack Developer passionate about building modern web apps.
          </p>
          <a href="#home" className="mt-4 inline-block text-sm text-gray-400 hover:text-white">
            Back to Top ↑
          </a>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#resume" className="hover:text-white">Resume</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
          <p className="text-gray-300">Always open to new opportunities and projects.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/zia-fehamin-sarjas-undefined" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com/zia-tech" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="mailto:ziafehamin123@gmail.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative text-center mt-8 text-gray-400">
        © 2026 Zia. All rights reserved. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
