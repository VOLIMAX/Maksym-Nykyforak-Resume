import React from 'react';
import { Target, Zap, Code2, Shield, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

const focusIcons = {
  "Scalable web platforms": Zap,
  "Real-time systems": TrendingUp,
  "System modernization": Code2,
  "Clean architecture": Shield,
  "Test-driven development": Target
};

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-theme-500">Me</span>
            </h2>
            <div className="h-1 w-24 bg-theme-500 mx-auto rounded-full"></div>
          </div>

          {/* Summary */}
          <Card className="bg-[#1a1a1a] border-theme-500/20 p-8 mb-12 hover:border-theme-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-theme-500/10">
            <p className="text-gray-300 text-lg leading-relaxed">
              {data.summary}
            </p>
          </Card>

          {/* Focus Areas */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Key Focus <span className="text-theme-500">Areas</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.focusAreas.map((area, index) => {
                const Icon = focusIcons[area] || Target;
                return (
                  <Card 
                    key={index}
                    className="bg-[#1a1a1a] border-theme-500/20 p-6 hover:border-theme-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-500/20 group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-theme-500/10 rounded-lg group-hover:bg-theme-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-theme-500" />
                      </div>
                      <span className="text-gray-200 font-medium">{area}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;