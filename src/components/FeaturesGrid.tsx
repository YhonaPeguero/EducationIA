import React from 'react';
import { Brain, Target, Users, Sparkles, ArrowUpRight, BookOpen } from 'lucide-react';

// Componente de tarjeta de característica mejorado
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <ArrowUpRight className="w-5 h-5 text-indigo-500" />
    </div>
    
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 text-indigo-600" />
    </div>
    
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
      {title}
    </h3>
    
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export function FeaturesGrid() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Our advanced AI analyzes your cognitive patterns, emotional intelligence, and natural aptitudes to reveal career paths you'll truly excel in."
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Get matched with careers that align perfectly with your unique combination of skills, values, and aspirations, backed by real-world success data."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with successful professionals who've walked your potential paths and gain invaluable insights from their real-world experience."
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Receive tailored learning paths and skill development recommendations based on your career goals and current proficiency levels."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Elementos decorativos del fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Encabezado de la sección */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500 mr-2" />
            <span className="text-sm font-medium text-gray-600">AI-POWERED GUIDANCE</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Cutting-Edge Career Guidance
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Unlock your true potential with our advanced AI technology and expert guidance system,
            designed to illuminate your path to professional success.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Indicador de más características */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-indigo-200 transition-colors cursor-pointer group">
            <span className="text-sm font-medium text-gray-600 group-hover:text-indigo-600 mr-2">
              Explore all features
            </span>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500" />
          </div>
        </div>
      </div>
    </section>
  );
}