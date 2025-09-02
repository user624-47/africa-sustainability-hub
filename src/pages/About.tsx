import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, Globe, Leaf, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">About AE&SC</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Leading Africa's transformation towards a sustainable energy future through innovation, collaboration, and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-card rounded-3xl p-12 shadow-soft border border-border">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To accelerate Africa's energy transition and sustainability journey by fostering unprecedented collaboration between governments, private sector, academia, and civil society organizations across the continent.
              </p>
            </div>
            
            <div className="bg-card rounded-3xl p-12 shadow-soft border border-border">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-warm rounded-2xl flex items-center justify-center mr-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A unified Africa where sustainable energy powers economic growth, environmental stewardship drives innovation, and strategic partnerships create lasting positive impact for all Africans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visionary leaders driving Africa's sustainable transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Dr. Daere Akobo */}
            <div className="text-center bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Daere Akobo</h3>
              <p className="text-accent font-semibold mb-4">Founder & Executive Director</p>
              <p className="text-muted-foreground">
                Visionary leader with 20+ years of experience in sustainable development and energy policy across Africa.
              </p>
            </div>
            
            {/* Additional Leadership */}
            <div className="text-center bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-warm rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Advisory Board</h3>
              <p className="text-accent font-semibold mb-4">Strategic Advisors</p>
              <p className="text-muted-foreground">
                Distinguished experts from across Africa providing strategic guidance and sector expertise.
              </p>
            </div>
            
            <div className="text-center bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-glow to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Board of Directors</h3>
              <p className="text-accent font-semibold mb-4">Governance & Oversight</p>
              <p className="text-muted-foreground">
                Experienced leaders ensuring strategic direction and organizational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Governance Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent, accountable, and effective governance ensuring impactful outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-3xl p-10 shadow-soft border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Organizational Framework</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Multi-stakeholder governance model</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Regional representation from all African regions</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Sector-specific technical committees</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Youth and gender inclusion mandates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-3xl p-10 shadow-soft border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Accountability Measures</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Annual impact assessment and reporting</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Independent audit and compliance reviews</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Stakeholder feedback mechanisms</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Transparent financial management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;