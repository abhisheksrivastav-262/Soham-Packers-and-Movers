import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, whatsappUrl } from "@/lib/business";
import { areaPages, servicePages } from "@/lib/page-content";

const pageLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["FAQs", "/faqs"],
  ["Contact Us", "/contact-us"],
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="/"
      aria-label="Soham Packers and Movers home"
      className="flex items-center gap-2 shrink-0"
    >
      <img
        className="brand-logo"
        src="/images/soham-logo.webp"
        alt="Original Soham house and moving truck logo mark"
        width="53"
        height="45"
      />
      <span>
        <span
          className={
            footer ? "block text-on-navy text-2xl font-extrabold leading-none" : "brand-name block"
          }
        >
          Soham<span className="text-primary">.</span>
        </span>
        <span className={footer ? "brand-sub text-on-navy-muted block" : "brand-sub block"}>
          Packers and Movers
        </span>
      </span>
    </a>
  );
}

function LinkList({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {pageLinks.map(([label, href]) => (
        <a className={mobile ? "text-sm font-semibold py-1" : "nav-link"} href={href} key={href}>
          {label}
        </a>
      ))}
    </>
  );
}

function Dropdown({ kind }: { kind: "services" | "areas" }) {
  const links = kind === "services" ? servicePages : areaPages;
  const label = kind === "services" ? "Moving Services" : "Service Areas";
  return (
    <details className="site-dropdown">
      <summary className="nav-link flex items-center gap-1 cursor-pointer list-none">
        {label}
        <ChevronDown className="size-3" />
      </summary>
      <div className="site-dropdown-menu">
        <a href={kind === "services" ? "/services" : "/service-areas"}>
          {kind === "services" ? "All services" : "All service areas"}
        </a>
        {links.map((page) => (
          <a href={`/${page.slug}`} key={page.slug}>
            {page.h1}
          </a>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const primary = business.phones[0];
  const secondary = business.phones[1];
  if (!primary) return null;
  return (
    <>
      <div className="top-strip">
        <div className="site-container flex items-center justify-between gap-3 py-2.5">
          <span>{business.serviceAreas.join(" · ")}</span>
          <a href={`tel:+91${primary}`} className="flex items-center gap-1.5">
            <Phone className="size-3" /> +91 {primary.slice(0, 5)} {primary.slice(5)}
            {secondary && (
              <span className="hidden sm:inline">
                / +91 {secondary.slice(0, 5)} {secondary.slice(5)}
              </span>
            )}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container flex items-center justify-between gap-4 py-4">
          <Brand />
          <nav
            aria-label="Main navigation"
            className="desktop-nav hidden xl:flex items-center gap-4"
          >
            <LinkList />
            <Dropdown kind="services" />
            <Dropdown kind="areas" />
            <a className="nav-link" href="/#fleet">
              Gallery
            </a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild variant="ghost" className="hidden md:inline-flex text-xs">
              <a href={`tel:+91${primary}`}>
                <Phone />
                Call Now
              </a>
            </Button>
            <Button asChild variant="brand" className="hidden sm:inline-flex text-xs">
              <a href="/get-free-quote">
                Get Free Quote
                <ArrowUpRight />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="site-container grid grid-cols-2 gap-3 py-5 border-t border-border"
          >
            <LinkList mobile />
            <a className="text-sm font-semibold py-1" href="/services">
              All Services
            </a>
            <a className="text-sm font-semibold py-1" href="/service-areas">
              All Service Areas
            </a>
            {servicePages.map((page) => (
              <a key={page.slug} className="text-sm font-semibold py-1" href={`/${page.slug}`}>
                {page.h1}
              </a>
            ))}
            {areaPages.map((page) => (
              <a key={page.slug} className="text-sm font-semibold py-1" href={`/${page.slug}`}>
                {page.h1}
              </a>
            ))}
            <Button asChild variant="brand" className="col-span-2">
              <a href="/get-free-quote">
                Get Free Quote
                <ArrowUpRight />
              </a>
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-on-navy">
      <div className="site-container pt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1fr] gap-10 pb-12">
          <div>
            <Brand footer />
            <p className="text-xs text-on-navy-muted leading-7 mt-5 max-w-xs">
              Soham Packers and Movers offers packing, transportation and moving enquiries for homes
              and businesses in Mumbai and beyond.
            </p>
            <p className="text-xs font-semibold mt-4">{business.tagline}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-4">Quick Links</h3>
            <a className="footer-link" href="/">
              Home
            </a>
            <a className="footer-link" href="/about-us">
              About Us
            </a>
            <a className="footer-link" href="/services">
              Services
            </a>
            <a className="footer-link" href="/service-areas">
              Service Areas
            </a>
            <a className="footer-link" href="/faqs">
              FAQs
            </a>
            <a className="footer-link" href="/contact-us">
              Contact Us
            </a>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-4">Moving Services</h3>
            {servicePages.map((page) => (
              <a className="footer-link" href={`/${page.slug}`} key={page.slug}>
                {page.h1}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-bold mb-4">Stay Connected</h3>
            {business.phones.map((phone) => (
              <a className="footer-link" key={phone} href={`tel:+91${phone}`}>
                +91 {phone}
              </a>
            ))}
            <a
              className="footer-link"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Enquiry ↗
            </a>
            <a className="footer-link mt-2" href="/get-free-quote">
              Get Free Quote
            </a>
            <h3 className="text-xs font-bold mt-6 mb-2">Our Service Areas</h3>
            <p className="text-xs leading-6 text-on-navy-muted">
              {business.serviceAreas.slice(0, 3).join(" · ")}
              <br />
              {business.serviceAreas[3]} & nearby areas
            </p>
          </div>
        </div>
        <div className="border-t border-navy-soft py-5 flex flex-col sm:flex-row justify-between gap-3 text-[10px] text-on-navy-muted">
          <p>© {new Date().getFullYear()} Soham Packers and Movers. All rights reserved.</p>
          <p>{business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export function StickyContactActions() {
  const primary = business.phones[0];
  if (!primary) return null;
  return (
    <>
      <div className="whatsapp-float">
        <Button asChild variant="whatsapp" className="h-12 rounded-full px-5 shadow-lg">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            WhatsApp Us
          </a>
        </Button>
      </div>
      <div className="mobile-actions">
        <Button asChild variant="navy" className="h-11">
          <a href={`tel:+91${primary}`}>
            <Phone />
            Call Now
          </a>
        </Button>
        <Button asChild variant="whatsapp" className="h-11">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            WhatsApp Us
          </a>
        </Button>
      </div>
    </>
  );
}
