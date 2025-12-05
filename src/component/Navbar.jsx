import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Offres", href: "#offres" },
  { label: "Avis clients", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-white transition-colors hover:text-[#C3D1A9]"
        >
          BRAND
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group relative font-medium text-white transition-colors duration-300 hover:text-[#C3D1A9]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#C3D1A9] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="rounded-full bg-[#C3D1A9] px-6 py-2 font-medium text-black transition-all hover:bg-[#a9b58d] focus:outline-none focus:ring-2 focus:ring-[#C3D1A9] focus:ring-offset-2 focus:ring-offset-black active:scale-95">
                Réserver un appel
              </button>
            </li>
          </ul>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          className="z-50 text-2xl text-white transition-colors hover:text-[#C3D1A9] md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay Menu Mobile avec Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="Navigation mobile">
                <ul className="space-y-8 text-center">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + index * 0.1,
                      }}
                    >
                      <a
                        href={item.href}
                        className="block py-2 text-2xl font-medium text-white transition-colors duration-300 hover:text-[#C3D1A9]"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    className="pt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + navItems.length * 0.1,
                    }}
                  >
                    <button
                      className="rounded-full bg-[#C3D1A9] px-8 py-3 text-lg font-medium text-black transition-all hover:bg-[#a9b58d] focus:outline-none focus:ring-2 focus:ring-[#C3D1A9] active:scale-95"
                      onClick={closeMenu}
                    >
                      Réserver un appel
                    </button>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
