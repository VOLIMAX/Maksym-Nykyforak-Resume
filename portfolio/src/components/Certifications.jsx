import React from 'react';
import { Card } from './ui/card';
import { Award, Plus } from 'lucide-react';

const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-amber-500">Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {data && data.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {data.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-[#1a1a1a] border-amber-500/20 p-6 hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                      <Award className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      {cert.date && <p className="text-amber-500 text-sm mt-1">{cert.date}</p>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-[#1a1a1a] border-amber-500/20 border-dashed p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-6 bg-amber-500/10 rounded-full">
                  <Plus className="w-12 h-12 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Certifications Coming Soon</h3>
                  <p className="text-gray-400">This section will be updated with professional certifications</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;