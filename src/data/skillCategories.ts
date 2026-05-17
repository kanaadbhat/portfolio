import { Code, Database, Globe, Wrench, Brain } from 'lucide-react';


const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS","Next.js","React Query","Zustand"],
      color: "text-blue-400"
    },
    {
      title: "Full Stack Development", 
      icon: Code,
      skills: ["Node.js", "Express.js", "RESTful APIs","Next.js", "Authentication Systems","Backend Architecture","TypeScript"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
      color: "text-orange-400"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "SSH", "Docker", "Docker Compose", "CI/CD Concepts", "Zustand", "React Query"],
      color: "text-cyan-400"
    },
    {
      title: "Cloud & DevOps",
      icon: Globe,
      skills: [
        "AWS Infrastructure",
        "Docker",
        "Docker Compose",
        "Terraform",
        "Nginx",
        "Linux",
        "SSL Configuration",
        "VPN Setup",
        "Infrastructure as Code",
        "Deployment Automation",
      ],
      color: "text-sky-400",
    },
    {
      title: "Programming Languages",
      icon: Brain,
      skills: ["C", "C++", "Python", "JavaScript","TypeScript"],
      color: "text-pink-400"
    }
  ];

  export default skillCategories;
