import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Target, Eye, Users, Award, Globe, ChevronRight } from 'lucide-react';
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

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    desc: 'Every decision we make is guided by genuine care for the patients and communities we serve.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    desc: 'Healthcare should not be a privilege. We design for the most underserved and overlooked communities.',
  },
  {
    icon: Award,
    title: 'Quality Care',
    desc: 'All consultations are conducted by certified, experienced doctors — no compromise on medical standards.',
  },
  {
    icon: Users,
    title: 'Community Trust',
    desc: 'We build trust by working with local health workers who communities already know and respect.',
  },
];

const team = [
  { name: 'Dr. Priya Sharma', role: 'Co-Founder & Chief Medical Officer', location: 'New Delhi' },
  { name: 'Arjun Mehta', role: 'Co-Founder & CEO', location: 'Bengaluru' },
  { name: 'Dr. Kavita Rao', role: 'Head of Rural Health Programs', location: 'Hyderabad' },
  { name: 'Suresh Nair', role: 'Chief Technology Officer', location: 'Pune' },
];

export default function AboutPage() {
  return (
    <>
      <title>About ArogyaLink — Our Mission & Story</title>
      <meta
        name="description"
        content="Learn about ArogyaLink's mission to make quality healthcare accessible and affordable for rural India through telemedicine and village health kiosks."
      />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground font-semibold">Our Story</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-5"
            >
              Healthcare for Every Indian, Everywhere
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              ArogyaLink was born from a simple belief: no one should suffer or die because they live
              too far from a doctor. We are on a mission to change that — one village at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/airo-assets/images/pages/about/mission"
                alt="Doctor consulting patient via telemedicine"
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide affordable, accessible, and high-quality healthcare to rural and underserved
                  communities in India by leveraging digital technology, local health workers, and AI-powered tools —
                  ensuring no one is left behind due to geography or cost.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every person in rural India — regardless of income, language, or location —
                  has access to the same quality of healthcare as those in urban centers. We envision a
                  network of 10,000 village health kiosks serving 100 million people by 2030.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">The Challenge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              The Healthcare Gap in Rural India
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over 65% of India's population lives in rural areas, yet only 30% of healthcare
              infrastructure serves them. ArogyaLink is closing this gap.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { stat: '600M+', label: 'Rural Indians lack easy access to doctors' },
              { stat: '3–5 hrs', label: 'Average travel time to reach a specialist' },
              { stat: '40%', label: 'Of rural families skip treatment due to cost' },
            ].map((item) => (
              <motion.div key={item.stat} variants={fadeUp}>
                <Card className="text-center border-border">
                  <CardContent className="p-8">
                    <p className="text-5xl font-bold text-primary font-heading mb-3">{item.stat}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">What We Stand For</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Our Core Values</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground font-heading mb-1">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A passionate team of doctors, technologists, and social entrepreneurs united by a common purpose.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp}>
                <Card className="text-center border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground font-heading text-sm mb-1">{member.name}</h3>
                    <p className="text-xs text-primary font-medium mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-primary-foreground font-heading mb-4">
              Join the ArogyaLink Movement
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Whether you're a patient, doctor, health worker, or partner — there's a place for you in our mission.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                <Link to="/services">
                  Our Services <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
