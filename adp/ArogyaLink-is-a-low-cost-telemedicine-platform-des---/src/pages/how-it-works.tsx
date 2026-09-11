import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Smartphone, UserCheck, Mic, Video, FileText, RefreshCw,
  MapPin, MessageCircle, ChevronRight, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const appSteps = [
  {
    step: '01',
    icon: Smartphone,
    title: 'Download & Register',
    desc: 'Download the ArogyaLink app on any Android phone. Register with your name and mobile number — no email needed.',
  },
  {
    step: '02',
    icon: Mic,
    title: 'Describe Your Symptoms',
    desc: 'Our AI collects your symptoms via voice in your preferred language — Hindi, Tamil, Telugu, Bengali, and 11 more.',
  },
  {
    step: '03',
    icon: UserCheck,
    title: 'Get Matched to a Doctor',
    desc: 'Within minutes, you are matched with a certified doctor who specialises in your condition.',
  },
  {
    step: '04',
    icon: Video,
    title: 'Consult via Audio or Video',
    desc: 'Have a live consultation with your doctor. They will ask questions, review your symptoms, and diagnose you.',
  },
  {
    step: '05',
    icon: FileText,
    title: 'Receive Your Prescription',
    desc: 'Your digital prescription is sent instantly to your phone via SMS or WhatsApp — readable at any pharmacy.',
  },
  {
    step: '06',
    icon: RefreshCw,
    title: 'Follow-up & Recovery',
    desc: 'Your doctor schedules a follow-up to check on your recovery. Referrals to specialists are arranged if needed.',
  },
];

const whatsappSteps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Message Our WhatsApp Number',
    desc: 'Send "Hello" to our toll-free WhatsApp number: +91-XXXXX-XXXXX. No app download required.',
  },
  {
    step: '02',
    icon: Mic,
    title: 'Share Your Symptoms',
    desc: 'Type or send a voice note describing your symptoms. You can also send photos of rashes, wounds, or medicines.',
  },
  {
    step: '03',
    icon: UserCheck,
    title: 'Doctor Reviews & Responds',
    desc: 'A certified doctor reviews your case and responds with questions, advice, or a prescription within 30 minutes.',
  },
  {
    step: '04',
    icon: FileText,
    title: 'Get Prescription on WhatsApp',
    desc: 'Your prescription is sent as a PDF directly on WhatsApp — easy to show at your local pharmacy.',
  },
];

const kioskSteps = [
  {
    step: '01',
    icon: MapPin,
    title: 'Visit Your Nearest Kiosk',
    desc: 'Find your nearest ArogyaLink kiosk — usually located at the village panchayat office, school, or community centre.',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Meet the Health Worker',
    desc: 'A trained local health worker registers you, records your basic details, and conducts initial diagnostic tests.',
  },
  {
    step: '03',
    icon: Video,
    title: 'Video Consultation with Doctor',
    desc: 'The health worker connects you to a certified doctor via video call. The doctor reviews your diagnostic results live.',
  },
  {
    step: '04',
    icon: FileText,
    title: 'Prescription & Referral',
    desc: 'Receive your prescription on the spot. If specialist care is needed, the doctor arranges a referral with your records.',
  },
];

const faqs = [
  {
    q: 'Do I need internet to use ArogyaLink?',
    a: 'The mobile app works on 2G/3G networks. Village kiosks have an offline-first design that syncs when connectivity is available. WhatsApp works on any data connection.',
  },
  {
    q: 'Are the doctors certified and qualified?',
    a: 'Yes. All doctors on ArogyaLink are MBBS or MD qualified, registered with the Medical Council of India, and verified by our team before onboarding.',
  },
  {
    q: 'In which languages can I consult?',
    a: 'We support 15+ Indian languages including Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, Punjabi, Odia, Malayalam, and more.',
  },
  {
    q: 'How much does a consultation cost?',
    a: 'A basic consultation starts at just ₹50. A full kiosk visit with diagnostics and video consultation costs ₹100. Family monthly plans start at ₹499.',
  },
  {
    q: 'Can I get medicines delivered?',
    a: 'We are working on medicine delivery partnerships. Currently, your digital prescription can be used at any pharmacy, including Jan Aushadhi stores.',
  },
  {
    q: 'What if I need emergency care?',
    a: 'ArogyaLink is designed for non-emergency consultations. In emergencies, please call 108 (ambulance) or visit the nearest government hospital immediately.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <title>How It Works — ArogyaLink</title>
      <meta
        name="description"
        content="Learn how ArogyaLink works — step-by-step guides for mobile app, WhatsApp, and village health kiosk consultations for rural India."
      />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground font-semibold">Simple & Fast</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-5"
            >
              Healthcare in 3 Easy Steps
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Whether you use our app, WhatsApp, or a village kiosk — getting quality healthcare with
              ArogyaLink is simple, fast, and affordable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabs for 3 pathways */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Choose Your Path</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Three Ways to Get Care
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pick the method that works best for you — all lead to the same quality care.
            </p>
          </motion.div>

          <Tabs defaultValue="app" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-lg mx-auto mb-12 h-auto p-1">
              <TabsTrigger value="app" className="flex items-center gap-2 py-3 text-sm font-medium">
                <Smartphone className="w-4 h-4" /> Mobile App
              </TabsTrigger>
              <TabsTrigger value="whatsapp" className="flex items-center gap-2 py-3 text-sm font-medium">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </TabsTrigger>
              <TabsTrigger value="kiosk" className="flex items-center gap-2 py-3 text-sm font-medium">
                <MapPin className="w-4 h-4" /> Kiosk
              </TabsTrigger>
            </TabsList>

            <TabsContent value="app">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {appSteps.map((s, i) => (
                  <motion.div key={s.step} variants={fadeUp}>
                    <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl font-bold text-primary/20 font-heading leading-none">{s.step}</span>
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                            <s.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <h3 className="font-bold font-heading text-foreground mb-2">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                        {i < appSteps.length - 1 && (
                          <div className="mt-4 flex justify-end">
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="whatsapp">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {whatsappSteps.map((s) => (
                  <motion.div key={s.step} variants={fadeUp}>
                    <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl font-bold text-primary/20 font-heading leading-none">{s.step}</span>
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                            <s.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <h3 className="font-bold font-heading text-foreground mb-2">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="kiosk">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {kioskSteps.map((s) => (
                  <motion.div key={s.step} variants={fadeUp}>
                    <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl font-bold text-primary/20 font-heading leading-none">{s.step}</span>
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                            <s.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <h3 className="font-bold font-heading text-foreground mb-2">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Powered by AI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Technology That Works for Rural India
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our platform is built specifically for low-bandwidth environments, multilingual users, and
              communities with limited digital literacy.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { title: 'Offline-First Design', desc: 'Works without internet. Syncs automatically when connectivity is restored.' },
              { title: 'AI Symptom Collection', desc: 'Voice-based AI gathers symptoms accurately in 15+ Indian languages.' },
              { title: 'Low-Bandwidth Optimised', desc: 'Designed to work smoothly on 2G/3G networks common in rural areas.' },
              { title: 'End-to-End Encryption', desc: 'All patient data and consultations are fully encrypted and private.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full border-border text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <h3 className="font-bold font-heading text-foreground mb-2 text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {faqs.map((faq) => (
              <motion.div key={faq.q} variants={fadeUp}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground font-heading mb-2 flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-7">{faq.a}</p>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Join thousands of rural families already using ArogyaLink for affordable, quality healthcare.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                <Link to="/contact">Contact Us</Link>
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
