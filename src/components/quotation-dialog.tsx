import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuotationForm } from "@/components/quotation-form";

export function QuotationDialog({
  label = "Enquiry Now",
  service,
}: {
  label?: string;
  service?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand" className="h-12 px-6">
          <MessageCircle />
          {label}
          <ArrowUpRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="quotation-dialog-content w-[calc(100vw-1rem)] max-w-2xl max-h-[92dvh] overflow-y-auto p-3 sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle>Tell us about your move</DialogTitle>
          <DialogDescription>
            Fill in your details and continue to WhatsApp to review and send your enquiry.
          </DialogDescription>
        </DialogHeader>
        <QuotationForm defaultService={service} />
      </DialogContent>
    </Dialog>
  );
}
