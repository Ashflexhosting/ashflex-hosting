import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as BaseRouter, Switch, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyCTA from "./components/StickyCTA";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Pricing from "./pages/Pricing";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import FreeWebsiteAudit from "./pages/FreeWebsiteAudit";
import WebsiteCostCalculator from "./pages/WebsiteCostCalculator";
import SEOChecklist from "./pages/SEOChecklist";
import BrandingGuide from "./pages/BrandingGuide";
import DigitalMarketingGuide from "./pages/DigitalMarketingGuide";
import Contact from "./pages/Contact";
import ClientPortal from "./pages/ClientPortal";
import SEOLanding from "./pages/SEOLanding";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:id" component={PortfolioDetail} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/:slug" component={IndustryDetail} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/:id" component={CaseStudyDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/free-website-audit" component={FreeWebsiteAudit} />
      <Route path="/resources/website-cost-calculator" component={WebsiteCostCalculator} />
      <Route path="/resources/seo-checklist" component={SEOChecklist} />
      <Route path="/resources/branding-guide" component={BrandingGuide} />
      <Route path="/resources/digital-marketing-guide" component={DigitalMarketingGuide} />
      <Route path="/contact" component={Contact} />
      <Route path="/portal" component={ClientPortal} />
      <Route path="/client-portal" component={ClientPortal} />
      {/* SEO Landing Pages */}
      <Route path="/seo/:slug" component={SEOLanding} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Wouter location hook that strips the deployment base path (e.g.
// /ashflex-hosting/ on GitHub Pages) before route matching, so all routes
// continue to match exactly as they do on the canonical root deployment.
// Raw location hook (no wouter dependency) that strips the deployment base
// path (e.g. /ashflex-hosting/ on GitHub Pages) before route matching.
function useBasePathLocation(): [string, (to: string, options?: { replace?: boolean }) => void] {
  const base = import.meta.env.BASE_URL ?? "/";
  const stripBase = (p: string) =>
    base === "/" ? p : p.replace(new RegExp(`^${base.replace(/\/$/, "")}`), "") || "/";
  const [path, setPath] = useState(() => stripBase(window.location.pathname));
  useEffect(() => {
    const onChange = () => setPath(stripBase(window.location.pathname));
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, [base]);
  const navigate = (to: string, options?: { replace?: boolean }) => {
    const target = base === "/" ? to : `${base.replace(/\/$/, "")}${to === "/" ? "" : to}`;
    if (options?.replace) window.history.replaceState(null, "", target);
    else window.history.pushState(null, "", target);
    setPath(stripBase(window.location.pathname));
  };
  return [path, navigate];
}

function App() {
  // Mirror-friendly base path: when deployed under a subpath (e.g.
  // /ashflex-hosting/ on GitHub Pages), Vite injects import.meta.env.BASE_URL
  // and the router strips it from the URL before matching routes.
  const base = import.meta.env.BASE_URL ?? "/";
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <BaseRouter hook={useBasePathLocation}>
          <Navbar />
          <ScrollToTop />
          <Router />
          <Footer />
          <WhatsAppButton />
          <StickyCTA />
          </BaseRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
