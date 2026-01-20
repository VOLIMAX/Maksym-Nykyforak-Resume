import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-theme-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-theme-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 md:order-1 order-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-theme-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm tracking-wide">{data.location}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {data.fullName}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-theme-500 to-theme-600 rounded-full"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-theme-500 font-semibold">
              {data.title}
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {data.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-theme-500 hover:bg-theme-600 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-500/50 group"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-2 border-theme-500 text-theme-500 hover:bg-theme-500 hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="md:order-2 order-1 flex justify-center">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-theme-500 to-theme-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative">
                <img 
                  src={data.photo}
                  alt={data.fullName}
                  className="relative max-w-xs md:max-w-md h-auto object-contain rounded-2xl shadow-2xl ring-2 ring-theme-500/50 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;