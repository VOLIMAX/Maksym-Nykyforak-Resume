import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    // { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg shadow-theme-500/5 border-b border-theme-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-white hover:text-theme-500 transition-colors"
          >
            MN<span className="text-theme-500">.</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-theme-500 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block bg-theme-500 hover:bg-theme-600 text-white font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-500/50"
          >
            Hire Me
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-theme-500 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-theme-500/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-theme-500 transition-colors font-medium text-left py-2 px-4 hover:bg-theme-500/10 rounded"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-theme-500 hover:bg-theme-600 text-white font-semibold w-full mt-4"
              >
                Hire Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;