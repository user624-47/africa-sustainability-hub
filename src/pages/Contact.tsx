import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["African Union Commission", "Roosevelt Street, W21K19", "Addis Ababa, Ethiopia"],
      action: "Get Directions"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@aesc-africa.org", "partnerships@aesc-africa.org", "media@aesc-africa.org"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+251 11 551 7700", "+251 11 551 8877", "Emergency: +251 91 123 4567"],
      action: "Call Now"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      action: "Schedule Meeting"
    }
  ];

  const regionalOffices = [
    {
      region: "West Africa",
      location: "Lagos, Nigeria",
      email: "westafrica@aesc-africa.org",
      phone: "+234 1 234 5678"
    },
    {
      region: "East Africa",
      location: "Nairobi, Kenya",
      email: "eastafrica@aesc-africa.org",
      phone: "+254 20 123 4567"
    },
    {
      region: "Southern Africa",
      location: "Cape Town, South Africa",
      email: "southernafrica@aesc-africa.org",
      phone: "+27 21 123 4567"
    },
    {
      region: "Central Africa",
      location: "Yaoundé, Cameroon",
      email: "centralafrica@aesc-africa.org",
      phone: "+237 222 123 456"
    },
    {
      region: "North Africa",
      location: "Cairo, Egypt",
      email: "northafrica@aesc-africa.org",
      phone: "+20 2 1234 5678"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Ready to join Africa's sustainability transformation? We're here to help you get started and find the right partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us and start your collaboration journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
                
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
                
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full">
                  {info.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a specific question or partnership proposal? Reach out directly through our contact form.
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-10 shadow-soft border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Partnership Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select partnership type</option>
                    <option>Strategic Partnership</option>
                    <option>Implementation Partnership</option>
                    <option>Research Collaboration</option>
                    <option>Investment Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your organization, interests, and how you'd like to collaborate..."
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-primary border-border rounded focus:ring-primary" />
                <label className="text-sm text-muted-foreground">
                  I agree to receive communications about partnership opportunities and updates from AE&SC.
                </label>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  <span>We'll respond within 24-48 hours</span>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-full shadow-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Regional Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with our regional offices across Africa for localized support and partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalOffices.map((office, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">{office.region}</h3>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                    <span className="text-sm">{office.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Button size="sm" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full">
                    Contact Regional Office
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;