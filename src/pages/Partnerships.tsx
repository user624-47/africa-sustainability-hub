import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { Users, Building, GraduationCap, Globe, Handshake, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Partnerships = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Government & Policy Partners",
      description: "Collaborating with African governments to develop and implement sustainable energy policies and frameworks.",
      benefits: [
        "Policy development support",
        "Regulatory framework design",
        "Capacity building programs",
        "Technical assistance"
      ],
      count: "25+ Government Partners"
    },
    {
      icon: Users,
      title: "Private Sector Alliance",
      description: "Engaging with businesses and corporations to drive sustainable innovation and investment across Africa.",
      benefits: [
        "Investment opportunities",
        "Technology partnerships",
        "Market access facilitation",
        "Risk mitigation support"
      ],
      count: "200+ Corporate Partners"
    },
    {
      icon: GraduationCap,
      title: "Academic & Research Network",
      description: "Partnering with universities and research institutions to advance knowledge and innovation in sustainability.",
      benefits: [
        "Research collaboration",
        "Student exchange programs",
        "Knowledge sharing platforms",
        "Innovation incubation"
      ],
      count: "50+ Academic Institutions"
    },
    {
      icon: Globe,
      title: "International Development",
      description: "Working with global organizations and development partners to mobilize resources and expertise.",
      benefits: [
        "Funding opportunities",
        "Technical expertise",
        "Global best practices",
        "Network expansion"
      ],
      count: "75+ International Partners"
    },
    {
      icon: Handshake,
      title: "Civil Society Organizations",
      description: "Engaging with NGOs and community organizations to ensure inclusive and participatory development.",
      benefits: [
        "Community engagement",
        "Grassroots implementation",
        "Social impact measurement",
        "Advocacy support"
      ],
      count: "150+ Civil Society Partners"
    },
    {
      icon: Target,
      title: "Implementation Partners",
      description: "Collaborating with specialized organizations to execute projects and deliver measurable impact.",
      benefits: [
        "Project implementation",
        "Technical delivery",
        "Quality assurance",
        "Impact monitoring"
      ],
      count: "100+ Implementation Partners"
    }
  ];

  const partnershipLevels = [
    {
      level: "Strategic Partner",
      description: "Comprehensive collaboration with significant resource commitment and long-term engagement.",
      commitment: "$500K+ annual commitment",
      benefits: ["Board representation", "Strategic planning participation", "Priority project access", "Exclusive networking events"]
    },
    {
      level: "Core Partner",
      description: "Active participation in specific initiatives with dedicated resources and expertise.",
      commitment: "$100K+ annual commitment",
      benefits: ["Initiative leadership roles", "Technical committee participation", "Regular briefings", "Partner recognition"]
    },
    {
      level: "Associate Partner",
      description: "Supportive engagement with flexible participation based on mutual interests and capacity.",
      commitment: "$25K+ annual commitment",
      benefits: ["Network access", "Information sharing", "Event participation", "Collaboration opportunities"]
    },
    {
      level: "Community Partner",
      description: "Grassroots engagement focused on local implementation and community-level impact.",
      commitment: "In-kind contributions",
      benefits: ["Local project support", "Capacity building", "Community representation", "Knowledge exchange"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Strategic Partnerships</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Building bridges across sectors, borders, and communities to create unprecedented collaboration for Africa's sustainable future.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Partnership Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse collaboration opportunities across multiple sectors and stakeholder groups
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-accent">{type.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Partnership Levels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible engagement options designed to match your organization's capacity and commitment level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipLevels.map((level, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{level.level}</h3>
                  <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {level.commitment}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{level.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Exclusive Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {level.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <PartnersSection />

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join our growing network of partners committed to accelerating Africa's sustainable transformation. Together, we can create lasting positive impact across the continent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full shadow-lg">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Partnerships;