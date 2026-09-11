import { r as reactExports, j as jsxRuntimeExports, D as Root, b as cva, I as Root2, J as Value, K as Trigger, N as Icon, Y as ChevronDown, Z as Portal, _ as Content2, $ as Viewport, a0 as Item, a1 as ItemIndicator, a2 as Check, a3 as ItemText, a4 as ScrollUpButton, a5 as ChevronUp, a6 as ScrollDownButton, a7 as Label$1, a8 as Separator, m as motion, P as Phone, f as MessageCircle, M as Mail, a as MapPin, a9 as CircleCheck, h as Stethoscope, aa as Building2, U as Users, ab as Send, ac as Clock } from "./vendor-CooK8OSF.js";
import { c as cn, a as Badge, C as Card, b as CardContent, B as Button } from "./main-C6X6yP-d.js";
import "./preload-CiLjR_o-.js";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = Root.displayName;
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
const contactInfo = [
  {
    icon: Phone,
    title: "Toll-Free Helpline",
    value: "1800-XXX-XXXX",
    sub: "Available 24/7 in 15+ languages"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91-XXXXX-XXXXX",
    sub: "Message us anytime for consultations"
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@arogyalink.in",
    sub: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Head Office",
    value: "New Delhi, India",
    sub: "Plot 12, Sector 44, Gurugram, Haryana"
  }
];
const officeHours = [
  { day: "Doctor Consultations", hours: "24 / 7" },
  { day: "Kiosk Operations", hours: "8:00 AM – 8:00 PM" },
  { day: "Customer Support", hours: "6:00 AM – 10:00 PM" },
  { day: "Head Office", hours: "Mon–Fri, 9:00 AM – 6:00 PM" }
];
const inquiryTypes = [
  { value: "patient", label: "Patient / Consultation Enquiry", icon: Stethoscope },
  { value: "partner", label: "NGO / Government Partnership", icon: Building2 },
  { value: "doctor", label: "Join as a Doctor", icon: Users },
  { value: "kiosk", label: "Set Up a Village Kiosk", icon: MapPin },
  { value: "media", label: "Media / Press Enquiry", icon: MessageCircle },
  { value: "other", label: "Other", icon: Mail }
];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    state: "",
    message: ""
  });
  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Contact ArogyaLink — Get in Touch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        name: "description",
        content: "Contact ArogyaLink for patient consultations, partnership enquiries, doctor onboarding, or kiosk setup. We're available 24/7 in 15+ Indian languages."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/airo-assets/images/pages/contact/hero",
            alt: "ArogyaLink support team",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/65 to-gray-900/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "max-w-2xl",
          initial: "hidden",
          animate: "visible",
          variants: stagger,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-accent text-accent-foreground font-semibold px-3 py-1", children: "We're Here to Help" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                variants: fadeUp,
                className: "text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5",
                children: "Get in Touch with ArogyaLink"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-white/85 text-lg leading-relaxed", children: "Whether you're a patient seeking care, a doctor wanting to join, an NGO looking to partner, or a village wanting a health kiosk — we'd love to hear from you." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        children: contactInfo.map((info) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border hover:shadow-md hover:border-primary/30 transition-all text-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground font-heading text-sm mb-1", children: info.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-bold text-sm mb-1", children: info.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: info.sub })
        ] }) }) }, info.title))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 pb-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "lg:col-span-2",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center py-12",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.4 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold font-heading text-foreground mb-3", children: "Message Received!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm mx-auto leading-relaxed", children: "Thank you for reaching out. Our team will get back to you within 24 hours. For urgent medical needs, please call our toll-free helpline." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
                    onClick: () => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", inquiryType: "", state: "", message: "" });
                    },
                    children: "Send Another Message"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Send a Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-heading text-foreground", children: "How Can We Help You?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Fill in the form below and we'll respond in your preferred language." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", className: "text-sm font-medium text-foreground", children: [
                    "Full Name ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "name",
                      placeholder: "e.g. Ramesh Kumar",
                      value: form.name,
                      onChange: (e) => handleChange("name", e.target.value),
                      required: true,
                      className: "border-border focus:border-primary"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "phone", className: "text-sm font-medium text-foreground", children: [
                    "Mobile Number ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "phone",
                      type: "tel",
                      placeholder: "+91 XXXXX XXXXX",
                      value: form.phone,
                      onChange: (e) => handleChange("phone", e.target.value),
                      required: true,
                      className: "border-border focus:border-primary"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", className: "text-sm font-medium text-foreground", children: [
                  "Email Address ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "(optional)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "your@email.com",
                    value: form.email,
                    onChange: (e) => handleChange("email", e.target.value),
                    className: "border-border focus:border-primary"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-foreground", children: [
                    "Enquiry Type ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: form.inquiryType,
                      onValueChange: (v) => handleChange("inquiryType", v),
                      required: true,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select enquiry type" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: inquiryTypes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.value, children: t.label }, t.value)) })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", className: "text-sm font-medium text-foreground", children: "State / District" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "state",
                      placeholder: "e.g. Rajasthan, Barmer",
                      value: form.state,
                      onChange: (e) => handleChange("state", e.target.value),
                      className: "border-border focus:border-primary"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "message", className: "text-sm font-medium text-foreground", children: [
                  "Your Message ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "message",
                    placeholder: "Tell us how we can help you. You can write in Hindi, English, or any Indian language.",
                    rows: 5,
                    value: form.message,
                    onChange: (e) => handleChange("message", e.target.value),
                    required: true,
                    className: "border-border focus:border-primary resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: loading,
                  className: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base flex items-center gap-2 w-full sm:w-auto",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                    "Sending..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                    "Send Message"
                  ] })
                }
              )
            ] })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "flex flex-col gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground", children: "Availability" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: officeHours.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-start gap-2 text-sm border-b border-border pb-3 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: o.day }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-right", children: o.hours })
              ] }, o.day)) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-foreground", children: "Who Can Contact Us" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: inquiryTypes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "w-3.5 h-3.5 text-primary" }) }),
                t.label
              ] }, t.value)) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-destructive/30 bg-destructive/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-heading text-destructive mb-2 text-sm", children: "Medical Emergency?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs leading-relaxed", children: [
                "ArogyaLink is not an emergency service. For life-threatening emergencies, please call ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "108" }),
                " (ambulance) immediately or visit your nearest government hospital."
              ] })
            ] }) }) })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-secondary text-primary font-semibold", children: "Our Presence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-heading text-foreground mb-4", children: "Regional Offices Across India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "We have regional teams in 8 states to support local kiosk operations and partnerships." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: stagger,
          children: [
            { state: "Rajasthan", city: "Jaipur", kiosks: "120+" },
            { state: "Bihar", city: "Patna", kiosks: "95+" },
            { state: "Uttar Pradesh", city: "Lucknow", kiosks: "140+" },
            { state: "Madhya Pradesh", city: "Bhopal", kiosks: "80+" },
            { state: "Odisha", city: "Bhubaneswar", kiosks: "60+" },
            { state: "Jharkhand", city: "Ranchi", kiosks: "45+" },
            { state: "Chhattisgarh", city: "Raipur", kiosks: "55+" },
            { state: "West Bengal", city: "Kolkata", kiosks: "70+" }
          ].map((office) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border hover:shadow-md transition-shadow text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold font-heading text-foreground text-sm", children: office.state }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: office.city }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mt-2 bg-secondary text-primary text-xs font-semibold", children: [
              office.kiosks,
              " kiosks"
            ] })
          ] }) }) }, office.state))
        }
      )
    ] }) })
  ] });
}
export {
  ContactPage as default
};
