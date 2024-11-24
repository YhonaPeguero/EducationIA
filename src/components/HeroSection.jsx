import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-indigo-500 mr-2" />
            <span className="text-sm font-medium text-gray-600">AI-Powered Career Guidance</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Discover Your True
            </span>
            <br />
            <span className="text-gray-900">Professional Calling</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with our revolutionary AI platform that analyzes your unique talents, 
            passions, and personality to guide you towards a fulfilling career path.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 px-8 py-6 text-lg transition-all duration-200 w-full sm:w-auto"
            >
              Explore More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Trusted by students and professionals worldwide</p>
            <div className="flex justify-center items-center space-x-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="w-16 h-8 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}