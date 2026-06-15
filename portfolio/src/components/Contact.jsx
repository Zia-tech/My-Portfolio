// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="relative py-10 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/contact-bg.jpg')] bg-cover bg-center"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white/10 p-8 rounded-lg shadow-lg space-y-4">
         <h3 className="text-2xl font-semibold text-center mb-4">Send Your Enquiries!</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-400 bg-transparent text-black placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded border border-gray-400 bg-transparent text-black placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded border border-gray-400 bg-transparent text-black placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded border border-gray-400 bg-transparent text-black placeholder-gray-400 h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-500 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white/10 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
            <p className="text-black-300 mb-6">
              I’m always interested in hearing about new opportunities, projects, or just having a chat about technology.
            </p>
            <ul className="space-y-3 text-black-200">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:ziafehamin123@gmail.com" className="hover:text-black">
                  ziafehamin123@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919847434301" className="hover:text-black">
                  +91 9847434301
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/zia-fehamin-sarjas-undefined"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  linkedin.com/in/zia
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Zia-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  github.com/Zia-tech
                </a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/__z_i_a.__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  instagram.com/__z_i_a.__
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
