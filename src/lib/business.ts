export const business = {
  name: "Soham Packers and Movers",
  phones: ["9833951313", "9867607171"],
  whatsapp: "919833951313",
  tagline: "Safe Move... Happy Move...",
  serviceAreas: ["Mumbai", "Andheri", "Thane", "Navi Mumbai"],
  canonicalUrl: "",
};

export function whatsappUrl(
  message = `Hello ${business.name}, I would like a free moving quotation.`,
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function serviceEnquiry(service: string) {
  return whatsappUrl(
    `Hello ${business.name}, I would like to enquire about ${service}. Please share your quotation.`,
  );
}

export function quotationMessage(data: FormData) {
  const get = (name: string) => String(data.get(name) ?? "").trim();
  return `Hello ${business.name},\n\nI want to enquire about your moving services.\n\nName: ${get("name")}\nMobile: ${get("mobile")}\nPickup Location: ${get("from")}\nDestination: ${get("to")}\nMoving Date: ${get("date")}\nService Required: ${get("service")}\nProperty Type: ${get("property")}\nAdditional Details: ${get("details") || "Not specified"}\n\nPlease share your quotation.`;
}
