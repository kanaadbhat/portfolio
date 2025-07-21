import profileImage from '@/assets/profile-image.jpg';

const Profile = () => {
  // const stats = [
  //   { label: 'CGPA', value: '8.02' },
  //   { label: 'Projects', value: '15+' },
  //   { label: 'Certifications', value: '4+' },
  //   { label: 'Awards', value: '5+' },
  // ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-2">KB</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Welcome! Here's a bit about who I am.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <img
                src={profileImage}
                alt="Kanaad Bhat"
                className="w-96 rounded-2xl object-cover border-4 border-primary shadow-lg hover-glow"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                Full Stack Developer
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {/* {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-foreground-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              ))} */}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-foreground-secondary leading-relaxed">
              I'm a creative and solution-oriented individual with a strong interest in addressing 
              real-world challenges through technology. Currently pursuing B.Tech in Computer Engineering 
              at K.K.Wagh Institute, I bring a unique blend of technical expertise and innovative thinking 
              to every project.
            </p>
            
            <p className="text-foreground-secondary leading-relaxed">
              I adapt quickly to dynamic environments, collaborate effectively with diverse teams, 
              and bring solid interpersonal and time management skills to meet organizational goals. 
              My experience spans across full-stack development, with particular expertise in 
              React.js, Node.js, and modern web technologies.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">What I Do:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Mobile Apps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground-secondary">Problem Solving</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover-glow transition-all duration-300"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;