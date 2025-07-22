import { Code, Smartphone, Database, Globe, Wrench, Brain } from 'lucide-react';

const TechStack = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development", 
      icon: Code,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
      color: "text-green-400"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "RiverPod"],
      color: "text-purple-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "SQL Workbench"],
      color: "text-orange-400"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Thunder Client", "Render", "Cloudinary", "Power BI", "Figma"],
      color: "text-cyan-400"
    },
    {
      title: "Programming Languages",
      icon: Brain,
      skills: ["C", "C++", "Python", "JavaScript", "Dart"],
      color: "text-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-2">KB</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            These are the tools and technologies that power my projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-background ${category.color} bg-opacity-20 mr-4`}>
                  <category.icon size={28} className={category.color} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-background text-foreground-secondary px-3 py-2 rounded-lg text-sm border border-card-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What I'm Learning Next
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={28} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Advanced React</h4>
                <p className="text-foreground-secondary text-sm">Next.js, Server Components</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database size={28} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Cloud Technologies</h4>
                <p className="text-foreground-secondary text-sm">AWS, Docker, Kubernetes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={28} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                <p className="text-foreground-secondary text-sm">Scikit Learn, AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;