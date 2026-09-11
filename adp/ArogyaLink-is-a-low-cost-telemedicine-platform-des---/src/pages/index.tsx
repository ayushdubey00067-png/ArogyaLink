import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Smartphone, MessageCircle, MapPin, Mic, Video, FileText,
  Stethoscope, Users, TrendingUp, ChevronRight, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '500+', label: 'Villages Covered' },
  { value: '50,000+', label: 'Patients Served' },
  { value: '200+', label: 'Certified Doctors' },
  { value: '15+', label: 'Languages Supported' },
];

const features = [
  {
    icon: Smartphone,
    title: 'Mobile App',
    desc: 'Consult doctors instantly via our easy-to-use app, even on basic smartphones.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Consultations',
    desc: 'No app needed — connect with certified doctors directly through WhatsApp.',
  },
  {
    icon: MapPin,
    title: 'Village Health Kiosks',
    desc: 'Trained local health workers operate kiosks with diagnostic tools in your village.',
  },
  {
    icon: Mic,
    title: 'Multilingual Voice AI',
    desc: 'AI-powered symptom collection in 15+ Indian languages via voice interaction.',
  },
  {
    icon: Video,
    title: 'Audio/Video Consultations',
    desc: 'Instant live consultations with certified doctors from the comfort of your home.',
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    desc: 'Receive prescriptions digitally, with follow-ups and referrals when needed.',
  },
];

const testimonials = [
  {
    name: 'Sunita Devi',
    location: 'Rajasthan',
    text: 'ArogyaLink saved me a 3-hour journey to the city. I got a doctor consultation from our village kiosk in 20 minutes.',
    rating: 5,
  },
  {
    name: 'Ramesh Kumar',
    location: 'Bihar',
    text: 'The doctor spoke to me in Hindi and understood my problem clearly. The prescription was sent to my phone immediately.',
    rating: 5,
  },
  {
    name: 'Meena Patel',
    location: 'Gujarat',
    text: 'My children now get regular health check-ups without missing school. This service is a blessing for our community.',
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <>
      <title>ArogyaLink — Telemedicine for Rural India</title>
      <meta
        name="description"
        content="ArogyaLink brings affordable, accessible healthcare to rural India through mobile app, WhatsApp, and village health kiosks with AI-powered multilingual support."
      />

      {/* Hero - home asset */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/airo-assets/images/pages/home/hero"
            alt="Rural Indian village community sitting together"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/20" />
        </div>
        <div className="relative container mx-auto px-4 py-28 md:py-40">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-4 bg-accent text-accent-foreground font-semibold px-3 py-1">
                Trusted by 50,000+ patients across rural India
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-white font-heading leading-tight mb-6"
            >
              Quality Healthcare,{' '}
              <span className="text-accent">Right at Your Village</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/85 mb-8 leading-relaxed"
            >
              ArogyaLink connects rural communities with certified doctors through mobile app,
              WhatsApp, and village health kiosks — in your own language, at a fraction of the cost.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8">
                <Link to="/contact">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-base px-8">
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <p className="text-4xl font-bold text-primary-foreground font-heading">{s.value}</p>
                <p className="text-primary-foreground/75 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Our Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Multiple Ways to Access Care
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you have a smartphone, a basic phone, or visit a local kiosk — ArogyaLink meets you where you are.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-all group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground font-heading mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kiosk Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge className="mb-3 bg-secondary text-primary font-semibold">Village Kiosks</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-5">
                Bringing Clinics to Your Doorstep
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Our village health kiosks are managed by trained local health workers equipped with
                basic diagnostic tools — blood pressure monitors, glucometers, pulse oximeters, and more.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Trained local health workers you already trust',
                  'Basic diagnostics for accurate remote diagnosis',
                  'Offline-first design — works without internet',
                  'Creates local employment in rural communities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/airo-assets/images/pages/home/kiosk"
                alt="Village health kiosk"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <img
                src="/airo-assets/images/pages/home/community"
                alt="Community health awareness"
                className="w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge className="mb-3 bg-secondary text-primary font-semibold">Community Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-5">
                Building Healthier Rural Communities
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                ArogyaLink isn't just a telemedicine platform — it's a community health movement.
                We empower local workers, educate families, and create sustainable healthcare ecosystems in underserved areas.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Stethoscope, label: 'Expert Doctors' },
                  { icon: Users, label: 'Local Workers' },
                  { icon: TrendingUp, label: 'Better Outcomes' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 rounded-xl bg-secondary">
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/about">Our Mission</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Patient Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Real People, Real Impact
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <Card className="h-full border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4"
            >
              Ready to Transform Healthcare in Your Village?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/80 mb-8 max-w-xl mx-auto"
            >
              Join thousands of rural families already benefiting from ArogyaLink's affordable, accessible telemedicine.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
