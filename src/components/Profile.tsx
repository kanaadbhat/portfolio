import profileImage from "@/assets/profile-image.jpeg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4">
            <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-2">
              KB
            </span>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                Full Stack Developer & DevOps Engineer focusing on building
                scalable, maintainable web platforms and cloud infrastructure.
              </p>
          </div>

       <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="relative w-96 mx-auto lg:mx-0">
              <img
                src={profileImage}
                alt="Kanaad Bhat"
                className="w-full rounded-2xl object-cover border-4 border-primary shadow-lg hover-glow"
              />
              <div className="absolute bottom-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-md">
                Full Stack Developer & DevOps Engineer
              </div>
            </div>
          </div>

          <div
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              Engineering Summary
            </h3>

            <p className="text-foreground-secondary leading-relaxed">
              I design and build full stack applications with an emphasis on
              clean architecture, reliable APIs, and observable infrastructure.
              My work covers backend services, frontend integration, and the
              operational processes that keep services running smoothly.
            </p>

            <p className="text-foreground-secondary leading-relaxed">
              Practically, I implement containerized delivery pipelines,
              infrastructure-as-code, and automated deployment flows. I focus
              on observability, incident response, and reducing operational
              toil through automation and testing.
            </p>

            <p className="text-foreground-secondary leading-relaxed">
              I collaborate closely with cross-functional teams to translate
              product requirements into scalable technical solutions and
              prioritize maintainability, security, and performance.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Core Focus Areas:
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Full Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Cloud & Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Deployment Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Monitoring & Reliability</span>
                </div>
              </div>
            </div>

            <div className="pt-4 pl-4">
              <button
                onClick={() => navigate("/work")}
                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold 
                       hover-glow transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
