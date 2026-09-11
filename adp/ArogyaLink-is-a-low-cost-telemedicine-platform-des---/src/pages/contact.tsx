import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Users,
  Building2, Stethoscope, CheckCircle2, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Toll-Free Helpline',
    value: '1800-XXX-XXXX',
    sub: 'Available 24/7 in 15+ languages',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91-XXXXX-XXXXX',
    sub: 'Message us anytime for consultations',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'support@arogyalink.in',
    sub: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    value: 'New Delhi, India',
    sub: 'Plot 12, Sector 44, Gurugram, Haryana',
  },
];

const officeHours = [
  { day: 'Doctor Consultations', hours: '24 / 7' },
  { day: 'Kiosk Operations', hours: '8:00 AM – 8:00 PM' },
  { day: 'Customer Support', hours: '6:00 AM – 10:00 PM' },
  { day: 'Head Office', hours: 'Mon–Fri, 9:00 AM – 6:00 PM' },
];

const inquiryTypes = [
  { value: 'patient', label: 'Patient / Consultation Enquiry', icon: Stethoscope },
  { value: 'partner', label: 'NGO / Government Partnership', icon: Building2 },
  { value: 'doctor', label: 'Join as a Doctor', icon: Users },
  { value: 'kiosk', label: 'Set Up a Village Kiosk', icon: MapPin },
  { value: 'media', label: 'Media / Press Enquiry', icon: MessageCircle },
  { value: 'other', label: 'Other', icon: Mail },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    state: '',
    message: '',
  });

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <>
      <title>Contact ArogyaLink — Get in Touch</title>
      <meta
        name="description"
        content="Contact ArogyaLink for patient consultations, partnership enquiries, doctor onboarding, or kiosk setup. We're available 24/7 in 15+ Indian languages."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/airo-assets/images/pages/contact/hero"
            alt="ArogyaLink support team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/65 to-gray-900/30" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-4 bg-accent text-accent-foreground font-semibold px-3 py-1">
                We're Here to Help
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5"
            >
              Get in Touch with ArogyaLink
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 text-lg leading-relaxed">
              Whether you're a patient seeking care, a doctor wanting to join, an NGO looking to partner,
              or a village wanting a health kiosk — we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={fadeUp}>
                <Card className="border-border hover:shadow-md hover:border-primary/30 transition-all text-center group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground font-heading text-sm mb-1">{info.title}</h3>
                    <p className="text-primary font-bold text-sm mb-1">{info.value}</p>
                    <p className="text-muted-foreground text-xs">{info.sub}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="border-border shadow-sm">
                <CardContent className="p-8">
                  {submitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
                        Message Received!
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                        For urgent medical needs, please call our toll-free helpline.
                      </p>
                      <Button
                        className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', inquiryType: '', state: '', message: '' }); }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <Badge className="mb-3 bg-secondary text-primary font-semibold">Send a Message</Badge>
                        <h2 className="text-2xl font-bold font-heading text-foreground">How Can We Help You?</h2>
                        <p className="text-muted-foreground text-sm mt-1">
                          Fill in the form below and we'll respond in your preferred language.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Name + Phone */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="name" className="text-sm font-medium text-foreground">
                              Full Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              placeholder="e.g. Ramesh Kumar"
                              value={form.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              required
                              className="border-border focus:border-primary"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                              Mobile Number <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={form.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              required
                              className="border-border focus:border-primary"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <Label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address <span className="text-muted-foreground text-xs">(optional)</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="border-border focus:border-primary"
                          />
                        </div>

                        {/* Inquiry Type + State */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium text-foreground">
                              Enquiry Type <span className="text-destructive">*</span>
                            </Label>
                            <Select
                              value={form.inquiryType}
                              onValueChange={(v) => handleChange('inquiryType', v)}
                              required
                            >
                              <SelectTrigger className="border-border">
                                <SelectValue placeholder="Select enquiry type" />
                              </SelectTrigger>
                              <SelectContent>
                                {inquiryTypes.map((t) => (
                                  <SelectItem key={t.value} value={t.value}>
                                    {t.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="state" className="text-sm font-medium text-foreground">
                              State / District
                            </Label>
                            <Input
                              id="state"
                              placeholder="e.g. Rajasthan, Barmer"
                              value={form.state}
                              onChange={(e) => handleChange('state', e.target.value)}
                              className="border-border focus:border-primary"
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                          <Label htmlFor="message" className="text-sm font-medium text-foreground">
                            Your Message <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us how we can help you. You can write in Hindi, English, or any Indian language."
                            rows={5}
                            value={form.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            required
                            className="border-border focus:border-primary resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={loading}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base flex items-center gap-2 w-full sm:w-auto"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Office Hours */}
              <motion.div variants={fadeUp}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold font-heading text-foreground">Availability</h3>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {officeHours.map((o) => (
                        <li key={o.day} className="flex justify-between items-start gap-2 text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                          <span className="text-muted-foreground">{o.day}</span>
                          <span className="font-semibold text-foreground text-right">{o.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Inquiry Types */}
              <motion.div variants={fadeUp}>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold font-heading text-foreground">Who Can Contact Us</h3>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {inquiryTypes.map((t) => (
                        <li key={t.value} className="flex items-center gap-3 text-sm text-foreground">
                          <div className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                            <t.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          {t.label}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Emergency Note */}
              <motion.div variants={fadeUp}>
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold font-heading text-destructive mb-2 text-sm">
                      Medical Emergency?
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      ArogyaLink is not an emergency service. For life-threatening emergencies, please
                      call <strong className="text-foreground">108</strong> (ambulance) immediately or
                      visit your nearest government hospital.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder / Regional Offices */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Badge className="mb-3 bg-secondary text-primary font-semibold">Our Presence</Badge>
            <h2 className="text-3xl font-bold font-heading text-foreground mb-4">
              Regional Offices Across India
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We have regional teams in 8 states to support local kiosk operations and partnerships.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { state: 'Rajasthan', city: 'Jaipur', kiosks: '120+' },
              { state: 'Bihar', city: 'Patna', kiosks: '95+' },
              { state: 'Uttar Pradesh', city: 'Lucknow', kiosks: '140+' },
              { state: 'Madhya Pradesh', city: 'Bhopal', kiosks: '80+' },
              { state: 'Odisha', city: 'Bhubaneswar', kiosks: '60+' },
              { state: 'Jharkhand', city: 'Ranchi', kiosks: '45+' },
              { state: 'Chhattisgarh', city: 'Raipur', kiosks: '55+' },
              { state: 'West Bengal', city: 'Kolkata', kiosks: '70+' },
            ].map((office) => (
              <motion.div key={office.state} variants={fadeUp}>
                <Card className="border-border hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-5">
                    <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                    <h4 className="font-bold font-heading text-foreground text-sm">{office.state}</h4>
                    <p className="text-muted-foreground text-xs">{office.city}</p>
                    <Badge className="mt-2 bg-secondary text-primary text-xs font-semibold">
                      {office.kiosks} kiosks
                    </Badge>
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
