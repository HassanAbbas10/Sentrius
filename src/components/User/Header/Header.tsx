import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Img from "../../common/Img";
import Sentrius from "../../../assets/Purple_Gradient_Modern_Cybersecurity_Logo__1_-removebg-preview.png";
import CyberButton from "../../common/CyberButton";
const links = [
  { to: "/", text: "Home" },

  { to: "/about", text: "About" },
  { to: "/privacy", text: "Privacy Policy" },
  { to: "/contact", text: "Contact" },
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
        className="flex justify-center items-center text-text-primary font-sans font-bold  text-lg  lg:hover:text-blue-hover lg:hover:border-b-2 hover:text-text-accent border-bordercol-highlight transition-all duration-300 ease-in-out"
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
    <header className="bg-gradient-to-r from-black to-background-primary text-text-primary">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-10">
            <Img
              alt="Sentrius"
              src={Sentrius}
              className="bg-transparent h-16 w-16"
            />
            <h2 className=" font-extrabold text-2xl italic font-mono">
              Sentrius
            </h2>
          </div>

          <div className="hidden md:flex font-serif font-bold  items-center space-x-16">
            {links.map((slugs) => (
              <HeaderSlugs key={slugs.to} to={slugs.to}>
                {slugs.text}
              </HeaderSlugs>
            ))}
          </div>

          <CyberButton>Sign Up</CyberButton>

          <button
            onClick={toggleMenu}
            className="md:hidden text-text-primary hover:text-text-accent p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
                className="text-text-primary hover:text-text-accent p-2"
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

              <CyberButton>Sign Up</CyberButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
