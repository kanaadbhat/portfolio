import { Trophy, Award, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    { year: 2023, rank: "Finalist", title: "IOT based Smart Parking system", competition: "Engineering Exploration" },
    { year: 2024, rank: "1st", title: "Apex - Housing Society Management System", competition: "PBL" },
    { year: 2024, rank: "3rd", title: "buildguild - A Construction Management Tool", competition: "DBMS" },
    { year: 2024, rank: "1st", title: "Smart Water Management System", competition: "IOT" },
    { year: 2024, rank: "3rd", title: "Web Battles Coding Round", competition: "Equinox" },
  ];

  const getRankIcon = (rank: string) => {
    switch (rank) {
      case "1st":
        return <Trophy className="text-yellow-400" size={24} />;
      case "2nd":
        return <Medal className="text-gray-300" size={24} />;
      case "3rd":
        return <Award className="text-orange-400" size={24} />;
      case "Finalist":
        return <Star className="text-purple-400" size={24} />;
      default:
        return <Trophy className="text-primary" size={24} />;
    }
  };

  const getRankColor = (rank: string) => {
    switch (rank) {
      case "1st":
        return "border-yellow-400 bg-yellow-400/10";
      case "2nd":
        return "border-gray-300 bg-gray-300/10";
      case "3rd":
        return "border-orange-400 bg-orange-400/10";
      case "Finalist":
        return "border-purple-400 bg-purple-400/10";
      default:
        return "border-primary bg-primary/10";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Awards</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Recognition for excellence in various competitions and academic projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover-glow transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                    <div className={`p-3 rounded-full border-2 ${getRankColor(achievement.rank)}`}>
                      {getRankIcon(achievement.rank)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {achievement.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getRankColor(achievement.rank)} border-0`}>
                          {achievement.rank} Place
                        </span>
                      </div>
                      
                      <p className="text-foreground-secondary">
                        <span className="font-medium text-primary">{achievement.competition}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-background-tertiary text-foreground px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium">{achievement.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">2</div>
              <div className="text-foreground-secondary text-sm">First Places</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">2</div>
              <div className="text-foreground-secondary text-sm">Third Places</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">1</div>
              <div className="text-foreground-secondary text-sm">Finalist</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal size={32} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">4</div>
              <div className="text-foreground-secondary text-sm">Total Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;