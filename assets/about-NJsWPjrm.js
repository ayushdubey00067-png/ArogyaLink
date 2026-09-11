import { j as jsxRuntimeExports, m as motion, p as Target, E as Eye, H as Heart, G as Globe, A as Award, U as Users, L as Link, C as ChevronRight } from "./vendor-CooK8OSF.js";
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
const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every decision we make is guided by genuine care for the patients and communities we serve."
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "Healthcare should not be a privilege. We design for the most underserved and overlooked communities."
  },
  {
    icon: Award,
    title: "Quality Care",
    desc: "All consultations are conducted by certified, experienced doctors — no compromise on medical standards."
  },
  {
    icon: Users,
    title: "Community Trust",
    desc: "We build trust by working with local health workers who communities already know and respect."
  }
];
const team = [
  { name: "Dr. Priya Sharma", role: "Co-Founder & Chief Medical Officer", location: "New Delhi" },
  { name: "Arjun Mehta", role: "Co-Founder & CEO", location: "Bengaluru" },
  { name: "Dr. Kavita Rao", role: "Head of Rural Health Programs", location: "Hyderabad" },
  { name: "Suresh Nair", role: "Chief Technology Officer", location: "Pune" }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "About ArogyaLink — Our Mission & Story" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "Learn about ArogyaLink's mission to make quality healthcare accessible and affordable for rural India through telemedicine and village health kiosks."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary-foreground/20 text-primary-foreground font-semibold", children: "Our Story" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          variants: fadeUp,
          className: "text-4xl md:text-5xl font-bold text-primary-foreground font-heading mb-5",
          children: "Healthcare for Every Indian, Everywhere"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          variants: fadeUp,
          className: "text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed",
          children: "ArogyaLink was born from a simple belief: no one should suffer or die because they live too far from a doctor. We are on a mission to change that — one village at a time."
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
          className: "rounded-2xl overflow-hidden shadow-xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/airo-assets/images/pages/about/mission",
              alt: "Doctor consulting patient via telemedicine",
              className: "w-full h-96 object-cover"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-heading text-foreground", children: "Our Mission" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To provide affordable, accessible, and high-quality healthcare to rural and underserved communities in India by leveraging digital technology, local health workers, and AI-powered tools — ensuring no one is left behind due to geography or cost." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-heading text-foreground", children: "Our Vision" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A future where every person in rural India — regardless of income, language, or location — has access to the same quality of healthcare as those in urban centers. We envision a network of 10,000 village health kiosks serving 100 million people by 2030." })
            ] })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "The Challenge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "The Healthcare Gap in Rural India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Over 65% of India's population lives in rural areas, yet only 30% of healthcare infrastructure serves them. ArogyaLink is closing this gap." })
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
          children: [
            { stat: "600M+", label: "Rural Indians lack easy access to doctors" },
            { stat: "3–5 hrs", label: "Average travel time to reach a specialist" },
            { stat: "40%", label: "Of rural families skip treatment due to cost" }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-primary font-heading mb-3", children: item.stat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.label })
          ] }) }) }, item.stat))
        }
      )
    ] }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "What We Stand For" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Our Core Values" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground font-heading mb-1", children: v.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.desc })
            ] })
          ] }) }) }, v.title))
        }
      )
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Leadership" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading text-foreground mb-4", children: "Meet Our Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "A passionate team of doctors, technologists, and social entrepreneurs united by a common purpose." })
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
          children: team.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center border-border hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground font-heading text-sm mb-1", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mb-1", children: member.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: member.location })
          ] }) }) }, member.name))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-3xl font-bold text-primary-foreground font-heading mb-4", children: "Join the ArogyaLink Movement" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-primary-foreground/80 mb-8 max-w-lg mx-auto", children: "Whether you're a patient, doctor, health worker, or partner — there's a place for you in our mission." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Involved" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", children: [
          "Our Services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as default
};
