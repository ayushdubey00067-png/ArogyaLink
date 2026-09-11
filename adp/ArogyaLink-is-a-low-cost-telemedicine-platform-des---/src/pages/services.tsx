import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Smartphone, MessageCircle, MapPin, Video, FileText,
  RefreshCw, Stethoscope, Brain, Wifi, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Consultations',
    desc: 'Download the ArogyaLink app and consult certified doctors anytime, anywhere. Available on Android and iOS, optimized for low-bandwidth connections.',
    features: ['Works on basic Android phones', 'Low data usage', 'Offline symptom logging', 'Available in 15+ languages'],
    badge: 'Most Popular',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Consultations',
    desc: 'No app download needed. Simply message our verified doctors on WhatsApp for text, voice, or video consultations.',
    features: ['No app required', 'Text, voice & video', 'Instant doctor matching', 'Prescription via WhatsApp'],
    badge: null,
  },
  {
    icon: MapPin,
    title: 'Village Health Kiosks',
    desc: 'Visit your nearest ArogyaLink kiosk managed by a trained local health worker. Get diagnostics done and connect with a doctor on-site.',
    features: ['Trained local health workers', 'Basic diagnostic tools', 'Offline-first capability', 'Community-trusted'],
    badge: 'Recommended',
  },
  {
    icon: Brain,
    title: 'AI Symptom Checker',
    desc: 'Our multilingual AI collects your symptoms through voice or text and prepares a detailed report for the doctor before your consultation.',
    features: ['Voice-based input', '15+ Indian languages', 'Accurate symptom mapping', 'Faster consultations'],
    badge: null,
  },
  {
    icon: Video,
    title: 'Audio/Video Consultations',
    desc: 'Connect face-to-face with certified doctors via audio or video call. Get the same quality of care as an in-person visit.',
    features: ['Certified MBBS/MD doctors', 'Instant or scheduled calls', 'Secure & private', 'Recorded for follow-up'],
    badge: null,
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    desc: 'Receive legally valid digital prescriptions directly on your phone after every consultation, accepted at pharmacies nationwide.',
    features: ['Legally valid e-prescriptions', 'Sent to your phone', 'Accepted at pharmacies', 'Stored in your health record'],
    badge: null,
  },
  {
    icon: RefreshCw,
    title: 'Follow-ups & Referrals',
    desc: 'Scheduled follow-up consultations and specialist referrals when needed, ensuring continuity of care for every patient.',
    features: ['Automated follow-up reminders', 'Specialist referrals', 'Care continuity', 'Health history tracking'],
    badge: null,
  },
  {
    icon: Stethoscope,
    title: 'Diagnostic Integration',
    desc: 'Kiosk-based diagnostic tools including BP monitors, glucometers, and pulse oximeters feed data directly to the consulting doctor.',
    features: ['BP monitoring', 'Blood glucose testing', 'Oxygen saturation', 'Real-time data sharing'],
    badge: null,
  },
];

const pricing = [
  {
    plan: 'Basic',
    price: '₹0',
    period: 'Free',
    desc: 'Essential care for everyone',
    features: ['1 consultation/month', 'WhatsApp access', 'AI symptom checker', 'Digital prescription'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    plan: 'Family',
    price: '₹199',
    period: '/month',
    desc: 'Complete care for your family',
    features: ['Unlimited consultations', 'All access channels', 'Priority doctor matching', 'Follow-up included', 'Health records', '5 family members'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    plan: 'Kiosk Partner',
    price: 'Custom',
    period: '',
    desc: 'For NGOs & village kiosk operators',
    features: ['Kiosk setup support', 'Health worker training', 'Diagnostic tools', 'Community dashboard', 'Dedicated support'],
    cta: 'Contact Us',
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <title>Services — ArogyaLink Telemedicine</title>
      <meta
        name="description"
        content="Explore ArogyaLink's telemedicine services: mobile app, WhatsApp, village kiosks, AI symptom checker, video consultations, and digital prescriptions for rural India."
      />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground font-semibold">What We Offer</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-5">
              Comprehensive Healthcare Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              From AI-powered symptom collection to live doctor consultations — ArogyaLink offers
              end-to-end healthcare services designed for rural India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <s.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground font-heading">{s.title}</h3>
                          {s.badge && (
                            <Badge className="bg-accent text-accent-foreground text-xs">{s.badge}</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offline First */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 bg-background rounded-2xl p-8 shadow-sm border border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
              <Wifi className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">Offline-First Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                ArogyaLink is built for India's connectivity realities. Our platform works in low-bandwidth
                and offline environments — syncing data when connectivity is restored. No internet? No problem.
              </p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shrink-0">
              <Link to="/how-it-works">Learn More <ChevronRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Affordable for All</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Designed to be affordable for every rural family. Start free, upgrade when you need more.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {pricing.map((p) => (
              <motion.div key={p.plan} variants={fadeUp}>
                <Card className={`h-full border-2 transition-all ${p.highlight ? 'border-primary shadow-lg' : 'border-border'}`}>
                  <CardContent className="p-6">
                    {p.highlight && (
                      <Badge className="mb-3 bg-primary text-primary-foreground">Most Popular</Badge>
                    )}
                    <h3 className="text-xl font-bold font-heading text-foreground mb-1">{p.plan}</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-bold text-primary font-heading">{p.price}</span>
                      <span className="text-muted-foreground text-sm">{p.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-5">{p.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <ChevronRight className="w-2.5 h-2.5 text-primary" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full font-semibold ${p.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-foreground'}`}
                    >
                      <Link to="/contact">{p.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
