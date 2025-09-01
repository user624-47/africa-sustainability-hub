import { Calendar, CheckCircle, Target, TrendingUp } from 'lucide-react';

const TimelineSection = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Consortium Launch',
      description: 'Official establishment of the African Energy & Sustainability Consortium',
      status: 'completed',
      achievements: ['500+ Partners Onboarded', 'Strategic Framework Established']
    },
    {
      year: '2025',
      title: 'Regional Expansion',
      description: 'Expanding operations to 12 African countries with local partnerships',
      status: 'in-progress',
      achievements: ['Regional Hubs Setup', 'Local Partnership Program']
    },
    {
      year: '2027',
      title: 'Clean Energy Milestone',
      description: 'Supporting 50GW of renewable energy capacity across Africa',
      status: 'planned',
      achievements: ['Infrastructure Development', 'Technology Transfer Programs']
    },
    {
      year: '2030',
      title: 'Sustainability Goals',
      description: 'Achieving key Agenda 2063 sustainability targets',
      status: 'planned',
      achievements: ['Carbon Neutrality', 'Energy Access for All']
    },
    {
      year: '2035',
      title: 'Continental Integration',
      description: 'Full continental energy market integration and sustainability leadership',
      status: 'planned',
      achievements: ['Integrated Energy Market', 'Climate Resilience']
    },
    {
      year: '2063',
      title: 'Africa We Want',
      description: 'Realizing the Africa Agenda 2063 vision of prosperity and sustainability',
      status: 'vision',
      achievements: ['Sustainable Development', 'Continental Prosperity']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-primary text-primary-foreground';
      case 'in-progress': return 'bg-secondary text-secondary-foreground';
      case 'planned': return 'bg-accent text-accent-foreground';
      case 'vision': return 'bg-accent-warm text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return TrendingUp;
      case 'planned': return Target;
      case 'vision': return Calendar;
      default: return Calendar;
    }
  };

  return (
    <section id="strategic-focus" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Strategic Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Agenda 2063{' '}
            <span className="text-gradient-secondary">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic timeline aligns with Africa's Agenda 2063, creating a sustainable 
            pathway to continental prosperity and energy independence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const StatusIcon = getStatusIcon(milestone.status);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                    <div className={`w-16 h-16 rounded-full ${getStatusColor(milestone.status)} flex items-center justify-center shadow-soft`}>
                      <StatusIcon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-primary transition-all duration-300 group">
                      {/* Mobile Icon */}
                      <div className={`w-12 h-12 rounded-xl ${getStatusColor(milestone.status)} flex items-center justify-center mb-4 md:hidden`}>
                        <StatusIcon className="w-6 h-6" />
                      </div>
                      
                      {/* Year Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${getStatusColor(milestone.status)}`}>
                        {milestone.year}
                      </div>
                      
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;