import { describe, it, expect } from "vitest";
import { business, quotationMessage, serviceEnquiry, whatsappUrl } from "./business";

describe("Business enquiry rules", () => {
  it("uses the confirmed Indian WhatsApp number for every enquiry", () => {
    expect(new URL(whatsappUrl()).pathname).toBe("/919833951313");
    expect(business.phones).toEqual(["9833951313", "9867607171"]);
  });
  it("includes the selected service in its WhatsApp enquiry", () => {
    expect(new URL(serviceEnquiry("Bike Transportation")).searchParams.get("text")).toContain(
      "Bike Transportation",
    );
  });
  it("includes all quotation details in the direct WhatsApp message", () => {
    const form = new FormData();
    Object.entries({
      name: "Priya Shah",
      mobile: "9876543210",
      from: "Andheri",
      to: "Pune",
      date: "2026-12-15",
      service: "Household Shifting",
      property: "2 BHK",
      details: "Lift available",
    }).forEach(([key, value]) => form.set(key, value));
    const text = quotationMessage(form);
    expect(text).toContain("Name: Priya Shah");
    expect(text).toContain("Mobile: 9876543210");
    expect(text).toContain("Pickup Location: Andheri");
    expect(text).toContain("Destination: Pune");
    expect(text).toContain("Moving Date: 2026-12-15");
    expect(text).toContain("Service Required: Household Shifting");
    expect(text).toContain("Property Type: 2 BHK");
    expect(text).toContain("Additional Details: Lift available");
    expect(new URL(whatsappUrl(text)).searchParams.get("text")).toBe(text);
  });
});
