// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, and contact information.",
      features: ["Responsive Design", "Smooth Navigation", "Modern UI", "Deployed on Netlify"],
      tech: ["React", "Tailwind CSS", "JavaScript"],
      demo: "https://yourportfolio.com",
      code: "https://github.com/zia/portfolio",
    },
    {
      title: "E-Commerce App",
      description: "A full-stack MERN application with product listings, cart, and checkout functionality.",
      features: ["Product Listings", "Shopping Cart", "User Authentication", "Payment Integration"],
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      demo: "https://ecommerce-demo.com",
      code: "https://github.com/zia/ecommerce-app",
    },
    {
      title: "Task Manager",
      description: "A productivity app to add tasks and track progress with counters for total, completed, and pending tasks.",
      features: ["Add/Edit/Delete Tasks", "Progress Counters", "Responsive UI", "CRUD Operations"],
      tech: ["React", "Tailwind CSS", "JavaScript"],
      demo: "https://taskmanager-demo.com",
      code: "https://github.com/zia/task-manager",
    },
  ];

  return (
    <section id="projects" className="relative py-10 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/projects-bg.jpg')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow hover:bg-white/20 transition">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-black-300 mb-4">{project.description}</p>

              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside text-black-300 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
              <p className="text-black-300 mb-6">{project.tech.join(", ")}</p>

              <div className="flex justify-between">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-500 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
