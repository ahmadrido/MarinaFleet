import { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(true);
  
    // Refs for navigation container
    const navContainerRef = useRef<HTMLDivElement>(null);
  
    const { y: currentScrollY } = useWindowScroll();
    const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set active link based on current URL path
  useEffect(() => {
    // Get current path from window location
    const path = window.location.pathname;
    
    // Set active link based on current path
    if (path === "/") {
      setActiveLink("Home");
    } else if (path.includes("/ourFleet")) {
      setActiveLink("Our Fleet");
    } else if (path.includes("/packages")) {
      setActiveLink("Tour Packages");
    } else if (path.includes("/booking")) {
      setActiveLink("Booking Page");
    } else if (path.includes("/contact")) {
      setActiveLink("Contact");
    }
  }, []);

  // Handle link click
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    // Close mobile menu when a link is clicked
    setIsMenuOpen(false);
  };

  // Get link class based on active state
  const getLinkClass = (linkName: string) => {
    return activeLink === linkName
      ? "text-blue-600 font-medium"
      : "text-gray-400 hover:text-blue-600 transition-colors duration-300";
  };

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Fleet", path: "/ourFleet" },
    { name: "Tour Packages", path: "/packages" },
    { name: "Booking Page", path: "/booking" },
    { name: "Contact", path: "/contact" }
  ];

  // Floating navigation
  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 m-3" ref={navContainerRef}>
    <nav className={`bg-transparent border px-5 backdrop-blur-md rounded-full shadow-md border-transparent w-full p-3 z-50 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo-main">
          <h1 className="text-2xl font-bold text-blue-800">
            <i className="fa-solid fa-ship"></i> Marina Fleet
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  id="nav-link"
                  className={getLinkClass(link.name)}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gray-100 backdrop-blur-md absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 pt-4 pb-4 mt-3' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                id="nav-link"
                className={`${getLinkClass(link.name)} block py-2`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;