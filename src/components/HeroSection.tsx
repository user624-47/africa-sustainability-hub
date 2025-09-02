import { ArrowRight, ChevronLeft, ChevronRight, Globe, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import { useState, useEffect } from 'react';

const slides = [
  {
    icon: Globe,
    title: "Let's Build a Sustainable Future Together!",
    description: "Uniting Africa's brightest minds and boldest innovators to accelerate our continent's energy transition and sustainability journey.",
    stats: [
      { number: "500+", label: "Strategic Partners", color: "text-accent-warm" },
      { number: "12", label: "African Countries", color: "text-accent" },
      { number: "2030", label: "Sustainability Goals", color: "text-primary-glow" }
    ],
    overlay: "from-secondary/95 via-primary/80 to-accent/75"
  },
  {
    icon: Target,
    title: "Driving Clean Energy Innovation",
    description: "Pioneering renewable energy solutions to power Africa's sustainable development and economic growth.",
    stats: [
      { number: "15GW", label: "Renewable Capacity", color: "text-accent" },
      { number: "50M", label: "People Impacted", color: "text-accent-warm" },
      { number: "80%", label: "Carbon Reduction", color: "text-primary-glow" }
    ],
    overlay: "from-blue-900/90 via-emerald-900/80 to-teal-700/75"
  },
  {
    icon: Users,
    title: "Empowering Communities",
    description: "Creating lasting impact through education, training, and sustainable development initiatives.",
    stats: [
      { number: "200+", label: "Projects", color: "text-accent-warm" },
      { number: "1M+", label: "Lives Touched", color: "text-accent" },
      { number: "25", label: "Innovation Hubs", color: "text-primary-glow" }
    ],
    overlay: "from-amber-900/90 via-orange-800/80 to-red-700/75"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dynamic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          opacity: isTransitioning ? 0.7 : 1,
          transform: isTransitioning ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay} transition-all duration-1000`} />
      
      {/* Slideshow Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        <div className={`transition-all duration-500 transform ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-6 py-2 mb-8">
            <slide.icon className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">
              {currentSlide === 0 ? "Accelerating Africa's Energy Transition" : 
               currentSlide === 1 ? "Driving Clean Energy Innovation" : 
               "Empowering Communities"}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {slide.title}
          </h1>
          
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            {slide.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-warm text-secondary px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {currentSlide === 0 ? "Join the Movement" : 
               currentSlide === 1 ? "Explore Solutions" : "Get Involved"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {slide.stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;