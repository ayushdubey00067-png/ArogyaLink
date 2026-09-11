import { r as reactExports, j as jsxRuntimeExports } from "./vendor-CooK8OSF.js";
import { B as Button } from "./main-C6X6yP-d.js";
import "./preload-CiLjR_o-.js";
const COOKIE_CONSENT_KEY = "c2_analytics_consent";
const COOKIE_CONSENT_EXPIRES_DAYS = 365;
function initC2Tracking() {
  if (typeof window === "undefined" || window.__SCC_INIT__) return;
  window.__SCC_INIT__ = true;
  window._signalsDataLayer = window._signalsDataLayer || [];
  const track = (eid, type, label, props) => {
    window._signalsDataLayer.push({
      schema: "add_event",
      version: "v1",
      data: { eid, type, event_label: label, custom_properties: { ...props, timestamp: (/* @__PURE__ */ new Date()).toISOString(), source: "airo-app-builder" } }
    });
  };
  const getSection = (el) => {
    if (el.closest("header")) return "header";
    if (el.closest("footer")) return "footer";
    if (el.closest("nav")) return "nav";
    if (el.closest("main")) return "main";
    return "page";
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop";
  };
  track("airo.website.session", "session", "start", { page_path: location.pathname, referrer: document.referrer });
  track("airo.website.pageview", "pageview", document.title, { page_path: location.pathname, referrer: document.referrer });
  document.addEventListener("click", (e) => {
    var _a, _b, _c;
    const el = (_a = e.target) == null ? void 0 : _a.closest('a, button, [role="button"]');
    if (!el) return;
    const text = ((_c = (_b = el.textContent) == null ? void 0 : _b.trim()) == null ? void 0 : _c.substring(0, 100)) || "";
    const href = el.href || "";
    const type = el.tagName.toLowerCase() === "a" ? "link" : "button";
    let isExternal;
    if (href) {
      try {
        isExternal = new URL(href, location.origin).origin !== location.origin;
      } catch {
      }
    }
    track("airo.website.click", "click", text || type, {
      element_type: type,
      element_text: text,
      element_id: el.id || void 0,
      section: getSection(el),
      page_path: location.pathname,
      page_title: document.title,
      href: href || void 0,
      is_external: href ? isExternal : void 0,
      device: getDevice(),
      viewport_width: window.innerWidth
    });
  }, true);
  let lastUrl = location.href;
  const trackPage = () => {
    if (location.href !== lastUrl) {
      track("airo.website.pageview", "pageview", document.title, { page_path: location.pathname, referrer: lastUrl });
      lastUrl = location.href;
    }
  };
  window.addEventListener("popstate", trackPage);
  const push = history.pushState, replace = history.replaceState;
  history.pushState = (...args) => {
    push.apply(history, args);
    setTimeout(trackPage, 0);
  };
  history.replaceState = (...args) => {
    replace.apply(history, args);
    setTimeout(trackPage, 0);
  };
  const h = location.hostname;
  const url = h === "localhost" || h.includes("dev-airoapp") ? "https://img1.dev-wsimg.com/signals/js/clients/scc-c2/scc-c2.js" : h.includes("test-airoapp") ? "https://img1.test-wsimg.com/signals/js/clients/scc-c2/scc-c2.min.js" : "https://img1.wsimg.com/signals/js/clients/scc-c2/scc-c2.min.js";
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.head.appendChild(script);
}
function CookieBanner() {
  const [showBanner, setShowBanner] = reactExports.useState(false);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  reactExports.useEffect(function checkConsent() {
    if (typeof window === "undefined") return;
    const consentData = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentData) {
      setShowBanner(true);
      setIsLoaded(true);
      return;
    }
    try {
      const consent = JSON.parse(consentData);
      const daysSinceConsent = (Date.now() - consent.timestamp) / (1e3 * 60 * 60 * 24);
      if (daysSinceConsent > COOKIE_CONSENT_EXPIRES_DAYS) {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setShowBanner(true);
      } else if (consent.analytics) {
        initC2Tracking();
      }
    } catch {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);
  function saveConsent(analytics) {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics, timestamp: Date.now() }));
    if (analytics) initC2Tracking();
    setShowBanner(false);
  }
  function revokeConsent() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setShowBanner(true);
  }
  reactExports.useEffect(function exposeRevokeFunction() {
    if (typeof window === "undefined") return;
    window.revokeAnalyticsConsent = revokeConsent;
    return () => {
      delete window.revokeAnalyticsConsent;
    };
  }, []);
  if (!isLoaded || !showBanner) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg",
      role: "alertdialog",
      "aria-live": "polite",
      "aria-label": "Cookie consent banner",
      "aria-describedby": "cookie-banner-description",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-gray-900 mb-1", children: "Cookie Consent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { id: "cookie-banner-description", className: "text-sm text-gray-600", children: [
            "We serve cookies. We use tools, such as cookies, to enable essential services and functionality on our site and to collect data on how visitors interact with our site, products and services. By clicking Accept, you agree to our use of these tools for advertising, analytics and support.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.godaddy.com/legal/agreements/privacy-policy", className: "text-blue-600 hover:text-blue-800 underline", target: "_blank", rel: "noopener noreferrer", children: "Learn more" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", onClick: () => saveConsent(false), className: "whitespace-nowrap", children: "Decline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => saveConsent(true), className: "whitespace-nowrap", autoFocus: true, children: "Accept" })
        ] })
      ] }) })
    }
  );
}
export {
  CookieBanner as default
};
