import { Code, Smartphone, Database, Globe, Wrench, Brain } from 'lucide-react';


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

  export default skillCategories;
