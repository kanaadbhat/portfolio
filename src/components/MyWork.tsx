import { ExternalLink, Github } from "lucide-react";
import vendora from "@/assets/vendora.jpeg";
import buildguild from "@/assets/buildguild.jpeg";
import apex from "@/assets/apex.jpeg";

const MyWork = () => {
  const projects = [
    {
      title:  "Vendora – Smart Vendor Management Platform",
      duration: "FEB-JUNE 2025",
      description:
        "Designed and developed a comprehensive vendor management platform enabling users to manage products, track subscriptions, and handle payments. Integrated Gemini Pro for intelligent query handling and assistance. Features include product catalog management, Razorpay-powered transactions, and secure RESTful APIs.",
      tech: [
        "Flutter",
        "Express.js",
        "Gemini AI",
        "RESTful APIs",
        "Riverpod",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/kanaadbhat/Vendora",
      live: "https://vendora-frontend.onrender.com/",
      featured: true,
      image: vendora,
    },
    {
      title: "buildguild - A Construction Management Tool",
      duration: "AUG-DEC 2024",
      description:
        "A unified construction project management platform featuring modules for progress, financials, materials, and workflows with Clerk authentication in MERN stack.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Clerk Auth",
        "ShadCN UI",
      ],
      github: "https://github.com/kanaadbhat/buildguild",
      live: "https://buildguild-pro.onrender.com/",
      featured: true,
      image: buildguild,
    },
    {
      title: "Apex - Housing Society Management System",
      duration: "FEB-MAY 2024",
      description:
        "A housing management system with multi-user login support for chairman, security, and users to manage society tasks.",
      tech: ["HTML", "Firebase", "JavaScript", "CSS3", "Multi-user Auth"],
      github: "https://github.com/kanaadbhat/apex-webdev",
      live: "https://apex-webdev.web.app/",
      featured: false,
      image: apex,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-2">
            KB
          </span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Here are some projects I'm most proud of. Each one taught me
            something new.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 hover-glow transition-all duration-500 animate-fade-in-up ${
                project.image || project.featured
                  ? "lg:grid lg:grid-cols-2 lg:gap-8"
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={project.featured ? "lg:order-1" : ""}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {project.duration}
                  </span>
                  {project.featured && (
                    <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <p className="text-foreground-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-background-secondary text-foreground-secondary px-3 py-1 rounded-full text-sm border border-card-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary-hover transition-colors duration-300"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg hover-glow transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {project.image && (
                <div
                  className={`${
                    project.featured ? "lg:order-2" : ""
                  } mt-6 lg:mt-0`}
                >
                  <div className="rounded-xl p-0 h-full flex items-center justify-center overflow-hidden border border-card-border shadow-md transform -translate-y-1 hover:translate-y-0 transition-transform duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}
              {!project.image &&
                project.featured && ( // Fallback for featured without image
                  <div className="lg:order-2 mt-6 lg:mt-0">
                    <div className="bg-gradient-secondary rounded-xl p-8 h-full flex items-center justify-center">
                      <div className="text-center text-foreground-secondary">
                        No image available for this featured project.
                      </div>
                    </div>
                  </div>
                )}
              {!project.image && !project.featured && (
                <div className="mt-6 lg:mt-0">
                  <div className="rounded-xl p-8 h-full flex items-center justify-center border border-card-border bg-background-secondary text-foreground-secondary text-center">
                    No image available for this project.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/kanaadbhat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
