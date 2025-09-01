import { Building2, GraduationCap, Users, Briefcase, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PartnersSection = () => {
  const partnerCategories = [
    {
      icon: Building2,
      title: 'Government & Policy',
      count: '24',
      description: 'African governments and policy institutions driving sustainable development',
      partners: ['African Development Bank', 'AU Commission', 'UNECA', 'Regional Bodies']
    },
    {
      icon: Briefcase,
      title: 'Private Sector',
      count: '150+',
      description: 'Leading corporations and enterprises committed to sustainable practices',
      partners: ['Energy Companies', 'Technology Firms', 'Financial Institutions', 'Startups']
    },
    {
      icon: GraduationCap,
      title: 'Academic & Research',
      count: '45',
      description: 'Universities and research institutions advancing sustainability science',
      partners: ['Universities', 'Research Centers', 'Think Tanks', 'Innovation Hubs']
    },
    {
      icon: Users,
      title: 'Civil Society',
      count: '200+',
      description: 'NGOs and community organizations driving grassroots change',
      partners: ['Environmental NGOs', 'Community Groups', 'Youth Organizations', 'Women Groups']
    }
  ];

  const featuredPartners = [
    'African Development Bank', 'UNECA', 'Mo Ibrahim Foundation', 
    'TDB', 'AFREXIMBANK', 'NEPAD', 'ACET', 'AfCFTA Secretariat'
  ];

  return (
    <section id="partnerships" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Strategic Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Building{' '}
            <span className="text-gradient-primary">Collaborative Networks</span>{' '}
            Across Africa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strength lies in our diverse network of partners spanning government, 
            private sector, academia, and civil society across the African continent.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="text-center hover:shadow-primary transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/90 backdrop-blur-sm group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-1">
                    {category.partners.map((partner) => (
                      <div key={partner} className="text-xs text-muted-foreground/80">
                        {partner}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Partners */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
          <h3 className="text-2xl font-display font-semibold text-center text-foreground mb-8">
            Featured Strategic Partners
          </h3>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
            {featuredPartners.map((partner, index) => (
              <div 
                key={partner}
                className="w-full h-16 bg-muted/50 rounded-lg flex items-center justify-center text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {partner}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Join our growing network of partners committed to Africa's sustainable future
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-warm text-accent-foreground px-8 py-4 group"
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;