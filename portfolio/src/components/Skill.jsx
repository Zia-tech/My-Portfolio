// src/components/Skills.jsx
export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3 / Tailwind CSS",
    "Git & GitHub",
    "MySQL / PostgreSQL",
  ];

  return (
    <section id="skills" className="relative py-10 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/skills-bg.jpg')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black/80 p-6 rounded-lg shadow hover:bg-black/50 transition text-gray-200 font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
