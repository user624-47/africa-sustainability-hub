import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { FileText, BookOpen, Calendar, TrendingUp, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Research Reports",
      description: "Comprehensive analyses on Africa's energy landscape and sustainability trends.",
      items: [
        { title: "Africa Energy Transition Outlook 2024", type: "Annual Report", date: "March 2024" },
        { title: "Renewable Energy Investment Guide", type: "Investment Report", date: "February 2024" },
        { title: "Policy Framework Analysis", type: "Policy Brief", date: "January 2024" },
        { title: "Sustainability Impact Assessment", type: "Impact Report", date: "December 2023" }
      ]
    },
    {
      icon: BookOpen,
      title: "Knowledge Hub",
      description: "Educational resources, best practices, and implementation guides.",
      items: [
        { title: "Clean Energy Implementation Toolkit", type: "Guide", date: "March 2024" },
        { title: "Sustainability Metrics Handbook", type: "Handbook", date: "February 2024" },
        { title: "Partnership Development Framework", type: "Framework", date: "January 2024" },
        { title: "Community Engagement Best Practices", type: "Best Practices", date: "December 2023" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time data, market analysis, and trend forecasting for informed decision-making.",
      items: [
        { title: "Energy Market Dashboard Q1 2024", type: "Dashboard", date: "March 2024" },
        { title: "Investment Trends Analysis", type: "Market Analysis", date: "February 2024" },
        { title: "Technology Innovation Tracker", type: "Tracker", date: "January 2024" },
        { title: "Policy Update Bulletin", type: "Bulletin", date: "Weekly" }
      ]
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Upcoming conferences, workshops, and learning opportunities.",
      items: [
        { title: "African Energy Summit 2024", type: "Conference", date: "June 15-17, 2024" },
        { title: "Sustainability Webinar Series", type: "Webinar", date: "Monthly" },
        { title: "Partnership Roundtable", type: "Workshop", date: "May 10, 2024" },
        { title: "Innovation Showcase", type: "Event", date: "April 25, 2024" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Africa Energy Transition Roadmap 2030",
      description: "Comprehensive strategic framework for accelerating renewable energy adoption across the continent.",
      type: "Strategic Report",
      pages: "156 pages",
      downloads: "2,500+",
      featured: true
    },
    {
      title: "Sustainable Investment Opportunities Database",
      description: "Curated collection of investment-ready projects and opportunities across African markets.",
      type: "Interactive Database",
      pages: "Live Data",
      downloads: "1,800+",
      featured: true
    },
    {
      title: "Policy Framework Assessment Tool",
      description: "Interactive tool for evaluating and benchmarking national energy and sustainability policies.",
      type: "Assessment Tool",
      pages: "Web App",
      downloads: "3,200+",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <PageHeader 
        title="Resources"
        description="Access our comprehensive collection of research, publications, and tools to support Africa's sustainable development."
        breadcrumbs={[
          { label: 'Resources', href: '/resources' }
        ]}
      />

      {/* Featured Resources */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most popular and impactful resources from our knowledge base
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">{resource.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{resource.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span>{resource.pages}</span>
                  <span>{resource.downloads} downloads</span>
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-light text-white font-semibold rounded-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Resource Library
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive collection of resources organized by category for easy access
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mr-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors duration-200">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-xs text-accent font-medium">{item.type}</span>
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary hover:bg-primary hover:text-white rounded-full">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full">
                    View All {category.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Subscribe to our newsletter to receive the latest research, insights, and updates on Africa's sustainability journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-96 px-6 py-4 rounded-full border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full shadow-lg whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Join 10,000+ professionals already receiving our insights. Unsubscribe anytime.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;