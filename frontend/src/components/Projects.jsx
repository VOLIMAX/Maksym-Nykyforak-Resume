import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Folder, CheckCircle2, ExternalLink } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-theme-500">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-theme-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Large-scale systems and healthcare platforms I've contributed to
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((project, index) => (
            <Card 
              key={index}
              className="bg-[#1a1a1a] border-theme-500/20 p-6 hover:border-theme-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-theme-500/20 group cursor-pointer"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              {/* Icon */}
              <div className="mb-4 relative">
                <div className="w-14 h-14 bg-theme-500/10 rounded-lg flex items-center justify-center group-hover:bg-theme-500/20 transition-colors">
                  <Folder className="w-8 h-8 text-theme-500" />
                </div>
                {project.link && (
                  <ExternalLink className="w-5 h-5 text-theme-500 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>

              {/* Project Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-theme-500 transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-theme-500/20">
                {project.techStack.map((tech, idx) => (
                  <Badge 
                    key={idx}
                    className="bg-theme-500/10 text-theme-500 border border-theme-500/30 hover:bg-theme-500 hover:text-white transition-all duration-300 text-xs"
                  >
                    {tech}
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

export default Projects;