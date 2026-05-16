import {
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  FileUser,
} from "lucide-react";
import experience from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Professional experience and internships that shaped my development
            journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto space-y-10">
  {experience.map((exp, index) => (
    <div
      key={index}
      className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 animate-fade-in-up"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="flex items-center mb-4 lg:mb-0">
          <div className="p-4 bg-gradient-primary rounded-xl mr-6">
            <Briefcase size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              {exp.role}
            </h3>
            <p className="text-xl text-primary font-semibold">
              {exp.organization}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <div className="flex items-center text-foreground-secondary">
            <Calendar size={16} className="mr-2" />
            {exp.duration}
          </div>
          <div className="flex items-center text-foreground-secondary">
            <MapPin size={16} className="mr-2" />
            {exp.mode}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Responsibilities */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">
            Key Responsibilities & Learning:
          </h4>
          <ul className="space-y-3 text-foreground-secondary">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-background-secondary rounded-xl p-6">
          <h4 className="text-lg font-semibold text-foreground mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-background text-foreground-secondary px-3 py-1 rounded-full text-sm border border-card-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Additional Experience Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Open to New Opportunities
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Full-time Roles
                </h4>
                <p className="text-foreground-secondary text-sm">
                  Looking for full-stack developer positions
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Remote Work
                </h4>
                <p className="text-foreground-secondary text-sm">
                  Available for remote and hybrid opportunities
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileUser size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Job Opportunities
                </h4>
                <p className="text-foreground-secondary text-sm">
                  Available for onsite job opportunities from July 2026
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Available
                </h4>
                <p className="text-foreground-secondary text-sm">
                  Ready to start immediately after graduation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
