import { j as jsxRuntimeExports, m as motion, e as Smartphone, f as MessageCircle, a as MapPin, B as Brain, V as Video, F as FileText, q as RefreshCw, h as Stethoscope, W as Wifi, L as Link, C as ChevronRight } from "./vendor-CooK8OSF.js";
import { a as Badge, C as Card, b as CardContent, B as Button } from "./main-C6X6yP-d.js";
import "./preload-CiLjR_o-.js";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
const services = [
  {
    icon: Smartphone,
    title: "Mobile App Consultations",
    desc: "Download the ArogyaLink app and consult certified doctors anytime, anywhere. Available on Android and iOS, optimized for low-bandwidth connections.",
    features: ["Works on basic Android phones", "Low data usage", "Offline symptom logging", "Available in 15+ languages"],
    badge: "Most Popular"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Consultations",
    desc: "No app download needed. Simply message our verified doctors on WhatsApp for text, voice, or video consultations.",
    features: ["No app required", "Text, voice & video", "Instant doctor matching", "Prescription via WhatsApp"],
    badge: null
  },
  {
    icon: MapPin,
    title: "Village Health Kiosks",
    desc: "Visit your nearest ArogyaLink kiosk managed by a trained local health worker. Get diagnostics done and connect with a doctor on-site.",
    features: ["Trained local health workers", "Basic diagnostic tools", "Offline-first capability", "Community-trusted"],
    badge: "Recommended"
  },
  {
    icon: Brain,
    title: "AI Symptom Checker",
    desc: "Our multilingual AI collects your symptoms through voice or text and prepares a detailed report for the doctor before your consultation.",
    features: ["Voice-based input", "15+ Indian languages", "Accurate symptom mapping", "Faster consultations"],
    badge: null
  },
  {
    icon: Video,
    title: "Audio/Video Consultations",
    desc: "Connect face-to-face with certified doctors via audio or video call. Get the same quality of care as an in-person visit.",
    features: ["Certified MBBS/MD doctors", "Instant or scheduled calls", "Secure & private", "Recorded for follow-up"],
    badge: null
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    desc: "Receive legally valid digital prescriptions directly on your phone after every consultation, accepted at pharmacies nationwide.",
    features: ["Legally valid e-prescriptions", "Sent to your phone", "Accepted at pharmacies", "Stored in your health record"],
    badge: null
  },
  {
    icon: RefreshCw,
    title: "Follow-ups & Referrals",
    desc: "Scheduled follow-up consultations and specialist referrals when needed, ensuring continuity of care for every patient.",
    features: ["Automated follow-up reminders", "Specialist referrals", "Care continuity", "Health history tracking"],
    badge: null
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Integration",
    desc: "Kiosk-based diagnostic tools including BP monitors, glucometers, and pulse oximeters feed data directly to the consulting doctor.",
    features: ["BP monitoring", "Blood glucose testing", "Oxygen saturation", "Real-time data sharing"],
    badge: null
  }
];
const pricing = [
  {
    plan: "Basic",
    price: "₹0",
    period: "Free",
    desc: "Essential care for everyone",
    features: ["1 consultation/month", "WhatsApp access", "AI symptom checker", "Digital prescription"],
    cta: "Get Started",
    highlight: false
  },
  {
    plan: "Family",
    price: "₹199",
    period: "/month",
    desc: "Complete care for your family",
    features: ["Unlimited consultations", "All access channels", "Priority doctor matching", "Follow-up included", "Health records", "5 family members"],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    plan: "Kiosk Partner",
    price: "Custom",
    period: "",
    desc: "For NGOs & village kiosk operators",
    features: ["Kiosk setup support", "Health worker training", "Diagnostic tools", "Community dashboard", "Dedicated support"],
    cta: "Contact Us",
    highlight: false
  }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Services — ArogyaLink Telemedicine" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "Explore ArogyaLink's telemedicine services: mobile app, WhatsApp, village kiosks, AI symptom checker, video consultations, and digital prescriptions for rural India."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary-foreground/20 text-primary-foreground font-semibold", children: "What We Offer" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { variants: fadeUp, className: "text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-5", children: "Comprehensive Healthcare Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary-foreground/80 max-w-2xl mx-auto text-lg", children: "From AI-powered symptom collection to live doctor consultations — ArogyaLink offers end-to-end healthcare services designed for rural India." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground font-heading", children: s.title }),
                s.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs", children: s.badge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2", children: s.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
            f
          ] }, f)) })
        ] }) }) }, s.title))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "flex flex-col md:flex-row items-center gap-8 bg-background rounded-2xl p-8 shadow-sm border border-border",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: fadeUp,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-heading text-foreground mb-2", children: "Offline-First Design" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "ArogyaLink is built for India's connectivity realities. Our platform works in low-bandwidth and offline environments — syncing data when connectivity is restored. No internet? No problem." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/how-it-works", children: [
            "Learn More ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
          ] }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-14",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Affordable for All" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Simple, Transparent Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Designed to be affordable for every rural family. Start free, upgrade when you need more." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: pricing.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `h-full border-2 transition-all ${p.highlight ? "border-primary shadow-lg" : "border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary text-primary-foreground", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-heading text-foreground mb-1", children: p.plan }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-primary font-heading", children: p.price }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: p.period })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2 mb-6", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-2.5 h-2.5 text-primary" }) }),
              f
            ] }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: `w-full font-semibold ${p.highlight ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-foreground"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: p.cta })
              }
            )
          ] }) }) }, p.plan))
        }
      )
    ] }) })
  ] });
}
export {
  ServicesPage as default
};
