import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", text: "Home" },
  { to: "/feature", text: "Features" },
  { to: "/about", text: "About" },
];

const HeaderSlugs = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <nav>
      <Link
        to={to}
        onClick={onClick}
        className="flex justify-center items-center text-primaryText text-lg font-medium lg:hover:text-blue-hover lg:hover:border-b-2 hover:text-text-accent border-bordercol-highlight transition-all duration-300 ease-in-out"
      >
        {children}
      </Link>
    </nav>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-background-primary text-text-primary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Sentrius</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            {links.map((slugs) => (
              <HeaderSlugs key={slugs.to} to={slugs.to}>
                {slugs.text}
              </HeaderSlugs>
            ))}
          </div>

          {/* Sign Up Button - Desktop */}
          <button className="hidden md:block bg-background-tertiary border-bordercol-highlight border hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-2xl rounded-t-lg transition duration-300">
            Sign Up
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text-primary hover:text-accent-DEFAULT p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-0 z-50 bg-background-primary transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-2xl font-bold">Sentrius</div>
              <button
                onClick={closeMenu}
                className="text-text-primary hover:text-accent-DEFAULT p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {links.map((slugs) => (
                <HeaderSlugs key={slugs.to} to={slugs.to} onClick={closeMenu}>
                  {slugs.text}
                </HeaderSlugs>
              ))}

              <button className="bg-background-tertiary border-bordercol-highlight border hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-2xl rounded-t-lg transition duration-300 mt-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
