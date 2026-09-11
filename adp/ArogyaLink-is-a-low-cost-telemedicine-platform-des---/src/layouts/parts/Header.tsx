import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/yoga-medicine', label: '🧘 Yoga & Medicine' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="text-xl font-bold text-primary font-heading">Arogya</span>
            <span className="text-xl font-bold text-accent font-heading">Link</span>
            <p className="text-[10px] text-muted-foreground leading-none tracking-wide">Rural Telemedicine</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
