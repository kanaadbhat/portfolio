import vendora from "@/assets/vendora.jpeg";
import buildguild from "@/assets/buildguild.jpeg";
import apex from "@/assets/apex.jpeg";
import SpendSmart from "@/assets/SpendSmart.png";
import calibr from "@/assets/calibr.jpg";
import drivechat from "@/assets/drivechat.png";

const projects = [
    {
    title: "DriveChat - Secure Message Syncing",
    duration: " DEC 2025",
    description:
      "Built a private, cross-device chat workspace with true end-to-end encryption and zero server access to user data.Use event-driven realtime architecture, reducing network requests by 95% and backend load by 90%; implemented smart previews (LCP <1.5s, CLS <0.05, INP <40ms)",
    tech: [
   "React", "Node.js", "Express.js", "Dexie.js", "Firestore", "Redis", "Socket.IO", "GIS", "BullMQ", "Web Crypto", "Docker"
    ],
    github: "https://github.com/kanaadbhat/drivechat",
    demo: "https://youtu.be/TQuNNvwbgmU",
    live: "https://mydrivechat.onrender.com",
    featured: true,
    image: drivechat,
  },
  {
    title: "Calibr - AI Recruitment Pipeline",
    duration: "SEP-NOV 2025",
    description:
      "An AI Driven Recruitment platform for comprehensive candidate evakuation. Consisting of different modules like AptitudeTest, Coding Round and Interviews. Engineered an Threshold-Based Multi-Queue System for AI-Driven Interview Orchestration.",
    tech: [
      "Next.js",
      "Shadcn",
      "MongoDB",
      "AWS S3/EC2",
      "GCP",
      "Gemini Pro",
      "Judge0",
    ],
    github: "https://github.com/kanaadbhat/Calibr",
    demo: "https://youtu.be/TQuNNvwbgmU",
    featured: true,
    image: calibr,
  },
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
    featured: false,
    image: vendora,
  },
  {
    title: "SpendSmart – Personal Finance & Expense Tracker",
    duration: "AUGUST 2025",
    description:
      "Built a modern personal finance management web app for tracking expenses, managing categories, and visualizing spending trends. Features include interactive dashboards with charts, category-wise analytics, and CRUD operations for expenses and categories. Supports user-friendly UI with Bootstrap, secure data handling, and real-time statistics.",
    tech: [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "Chart.js",
      "Bootstrap",
      "Razor Pages",
      ".NET 9",
    ],
    github: "https://github.com/kanaadbhat/SpendSmart",
    demo: "https://youtu.be/uM16WD-ProE",
    featured: false,
    image: SpendSmart,
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
