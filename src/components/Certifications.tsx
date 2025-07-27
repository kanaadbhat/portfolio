import { GraduationCap, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      organization: "AWS Training and Certification",
      date: "April 14, 2025",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30",
      link: "https://www.credly.com/badges/b013d969-ff46-4fd9-9e5c-fd2e6643f2d8/print"
    },
    {
      title: "Flutter & Dart - The Complete Guide",
      organization: "Udemy",
      date: "April 20, 2025",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
      link:"https://www.udemy.com/certificate/UC-656f069c-55bb-4298-b11f-bc4a3bdf8aff"
    },
    {
      title: "Mastering Data Structures and Algorithms using C & C++",
      organization: "Udemy",
      date: "June 24, 2024",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
      link:"https://www.udemy.com/certificate/UC-13550097-4645-43fc-8760-fc6145d9d2f8"
    },
    {
      title: "Learn C++ Programming – Beginner to Advance",
      organization: "Udemy",
      date: "May 20, 2024",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
      link:"https://www.udemy.com/certificate/UC-3b1c80fa-3713-43e3-8cfa-21c360d4e59b"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Continuous learning through professional certifications and specialized courses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`cursor-pointer glass-card rounded-2xl p-6 hover-glow transition-all duration-500 animate-fade-in-up border ${cert.borderColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${cert.bgColor} border ${cert.borderColor}`}>
                    <GraduationCap size={28} className={cert.color} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    <p className={`font-semibold ${cert.color} mb-3`}>
                      {cert.organization}
                    </p>

                    <div className="flex items-center text-foreground-secondary text-sm">
                      <Calendar size={16} className="mr-2" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Credly Verification Subheading */}
          <div className="text-center mt-16 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Verify My Credentials
            </h3>
            <p className="text-foreground-secondary text-lg max-w-xl mx-auto mb-6">
              All my digital badges and certifications are verifiable on Credly. Click below to view my full profile.
            </p>
            <a
              href="https://www.credly.com/users/kanaadbhat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg hover-glow transition-all duration-300 font-semibold"
            >
              <ExternalLink size={20} />
              View on Credly
            </a>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16"> {/* Adjust mt-16 if it's too much space after the new Credly section */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={40} className="text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Commitment to Continuous Learning
              </h3>

              <p className="text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-6">
                I believe in staying current with technology trends and continuously expanding my skill set.
                These certifications represent my dedication to professional growth and mastery of cutting-edge technologies.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">140+</div>
                  <div className="text-foreground-secondary text-sm">Hours of Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4</div>
                  <div className="text-foreground-secondary text-sm">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-foreground-secondary text-sm">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Learning */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Currently Learning
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 border border-primary/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-semibold">In Progress</span>
                </div>
             <h4 className="font-bold text-foreground mb-2">Microsoft Power BI</h4>
<p className="text-foreground-secondary text-sm">Data visualization, dashboard creation, and business intelligence analytics</p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-accent/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent font-semibold">Planning</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Docker & Kubernetes</h4>
                <p className="text-foreground-secondary text-sm">Container orchestration and cloud deployment strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;