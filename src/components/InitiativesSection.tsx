import { 
  Sun, 
  Wind, 
  Recycle, 
  HandHeart, 
  Leaf, 
  Building, 
  ArrowRight,
  Target 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InitiativesSection = () => {
  const initiatives = [
    {
      icon: Sun,
      title: 'Clean Energy',
      description: 'Accelerating renewable energy adoption across Africa with solar, wind, and hydroelectric solutions.',
      highlights: ['Solar Infrastructure', 'Wind Farms', 'Hydroelectric Projects'],
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: Recycle,
      title: 'Decarbonization',
      description: 'Leading carbon reduction strategies and sustainable practices across industries.',
      highlights: ['Carbon Credits', 'Green Technology', 'Emission Reduction'],
      color: 'from-primary to-primary-light'
    },
    {
      icon: HandHeart,
      title: 'Strategic Partnerships',
      description: 'Building collaborative networks with governments, NGOs, and private sector leaders.',
      highlights: ['Government Relations', 'Private Sector', 'NGO Alliances'],
      color: 'from-accent to-accent-warm'
    },
    {
      icon: Leaf,
      title: 'Circular Economy',
      description: 'Promoting sustainable resource management and waste reduction initiatives.',
      highlights: ['Resource Efficiency', 'Waste Management', 'Sustainable Design'],
      color: 'from-primary-light to-secondary'
    },
    {
      icon: Target,
      title: 'Sustainable Agriculture',
      description: 'Supporting climate-smart agriculture and food security across the continent.',
      highlights: ['Climate-Smart Farming', 'Food Security', 'Rural Development'],
      color: 'from-accent-deep to-primary'
    },
    {
      icon: Building,
      title: 'Green Infrastructure',
      description: 'Developing sustainable infrastructure solutions for growing African cities.',
      highlights: ['Smart Cities', 'Green Buildings', 'Sustainable Transport'],
      color: 'from-secondary-light to-accent'
    }
  ];

  return (
    <section id="initiatives" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Key Initiatives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Driving{' '}
            <span className="text-gradient-primary">Sustainable Change</span>{' '}
            Across Africa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach addresses every aspect of Africa's energy transition, 
            from renewable infrastructure to policy development and community engagement.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <Card 
                key={initiative.title} 
                className="group hover:shadow-primary transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {initiative.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {initiative.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 group"
          >
            Explore All Initiatives
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;