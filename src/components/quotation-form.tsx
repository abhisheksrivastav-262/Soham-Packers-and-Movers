import type { FormEvent } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quotationMessage, whatsappUrl } from "@/lib/business";
import { services } from "@/lib/site-content";

export function QuotationForm({ defaultService }: { defaultService?: string | undefined } = {}) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.assign(whatsappUrl(quotationMessage(data)));
  }
  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <div className="flex items-center justify-between gap-4 mb-7">
        <h3 className="text-xl font-bold">Your move starts here.</h3>
        <MessageCircle className="text-primary size-6 shrink-0" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="field-label">
          Full Name *
          <input
            className="field"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            maxLength={100}
          />
        </label>
        <label className="field-label">
          Mobile Number *
          <input
            className="field"
            name="mobile"
            autoComplete="tel"
            type="tel"
            inputMode="tel"
            pattern="[+]?[0-9 ()-]{10,18}"
            title="Enter a valid mobile number (10–18 characters)."
            placeholder="Your mobile number"
            required
          />
        </label>
        <label className="field-label">
          Moving From *
          <input
            className="field"
            name="from"
            placeholder="Pickup location"
            required
            maxLength={200}
          />
        </label>
        <label className="field-label">
          Moving To *
          <input className="field" name="to" placeholder="Destination" required maxLength={200} />
        </label>
        <label className="field-label">
          Moving Date *<input className="field" name="date" type="date" required />
        </label>
        <label className="field-label">
          Service Required *
          <select className="field" name="service" defaultValue={defaultService ?? ""} required>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </label>
        <label className="field-label sm:col-span-2">
          Type of Property *
          <select className="field" name="property" defaultValue="" required>
            <option value="" disabled>
              Select property type
            </option>
            {[
              "1 RK / Studio",
              "1 BHK",
              "2 BHK",
              "3 BHK",
              "4+ BHK / Villa",
              "Office / Commercial",
              "Vehicle / Other",
            ].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="field-label sm:col-span-2">
          Additional Details
          <textarea
            className="field"
            name="details"
            placeholder="Tell us about your belongings, floor, lift access or any special requirements..."
            maxLength={2000}
          />
        </label>
      </div>
      <Button variant="brand" className="w-full h-12 mt-6" type="submit">
        <MessageCircle />
        Get Free Quote on WhatsApp
        <ArrowUpRight />
      </Button>
    </form>
  );
}
