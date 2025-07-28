import vendora from "@/assets/vendora.jpeg";
import buildguild from "@/assets/buildguild.jpeg";
import apex from "@/assets/apex.jpeg";

const projects = [
  {
    title: "Vendora – Smart Vendor Management Platform",
    duration: "FEB-JUNE 2025",
    description:
      "Designed and developed a comprehensive vendor management platform enabling users to manage products, track subscriptions, and handle payments. Integrated Gemini Pro for intelligent query handling and assistance. Features include product catalog management, Razorpay-powered transactions, and secure RESTful APIs.",
    tech: [
      "Flutter",
      "Express.js",
      "Gemini AI",
      "RESTful APIs",
      "Riverpod",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/kanaadbhat/Vendora",
    live: "https://vendora-frontend.onrender.com/",
    demo: "https://youtu.be/Gg3fWcJeheI",
    featured: true,
    image: vendora,
  },
  {
    title: "buildguild - A Construction Management Tool",
    duration: "AUG-DEC 2024",
    description:
      "A unified construction project management platform featuring modules for progress, financials, materials, and workflows with Clerk authentication in MERN stack.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Clerk Auth",
      "ShadCN UI",
    ],
    github: "https://github.com/kanaadbhat/buildguild",
    live: "https://buildguild-pro.onrender.com/",
    demo: "https://youtu.be/JbhUDUtyDxQ",
    featured: true,
    image: buildguild,
  },
  {
    title: "Apex - Housing Society Management System",
    duration: "FEB-MAY 2024",
    description:
      "A housing management system with multi-user login support for chairman, security, and users to manage society tasks.",
    tech: ["HTML", "Firebase", "JavaScript", "CSS3", "Multi-user Auth"],
    github: "https://github.com/kanaadbhat/apex-webdev",
    live: "https://apex-webdev.web.app/",
    featured: false,
    image: apex,
  },
];

export default projects;
