import { useState } from 'react';
import { Menu, X, Leaf, Globe, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Target },
    { name: 'Initiatives', href: '/initiatives', icon: Leaf },
    { name: 'Strategic Focus', href: '/strategic-focus', icon: Target },
    { name: 'Partnerships', href: '/partnerships', icon: Users },
    { name: 'Resources', href: '/resources', icon: Globe },
    { name: 'Contact', href: '/contact', icon: Globe },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-soft">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-primary">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-foreground">AE&SC</h1>
                <p className="text-xs text-muted-foreground font-medium -mt-1 hidden lg:block">African Energy & Sustainability Consortium</p>
              </div>
            </div>
          </div>

          {/* Main Navigation - Center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Right Side */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full px-6"
            >
              Join
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white shadow-primary font-semibold rounded-full px-6"
            >
              Partner
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-primary/10 rounded-xl"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-50 pt-20 px-6 pb-8 overflow-y-auto transition-all duration-300 ease-in-out"
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          <div className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full"
                >
                  Join Movement
                </Button>
                <Button 
                  className="w-full bg-primary hover:bg-primary-light text-white shadow-primary font-semibold rounded-full"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;