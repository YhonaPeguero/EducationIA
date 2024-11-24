import React from 'react';
import { Button } from './ui/Button';
import { Rocket, Brain, ChartBar, Compass } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import img from '../assets/img.jpg';

const GettingStarted = () => {
  const steps = [
    {
      icon: Brain,
      title: "Discover Your Potential",
      description: "Take our comprehensive assessment that goes beyond basic personality tests to uncover your true professional potential.",
      color: "text-blue-500"
    },
    {
      icon: ChartBar,
      title: "Get Deep Insights",
      description: "Receive a detailed analysis of your strengths, ideal work environments, and personalized career recommendations.",
      color: "text-purple-500"
    },
    {
      icon: Compass,
      title: "Chart Your Path",
      description: "Access tailored resources, educational pathways, and connect with mentors who can guide your professional journey.",
      color: "text-emerald-500"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-background/95 py-16 px-4 sm:px-6">
      <div className="animate-in slide-in-from-bottom-8 duration-700 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#8B5CF6]">
              Transform Your Career Journey
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock your true potential with AI-powered career guidance tailored just for you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="group border-none shadow-none bg-background/50 hover:bg-background/80 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color} bg-background shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start lg:pl-[25%]">
              <Button 
                size="lg" 
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all duration-300 text-white"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Begin Your Discovery
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300">
            <div className="aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={img} 
                alt="Career guidance illustration"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;