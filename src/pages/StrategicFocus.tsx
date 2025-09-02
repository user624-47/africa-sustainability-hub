import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Globe, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const StrategicFocus = () => {
  const focusAreas = [
    {
      icon: Zap,
      title: "Energy Security & Access",
      description: "Ensuring reliable, affordable, and sustainable energy access for all Africans while building energy independence.",
      objectives: [
        "Universal energy access by 2030",
        "50% renewable energy in national grids",
        "Energy infrastructure resilience",
        "Regional energy market integration"
      ],
      metrics: "400M people to gain energy access"
    },
    {
      icon: Shield,
      title: "Climate Resilience",
      description: "Building adaptive capacity to climate change impacts while contributing to global climate action.",
      objectives: [
        "Climate adaptation strategies",
        "Disaster risk reduction",
        "Ecosystem restoration",
        "Climate-smart development"
      ],
      metrics: "80% reduction in climate vulnerability"
    },
    {
      icon: TrendingUp,
      title: "Economic Transformation",
      description: "Leveraging sustainability as a driver of economic growth, job creation, and competitiveness.",
      objectives: [
        "Green economy development",
        "Sustainable industrialization",
        "Innovation ecosystems",
        "Skills development programs"
      ],
      metrics: "5M green jobs created by 2030"
    },
    {
      icon: Users,
      title: "Social Inclusion",
      description: "Ensuring equitable participation and benefit-sharing in Africa's sustainable transformation.",
      objectives: [
        "Gender equality in energy sector",
        "Youth engagement and leadership",
        "Community participation",
        "Indigenous knowledge integration"
      ],
      metrics: "50% women participation in leadership"
    },
    {
      icon: Globe,
      title: "Regional Integration",
      description: "Strengthening continental cooperation and coordination for sustainable development outcomes.",
      objectives: [
        "Continental energy markets",
        "Technology transfer networks",
        "Policy harmonization",
        "Resource sharing mechanisms"
      ],
      metrics: "All 54 countries participating by 2035"
    },
    {
      icon: Target,
      title: "Innovation & Technology",
      description: "Advancing cutting-edge solutions and indigenous innovation for sustainable development challenges.",
      objectives: [
        "Research & development hubs",
        "Technology incubation",
        "Digital transformation",
        "Knowledge management systems"
      ],
      metrics: "25 innovation centers across Africa"
    }
  ];

  const agenda2063Pillars = [
    {
      title: "Aspiration 1: Prosperous Africa",
      focus: "Sustainable economic growth and development",
      timeline: "2024-2030",
      status: "Active"
    },
    {
      title: "Aspiration 2: Integrated Continent",
      focus: "Continental unity and integration",
      timeline: "2025-2035",
      status: "Planning"
    },
    {
      title: "Aspiration 3: Good Governance",
      focus: "Democratic values and institutions",
      timeline: "2024-2040",
      status: "Active"
    },
    {
      title: "Aspiration 4: Peaceful & Secure Africa",
      focus: "Peace, security, and stability",
      timeline: "2024-2050",
      status: "Ongoing"
    },
    {
      title: "Aspiration 5: Strong Cultural Identity",
      focus: "African renaissance and cultural heritage",
      timeline: "2024-2063",
      status: "Long-term"
    },
    {
      title: "Aspiration 6: People-Driven Development",
      focus: "Human-centered development approach",
      timeline: "2024-2063",
      status: "Core Focus"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Strategic Focus</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Aligning with Agenda 2063 to build the Africa we want - sustainable, prosperous, and united.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Six Pillars of Transition Readiness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive approach to sustainable development aligned with continental priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Objectives:</h4>
                  <ul className="space-y-2">
                    {area.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <Target className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-accent mb-2">Target Impact:</p>
                  <p className="text-sm text-muted-foreground">{area.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda 2063 Alignment */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Agenda 2063 Alignment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic focus directly supports Africa's transformative agenda for the next 50 years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agenda2063Pillars.map((pillar, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pillar.status === 'Active' ? 'bg-accent/20 text-accent' :
                    pillar.status === 'Planning' ? 'bg-secondary/20 text-secondary' :
                    pillar.status === 'Core Focus' ? 'bg-primary/20 text-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {pillar.status}
                  </div>
                  <span className="text-sm text-muted-foreground">{pillar.timeline}</span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StrategicFocus;