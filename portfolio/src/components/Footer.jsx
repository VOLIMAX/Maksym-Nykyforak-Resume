import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-theme-500/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Maksym Nykyforak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;