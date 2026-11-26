import { areas, faqs, services } from "@/lib/site-content";
import { business } from "@/lib/business";

export type PageSection = { title: string; copy: string; points?: string[] };
export type BusinessPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  intro: string;
  sections: PageSection[];
  image?: "fleet" | "promotion";
  service?: string;
  faqs?: Array<[string, string]>;
  related?: string[];
  kind?: "services" | "areas" | "contact" | "quote" | "faqs";
};

const pageList: BusinessPage[] = [
  {
    slug: "about-us",
    title: "About Soham Packers and Movers | Mumbai",
    description:
      "Learn about Soham Packers and Movers, our moving approach, packing support and services across Mumbai and surrounding areas.",
    h1: "About Soham Packers and Movers",
    kicker: business.tagline,
    intro:
      "Every move has its own details: the belongings, the buildings, the route and the date. Soham Packers and Movers helps customers plan household and business relocations with packing, loading, transportation and unloading support.",
    sections: [
      {
        title: "Moving services shaped around your requirements",
        copy: "From a local household shift to an office relocation or a vehicle transport enquiry, discuss the items and route with the team before requesting a quotation.",
        points: [
          "Household and home relocation",
          "Office and corporate relocation",
          "Car and bike transportation",
        ],
      },
      {
        title: "A considered moving process",
        copy: "Start by sharing your pickup and destination, preferred date and a clear description of the move. The team can then discuss packing, building access, loading and transport arrangements.",
        points: [
          "Understand the goods and access at both locations",
          "Discuss packing and handling needs",
          "Coordinate the moving day requirements",
        ],
      },
    ],
    image: "fleet",
  },
  {
    slug: "services",
    title: "Packing, Shifting and Relocation Services | Soham",
    description:
      "Explore household shifting, office relocation, furniture moving, vehicle transportation and local or domestic moving services.",
    h1: "Moving Services",
    kicker: "One team for different kinds of moves",
    intro:
      "Choose a service to learn what to share when planning your move. Every quotation can be discussed around your goods, route, access and preferred date.",
    sections: [],
    kind: "services",
  },
  {
    slug: "household-shifting",
    title: "Household Shifting in Mumbai | Soham Packers and Movers",
    description:
      "Plan household shifting in Mumbai with packing, furniture protection, loading, transportation and unloading enquiries.",
    h1: "Household Shifting Services",
    kicker: "A thoughtful move for your home",
    intro:
      "Household shifting involves more than boxes. Share your room count, furniture, fragile belongings and the access conditions at both addresses so the moving requirements can be discussed clearly.",
    sections: [
      {
        title: "Packing household goods",
        copy: "Let the team know which belongings need packing and whether you have fragile, bulky or special items. Packing materials and preparation can be discussed for your particular move.",
        points: [
          "Share a practical goods list",
          "Mention fragile or special-care items",
          "Discuss packing requirements in advance",
        ],
      },
      {
        title: "Furniture, loading and delivery",
        copy: "Furniture protection, loading and unloading depend on the item sizes and building access. Mention stairs, lifts, parking and any dismantling needs at pickup and destination.",
        points: [
          "Furniture protection and handling",
          "Loading and transportation planning",
          "Unloading at the destination",
        ],
      },
    ],
    image: "promotion",
    service: "Household Shifting",
    related: ["packing-and-moving", "furniture-shifting", "local-shifting"],
    faqs: [faqs[1]!, faqs[8]!, faqs[6]!],
  },
  {
    slug: "office-relocation",
    title: "Office Relocation Services in Mumbai | Soham",
    description:
      "Coordinate office and corporate relocation enquiries for furniture, equipment, packing, loading and unloading in Mumbai.",
    h1: "Office Relocation Services",
    kicker: "Plan a coordinated workplace move",
    intro:
      "A workplace move often needs a clear sequence for furniture, equipment and packed work areas. Share the office size, origin and destination, preferred date and any timing constraints.",
    sections: [
      {
        title: "Organize the move around the workplace",
        copy: "Discuss which areas and items need to move, how equipment should be packed and whether any parts of the relocation need to be handled in a particular order.",
        points: [
          "Office furniture and equipment list",
          "Packing requirements for work areas",
          "Building access and preferred schedule",
        ],
      },
      {
        title: "Loading and relocation",
        copy: "Once the requirements are clear, the team can discuss loading, transport and unloading arrangements for the move. Ask about any special handling requirements when requesting your quotation.",
        points: [
          "Organized loading and unloading",
          "Route and timing discussion",
          "A quotation based on the move details",
        ],
      },
    ],
    image: "promotion",
    service: "Office Relocation",
    related: ["packing-and-moving", "local-shifting", "domestic-shifting"],
    faqs: [faqs[5]!, faqs[12]!, faqs[6]!],
  },
  {
    slug: "packing-and-moving",
    title: "Packing and Moving Services in Mumbai | Soham",
    description:
      "Enquire about packing materials, fragile item handling, furniture packing, loading and transportation in Mumbai.",
    h1: "Packing and Moving Services",
    kicker: "Preparation for the journey ahead",
    intro:
      "Different belongings call for different preparation. Describe the goods, fragile items, furniture and route to discuss packing materials and moving arrangements for your enquiry.",
    sections: [
      {
        title: "Packing for different items",
        copy: "Mention glassware, electronics, furniture and other items needing special preparation. The packing requirements can be discussed before moving day.",
        points: [
          "Household and office belongings",
          "Fragile item handling discussion",
          "Furniture packing requirements",
        ],
      },
      {
        title: "From packed goods to transport",
        copy: "Share the pickup and destination details along with building access information. This helps the team discuss loading, transport and unloading needs for the move.",
        points: [
          "Loading and unloading support",
          "Route-based transport planning",
          "Moving quotation by WhatsApp or phone",
        ],
      },
    ],
    image: "promotion",
    service: "Packing and Moving Services",
    related: ["household-shifting", "furniture-shifting", "office-relocation"],
    faqs: [faqs[1]!, faqs[8]!, faqs[12]!],
  },
  {
    slug: "furniture-shifting",
    title: "Furniture Shifting Services in Mumbai | Soham",
    description:
      "Discuss furniture packing, handling, loading, transportation and unloading for home or office moves.",
    h1: "Furniture Shifting",
    kicker: "Careful planning for bulky belongings",
    intro:
      "Furniture moves are easier to plan when the team knows the item list, approximate sizes and access at both buildings. Mention stairs, lifts and whether any furniture may need dismantling.",
    sections: [
      {
        title: "Furniture packing and preparation",
        copy: "Tell us about sofas, beds, tables, cupboards and other large items. Packing and preparation needs can be discussed according to the furniture and route.",
        points: [
          "Share the item list",
          "Mention dismantling requirements",
          "Describe access at both addresses",
        ],
      },
      {
        title: "Loading, transport and unloading",
        copy: "The route, vehicle requirements and unloading location help shape the moving enquiry. Share these details for a quotation based on the work involved.",
        points: [
          "Furniture handling and loading",
          "Transportation arrangements",
          "Unloading at the new location",
        ],
      },
    ],
    service: "Furniture Shifting",
    related: ["household-shifting", "packing-and-moving", "local-shifting"],
    faqs: [faqs[8]!, faqs[1]!, faqs[12]!],
  },
  {
    slug: "car-transportation",
    title: "Car Transportation Services from Mumbai | Soham",
    description:
      "Enquire about car transportation, vehicle pickup and delivery locations, route handling and a tailored quotation.",
    h1: "Car Transportation Services",
    kicker: "Discuss your vehicle move",
    intro:
      "For a car transportation enquiry, share the vehicle type, pickup and delivery locations and your preferred date. The team can discuss route availability, handling arrangements and the quotation.",
    sections: [
      {
        title: "Information for a car transport enquiry",
        copy: "A clear enquiry helps the team understand what you need. Include your vehicle details and the locations for pickup and delivery when you get in touch.",
        points: ["Vehicle make and type", "Pickup and destination", "Preferred moving date"],
      },
      {
        title: "Discuss the transportation process",
        copy: "Ask about preparation, handling and route arrangements for your specific request. No delivery time or insurance coverage is assumed; confirm the details directly with the team.",
        points: [
          "Vehicle preparation discussion",
          "Route and handling enquiry",
          "Quotation based on your requirements",
        ],
      },
    ],
    service: "Car Transportation",
    related: ["bike-transportation", "domestic-shifting", "mumbai-to-pune-packers-and-movers"],
    faqs: [faqs[7]!, faqs[11]!, faqs[9]!],
  },
  {
    slug: "bike-transportation",
    title: "Bike Transportation from Mumbai | Soham Packers and Movers",
    description:
      "Enquire about bike transport from Mumbai, including preparation, packing, pickup and destination requirements.",
    h1: "Bike Transportation from Mumbai",
    kicker: "Plan a two-wheeler move",
    intro:
      "Share whether you are moving a motorcycle or scooter, your pickup and destination and the date you have in mind. Packing and handling requirements can then be discussed for the route.",
    sections: [
      {
        title: "Prepare your vehicle enquiry",
        copy: "Describe the two-wheeler and let the team know about any accessories or handling considerations. Confirm the preparation steps for your selected route before the move.",
        points: [
          "Motorcycle or scooter details",
          "Pickup and delivery locations",
          "Preferred date and special requirements",
        ],
      },
      {
        title: "Packing and transportation discussion",
        copy: "Packing needs and available transportation arrangements depend on the vehicle and route. Contact the team to discuss the process and receive a quotation.",
        points: [
          "Packing and handling requirements",
          "Route options enquiry",
          "Quotation by WhatsApp or phone",
        ],
      },
    ],
    service: "Bike Transportation",
    related: ["car-transportation", "domestic-shifting", "mumbai-to-pune-packers-and-movers"],
    faqs: [faqs[7]!, faqs[11]!, faqs[9]!],
  },
  {
    slug: "local-shifting",
    title: "Local Shifting Services in Mumbai | Soham",
    description:
      "Local home, office and furniture shifting across Mumbai, Andheri, Thane and Navi Mumbai.",
    h1: "Local Shifting Services",
    kicker: "Moving within Mumbai and nearby areas",
    intro:
      "For local shifting, share both neighbourhoods, the goods to move and the access at each building. Household, office and furniture requirements can all be discussed for your route.",
    sections: [
      {
        title: "Local home and office moves",
        copy: "The scope of a local move varies by property and goods. Share a list of larger items, the preferred date and any access or parking considerations.",
        points: ["Household shifting", "Office relocation", "Furniture moving"],
      },
      {
        title: "Packing, loading and unloading",
        copy: "Discuss whether packing support is needed and what should be loaded or unloaded. This helps the team understand the work involved before sharing a quotation.",
        points: [
          "Packing and moving enquiries",
          "Loading and unloading",
          "Local route coordination",
        ],
      },
    ],
    service: "Local Shifting Services",
    related: ["household-shifting", "office-relocation", "furniture-shifting"],
    faqs: [faqs[2]!, faqs[3]!, faqs[4]!],
  },
  {
    slug: "domestic-shifting",
    title: "Domestic Shifting Services from Mumbai | Soham",
    description:
      "Plan an intercity move from Mumbai with household packing, goods transportation and a route-based quotation.",
    h1: "Domestic Shifting Services",
    kicker: "Moving from Mumbai to another city",
    intro:
      "For a domestic relocation enquiry, share the origin, destination, goods list and preferred moving date. The team can discuss packing, loading and transportation requirements for the route.",
    sections: [
      {
        title: "Plan your intercity move",
        copy: "An origin and destination, an overview of the goods and building access at each end help the team understand the move. Mention any fragile or bulky belongings.",
        points: [
          "Pickup and destination city",
          "Household goods and furniture",
          "Preferred date and access details",
        ],
      },
      {
        title: "Packing and transportation",
        copy: "Packing and transport requirements are discussed according to the goods and route. Ask for a quotation that reflects the services your move requires.",
        points: [
          "Household goods packing",
          "Loading and transport discussion",
          "Unloading at the destination",
        ],
      },
    ],
    service: "Domestic Shifting",
    related: ["household-shifting", "packing-and-moving", "mumbai-to-pune-packers-and-movers"],
    faqs: [faqs[9]!, faqs[11]!, faqs[6]!],
  },
  {
    slug: "mumbai-to-pune-packers-and-movers",
    title: "Mumbai to Pune Packers and Movers | Soham",
    description:
      "Discuss Mumbai to Pune household shifting, office relocation, furniture moving and car or bike transportation enquiries.",
    h1: "Mumbai to Pune Packers and Movers",
    kicker: "A moving enquiry for the Mumbai to Pune route",
    intro:
      "Planning a move between Mumbai and Pune? Tell us your pickup and destination, moving date and the goods or services you need. The team can discuss household, office and vehicle transportation enquiries for the route.",
    sections: [
      {
        title: "Household and furniture shifting",
        copy: "Share your household goods, larger furniture and any fragile items. Building access at both locations helps the team discuss packing and loading needs.",
        points: [
          "Home relocation enquiry",
          "Furniture packing and shifting",
          "Loading and unloading requirements",
        ],
      },
      {
        title: "Office and vehicle transport enquiries",
        copy: "The route enquiry can also include office relocation or car and bike transportation. Contact the team to discuss service availability and a quotation for your requirements.",
        points: [
          "Office relocation requirements",
          "Car transportation enquiry",
          "Bike transportation enquiry",
        ],
      },
    ],
    image: "fleet",
    service: "Mumbai to Pune Packers and Movers",
    related: ["domestic-shifting", "car-transportation", "bike-transportation"],
    faqs: [faqs[9]!, faqs[7]!, faqs[6]!],
  },
  {
    slug: "service-areas",
    title: "Soham Packers and Movers Service Areas",
    description:
      "Explore moving service areas in Mumbai, Andheri, Thane and Navi Mumbai and enquire about nearby routes.",
    h1: "Service Areas",
    kicker: "Mumbai and surrounding areas",
    intro:
      "Soham Packers and Movers accepts enquiries for moves across Mumbai and nearby areas. Choose a location to see information relevant to that area and discuss service availability for your exact route.",
    sections: [],
    kind: "areas",
  },
  {
    slug: "contact-us",
    title: "Contact Soham Packers and Movers | Mumbai",
    description: `Call ${business.name} on ${business.phones.join(" or ")}, or send a moving enquiry through WhatsApp.`,
    h1: "Contact Soham Packers and Movers",
    kicker: "Tell us about your move",
    intro:
      "Call either business number or send your moving details through the quotation form. Enquiries open directly in WhatsApp for you to review and send.",
    sections: [],
    kind: "contact",
  },
  {
    slug: "get-free-quote",
    title: "Get a Free Packers and Movers Quote | Soham",
    description:
      "Request a moving quotation from Soham Packers and Movers. Submit your route and service details directly through WhatsApp.",
    h1: "Get a Free Moving Quote",
    kicker: "Share the details of your move",
    intro:
      "Add your contact details, locations, moving date and service requirements. Submitting opens a pre-filled WhatsApp message for you to review and send.",
    sections: [],
    kind: "quote",
  },
  {
    slug: "faqs",
    title: "Packers and Movers FAQs | Soham Mumbai",
    description:
      "Answers to common questions about household shifting, office relocation, packing, vehicle transport and moving quotations.",
    h1: "Moving FAQs",
    kicker: "Answers before moving day",
    intro:
      "Read about planning a move, service requirements and quotations. Call or WhatsApp the team if you need information for your particular route.",
    sections: [],
    kind: "faqs",
  },
  {
    slug: "packers-and-movers-in-mumbai",
    title: "Packers and Movers in Mumbai | Soham",
    description:
      "Enquire about household shifting, office relocation, furniture moving and local or domestic transport in Mumbai.",
    h1: "Packers and Movers in Mumbai",
    kicker: "Moving support across Mumbai",
    intro:
      "Mumbai moves can involve different building access, busy neighbourhoods and varied routes. Tell us the exact pickup and destination, goods list and access details so we can discuss the service your move needs.",
    sections: [
      {
        title: "Household and office shifting across Mumbai",
        copy: "Enquire about home relocation, furniture shifting or office moves. Share your locality, property or workplace type and preferred date to begin a route-specific conversation.",
        points: [
          "Household packing and moving",
          "Office relocation enquiries",
          "Furniture loading and unloading",
        ],
      },
      {
        title: "Local and onward routes",
        copy: "For a move beyond your neighbourhood, share both ends of the route. The team also accepts enquiries for domestic shifting and vehicle transportation from Mumbai.",
        points: [
          "Local moves within Mumbai",
          "Car and bike transportation enquiries",
          "Mumbai to Pune route enquiries",
        ],
      },
    ],
    service: "Packers and Movers in Mumbai",
    related: ["local-shifting", "office-relocation", "mumbai-to-pune-packers-and-movers"],
    faqs: [faqs[1]!, faqs[5]!, faqs[12]!],
  },
  {
    slug: "packers-and-movers-in-andheri",
    title: "Packers and Movers in Andheri | Soham",
    description:
      "Plan home or office shifting in Andheri with packing, furniture handling and moving enquiries based on your buildings and route.",
    h1: "Packers and Movers in Andheri",
    kicker: "Home and workplace moves in Andheri",
    intro:
      "Andheri includes varied residential and commercial buildings. When enquiring, share your exact pickup and destination, lift or stair access, parking details and the belongings that need to move.",
    sections: [
      {
        title: "Plan around building access",
        copy: "Access can affect how household goods and larger furniture are prepared and loaded. Mention floor levels, lift availability, entry restrictions and any preferred moving window.",
        points: [
          "Home shifting and furniture moves",
          "Office relocation enquiries",
          "Building and parking access discussion",
        ],
      },
      {
        title: "Choose the support you need",
        copy: "Tell the team whether you need packing, loading, transport or unloading support. The quotation can be discussed after the locations and requirements are understood.",
        points: ["Packing and moving", "Local shifting across Mumbai", "Loading and unloading"],
      },
    ],
    service: "Packers and Movers in Andheri",
    related: ["household-shifting", "office-relocation", "packing-and-moving"],
    faqs: [faqs[2]!, faqs[5]!, faqs[12]!],
  },
  {
    slug: "packers-and-movers-in-thane",
    title: "Packers and Movers in Thane | Soham",
    description:
      "Discuss shifting in Thane with a route-based enquiry for household goods, furniture, office moves and packing support.",
    h1: "Packers and Movers in Thane",
    kicker: "Moving in Thane, planned around your route",
    intro:
      "For a Thane move, share the neighbourhoods at both ends, the type and volume of goods and your preferred date. Details about building access and larger items help frame the enquiry.",
    sections: [
      {
        title: "Household goods and furniture",
        copy: "Discuss packing needs for household goods, furniture and fragile items. Let the team know about lift or stair access and how goods can be reached at each address.",
        points: [
          "Household shifting requirements",
          "Furniture protection and handling",
          "Packing and loading enquiries",
        ],
      },
      {
        title: "Office and intercity moves",
        copy: "Thane enquiries can also cover office relocation or onward domestic shifting. Share the route and timing requirements for a conversation about service availability.",
        points: [
          "Office furniture and equipment",
          "Local moves within Thane",
          "Domestic route enquiries",
        ],
      },
    ],
    service: "Packers and Movers in Thane",
    related: ["local-shifting", "furniture-shifting", "domestic-shifting"],
    faqs: [faqs[3]!, faqs[5]!, faqs[12]!],
  },
  {
    slug: "packers-and-movers-in-navi-mumbai",
    title: "Packers and Movers in Navi Mumbai | Soham",
    description:
      "Request a Navi Mumbai moving enquiry for household shifting, office relocation, packing and vehicle transportation.",
    h1: "Packers and Movers in Navi Mumbai",
    kicker: "Local moves and routes across Navi Mumbai",
    intro:
      "Navi Mumbai moves can cover different nodes and routes. Share both neighbourhoods, property access, goods and preferred moving date so the team can understand the work involved.",
    sections: [
      {
        title: "Home, furniture and office moves",
        copy: "Tell us whether you are relocating a household, office or selected furniture. Mention larger items, packing needs, building access and any timing considerations.",
        points: [
          "Home shifting enquiries",
          "Office relocation requirements",
          "Furniture packing and moving",
        ],
      },
      {
        title: "Moving beyond the neighbourhood",
        copy: "If the destination is outside Navi Mumbai, include it in your enquiry. Domestic shifting and vehicle transportation can be discussed according to the route and requirements.",
        points: [
          "Local shifting routes",
          "Car and bike transportation enquiries",
          "Packing and unloading support",
        ],
      },
    ],
    service: "Packers and Movers in Navi Mumbai",
    related: ["household-shifting", "local-shifting", "car-transportation"],
    faqs: [faqs[4]!, faqs[1]!, faqs[7]!],
  },
];

export const businessPages = Object.fromEntries(
  pageList.map((page) => [page.slug, page]),
) as Record<string, BusinessPage>;
export const servicePages = pageList.filter(
  (page) => page.service && !page.slug.startsWith("packers-and-movers-in-"),
);
export const areaPages = pageList.filter((page) => page.slug.startsWith("packers-and-movers-in-"));

export function businessPage(slug: string) {
  return businessPages[slug];
}

export function pageUrl(slug: string) {
  return `/${slug}`;
}

export const availableServices = services;
export const movingFaqs = faqs;
export const serviceAreas = areas;
