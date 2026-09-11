const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-NJsWPjrm.js","assets/vendor-CooK8OSF.js","assets/preload-CiLjR_o-.js","assets/services-CUId7xHx.js","assets/how-it-works-DeaahIJm.js","assets/contact-CelJyr0U.js","assets/yoga-medicine-u-cXsm1s.js","assets/_404-CjpKA06z.js","assets/CookieBanner-Dlm6HIsd.js"])))=>i.map(i=>d[i]);
import { r as reactExports, j as jsxRuntimeExports, H as Heart, L as Link, P as Phone, M as Mail, a as MapPin, t as twMerge, c as clsx, S as Slot, b as cva, u as useLocation, X, d as Menu, m as motion, e as Smartphone, f as MessageCircle, g as Mic, V as Video, F as FileText, C as ChevronRight, h as Stethoscope, U as Users, T as TrendingUp, i as Star, k as createBrowserRouter, R as RouterProvider2, O as Outlet, Q as QueryClient, l as ReactDOM, n as React2, o as QueryClientProvider } from "./vendor-CooK8OSF.js";
import { _ as __vitePreload } from "./preload-CiLjR_o-.js";
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("[ErrorBoundary] caught:", error, info);
  }
  render() {
    var _a;
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2rem", color: "red" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Something went wrong." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { fontSize: "0.8rem" }, children: (_a = this.state.error) == null ? void 0 : _a.message })
      ] });
    }
    return this.props.children;
  }
}
class CookieBannerErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("CookieBanner error boundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-primary text-primary-foreground mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 fill-primary-foreground text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold font-heading", children: "ArogyaLink" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-sm leading-relaxed", children: "Bridging the healthcare gap in rural India through affordable, accessible telemedicine." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-primary-foreground font-heading", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2 text-sm text-primary-foreground/75", children: [
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/services", label: "Services" },
          { href: "/how-it-works", label: "How It Works" },
          { href: "/contact", label: "Contact" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.href, className: "hover:text-primary-foreground transition-colors", children: item.label }) }, item.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-primary-foreground font-heading", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2 text-sm text-primary-foreground/75", children: [
          "Video Consultations",
          "WhatsApp Consultations",
          "Village Health Kiosks",
          "AI Symptom Checker",
          "Digital Prescriptions",
          "Follow-up & Referrals"
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4 text-primary-foreground font-heading", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-3 text-sm text-primary-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1800-XXX-XXXX (Toll Free)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "support@arogyalink.in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Delhi, India" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        year,
        " ArogyaLink. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1", children: [
        "Made with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 fill-accent text-accent" }),
        " for rural India"
      ] })
    ] })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/yoga-medicine", label: "🧘 Yoga & Medicine" },
  { href: "/contact", label: "Contact" }
];
function Header() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-primary-foreground fill-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-primary font-heading", children: "Arogya" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-accent font-heading", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground leading-none tracking-wide", children: "Rural Telemedicine" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.href,
          className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary hover:text-primary"}`,
          children: item.label
        },
        item.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Started" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden p-2 rounded-md text-foreground hover:bg-secondary",
          onClick: () => setMobileOpen(!mobileOpen),
          "aria-label": "Toggle menu",
          children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-1", children: [
      navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.href,
          onClick: () => setMobileOpen(false),
          className: `px-4 py-3 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary hover:text-primary"}`,
          children: item.label
        },
        item.href
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setMobileOpen(false), children: "Get Started" }) })
    ] })
  ] });
}
function Website({
  children,
  config = {},
  className
}) {
  const {
    layout = {
      maxWidth: "full",
      padding: "md",
      background: "default",
      minHeight: true
    }
  } = config;
  const getBackgroundClass = () => {
    switch (layout.background) {
      case "muted":
        return "bg-muted";
      case "gradient":
        return "bg-gradient-to-b from-background to-muted/20";
      default:
        return "bg-background";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
    layout.minHeight !== false && "min-h-screen",
    getBackgroundClass(),
    "flex flex-col",
    className
  ), children });
}
function RootLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Website, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Spinner({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block ${className || ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: "animate-spin h-8 w-8 text-gray-600",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            className: "opacity-10",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "opacity-20",
            fill: "currentColor",
            d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  ) });
}
const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const stats = [
  { value: "500+", label: "Villages Covered" },
  { value: "50,000+", label: "Patients Served" },
  { value: "200+", label: "Certified Doctors" },
  { value: "15+", label: "Languages Supported" }
];
const features = [
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Consult doctors instantly via our easy-to-use app, even on basic smartphones."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Consultations",
    desc: "No app needed — connect with certified doctors directly through WhatsApp."
  },
  {
    icon: MapPin,
    title: "Village Health Kiosks",
    desc: "Trained local health workers operate kiosks with diagnostic tools in your village."
  },
  {
    icon: Mic,
    title: "Multilingual Voice AI",
    desc: "AI-powered symptom collection in 15+ Indian languages via voice interaction."
  },
  {
    icon: Video,
    title: "Audio/Video Consultations",
    desc: "Instant live consultations with certified doctors from the comfort of your home."
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    desc: "Receive prescriptions digitally, with follow-ups and referrals when needed."
  }
];
const testimonials = [
  {
    name: "Sunita Devi",
    location: "Rajasthan",
    text: "ArogyaLink saved me a 3-hour journey to the city. I got a doctor consultation from our village kiosk in 20 minutes.",
    rating: 5
  },
  {
    name: "Ramesh Kumar",
    location: "Bihar",
    text: "The doctor spoke to me in Hindi and understood my problem clearly. The prescription was sent to my phone immediately.",
    rating: 5
  },
  {
    name: "Meena Patel",
    location: "Gujarat",
    text: "My children now get regular health check-ups without missing school. This service is a blessing for our community.",
    rating: 5
  }
];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "ArogyaLink — Telemedicine for Rural India" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "ArogyaLink brings affordable, accessible healthcare to rural India through mobile app, WhatsApp, and village health kiosks with AI-powered multilingual support."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/airo-assets/images/pages/home/hero",
            alt: "Rural Indian village community sitting together",
            className: "w-full h-full object-cover object-center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "max-w-2xl",
          initial: "hidden",
          animate: "visible",
          variants: stagger,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent text-accent-foreground font-semibold px-3 py-1", children: "Trusted by 50,000+ patients across rural India" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                variants: fadeUp,
                className: "text-4xl md:text-6xl font-bold text-white font-heading leading-tight mb-6",
                children: [
                  "Quality Healthcare,",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Right at Your Village" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                variants: fadeUp,
                className: "text-lg text-white/85 mb-8 leading-relaxed",
                children: "ArogyaLink connects rural communities with certified doctors through mobile app, WhatsApp, and village health kiosks — in your own language, at a fraction of the cost."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Started Free" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10 font-semibold text-base px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: "How It Works" }) })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-primary-foreground font-heading", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-sm mt-1", children: s.label })
        ] }, s.label))
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Our Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Multiple Ways to Access Care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Whether you have a smartphone, a basic phone, or visit a local kiosk — ArogyaLink meets you where you are." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-all group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground font-heading mb-2", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: f.desc })
          ] }) }) }, f.title))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Village Kiosks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-5", children: "Bringing Clinics to Your Doorstep" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5 leading-relaxed", children: "Our village health kiosks are managed by trained local health workers equipped with basic diagnostic tools — blood pressure monitors, glucometers, pulse oximeters, and more." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3 mb-8", children: [
              "Trained local health workers you already trust",
              "Basic diagnostics for accurate remote diagnosis",
              "Offline-first design — works without internet",
              "Creates local employment in rural communities"
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-primary-foreground" }) }),
              item
            ] }, item)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Explore Services" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "rounded-2xl overflow-hidden shadow-xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/airo-assets/images/pages/home/kiosk",
              alt: "Village health kiosk",
              className: "w-full h-80 object-cover"
            }
          )
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "rounded-2xl overflow-hidden shadow-xl order-2 md:order-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/airo-assets/images/pages/home/community",
              alt: "Community health awareness",
              className: "w-full h-80 object-cover"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "order-1 md:order-2",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Community Impact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-5", children: "Building Healthier Rural Communities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5 leading-relaxed", children: "ArogyaLink isn't just a telemedicine platform — it's a community health movement. We empower local workers, educate families, and create sustainable healthcare ecosystems in underserved areas." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
              { icon: Stethoscope, label: "Expert Doctors" },
              { icon: Users, label: "Local Workers" },
              { icon: TrendingUp, label: "Better Outcomes" }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-xl bg-secondary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: item.label })
            ] }, item.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "Our Mission" }) })
          ]
        }
      )
    ] }) }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Patient Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Real People, Real Impact" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-accent text-accent" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed mb-5 italic", children: [
              '"',
              t.text,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.location })
            ] })
          ] }) }) }, t.name))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              variants: fadeUp,
              className: "text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4",
              children: "Ready to Transform Healthcare in Your Village?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              variants: fadeUp,
              className: "text-primary-foreground/80 mb-8 max-w-xl mx-auto",
              children: "Join thousands of rural families already benefiting from ArogyaLink's affordable, accessible telemedicine."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us Today" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "View Services" }) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const AboutPage = reactExports.lazy(() => __vitePreload(() => import("./about-NJsWPjrm.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const ServicesPage = reactExports.lazy(() => __vitePreload(() => import("./services-CUId7xHx.js"), true ? __vite__mapDeps([3,1,2]) : void 0));
