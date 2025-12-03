import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = ["Accueil", "Offres", "Avis clients", "FAQ"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          BRAND
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#C3D1A9] font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C3D1A9] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="bg-[#C3D1A9] text-black px-6 py-2 rounded-full font-medium hover:bg-[#a9b58d] transition-colors">
                Réserver un appel
              </button>
            </li>
          </ul>
        </nav>

        {/* Menu Toggle Mobile */}
        <button
          className="md:hidden text-white text-2xl z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Bouton de fermeture dans le menu mobile */}
        <button
          className="absolute top-6 right-6 text-3xl text-white cursor-pointer z-50 hover:text-[#C3D1A9] hover:rotate-90 transition-all duration-300"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8 text-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-2xl font-medium hover:text-[#C3D1A9] transition-colors duration-300 block py-2"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-8">
              <button
                className="bg-[#C3D1A9] text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-[#a9b58d] transition-colors"
                onClick={closeMenu}
              >
                Réserver un appel
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
