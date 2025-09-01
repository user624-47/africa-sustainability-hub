import { ArrowRight, Play, Users, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-primary/80 to-accent/75" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-20 animate-pulse" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in">
          {/* Enhanced Mission Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-md rounded-full px-8 py-3 mb-12 border border-white/20">
            <Globe className="w-5 h-5 text-accent" />
            <span className="text-base font-semibold tracking-wide">Accelerating Africa's Energy Transition</span>
          </div>
          
          {/* Enhanced Main Headline */}
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
            Let's Build a{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
                Sustainable Future
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-warm rounded-full opacity-60"></div>
            </span>{' '}
            Together!
          </h1>
          
          {/* Enhanced Sub-headline */}
          <p className="text-2xl md:text-3xl mb-16 max-w-5xl mx-auto leading-relaxed text-white/95 font-light">
            Uniting Africa's brightest minds and boldest innovators to accelerate our continent's 
            <span className="font-semibold text-accent-warm"> energy transition</span> and 
            <span className="font-semibold text-accent"> sustainability journey</span>.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-warm text-secondary px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full group"
            >
              Join the Movement
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-secondary backdrop-blur-md px-12 py-6 text-xl font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Partner With Us
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20 px-10 py-6 text-xl font-semibold group rounded-full"
            >
              <Play className="mr-3 w-6 h-6 text-accent group-hover:text-accent-warm transition-colors" />
              Learn More
            </Button>
          </div>
          
          {/* Enhanced Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center scale-in bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-4 text-accent-warm">500+</div>
              <div className="text-xl text-white/90 font-medium">Strategic Partners</div>
              <div className="text-sm text-white/70 mt-2">Across government, private sector & academia</div>
            </div>
            <div className="text-center scale-in bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-4 text-accent">12</div>
              <div className="text-xl text-white/90 font-medium">African Countries</div>
              <div className="text-sm text-white/70 mt-2">Leading the continental transformation</div>
            </div>
            <div className="text-center scale-in bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl md:text-6xl font-bold mb-4 text-primary-glow">2030</div>
              <div className="text-xl text-white/90 font-medium">Sustainability Goals</div>
              <div className="text-sm text-white/70 mt-2">Aligned with Agenda 2063 vision</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-2 h-4 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;