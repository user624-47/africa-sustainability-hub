import { 
  Zap, 
  Recycle, 
  HandHeart, 
  Leaf, 
  Target,
  Building, 
  ArrowRight,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InitiativesSection = () => {
  const initiatives = [
    {
      icon: Zap,
      title: 'Clean Energy',
      description: 'Accelerating renewable energy adoption across Africa through innovative solar, wind, and hydroelectric solutions.',
      highlights: ['Solar Infrastructure', 'Wind Farms', 'Hydroelectric Projects'],
      stats: '15+ Active Projects',
      impact: '2.5M people powered'
    },
    {
      icon: Recycle,
      title: 'Decarbonization',
      description: 'Leading carbon reduction strategies and sustainable industrial transformation initiatives.',
      highlights: ['Carbon Credits', 'Green Technology', 'Emission Reduction'],
      stats: '40% Reduction Target',
      impact: '500K tons CO2 saved'
    },
    {
      icon: HandHeart,
      title: 'Strategic Partnerships',
      description: 'Building collaborative networks with governments, NGOs, and private sector leaders across Africa.',
      highlights: ['Government Relations', 'Private Sector', 'NGO Alliances'],
      stats: '500+ Partners',
      impact: '12 countries engaged'
    },
    {
      icon: Leaf,
      title: 'Circular Economy',
      description: 'Promoting sustainable resource management and waste-to-value transformation systems.',
      highlights: ['Resource Efficiency', 'Waste Management', 'Sustainable Design'],
      stats: '85% Waste Reduction',
      impact: '1M tons recycled'
    },
    {
      icon: Target,
      title: 'Sustainable Agriculture',
      description: 'Supporting climate-smart agriculture and food security initiatives across the continent.',
      highlights: ['Climate-Smart Farming', 'Food Security', 'Rural Development'],
      stats: '8M+ Farmers',
      impact: '30% yield increase'
    },
    {
      icon: Building,
      title: 'Green Infrastructure',
      description: 'Developing sustainable infrastructure solutions for Africa\'s rapidly growing urban centers.',
      highlights: ['Smart Cities', 'Green Buildings', 'Sustainable Transport'],
      stats: '25+ Cities',
      impact: '10M residents served'
    }
  ];

  return (
    <section id="initiatives" className="py-28 bg-gradient-to-br from-background via-muted/30 to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-primary/15 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-base font-bold text-primary tracking-wide">Our Core Initiatives</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-8 text-foreground leading-tight">
            Transforming Africa's{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-size-200 animate-gradient">
                Energy Future
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 rounded-full blur-sm"></div>
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
            Six strategic pillars driving <span className="font-semibold text-primary">sustainable development</span> and 
            <span className="font-semibold text-accent"> energy transition</span> across the African continent, 
            creating lasting impact for current and future generations.
          </p>
        </div>

        {/* Enhanced Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <Card 
                key={initiative.title} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-18 h-18 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-9 h-9 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-1">
                        {initiative.stats}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {initiative.impact}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-display text-foreground group-hover:text-primary transition-colors mb-3">
                    {initiative.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-6">
                    {initiative.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 font-semibold rounded-xl border border-primary/20 group-hover:border-primary"
                  >
                    Explore Initiative
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-16 border-2 border-primary/20 backdrop-blur-sm relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-6 py-2 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Join the Movement</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Ready to Shape Africa's{' '}
              <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sustainable Future?
              </span>
            </h3>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Be part of Africa's sustainable transformation. Connect with us to explore partnership opportunities, 
              contribute expertise, and help build a greener, more resilient continent for generations to come.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-white px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full group"
              >
                Become a Partner
                <TrendingUp className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-xl font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;