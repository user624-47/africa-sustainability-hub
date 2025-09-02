import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Leaf, Zap, Users, Recycle, Sprout, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Initiatives = () => {
  const initiatives = [
    {
      icon: Zap,
      title: "Clean Energy Acceleration",
      description: "Advancing renewable energy deployment across Africa through innovation, policy advocacy, and strategic partnerships.",
      highlights: ["Solar & Wind Projects", "Energy Storage Solutions", "Grid Modernization", "Policy Framework Development"],
      impact: "15GW renewable capacity targeted by 2030"
    },
    {
      icon: Leaf,
      title: "Decarbonization Strategy",
      description: "Comprehensive approach to reducing carbon emissions across all sectors of African economies.",
      highlights: ["Carbon Footprint Assessment", "Emission Reduction Plans", "Green Finance Mechanisms", "Technology Transfer"],
      impact: "80% CO2 reduction target by 2050"
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "Building robust networks of collaboration between governments, private sector, and civil society.",
      highlights: ["Multi-Stakeholder Platforms", "Knowledge Sharing Networks", "Capacity Building Programs", "Resource Mobilization"],
      impact: "500+ active partnerships across 12 countries"
    },
    {
      icon: Recycle,
      title: "Circular Economy Development",
      description: "Promoting sustainable resource management and waste reduction through circular economy principles.",
      highlights: ["Waste-to-Energy Systems", "Recycling Infrastructure", "Sustainable Manufacturing", "Resource Efficiency"],
      impact: "50% waste reduction in partner cities"
    },
    {
      icon: Sprout,
      title: "Sustainable Agriculture",
      description: "Transforming agricultural practices to ensure food security while protecting the environment.",
      highlights: ["Climate-Smart Farming", "Precision Agriculture", "Soil Health Management", "Water Conservation"],
      impact: "2M farmers reached with sustainable practices"
    },
    {
      icon: Building,
      title: "Green Infrastructure",
      description: "Developing sustainable infrastructure that supports economic growth while minimizing environmental impact.",
      highlights: ["Green Building Standards", "Sustainable Transport", "Smart Cities Development", "Infrastructure Finance"],
      impact: "$5B in green infrastructure investments"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <PageHeader 
        title="Our Initiatives"
        description="Driving sustainable change through innovative programs and collaborative action across Africa."
        breadcrumbs={[
          { label: 'Initiatives', href: '/initiatives' }
        ]}
      />

      {/* Initiatives Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <initiative.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{initiative.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{initiative.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {initiative.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-accent mb-2">Impact Goal:</p>
                  <p className="text-sm text-muted-foreground">{initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Join Our Initiatives
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Be part of Africa's sustainable transformation. Partner with us to create lasting positive impact across the continent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full shadow-lg">
              Partner With Us
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Initiatives;