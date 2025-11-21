"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function HeroCTAButtons() {
  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', 'conversion', 'header_button');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button 
        size="lg" 
        className="text-lg px-8 py-6 group shadow-xl hover:shadow-2xl transition-all"
        asChild
      >
        <a 
          href="https://wa.me/923304620676" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2" 
          aria-label="Book an appointment via WhatsApp"
          onClick={handleWhatsAppClick}
        >
          WhatsApp Appointment
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </a>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline"
        className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
        asChild
      >
        <a href="#services">
          Our Services
        </a>
      </Button>
    </div>
  );
}
