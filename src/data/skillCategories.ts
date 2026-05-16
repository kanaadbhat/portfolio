import { Code, Smartphone, Database, Globe, Wrench, Brain } from 'lucide-react';


const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS","Next.js","React Query"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development", 
      icon: Code,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication","Next.js","Zustand","Redux-Toolkit"],
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
      skills: ["MySQL", "MongoDB",  "PostgreSQL","Firebase", "Sequelize"],
      color: "text-orange-400"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Thunder Client", "Render", "Cloudinary", "Power BI", "Figma","SQL Workbench","PgAdmin"],
      color: "text-cyan-400"
    },
    {
      title: "Programming Languages",
      icon: Brain,
      skills: ["C", "C++", "Python", "JavaScript","TypeScript", "Dart"],
      color: "text-pink-400"
    }
  ];

  export default skillCategories;
