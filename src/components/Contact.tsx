import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Send,
  CodeXml,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateIdContact = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
const templateIdAutoReply = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const RATE_LIMIT_MS = 15 * 60 * 1000;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const lastSent = parseInt(localStorage.getItem("last_sent_email") || "0");

    const now = Date.now();

    const contactParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
    };

    if (lastSent && now - lastSent < RATE_LIMIT_MS) {
      toast({
        title: "Rate Limit Exceeded",
        description: "You can only send one message per 15 Minutes.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateIdContact,
        contactParams,
        publicKey
      );
      await emailjs.send(
        serviceId,
        templateIdAutoReply,
        autoReplyParams,
        publicKey
      );

      localStorage.setItem("last_sent_email", String(now));
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kanaad@kanaad.in",
      href: "mailto:kanaad@kanaad.in",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8412096556",
      href: "tel:+918412096556",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hanuman Nagar, Amrut Dham, Nashik",
      href: "#",
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kanaadbhat",
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/bhatkanaad314",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: CodeXml,
      label: "LeetCode",
      href: "https://leetcode.com/u/bhatkanaad314/",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat
            about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a conversation about technology and
                innovation. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass-card rounded-xl hover-glow transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg ${info.color} bg-opacity-20`}>
                    <info.icon size={24} className={info.color} />
                  </div>
                  <div>
                    <div className="text-foreground-secondary text-sm">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border border-card-border hover:border-primary transition-all duration-300 hover-glow ${social.bgColor}`}
                    title={social.label}
                  >
                    <social.icon size={24} className={social.color} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-foreground-secondary text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-foreground-secondary text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-foreground-secondary text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="subject"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground-secondary text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
