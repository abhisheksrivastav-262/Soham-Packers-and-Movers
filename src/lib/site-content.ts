import {
  Home,
  Building2,
  Package,
  Sofa,
  Truck,
  CarFront,
  Bike,
  Boxes,
  MapPin,
  BriefcaseBusiness,
  Route,
  House,
} from "lucide-react";
import { business } from "@/lib/business";

export const navigation = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Services", "services"],
  ["Why Choose Us", "why-us"],
  ["Our Fleet", "fleet"],
  ["Service Areas", "areas"],
  ["FAQs", "faqs"],
  ["Contact Us", "contact"],
];
export const serviceAnchors = [
  { label: "Household shifting", id: "household-shifting" },
  { label: "Office relocation", id: "office-relocation" },
  { label: "Packing and moving", id: "packing-and-moving" },
  { label: "Furniture shifting", id: "furniture-shifting" },
  { label: "Car transportation", id: "car-transportation" },
  { label: "Bike transportation", id: "bike-transportation" },
  { label: "Local shifting", id: "local-shifting" },
  { label: "Domestic shifting", id: "domestic-shifting" },
  { label: "Mumbai to Pune", id: "mumbai-to-pune" },
];
export const serviceGuides = [
  {
    id: "household-shifting",
    title: "Household shifting in Mumbai",
    text: "A household move starts with understanding what needs to travel and how both homes can be accessed. Share the room count, larger furniture and any fragile or special items when requesting a quotation.",
    points: [
      "Packing for household goods",
      "Furniture protection and handling",
      "Loading, transport and unloading",
    ],
    service: "Household Shifting",
  },
  {
    id: "office-relocation",
    title: "Office and corporate relocation",
    text: "An office move benefits from an agreed sequence for furniture, equipment and packed work areas. Discuss the workplace size, preferred date and any timing constraints so the requirements can be planned with the team.",
    points: [
      "Office furniture shifting",
      "Equipment packing requirements",
      "Organized loading and unloading",
    ],
    service: "Office Relocation",
  },
  {
    id: "packing-and-moving",
    title: "Packing and moving services",
    text: "Packing needs vary by item. Tell us about fragile belongings, furniture and items that may need extra preparation so packing materials and handling can be discussed before moving day.",
    points: [
      "Packing materials suited to your goods",
      "Careful handling for fragile items",
      "Loading and transportation planning",
    ],
    service: "Packing and Moving Services",
  },
  {
    id: "furniture-shifting",
    title: "Furniture shifting",
    text: "For bulky furniture, share the item list and whether anything may need dismantling. Stairways, lifts and access at both addresses also help the team understand the move.",
    points: [
      "Furniture packing and protection",
      "Loading and safe placement",
      "Unloading at the destination",
    ],
    service: "Furniture Shifting",
  },
  {
    id: "car-transportation",
    title: "Car transportation",
    text: "Vehicle transportation arrangements depend on your pickup and delivery locations and the vehicle. Enquire with those details to discuss handling, route options and the quotation.",
    points: [
      "Vehicle pickup and delivery enquiry",
      "Route and handling discussion",
      "Quotation based on your requirements",
    ],
    service: "Car Transportation",
  },
  {
    id: "bike-transportation",
    title: "Bike transportation from Mumbai",
    text: "When enquiring about bike transport, share the motorcycle or scooter type, pickup and destination, and preferred date. The team can discuss preparation and packing requirements for your route.",
    points: [
      "Vehicle preparation discussion",
      "Packing and handling requirements",
      "Route-based transportation enquiry",
    ],
    service: "Bike Transportation",
  },
  {
    id: "local-shifting",
    title: "Local shifting across Mumbai",
    text: "Local home and office moves can include furniture, household goods, packing, loading and unloading. Share both neighbourhoods and building access to discuss what your move needs.",
    points: [
      "Local home and office moves",
      "Furniture and household goods",
      "Loading and unloading support",
    ],
    service: "Local Shifting Services",
  },
  {
    id: "domestic-shifting",
    title: "Domestic shifting between cities",
    text: "For an intercity move, provide the origin, destination, goods list and preferred date. These details help the team discuss packing, transportation and the moving quotation.",
    points: [
      "Household goods transportation",
      "Packing and moving support",
      "Route-specific quotation enquiry",
    ],
    service: "Domestic Shifting",
  },
  {
    id: "mumbai-to-pune",
    title: "Mumbai to Pune packers and movers",
    text: "Planning a move from Mumbai to Pune? Enquire about household goods, furniture or vehicle transportation and share both locations, the move date and the services you need.",
    points: [
      "Household and furniture shifting",
      "Car or bike transportation enquiry",
      "Packing, loading and transport planning",
    ],
    service: "Mumbai to Pune Packers and Movers",
  },
];
export const services = [
  {
    title: "Household Shifting",
    icon: Home,
    text: "Thoughtful packing and careful handling of your household goods for a smoother move across Mumbai.",
  },
  {
    title: "Home Relocation",
    icon: House,
    text: "From your first packed box to your new front door, an organized home shifting service built around your needs.",
  },
  {
    title: "Office Relocation",
    icon: Building2,
    text: "Coordinated office relocation services for furniture, equipment and documents, with a plan for your business.",
  },
  {
    title: "Corporate Relocation",
    icon: BriefcaseBusiness,
    text: "Practical relocation support for corporate teams and workplaces, tailored to your schedule and requirements.",
  },
  {
    title: "Packing and Moving Services",
    icon: Package,
    text: "Suitable packing materials, organized labelling and careful transportation to protect what matters to you.",
  },
  {
    title: "Furniture Shifting",
    icon: Sofa,
    text: "Careful furniture packing and moving for sofas, beds, tables and other bulky items, locally or between cities.",
  },
  {
    title: "Loading and Unloading",
    icon: Boxes,
    text: "Organized loading and unloading services with attention to safe lifting, placement and handling.",
  },
  {
    title: "Local Shifting Services",
    icon: MapPin,
    text: "Local moving support across Mumbai, Andheri, Thane and Navi Mumbai, whether across the street or the city.",
  },
  {
    title: "Domestic Shifting",
    icon: Truck,
    text: "Planned domestic shifting services for moves beyond Mumbai. Contact us to discuss your destination.",
  },
  {
    title: "Car Transportation",
    icon: CarFront,
    text: "Car transportation services with route and handling arrangements discussed before your vehicle moves.",
  },
  {
    title: "Bike Transportation",
    icon: Bike,
    text: "Enquire about bike transport from Mumbai, including packing needs, available routes and estimated charges.",
  },
  {
    title: "Mumbai to Pune Packers and Movers",
    icon: Route,
    text: "Home and office moving enquiries from Mumbai to Pune, with a quotation based on your load and locations.",
  },
];
export const areas = [
  {
    name: "Mumbai",
    text: "Plan household and office moves with pickup and destination details across Mumbai.",
  },
  {
    name: "Andheri",
    text: "Discuss home or workplace shifting needs, building access and your preferred date.",
  },
  {
    name: "Thane",
    text: "Share your Thane route and goods list to plan packing, loading and transport.",
  },
  {
    name: "Navi Mumbai",
    text: "Request a move plan for household goods, furniture or office requirements.",
  },
  { name: "Nearby Areas", text: "Tell us both locations to discuss service availability." },
];
export const faqs: Array<[string, string]> = [
  [
    "Which are the best packers and movers near me?",
    "Choose movers who explain their packing process, provide a clear quotation and discuss your specific requirements. If you are comparing packers and movers near you in Mumbai, speak with Soham about your pickup, destination and belongings before deciding.",
  ],
  [
    "Do you provide home shifting services in Mumbai?",
    "Yes. Soham Packers and Movers offers household shifting and home relocation in Mumbai, including packing, transportation, loading and unloading. Share your moving details for a tailored quotation.",
  ],
  [
    "Do you provide packers and movers services in Andheri?",
    "Yes, we accept moving enquiries in Andheri. Tell us your pickup and destination locations so we can discuss arrangements for your home or office move.",
  ],
  [
    "Do you offer shifting services in Thane?",
    "Yes, we offer packing and moving services for Thane. Your quotation depends on the goods, access at both locations, distance and service requirements.",
  ],
  [
    "Do you provide packers and movers in Navi Mumbai?",
    "Yes. Contact us for household shifting, office relocation and local moving enquiries in Navi Mumbai. We will discuss the route and your preferred moving date.",
  ],
  [
    "Do you provide office relocation services?",
    "Yes. We help with office furniture, equipment and documents. Let us know the size of your office and timing requirements so the move can be planned around your business.",
  ],
  [
    "Can I get a quotation for household shifting?",
    `Yes. Use the free moving quotation form to open a WhatsApp enquiry with your details, or call ${business.phones.join(" / ")}. We will discuss the requirements before quoting.`,
  ],
  [
    "Do you provide car and bike transportation?",
    "Yes, we accept enquiries for car and bike transportation. Ask about available routes, packing requirements, scheduling and charges for your particular vehicle.",
  ],
  [
    "Do you provide furniture packing and moving?",
    "Yes. Furniture shifting is part of our moving services. Tell us about the items, any dismantling needs, stairs and lift access so we can discuss appropriate handling.",
  ],
  [
    "Do you provide Mumbai to Pune shifting services?",
    "Yes, you can enquire about Mumbai to Pune packers and movers services for your household or office. Share your locations, goods and moving date to discuss arrangements.",
  ],
  [
    "Can I request urgent or same-day shifting?",
    "You can request urgent or same-day shifting. Availability must be confirmed with the team and depends on your location, load, packing needs and vehicle schedule. Call us before making plans.",
  ],
  [
    "What factors affect packers and movers charges?",
    "Distance, the volume of goods, packing materials, property access, stairs or lifts, transport requirements and the moving date all affect charges. When comparing affordable or cheap packers and movers, ask what the quotation includes rather than comparing price alone.",
  ],
  [
    "Do you provide loading and unloading services?",
    "Yes. Loading and unloading services can be discussed as part of your move or for a separate requirement. Share the goods, locations and access details for an appropriate quotation.",
  ],
];
