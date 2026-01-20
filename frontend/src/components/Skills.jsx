import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-amber-500">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories.map((category, index) => (
            <Card 
              key={index}
              className="bg-[#1a1a1a] border-amber-500/20 p-6 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-amber-500 mb-4 group-hover:text-amber-400 transition-colors">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    className="bg-amber-500/10 text-gray-200 border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all duration-300 cursor-default px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;