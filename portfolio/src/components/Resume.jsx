// src/components/Resume.jsx
export default function Resume() {
  return (
    <section id="resume" className="relative py-10 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/resume-bg.jpg')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold mb-10">My Resume</h2>

        <div className="bg-white/10 p-8 rounded-lg shadow-lg w- h-74 hover:bg-grey/20 transition">
          <h3 className="text-2xl font-semibold mb-4">Zia — MERN Stack Developer</h3>
          <p className="text-black-300 mb-6">
            BCA Graduate | Internship Applicant | Upcoming Cyberpark Intern  
            Skilled in React, Node.js, MongoDB, Tailwind CSS, and building modern web applications.
          </p>

          {/* Download Button */}
          <a
            href="/assets/Zia-Resume.pdf" // place your resume PDF in public/assets folder
            download
            className="px-6 py-3  bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-500 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
