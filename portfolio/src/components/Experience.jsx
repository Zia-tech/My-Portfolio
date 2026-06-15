// src/components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Intern",
      company: "Cyberpark, Kozhikode",
      period: "May 2026 – August 2026",
      description:
        "Worked on building responsive web applications using React, Node.js, and MongoDB. Collaborated with a team to develop scalable features and optimize UI performance.",
      highlights: [
        "Developed reusable React components",
        "Integrated REST APIs with Node.js backend",
        "Improved UI responsiveness with Tailwind CSS",
        "Collaborated in Agile team environment",
      ],
    },
    {
      role: "Academic Project",
      company: "BCA Final Year",
      period: "2023 – 2026",
      description:
        "Designed and implemented a Task Manager application to track tasks and progress. Focused on CRUD operations and responsive UI.",
      highlights: [
        "Built task tracking system with React",
        "Implemented CRUD functionality",
        "Used Tailwind CSS for modern UI",
        "Deployed project on Netlify",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-10 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/experience-bg.jpg')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-black-300 mb-2">{exp.company}</p>
              <p className="text-sm text-black-200 mb-4">{exp.period}</p>
              <p className="text-black-300 mb-4">{exp.description}</p>

              <h4 className="text-lg font-semibold mb-2">Highlights:</h4>
              <ul className="list-disc list-inside text-black-300">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
