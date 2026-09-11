import { s as Root2, r as reactExports, j as jsxRuntimeExports, v as List, w as Trigger, x as Content, m as motion, e as Smartphone, f as MessageCircle, a as MapPin, g as Mic, y as UserCheck, V as Video, F as FileText, q as RefreshCw, z as ArrowRight, C as ChevronRight, L as Link } from "./vendor-CooK8OSF.js";
import { c as cn, a as Badge, C as Card, b as CardContent, B as Button } from "./main-C6X6yP-d.js";
import "./preload-CiLjR_o-.js";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
const appSteps = [
  {
    step: "01",
    icon: Smartphone,
    title: "Download & Register",
    desc: "Download the ArogyaLink app on any Android phone. Register with your name and mobile number — no email needed."
  },
  {
    step: "02",
    icon: Mic,
    title: "Describe Your Symptoms",
    desc: "Our AI collects your symptoms via voice in your preferred language — Hindi, Tamil, Telugu, Bengali, and 11 more."
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Get Matched to a Doctor",
    desc: "Within minutes, you are matched with a certified doctor who specialises in your condition."
  },
  {
    step: "04",
    icon: Video,
    title: "Consult via Audio or Video",
    desc: "Have a live consultation with your doctor. They will ask questions, review your symptoms, and diagnose you."
  },
  {
    step: "05",
    icon: FileText,
    title: "Receive Your Prescription",
    desc: "Your digital prescription is sent instantly to your phone via SMS or WhatsApp — readable at any pharmacy."
  },
  {
    step: "06",
    icon: RefreshCw,
    title: "Follow-up & Recovery",
    desc: "Your doctor schedules a follow-up to check on your recovery. Referrals to specialists are arranged if needed."
  }
];
const whatsappSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Message Our WhatsApp Number",
    desc: 'Send "Hello" to our toll-free WhatsApp number: +91-XXXXX-XXXXX. No app download required.'
  },
  {
    step: "02",
    icon: Mic,
    title: "Share Your Symptoms",
    desc: "Type or send a voice note describing your symptoms. You can also send photos of rashes, wounds, or medicines."
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Doctor Reviews & Responds",
    desc: "A certified doctor reviews your case and responds with questions, advice, or a prescription within 30 minutes."
  },
  {
    step: "04",
    icon: FileText,
    title: "Get Prescription on WhatsApp",
    desc: "Your prescription is sent as a PDF directly on WhatsApp — easy to show at your local pharmacy."
  }
];
const kioskSteps = [
  {
    step: "01",
    icon: MapPin,
    title: "Visit Your Nearest Kiosk",
    desc: "Find your nearest ArogyaLink kiosk — usually located at the village panchayat office, school, or community centre."
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Meet the Health Worker",
    desc: "A trained local health worker registers you, records your basic details, and conducts initial diagnostic tests."
  },
  {
    step: "03",
    icon: Video,
    title: "Video Consultation with Doctor",
    desc: "The health worker connects you to a certified doctor via video call. The doctor reviews your diagnostic results live."
  },
  {
    step: "04",
    icon: FileText,
    title: "Prescription & Referral",
    desc: "Receive your prescription on the spot. If specialist care is needed, the doctor arranges a referral with your records."
  }
];
const faqs = [
  {
    q: "Do I need internet to use ArogyaLink?",
    a: "The mobile app works on 2G/3G networks. Village kiosks have an offline-first design that syncs when connectivity is available. WhatsApp works on any data connection."
  },
  {
    q: "Are the doctors certified and qualified?",
    a: "Yes. All doctors on ArogyaLink are MBBS or MD qualified, registered with the Medical Council of India, and verified by our team before onboarding."
  },
  {
    q: "In which languages can I consult?",
    a: "We support 15+ Indian languages including Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, Punjabi, Odia, Malayalam, and more."
  },
  {
    q: "How much does a consultation cost?",
    a: "A basic consultation starts at just ₹50. A full kiosk visit with diagnostics and video consultation costs ₹100. Family monthly plans start at ₹499."
  },
  {
    q: "Can I get medicines delivered?",
    a: "We are working on medicine delivery partnerships. Currently, your digital prescription can be used at any pharmacy, including Jan Aushadhi stores."
  },
  {
    q: "What if I need emergency care?",
    a: "ArogyaLink is designed for non-emergency consultations. In emergencies, please call 108 (ambulance) or visit the nearest government hospital immediately."
  }
];
function HowItWorksPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "How It Works — ArogyaLink" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "Learn how ArogyaLink works — step-by-step guides for mobile app, WhatsApp, and village health kiosk consultations for rural India."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary-foreground/20 text-primary-foreground font-semibold", children: "Simple & Fast" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          variants: fadeUp,
          className: "text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-5",
          children: "Healthcare in 3 Easy Steps"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          variants: fadeUp,
          className: "text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed",
          children: "Whether you use our app, WhatsApp, or a village kiosk — getting quality healthcare with ArogyaLink is simple, fast, and affordable."
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Choose Your Path" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Three Ways to Get Care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Pick the method that works best for you — all lead to the same quality care." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "app", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-3 max-w-lg mx-auto mb-12 h-auto p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "app", className: "flex items-center gap-2 py-3 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4" }),
            " Mobile App"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "whatsapp", className: "flex items-center gap-2 py-3 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            " WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "kiosk", className: "flex items-center gap-2 py-3 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
            " Kiosk"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "app", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            initial: "hidden",
            animate: "visible",
            variants: stagger,
            children: appSteps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-primary/20 font-heading leading-none", children: s.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground mb-2", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc }),
              i < appSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground" }) })
            ] }) }) }, s.step))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "whatsapp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto",
            initial: "hidden",
            animate: "visible",
            variants: stagger,
            children: whatsappSteps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-primary/20 font-heading leading-none", children: s.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground mb-2", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
            ] }) }) }, s.step))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kiosk", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto",
            initial: "hidden",
            animate: "visible",
            variants: stagger,
            children: kioskSteps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-primary/20 font-heading leading-none", children: s.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground mb-2", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
            ] }) }) }, s.step))
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-14",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Powered by AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Technology That Works for Rural India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Our platform is built specifically for low-bandwidth environments, multilingual users, and communities with limited digital literacy." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: [
            { title: "Offline-First Design", desc: "Works without internet. Syncs automatically when connectivity is restored." },
            { title: "AI Symptom Collection", desc: "Voice-based AI gathers symptoms accurately in 15+ Indian languages." },
            { title: "Low-Bandwidth Optimised", desc: "Designed to work smoothly on 2G/3G networks common in rural areas." },
            { title: "End-to-End Encryption", desc: "All patient data and consultations are fully encrypted and private." }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border text-center hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground mb-2 text-sm", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: item.desc })
          ] }) }) }, item.title))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-14",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "FAQ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Frequently Asked Questions" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex flex-col gap-4",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground font-heading mb-2 flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
              faq.q
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed pl-7", children: faq.a })
          ] }) }) }, faq.q))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-3xl font-bold text-primary-foreground font-heading mb-4", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary-foreground/80 mb-8 max-w-lg mx-auto", children: "Join thousands of rural families already using ArogyaLink for affordable, quality healthcare." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "View Services" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  HowItWorksPage as default
};
