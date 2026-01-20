import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-theme-500">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-theme-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Open to full-time and contract opportunities in full-stack and backend-focused roles.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Email */}
          <Card className="bg-[#1a1a1a] border-theme-500/20 p-8 hover:border-theme-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-500/20 group text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-theme-500/10 rounded-full group-hover:bg-theme-500/20 transition-colors">
                <Mail className="w-8 h-8 text-theme-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${data.email}`}
                  className="text-gray-400 hover:text-theme-500 transition-colors text-sm break-all"
                >
                  {data.email}
                </a>
              </div>
              <Button
                onClick={() => window.location.href = `mailto:${data.email}`}
                className="w-full bg-theme-500 hover:bg-theme-600 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </Card>

          {/* LinkedIn */}
          <Card className="bg-[#1a1a1a] border-theme-500/20 p-8 hover:border-theme-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-500/20 group text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-theme-500/10 rounded-full group-hover:bg-theme-500/20 transition-colors">
                <Linkedin className="w-8 h-8 text-theme-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Connect with me</p>
              </div>
              <Button
                onClick={() => window.open(data.linkedin, '_blank')}
                className="w-full bg-theme-500 hover:bg-theme-600 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                View Profile
              </Button>
            </div>
          </Card>

          {/* GitHub */}
          <Card className="bg-[#1a1a1a] border-theme-500/20 p-8 hover:border-theme-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-theme-500/20 group text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-theme-500/10 rounded-full group-hover:bg-theme-500/20 transition-colors">
                <Github className="w-8 h-8 text-theme-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">{data.github || 'Coming soon'}</p>
              </div>
              <Button
                onClick={() => data.github && window.open(data.github, '_blank')}
                disabled={!data.github}
                className="w-full bg-theme-500 hover:bg-theme-600 text-white font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                View Profile
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;