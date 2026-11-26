import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, ChevronRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuotationForm } from "@/components/quotation-form";
import { QuotationDialog } from "@/components/quotation-dialog";
import { SiteFooter, SiteHeader, StickyContactActions } from "@/components/site-chrome";
import { business, serviceEnquiry, whatsappUrl } from "@/lib/business";
import {
  businessPage,
  movingFaqs,
  pageUrl,
  servicePages,
  areaPages,
  serviceAreas,
} from "@/lib/page-content";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = businessPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const page = loaderData.page;
    const canonical = business.canonicalUrl
      ? `${business.canonicalUrl.replace(/\/$/, "")}${pageUrl(page.slug)}`
      : undefined;
    const businessId = business.canonicalUrl
      ? `${business.canonicalUrl.replace(/\/$/, "")}/#business`
      : "#business";
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MovingCompany",
          "@id": businessId,
          name: business.name,
          telephone: business.phones.map((phone) => `+91-${phone}`),
          slogan: business.tagline,
          areaServed: business.serviceAreas,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              ...(business.canonicalUrl ? { item: business.canonicalUrl } : {}),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: page.h1,
              ...(canonical ? { item: canonical } : {}),
            },
          ],
        },
        ...(page.service
          ? [
              {
                "@type": "Service",
                name: page.service,
                description: page.description,
                provider: {
                  "@id": businessId,
                },
              },
            ]
          : []),
      ],
    };
    return {
      meta: [
        { title: page.title },
        { name: "description", content: page.description },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content:
            page.image === "promotion"
              ? "/images/soham-moving-services.webp"
              : "/images/soham-fleet.webp",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content:
            page.image === "promotion"
              ? "/images/soham-moving-services.webp"
              : "/images/soham-fleet.webp",
        },
      ],
      links: canonical ? [{ rel: "canonical", href: canonical }] : [],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
    };
  },
  component: BusinessPageRoute,
});

