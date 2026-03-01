import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-theme-500">Education</span>
          </h2>
          <div className="h-1 w-24 bg-theme-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#1a1a1a] border-theme-500/20 p-8 hover:border-theme-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-theme-500/10 group">
            <div className="mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-theme-500" />
                  <h3 className="text-2xl font-bold text-white transition-colors">
                    {data.degree}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{data.period}</span>
                </div>
              </div>
              <p className="text-lg text-gray-300">{data.institution}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;