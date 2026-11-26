import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Plus,
  ShieldCheck,
  Truck,
  Wallet,
  Boxes,
  Headphones,
  Route as RouteIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuotationForm } from "@/components/quotation-form";
import { QuotationDialog } from "@/components/quotation-dialog";
import { SiteFooter, SiteHeader, StickyContactActions } from "@/components/site-chrome";
import { business, whatsappUrl } from "@/lib/business";
import { areas, faqs, services } from "@/lib/site-content";

const serviceRoutes: Record<string, string> = {
  "Household Shifting": "/household-shifting",
  "Home Relocation": "/household-shifting",
  "Office Relocation": "/office-relocation",
  "Corporate Relocation": "/office-relocation",
  "Packing and Moving Services": "/packing-and-moving",
  "Furniture Shifting": "/furniture-shifting",
  "Loading and Unloading": "/packing-and-moving",
  "Local Shifting Services": "/local-shifting",
  "Domestic Shifting": "/domestic-shifting",
  "Car Transportation": "/car-transportation",
  "Bike Transportation": "/bike-transportation",
  "Mumbai to Pune Packers and Movers": "/mumbai-to-pune-packers-and-movers",
};

const title = "Packers and Movers in Mumbai | Soham Packers and Movers";
const description = `Looking for reliable packers and movers in Mumbai? ${business.name} offers household shifting, office relocation, packing, local and domestic moving services. Call ${business.phones.join(" / ")}.`;
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content: `Best Packers and Movers in Mumbai for home, office and vehicle shifting. Ask Soham about a Best packing service and Near me shifting services. Call ${business.phones.join(" / ")}.`,
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/soham-fleet.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/soham-fleet.webp" },
    ],
    links: business.canonicalUrl ? [{ rel: "canonical", href: business.canonicalUrl }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MovingCompany",
              "@id": "#soham",
              name: business.name,
              telephone: business.phones.map((phone) => `+91-${phone}`),
              slogan: business.tagline,
              areaServed: business.serviceAreas.map((name) => ({ "@type": "City", name })),
            },
            {
              "@type": "Organization",
              "@id": "#organization",
              name: business.name,
              telephone: `+91-${business.phones[0]}`,
            },
            ...services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.text,
              provider: { "@id": "#soham" },
              areaServed: "Mumbai",
            })),
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function SectionHeading({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <div className="eyebrow">{label}</div>
      <h2 className="section-title">{children}</h2>
    </>
  );
}
const trust = [
  { icon: ShieldCheck, title: "Careful Handling" },
  { icon: Clock3, title: "Planned Moving Day" },
  { icon: Wallet, title: "Clear Quotations" },
  { icon: PackageCheck, title: "Packing Support" },
];
const reasons = [
  {
    icon: ShieldCheck,
    title: "Careful Moving Support",
    text: "Discuss handling needs for your belongings, from packing through unloading.",
  },
  {
    icon: PackageCheck,
    title: "Professional Packing",
    text: "Thoughtful packing suited to your belongings.",
  },
  {
    icon: Boxes,
    title: "Careful Loading and Unloading",
    text: "An organized approach to every box and bulky item.",
  },
  {
    icon: Truck,
    title: "Reliable Transportation",
    text: "Moving arrangements planned around your route.",
  },
  {
    icon: Clock3,
    title: "Moving Day Planning",
    text: "Coordinate your preferred date and moving requirements with the team.",
  },
  {
    icon: Wallet,
    title: "Requirement-Based Quotations",
    text: "Request a quotation based on the goods, locations and services you need.",
  },
  {
    icon: RouteIcon,
    title: "Local and Domestic Solutions",
    text: "Across Mumbai or onwards to your next city.",
  },
  {
    icon: Headphones,
    title: "Customer-Focused Support",
    text: "A team you can speak to about your requirements.",
  },
];

const moveMedia = [
  {
    type: "image" as const,
    src: "/media/soham-moving-day.jpeg",
    title: "Soham Packers and Movers service poster",
  },
  ...[
    ["/media/soham-moving-01.mp4", "Moving day with Soham — video 1"],
    ["/media/soham-moving-02.mp4", "Moving day with Soham — video 2"],
    ["/media/soham-moving-03.mp4", "Moving day with Soham — video 3"],
    ["/media/soham-moving-04.mp4", "Moving day with Soham — video 4"],
  ].map(([src, title]) => ({ type: "video" as const, src: src!, title: title! })),
];

function MovingMediaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = moveMedia[activeIndex]!;
  const goTo = (index: number) => setActiveIndex((index + moveMedia.length) % moveMedia.length);

  return (
    <section
      className="section-space moving-media-section"
      aria-label="Soham moving photos and videos"
    >
      <div className="site-container">
        <div className="moving-media-heading">
          <div>
            <SectionHeading label="Soham on the move">See our team in action</SectionHeading>
            <p className="section-copy mt-4 max-w-2xl">
              Real moments and service highlights from Soham Packers and Movers. Use the video
              controls to play with sound.
            </p>
          </div>
          <div className="moving-media-controls" aria-label="Media slideshow controls">
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous slide">
              <ChevronLeft />
            </button>
            <span aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(moveMedia.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next slide">
              <ChevronRight />
            </button>
          </div>
        </div>
        <figure className="moving-media-frame">
          {activeMedia.type === "image" ? (
            <img src={activeMedia.src} alt={activeMedia.title} loading="lazy" />
          ) : (
            <video
              key={activeMedia.src}
              controls
              playsInline
              preload="metadata"
              aria-label={activeMedia.title}
            >
              <source src={activeMedia.src} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          )}
          <figcaption>
            <span>
              {activeMedia.type === "image" ? "Soham service highlight" : "Moving day video"}
            </span>
            <span>{activeMedia.title}</span>
          </figcaption>
        </figure>
        <div className="moving-media-dots" aria-label="Choose a slide">
          {moveMedia.map((media, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${media.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={index === activeIndex ? "active" : ""}
              key={media.src}
              onClick={() => goTo(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="home" className="hero">
          <div className="site-container pt-12 md:pt-16 reveal">
            <div className="eyebrow">Your trusted moving partner</div>
            <div className="grid md:grid-cols-[1.35fr_1fr] gap-7 md:gap-16 mt-5 items-end">
              <div>
                <h1>
                  Trusted Packers
                  <br className="hidden md:block" /> and Movers
                  <br className="hidden md:block" /> in <span>Mumbai.</span>
                </h1>
                <p className="mt-5 text-lg md:text-xl font-medium text-on-navy-muted">
                  {business.tagline}
                </p>
              </div>
              <div className="pb-1">
                <p className="text-sm leading-7 text-on-navy-muted">
                  Make your home or office relocation simple, safe and stress-free with Soham
                  Packers and Movers. From packing to transportation and careful unloading, we help
                  make every move easier.
                </p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <Button asChild variant="brand" className="h-12 px-5">
                    <a href="/get-free-quote">
                      Get Free Moving Quote
                      <ArrowUpRight />
                    </a>
                  </Button>
                  <Button asChild variant="heroOutline" className="h-12 px-5">
                    <a href={`tel:+91${business.phones[0]}`}>
                      <Phone />
                      Call Now
                    </a>
                  </Button>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-on-navy-muted">
                  <a
                    className="inline-flex gap-2 items-center"
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Us
                    <ArrowUpRight className="size-3" />
                  </a>
                  <span className="hidden sm:inline">|</span>
                  {business.phones[1] && (
                    <a href={`tel:+91${business.phones[1]}`}>
                      +91 {business.phones[1].slice(0, 5)} {business.phones[1].slice(5)}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/images/soham-fleet.webp"
                alt="Soham Packers and Movers Mumbai fleet with five branded moving trucks and the company team"
                width="1366"
                height="768"
                fetchPriority="high"
              />
              <div className="fleet-caption">
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  THE PEOPLE & THE FLEET BEHIND YOUR MOVE
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3" />
                  Mumbai, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="trust-strip">
          <div className="site-container grid grid-cols-2 md:grid-cols-4">
            {trust.map(({ icon: Icon, title }) => (
              <div className="trust-item" key={title}>
                <Icon />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <MovingMediaCarousel />
        <section id="about" className="section-space">
          <div className="site-container grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="photo-frame">
              <img
                src="/images/soham-moving-services.webp"
                width="1345"
                height="768"
                loading="lazy"
                alt="Soham Packers and Movers promotional artwork showing packing, moving and vehicle transportation services"
              />
              <div className="flex gap-3 items-center mt-5">
                <div className="h-10 w-10 bg-secondary flex items-center justify-center rounded">
                  <HeartHandshake className="text-primary size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">More than boxes. Your next chapter.</p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Handled with care, every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading label="A moving partner you can trust">
                About Soham
                <br />
                Packers and Movers
              </SectionHeading>
              <p className="section-copy mt-5">
                A new home. A growing business. A fresh start. Whatever your reason for moving, your
                belongings deserve a team that treats them with care.
              </p>
              <p className="section-copy mt-4">
                Serving Mumbai, Soham Packers and Movers brings an organized approach to household
                shifting, office relocation and packing and moving. From carefully packing furniture
                to loading, transporting and unloading, we focus on making your move more
                convenient.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Home & office relocation",
                  "Local & domestic shifting",
                  "Car & bike transportation",
                  "Careful packing & handling",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-xs font-semibold">
                    <CheckCheck className="size-4 text-primary" />
                    {item}
                  </p>
                ))}
              </div>
              <Button asChild variant="navy" className="h-11 mt-7">
                <a href="/get-free-quote">
                  Let’s Plan Your Move
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </section>
        <section id="services" className="section-space bg-secondary">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-end">
              <div>
                <SectionHeading label="Everything your move needs">
                  Our Moving Services
                </SectionHeading>
                <p className="section-copy mt-4 max-w-xl">
                  Across the street or to another city, find the right moving solution for your
                  home, business or vehicle.
                </p>
                <p className="section-copy mt-3 max-w-2xl text-sm">
                  Looking for a Best packing service, Best Packers and Movers, or Near me shifting
                  services in Mumbai? Explore our options and share your route for a tailored move
                  enquiry.
                </p>
              </div>
              <Button asChild variant="outline" className="w-fit">
                <a href="/get-free-quote">
                  Discuss Your Move
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {services.map(({ title, text, icon: Icon }, index) => (
                <article className="service-card" key={title}>
                  <div
                    className="service-illustration"
                    role="img"
                    aria-label={`${title} illustration`}
                  >
                    <Icon />
                    <span className="service-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="service-actions">
                    <Button variant="enquiry" asChild className="text-xs">
                      <a href={serviceRoutes[title]}>
                        Service Details
                        <ArrowUpRight />
                      </a>
                    </Button>
                    <QuotationDialog label="Enquiry" service={title} />
                  </div>
                </article>
              ))}
            </div>
            <div className="service-enquiry-cta">
              <div>
                <h3>Need help choosing a service?</h3>
                <p>Share your move details and we’ll continue the enquiry with you on WhatsApp.</p>
              </div>
              <QuotationDialog />
            </div>
          </div>
        </section>
        <section id="why-us" className="section-space bg-navy text-on-navy">
          <div className="site-container">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
              <div>
                <SectionHeading label="Moving with confidence">
                  Why Choose
                  <br />
                  Soham Packers
                  <br />
                  and Movers?
                </SectionHeading>
                <p className="text-on-navy-muted text-sm leading-7 mt-6">
                  Because a good move is about more than getting from A to B. It’s about care, clear
                  communication and a team that understands what matters to you.
                </p>
                <Button asChild variant="brand" className="mt-7 h-11">
                  <a href={`tel:+91${business.phones[0]}`}>
                    <Phone />
                    Talk to Our Team
                    <ArrowUpRight />
                  </a>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-9">
                {reasons.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="reason">
                    <Icon />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section-space">
          <div className="site-container">
            <SectionHeading label="A clear start to moving day">
              How to Plan Your Move
            </SectionHeading>
            <p className="section-copy mt-4 max-w-2xl">
              Share the essentials first. The team can then discuss the services, route and
              arrangements that fit your move.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-9">
              {[
                [
                  "01",
                  "Tell us the route",
                  "Share your pickup, destination and preferred moving date.",
                ],
                [
                  "02",
                  "Describe your move",
                  "Mention the goods, property type, access and services you need.",
                ],
                [
                  "03",
                  "Review your enquiry",
                  "Discuss the quotation with the team by phone or WhatsApp.",
                ],
              ].map(([number, heading, copy]) => (
                <article className="service-card" key={number}>
                  <span className="service-number">{number}</span>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="fleet" className="section-space">
          <div className="site-container">
            <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end">
              <div>
                <SectionHeading label="Meet your moving team">
                  Our People. Our Fleet.
                  <br />
                  Ready for Your Next Move.
                </SectionHeading>
              </div>
              <p className="section-copy max-w-sm">
                The real team and vehicles behind Soham Packers and Movers. Professional people,
                organized moving, personal care.
              </p>
            </div>
            <figure className="mt-9">
              <img
                src="/images/soham-fleet.webp"
                width="1366"
                height="768"
                loading="lazy"
                className="w-full h-auto rounded-md"
                alt="Full photograph of Soham Packers and Movers staff and branded transportation fleet in Mumbai"
              />
              <figcaption className="flex justify-between gap-4 mt-4 text-xs text-muted-foreground">
                <span>Soham Packers and Movers · Company fleet & team</span>
                <a
                  href="/get-free-quote"
                  className="inline-flex gap-1 items-center font-bold text-primary shrink-0"
                >
                  Plan your move
                  <ArrowUpRight className="size-3" />
                </a>
              </figcaption>
            </figure>
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-center mt-12 border-t border-border pt-10">
              <img
                src="/images/soham-moving-services.webp"
                width="1345"
                height="768"
                className="w-full h-auto rounded"
                loading="lazy"
                alt="Soham promotional banner highlighting household shifting, office relocation, car and bike transport, packing and loading"
              />
              <div>
                <h3 className="text-2xl font-bold">
                  From careful packing
                  <br />
                  to a comfortable new start.
                </h3>
                <p className="section-copy mt-4">
                  Household goods, furniture or office essentials — discuss your packing and
                  transportation requirements with the people who will help plan your move.
                </p>
                <Button variant="navy" asChild className="mt-5 h-11">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    Enquire on WhatsApp
                    <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="areas" className="section-space bg-secondary">
          <div className="site-container">
            <SectionHeading label="Local knowledge. Wider possibilities.">
              Packers and Movers Services
              <br className="hidden md:block" /> Across Mumbai
            </SectionHeading>
            <p className="section-copy mt-4 max-w-2xl">
              Looking for local movers near you? We serve Mumbai and surrounding areas, with packing
              and moving solutions for wherever life takes you next.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-9">
              {areas.map((area) => (
                <a
                  className="area-card"
                  key={area.name}
                  href={
                    area.name === "Nearby Areas"
                      ? "/contact-us"
                      : `/packers-and-movers-in-${area.name.toLowerCase().replaceAll(" ", "-")}`
                  }
                >
                  <div className="flex justify-between">
                    <MapPin className="text-primary size-6" />
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </div>
                  <h3>{area.name}</h3>
                  <p>{area.text}</p>
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 flex gap-2 items-center">
              <RouteIcon className="size-4 shrink-0" />
              Moving from Mumbai to Pune or another city? Share your route for a tailored quotation.
            </p>
          </div>
        </section>
        <section id="contact" className="section-space">
          <div className="site-container grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div className="lg:pt-7">
              <SectionHeading label="Let’s make your next move a happy one">
                Get in Touch with
                <br />
                Soham Packers
                <br />
                and Movers
              </SectionHeading>
              <p className="section-copy mt-6">
                Tell us where you’re moving and what you need. Get a free moving quotation tailored
                to your belongings, locations and preferred date.
              </p>
              <div className="mt-8 border-y border-border py-6 space-y-5">
                {business.phones.map((phone, index) => (
                  <a key={phone} href={`tel:+91${phone}`} className="flex items-center gap-4 group">
                    <div className="h-11 w-11 flex items-center justify-center bg-secondary rounded">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-semibold uppercase">
                        {index === 0 ? "Call our moving team" : "Alternate contact"}
                      </p>
                      <p className="text-xl font-bold mt-1">
                        +91 {phone.slice(0, 5)} {phone.slice(5)}
                      </p>
                    </div>
                    <ArrowUpRight className="size-4 ml-auto text-primary" />
                  </a>
                ))}
              </div>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-6 text-sm font-semibold text-whatsapp"
              >
                <MessageCircle className="size-5" />
                Prefer WhatsApp? Let’s talk.
                <ArrowUpRight className="size-4" />
              </a>
              <div className="flex items-center gap-2 mt-8 text-xs text-muted-foreground">
                <MapPin className="size-4" />
                Mumbai, Maharashtra, India
              </div>
            </div>
            <QuotationForm />
          </div>
        </section>
        <section id="faqs" className="section-space bg-secondary">
          <div className="site-container grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <SectionHeading label="A little clarity before you move">
                Your Moving
                <br />
                Questions, Answered.
              </SectionHeading>
              <p className="section-copy mt-5">
                From shifting charges to packing arrangements, here are a few things you may want to
                know.
              </p>
              <Button variant="navy" asChild className="mt-6">
                <a href={`tel:+91${business.phones[0]}`}>
                  <Phone />
                  Still Have a Question?
                </a>
              </Button>
            </div>
            <div>
              {faqs.map(([question, answer]) => (
                <details className="faq-row" key={question}>
                  <summary>
                    {question}
                    <Plus />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-primary text-primary-foreground py-12">
          <div className="site-container grid md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold">Your next chapter starts with a safe move.</h2>
              <p className="text-sm mt-3">{business.tagline} Let’s get you moving.</p>
            </div>
            <Button asChild variant="navy" className="h-12 w-fit">
              <a href="/get-free-quote">
                Get Your Free Moving Quote
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyContactActions />
    </>
  );
}
