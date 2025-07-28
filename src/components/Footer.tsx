import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Upcoming Classes", href: "#classes" },
        { name: "Become an MCT", href: "#mct" },
        { name: "Resources", href: "#resources" },
      ]
    },
    {
      title: "Training",
      links: [
        { name: "MCT Fundamentals", href: "#" },
        { name: "Azure Specialist", href: "#" },
        { name: "Advanced Techniques", href: "#" },
        { name: "Custom Programs", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ's", href: "#faqs" },
        { name: "Contact", href: "#contact" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">MCT-ISC</h3>
                <p className="text-xs text-muted-foreground">Training Excellence</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Empowering technical professionals to become exceptional Microsoft Certified Trainers 
              and inspiring educators in the technology industry.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                Newsletter
              </Button>
              <Button variant="ghost" size="sm">
                Follow Us
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-card rounded-xl p-8 mb-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest training opportunities and industry insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 MCT-ISC. All rights reserved. | 
              <a href="#" className="hover:text-primary transition-smooth ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-primary transition-smooth ml-1">Terms of Service</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="text-xl">📧</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="text-xl">💼</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <span className="text-xl">📘</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;