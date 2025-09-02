import { ArrowRight, Play, Users, Target, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const slides = [
    {
      badge: { icon: Globe, text: "Accelerating Africa's Energy Transition" },
      title: "Let's Build a Sustainable Future Together!",
      subtitle: "Uniting Africa's brightest minds and boldest innovators to accelerate our continent's energy transition and sustainability journey.",
      stats: [
        { number: "500+", label: "Strategic Partners", desc: "Across government, private sector & academia", color: "text-accent-warm" },
        { number: "12", label: "African Countries", desc: "Leading the continental transformation", color: "text-accent" },
        { number: "2030", label: "Sustainability Goals", desc: "Aligned with Agenda 2063 vision", color: "text-primary-glow" }
      ]
    },
    {
      badge: { icon: Target, text: "Driving Clean Energy Innovation" },
      title: "Powering Africa with Renewable Energy",
      subtitle: "Leading the transformation to sustainable energy solutions across the continent with cutting-edge technology and strategic partnerships.",
      stats: [
        { number: "15GW", label: "Renewable Capacity", desc: "Targeted renewable energy capacity by 2030", color: "text-accent" },
        { number: "50M", label: "People Impacted", desc: "Lives improved through clean energy access", color: "text-accent-warm" },
        { number: "80%", label: "Carbon Reduction", desc: "CO2 emissions reduction target", color: "text-primary-glow" }
      ]
    },
    {
      badge: { icon: Users, text: "Building Strategic Partnerships" },
      title: "Collaborating for Continental Impact",
      subtitle: "Fostering unprecedented cooperation between governments, private sector, and communities to achieve Africa's sustainability vision.",
      stats: [
        { number: "$5B", label: "Investment Mobilized", desc: "Capital raised for sustainability projects", color: "text-accent-warm" },
        { number: "200+", label: "Active Projects", desc: "Ongoing sustainability initiatives", color: "text-accent" },
        { number: "25", label: "Research Centers", desc: "Connected innovation hubs across Africa", color: "text-primary-glow" }
      ]
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Carousel className="w-full h-screen" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative min-h-screen flex items-center justify-center">
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
                    <slide.badge.icon className="w-5 h-5 text-accent" />
                    <span className="text-base font-semibold tracking-wide">{slide.badge.text}</span>
                  </div>
                  
                  {/* Enhanced Main Headline */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
                    {slide.title.split('Sustainable Future')[0]}
                    {slide.title.includes('Sustainable Future') && (
                      <span className="relative">
                        <span className="bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
                          Sustainable Future
                        </span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-warm rounded-full opacity-60"></div>
                      </span>
                    )}
                    {slide.title.includes('Renewable Energy') && (
                      <span className="relative">
                        <span className="bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
                          Renewable Energy
                        </span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-warm rounded-full opacity-60"></div>
                      </span>
                    )}
                    {slide.title.includes('Continental Impact') && (
                      <span className="relative">
                        <span className="bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
                          Continental Impact
                        </span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-warm rounded-full opacity-60"></div>
                      </span>
                    )}
                    {slide.title.split('Sustainable Future')[1] || slide.title.split('Renewable Energy')[1] || slide.title.split('Continental Impact')[1] || ''}
                  </h1>
                  
                  {/* Enhanced Sub-headline */}
                  <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-5xl mx-auto leading-relaxed text-white/95 font-light">
                    {slide.subtitle.split(' energy transition')[0]}
                    {slide.subtitle.includes(' energy transition') && <span className="font-semibold text-accent-warm"> energy transition</span>}
                    {slide.subtitle.split(' energy transition')[1] || slide.subtitle}
                    {slide.subtitle.includes(' sustainability journey') && <span className="font-semibold text-accent"> sustainability journey</span>}
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
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center scale-in bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20" style={{animationDelay: `${statIndex * 0.2}s`}}>
                        <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${stat.color}`}>{stat.number}</div>
                        <div className="text-lg md:text-xl text-white/90 font-medium">{stat.label}</div>
                        <div className="text-sm text-white/70 mt-2">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation Arrows */}
        <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-md" />
        <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-md" />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-2 h-4 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;