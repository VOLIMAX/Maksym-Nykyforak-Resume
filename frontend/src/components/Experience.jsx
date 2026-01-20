import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-amber-500">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {data.map((job, index) => (
            <Card 
              key={index}
              className="bg-[#1a1a1a] border-amber-500/20 p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-10 w-6 h-6 bg-amber-500 rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform"></div>

              {/* Company & Role */}
              <div className="mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-amber-500" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                        {job.company}
                      </h3>
                    </div>
                    <h4 className="text-xl text-amber-500 font-semibold">{job.role}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                {job.domain && (
                  <p className="text-gray-400 italic text-sm">{job.domain}</p>
                )}
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {job.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <p className="text-gray-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      className="bg-amber-500/10 text-amber-500 border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;