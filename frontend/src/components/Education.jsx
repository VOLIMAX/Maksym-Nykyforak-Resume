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
            <div className="flex items-start gap-6">
              <div className="p-4 bg-theme-500/10 rounded-xl group-hover:bg-theme-500/20 transition-colors">
                <GraduationCap className="w-10 h-10 text-theme-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-theme-500 transition-colors">
                  {data.degree}
                </h3>
                <p className="text-lg text-gray-300 mb-3">{data.institution}</p>
                <div className="flex items-center gap-2 text-theme-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{data.period}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;