function BusinessPageRoute() {
  const { page } = Route.useLoaderData();
  const imageUrl =
    page.image === "fleet" ? "/images/soham-fleet.webp" : "/images/soham-moving-services.webp";
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="site-container page-hero-inner">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <a href="/">Home</a>
              <ChevronRight className="size-3" />
              <span>{page.h1}</span>
            </nav>
            <div className="eyebrow">{page.kicker}</div>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Button asChild variant="brand">
                <a href="/get-free-quote">
                  Get Free Quote
                  <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="heroOutline">
                <a href={`tel:+91${business.phones[0]}`}>
                  <Phone />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="heroOutline">
                <a
                  href={page.service ? serviceEnquiry(page.service) : whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
        {page.image && (
          <div className="site-container page-image-wrap">
            <img
              className="page-image"
              src={imageUrl}
              alt={
                page.image === "fleet"
                  ? "Soham Packers and Movers fleet of company trucks and moving team"
                  : "Soham Packers and Movers original promotional banner showing packing and relocation services"
              }
              width={1600}
              height={page.image === "fleet" ? 900 : 914}
            />
          </div>
        )}

        {page.kind === "services" ? <ServicesDirectory /> : null}
        {page.kind === "areas" ? <AreasDirectory /> : null}
        {page.kind === "faqs" ? <FaqDirectory /> : null}
        {page.sections.length > 0 && (
          <section className="section-space">
            <div className="site-container">
              <div className="grid md:grid-cols-2 gap-5">
                {page.sections.map((section) => (
                  <article className="service-guide" key={section.title}>
                    <h2>{section.title}</h2>
                    <p className="section-copy mt-3">{section.copy}</p>
                    {section.points && (
                      <ul className="grid gap-2 mt-4">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs leading-5">
                            <Check className="size-4 shrink-0 text-primary mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.kind === "contact" && <ContactDetails />}
        {page.kind === "quote" && (
          <section className="section-space">
            <div className="site-container max-w-3xl">
              <QuotationForm />
            </div>
          </section>
        )}
        {page.kind !== "faqs" && (page.faqs?.length ?? 0) > 0 && <PageFaqs faqs={page.faqs!} />}
        {page.related && <RelatedPages slugs={page.related} />}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="site-container grid md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold">Plan your next move with Soham.</h2>
              <p className="text-sm mt-3">{business.tagline}</p>
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

function ServicesDirectory() {
  const routeByService: Record<string, string> = {
    "Household Shifting": "household-shifting",
    "Home Relocation": "household-shifting",
    "Office Relocation": "office-relocation",
    "Corporate Relocation": "office-relocation",
    "Packing and Moving Services": "packing-and-moving",
    "Furniture Shifting": "furniture-shifting",
    "Loading and Unloading": "packing-and-moving",
    "Local Shifting Services": "local-shifting",
    "Domestic Shifting": "domestic-shifting",
    "Car Transportation": "car-transportation",
    "Bike Transportation": "bike-transportation",
    "Mumbai to Pune Packers and Movers": "mumbai-to-pune-packers-and-movers",
  };
  return (
    <section className="section-space bg-secondary">
      <div className="site-container">
        <h2 className="section-title">Choose a moving service</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="service-card" key={title}>
              <div className="service-illustration">
                <Icon />
                <ArrowUpRight className="text-primary" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="service-actions">
                <a
                  className="text-xs font-bold text-primary"
                  href={pageUrl(routeByService[title] ?? "services")}
                >
                  Service details <ArrowUpRight className="inline size-3" />
                </a>
                <QuotationDialog label="Enquire" service={title} />
              </div>
            </article>
          ))}
        </div>
        <div className="service-enquiry-cta">
          <div>
            <h3>Need a quotation for a move?</h3>
            <p>Fill in your route and service details to continue in WhatsApp.</p>
          </div>
          <QuotationDialog />
        </div>
      </div>
    </section>
  );
}

function AreasDirectory() {
  const names = new Map([
    ["Mumbai", "packers-and-movers-in-mumbai"],
    ["Andheri", "packers-and-movers-in-andheri"],
    ["Thane", "packers-and-movers-in-thane"],
    ["Navi Mumbai", "packers-and-movers-in-navi-mumbai"],
  ]);
  return (
    <section className="section-space bg-secondary">
      <div className="site-container">
        <h2 className="section-title">Moving enquiries by location</h2>
        <p className="section-copy mt-4 max-w-2xl">
          Choose an area for practical information about planning a move there. Service availability
          depends on your exact pickup and destination.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {areaPages.map((area) => (
            <a className="area-card" href={pageUrl(area.slug)} key={area.slug}>
              <MapPin className="text-primary size-6" />
              <h3>{area.h1.replace("Packers and Movers in ", "")}</h3>
              <p>{area.intro}</p>
              <span className="text-xs font-bold text-primary mt-4 inline-block">
                Area details <ArrowUpRight className="inline size-3" />
              </span>
            </a>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {serviceAreas.map((area) => {
            const slug = names.get(area.name);
            return (
              <a className="area-card" key={area.name} href={slug ? pageUrl(slug) : "/contact-us"}>
                <h3>{area.name}</h3>
                <p>{area.text}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PageFaqs({ faqs }: { faqs: Array<[string, string]> }) {
  return (
    <section className="section-space bg-secondary">
      <div className="site-container max-w-4xl">
        <h2 className="section-title">Questions about this service</h2>
        {faqs.map(([q, a]) => (
          <details className="faq-row" key={q}>
            <summary>
              {q}
              <ChevronRight className="size-4" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FaqDirectory() {
  const groups = [
    ["Household and furniture shifting", [0, 1, 8]],
    ["Office relocation and packing", [5, 12]],
    ["Vehicle transportation", [7]],
    ["Local, domestic and route moves", [2, 3, 4, 9]],
    ["Quotations and scheduling", [6, 10, 11]],
  ] as const;
  return (
    <section className="section-space bg-secondary">
      <div className="site-container max-w-4xl">
        {groups.map(([heading, indexes]) => (
          <div key={heading} className="mb-10">
            <h2 className="text-xl font-bold mb-3">{heading}</h2>
            {indexes.map((index) => {
              const item = movingFaqs[index];
              return item ? (
                <details className="faq-row" key={item[0]}>
                  <summary>
                    {item[0]}
                    <ChevronRight className="size-4" />
                  </summary>
                  <p>{item[1]}</p>
                </details>
              ) : null;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <section className="section-space">
      <div className="site-container grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <h2 className="section-title">Speak with our team</h2>
          <p className="section-copy mt-4">
            Call a business number or share your moving details in the form. It opens a WhatsApp
            message for you to review and send.
          </p>
          <div className="mt-8 border-y border-border py-5 space-y-4">
            {business.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:+91${phone}`}
                className="flex items-center gap-4 text-lg font-bold"
              >
                <Phone className="text-primary" />
                +91 {phone.slice(0, 5)} {phone.slice(5)}
              </a>
            ))}
          </div>
          <a
            className="inline-flex gap-2 items-center text-whatsapp font-semibold mt-6"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            WhatsApp enquiry
            <ArrowUpRight className="size-4" />
          </a>
          <p className="flex gap-2 items-center text-xs text-muted-foreground mt-6">
            <MapPin className="size-4" />
            Mumbai, Maharashtra, India
          </p>
        </div>
        <QuotationForm />
      </div>
    </section>
  );
}

function RelatedPages({ slugs }: { slugs: string[] }) {
  const pages = slugs
    .map(
      (slug) =>
        servicePages.find((page) => page.slug === slug) ??
        areaPages.find((page) => page.slug === slug),
    )
    .filter((page) => page !== undefined);
  if (!pages.length) return null;
  return (
    <section className="section-space">
      <div className="site-container">
        <h2 className="section-title">Related moving services</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-7">
          {pages.map((page) => (
            <a className="area-card" href={pageUrl(page.slug)} key={page.slug}>
              <h3>{page.h1}</h3>
              <p>{page.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
