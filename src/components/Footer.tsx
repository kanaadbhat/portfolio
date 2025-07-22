import { Github, Linkedin, Mail, CodeXml } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kanaadbhat",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/bhatkanaad314",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:kanaad@kanaad.in",
      label: "Email"
    },
    {
      icon: CodeXml,
      href: "https://leetcode.com/u/bhatkanaad314/",
      label: "LeetCode"
    }
  ];

  return (
    <footer className="bg-background border-t border-card-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Kanaad Hemant Bhat
            </h3>
            <p className="text-foreground-secondary">
              Full Stack Developer • Problem Solver • Technology Enthusiast
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-card-border hover:border-primary hover:text-primary transition-all duration-300 hover-glow"
                title={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="border-t border-card-border pt-8">
            <p className="text-foreground-secondary text-sm">
              © {currentYear} Kanaad Bhat. All rights reserved. Built with React & Tailwind CSS.
            </p>
            <div className="mt-2 flex justify-center">
              <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">KB</span>
            </div>
            <div className="mt-2 text-xs text-foreground-muted italic">Made with <span className="text-red-500">🤍</span> by Kanaad Bhat.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;