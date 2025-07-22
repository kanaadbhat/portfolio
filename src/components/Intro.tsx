import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-3">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient flex items-center gap-2"> कणाद</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
            A creative and solution-oriented Full Stack Developer passionate
            about building innovative applications and solving real-world
            challenges.
          </p>
          <div className="mb-8">
            <span className="block text-sm text-foreground-muted italic">
              Fun Fact: I use git stash like a junk drawer — I have no idea
              what’s in there anymore.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => navigate("/work")}
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold 
                       hover-glow transition-all duration-300 hover:scale-105"
            >
              View My Projects
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1VPWbUydbyMfSQKki-azZrL7qtuL2SD1c"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold 
                       hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/kanaadbhat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-card-border hover:border-primary 
                       hover:text-primary transition-all duration-300 hover-glow"
            >
              <Github size={24} />
            </a>

            <a
              href="http://www.linkedin.com/in/bhatkanaad314"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-card-border hover:border-primary 
                       hover:text-primary transition-all duration-300 hover-glow"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:kanaad@kanaad.in"
              className="p-4 rounded-full border border-card-border hover:border-primary 
                       hover:text-primary transition-all duration-300 hover-glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Intro;