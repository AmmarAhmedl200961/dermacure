import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* CTA Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Visit Derma Cure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step towards healthier, more radiant skin. Book your consultation today.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              asChild
            >
              <a 
                href="https://wa.link/mavx9d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                aria-label="Book an appointment via WhatsApp"
              >
                Book an Appointment
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <address className="text-muted-foreground not-italic leading-relaxed">
                        Derma Cure<br />
                        43 Green Acres Main Rd, Block B T & T Aabpara Housing Society,<br />
                        Lahore, Pakistan<br />
                        <span className="text-xs">C66R+V5</span>
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a 
                        href="tel:03304620676" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        0330 4620676
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Hours</h4>
                      <div className="text-muted-foreground space-y-1 text-sm">
                        <p>Sunday: 5:00 – 10:00 and Monday - Saturday: 7:00 – 10:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map Embed */}
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://maps.google.com/maps?q=31.412135,74.240428&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Derma Cure Location Map"
                    className="absolute inset-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
