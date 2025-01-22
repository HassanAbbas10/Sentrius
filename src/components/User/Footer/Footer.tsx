import React from "react";
import { Link } from "react-router-dom";

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col space-y-4">
    <h3 className="text-xl font-bold tracking-wide">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-text-accent inline-block transform transition-transform duration-200 hover:translate-x-2 hover:text-blue-hover"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <footer className="bg-background-primary text-text-primary w-full py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterSection title="About Us">
            <p className="text-green leading-relaxed">
              At Sentrius, we are dedicated to empowering individuals and
              organizations with the knowledge and tools to navigate the digital
              world securely. Our interactive platform provides real-time
              security awareness training, phishing detection, and personalized
              recommendations to ensure your online safety.
            </p>
          </FooterSection>

          <FooterSection title="Quick Links">
            <nav className="flex flex-col space-y-3">
              {links.map(({ to, text }) => (
                <FooterLink key={to} to={to}>
                  {text}
                </FooterLink>
              ))}
            </nav>
          </FooterSection>

          <FooterSection title="Contact Us">
            <div className="space-y-2">
              <p className="text-green flex items-center">
                <span className="mr-2">📍</span>
                Somewhere on Planet Earth
              </p>
              <p className="text-green flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:Oriogenesis@gmail.com"
                  className="hover:text-blue-hover transition-colors duration-200"
                >
                  Oriogenesis@gmail.com
                </a>
              </p>
            </div>
          </FooterSection>
        </div>

        <div className="mt-16 pt-8 border-t border-opacity-20 border-text-primary">
          <p className="text-center text-green text-sm">
            &copy; {currentYear} Sentrius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
