import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  showBackButton?: boolean;
}

const PageHeader = ({
  title,
  description,
  breadcrumbs = [],
  showBackButton = true,
}: PageHeaderProps) => {
  return (
    <header className={cn(
      "relative overflow-hidden border-b border-border",
      "bg-background"
    )}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-background.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/60" />
      </div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} 
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              {showBackButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit px-0 text-muted-foreground hover:text-primary hover:bg-transparent group"
                  asChild
                >
                  <Link to="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                  </Link>
                </Button>
              )}
              
              {breadcrumbs.length > 0 && (
                <nav className="flex items-center text-sm font-medium text-muted-foreground" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2">
                    <li className="flex items-center">
                      <Link to="/" className="hover:text-primary transition-colors flex items-center">
                        <Home className="h-3.5 w-3.5 mr-2" />
                        Home
                      </Link>
                    </li>
                    {breadcrumbs.map((crumb, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
                        {index === breadcrumbs.length - 1 ? (
                          <span className="text-foreground font-medium" aria-current="page">
                            {crumb.label}
                          </span>
                        ) : (
                          <Link
                            to={crumb.href}
                            className="hover:text-primary transition-colors"
                          >
                            {crumb.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>
            
            {/* Title and Description */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 -top-1 h-12 w-1 bg-primary rounded-full" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  {title}
                </h1>
              </div>
              
              {description && (
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