const HowItWorksPage = reactExports.lazy(() => __vitePreload(() => import("./how-it-works-DeaahIJm.js"), true ? __vite__mapDeps([4,1,2]) : void 0));
const ContactPage = reactExports.lazy(() => __vitePreload(() => import("./contact-CelJyr0U.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const YogaMedicinePage = reactExports.lazy(() => __vitePreload(() => import("./yoga-medicine-u-cXsm1s.js"), true ? __vite__mapDeps([6,1,2]) : void 0));
const NotFoundPage = reactExports.lazy(() => __vitePreload(() => import("./_404-CjpKA06z.js"), true ? __vite__mapDeps([7,1,2]) : void 0));
const routes = [
  { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) },
  { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) },
  { path: "/services", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPage, {}) },
  { path: "/how-it-works", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorksPage, {}) },
  { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) },
  { path: "/yoga-medicine", element: /* @__PURE__ */ jsxRuntimeExports.jsx(YogaMedicinePage, {}) },
  { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}) }
];
const CookieBanner = reactExports.lazy(
  () => __vitePreload(() => import("./CookieBanner-Dlm6HIsd.js"), true ? __vite__mapDeps([8,1,2]) : void 0).catch((error) => {
    console.warn("Failed to load CookieBanner:", error);
    return { default: () => null };
  })
);
const SpinnerFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8 h-screen items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) });
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) }),
    children: routes
  }
]);
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider2, { router }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CookieBannerErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CookieBanner, {}) }) })
  ] });
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      gcTime: 1e3 * 60 * 10,
      // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    }
  }
});
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React2.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
const main = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Card as C,
  Badge as a,
  CardContent as b,
  cn as c,
  main as m
};
