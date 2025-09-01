import { ArrowRight, Play, Users, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      
      {/* African Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in">
          {/* Mission Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Accelerating Africa's Energy Transition</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Let's Build a{' '}
            <span className="text-gradient-primary bg-gradient-to-r from-accent-warm to-accent bg-clip-text text-transparent">
              Sustainable Future
            </span>{' '}
            Together!
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            Accelerating Africa's Energy Transition and Sustainability Journey through 
            strategic partnerships, innovative solutions, and collaborative action.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-warm text-accent-foreground px-8 py-4 text-lg font-semibold shadow-primary group"
            >
              Join Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              Partner With Us
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </div>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center scale-in">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-accent-warm">500+</div>
              <div className="text-white/80">Strategic Partners</div>
            </div>
            <div className="text-center scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-glow">12</div>
              <div className="text-white/80">African Countries</div>
            </div>
            <div className="text-center scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-primary-glow">2030</div>
              <div className="text-white/80">Sustainability Goals</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;