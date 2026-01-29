import { useState, useEffect } from 'react';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="logo cursor-hover">RM.</a>
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#exp" className="cursor-hover" onClick={() => setIsOpen(false)}>Experience</a></li>
        <li><a href="#projects" className="cursor-hover" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" className="cursor-hover" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#art" className="cursor-hover" onClick={() => setIsOpen(false)}>Art</a></li>
      </ul>
    </nav>
  );
}