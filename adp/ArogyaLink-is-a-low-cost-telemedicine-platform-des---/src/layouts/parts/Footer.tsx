import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-heading">ArogyaLink</span>
            </div>
            <p className="text-primary-foreground/75 text-sm leading-relaxed">
              Bridging the healthcare gap in rural India through affordable, accessible telemedicine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground font-heading">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/75">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground font-heading">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/75">
              {[
                'Video Consultations',
                'WhatsApp Consultations',
                'Village Health Kiosks',
                'AI Symptom Checker',
                'Digital Prescriptions',
                'Follow-up & Referrals',
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground font-heading">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>support@arogyalink.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/60">
          <p>© {year} ArogyaLink. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 fill-accent text-accent" /> for rural India
          </p>
        </div>
      </div>
    </footer>
  );
}
