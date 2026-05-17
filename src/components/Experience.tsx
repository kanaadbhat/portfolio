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

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-card-border"></div>
            
            <div className="space-y-12">
              {experience.slice().reverse().map((exp, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                    
                    {/* Desktop Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-primary z-10 shadow-lg"></div>
                    
                    {/* Mobile Timeline Dot */}
                    <div className="md:hidden absolute left-[20px] -translate-x-[4px] top-8 w-2.5 h-2.5 rounded-full bg-primary shadow-md z-10"></div>

                    <div className={`w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      
                      {/* Card Column */}
                      <div className="w-full md:w-[48%] pl-12 md:pl-0 z-10">
                        <div className="glass-card rounded-2xl p-6 hover-glow transition-all duration-500 animate-fade-in-up md:hover:scale-[1.02] bg-card hover:bg-card/80">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-4">
                            <div className="flex items-center">
                              <div className="p-1 bg-white rounded-xl mr-4 flex-shrink-0 w-14 h-14 flex items-center justify-center border border-card-border overflow-hidden">
                                {exp.logo ? (
                                  <img 
                                    src={exp.logo} 
                                    alt={`${exp.organization} logo`} 
                                    className="w-full h-full object-contain"
                                  />
                                ) : (
                                  <Briefcase size={22} className="text-primary" />
                                )}
                              </div>
                              <div className="text-left">
                                <h3 className="text-xl font-bold text-foreground leading-tight mb-1">
                                  {exp.role}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <p className="text-base text-primary font-semibold">
                                    {exp.organization}
                                  </p>
                                  {exp.website && (
                                    <a 
                                      href={exp.website} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-foreground-secondary hover:text-primary transition-colors"
                                      title="Visit website"
                                    >
                                      <ExternalLink size={14} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 text-sm justify-start md:justify-end text-left sm:text-right">
                              {/* Date (Mobile Only inside Card) */}
                              <div className="flex md:hidden items-center text-foreground-secondary bg-background/50 px-3 py-1.5 rounded-lg w-fit">
                                <Calendar size={14} className="mr-2" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center text-foreground-secondary bg-background/50 px-3 py-1.5 rounded-lg w-fit">
                                <MapPin size={14} className="mr-2" />
                                {exp.mode}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3 mt-6">
                            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                              Highlights
                            </h4>
                            <ul className="text-foreground-secondary flex flex-col gap-2.5 text-left">
                              {exp.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start bg-background/30 p-2.5 rounded-lg hover:bg-background/50 transition-colors">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 mr-3 shadow-[0_0_8px_rgba(var(--primary),0.8)]"></div>
                                  <span className="leading-snug">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 pt-4 border-t border-card-border">
                            <div className="flex flex-wrap gap-2 justify-start">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="bg-background text-foreground-secondary px-3 py-1.5 rounded-full text-xs font-medium border border-card-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Empty Column / Date Column (Desktop Only outside Card) */}
                      <div className={`hidden md:flex w-[48%] items-center ${isLeft ? "justify-start" : "justify-end"}`}>
                        <div className="text-primary font-medium text-lg flex items-center bg-card/50 px-6 py-3 rounded-full border border-primary/20 shadow-sm">
                          <Calendar size={18} className="mr-3 text-foreground-secondary" />
                          {exp.duration}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Experience Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">
              Open to New Opportunities
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Full-time Roles
              </h4>
              <p className="text-foreground-secondary text-sm">
                Looking for full-stack developer / DevOps Engineer positions
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
    </section>
  );
};

export default Experience;
