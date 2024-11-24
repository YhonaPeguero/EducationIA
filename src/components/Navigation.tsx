import React, { useState } from 'react';
import { Sparkles, BookOpen, Users, LogIn, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop & Mobile Navigation Container */}
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2.5">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vocational AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="hover:bg-indigo-50 hover:text-indigo-600 font-medium"
            >
              <BookOpen className="w-4 h-4 mr-2 text-indigo-500" />
              Features
            </Button>
            
            <Button 
              variant="ghost" 
              className="hover:bg-indigo-50 hover:text-indigo-600 font-medium"
            >
              <Users className="w-4 h-4 mr-2 text-indigo-500" />
              About
            </Button>
            
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-sm"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="default"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-indigo-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start hover:bg-indigo-50 hover:text-indigo-600 font-medium"
              >
                <BookOpen className="w-4 h-4 mr-2 text-indigo-500" />
                Features
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start hover:bg-indigo-50 hover:text-indigo-600 font-medium"
              >
                <Users className="w-4 h-4 mr-2 text-indigo-500" />
                About
              </Button>
              
              <Button 
                variant="default" 
                className="w-full justify-start bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-sm"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}