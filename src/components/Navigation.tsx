import { useState } from 'react';
import { Menu, X, Leaf, Globe, Target, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Globe },
    { 
      name: 'About', 
      href: '#about',
      icon: Target,
      dropdown: ['Mission & Vision', 'Leadership', 'Governance']
    },
    { 
      name: 'Initiatives', 
      href: '#initiatives',
      icon: Leaf,
      dropdown: ['Clean Energy', 'Decarbonization', 'Partnerships', 'Circular Economy']
    },
    { name: 'Strategic Focus', href: '#strategic-focus', icon: Target },
    { name: 'Partnerships', href: '#partnerships', icon: Users },
    { name: 'Resources', href: '#resources', icon: Globe },
    { name: 'Contact', href: '#contact', icon: Globe },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-primary">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">AE&SC</h1>
              <p className="text-xs text-muted-foreground font-medium -mt-1 hidden lg:block">African Energy & Sustainability Consortium</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-accent transition-colors" />
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />}
                </a>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 font-medium"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full px-6"
            >
              Join Movement
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary-light text-white shadow-primary font-semibold rounded-full px-6"
            >
              Partner With Us
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
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
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