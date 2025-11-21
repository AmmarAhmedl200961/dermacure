import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { WhyChooseUs } from "@/components/why-choose-us";
import { HeroCTAButtons } from "@/components/hero-cta-buttons";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-banner.webp"
            alt="Professional dermatology clinic consultation"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Hero Content - Positioned in negative space */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <CheckCircle className="h-4 w-4" aria-hidden="true" />
                    Board Certified Dermatologist
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  Your Journey to
                  <span className="text-primary block mt-2">
                    Healthier, Radiant Skin
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl">
                  Expert dermatological care combining advanced medical treatments with 
                  cutting-edge aesthetic solutions. Experience personalized skin care that 
                  transforms lives.
                </p>
              </div>

              <HeroCTAButtons />

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-primary">20+</p>
                  <p className="text-sm text-foreground/70">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-primary">5,000+</p>
                  <p className="text-sm text-foreground/70">Happy Patients</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-primary">5.0</p>
                  <p className="text-sm text-foreground/70">Rating</p>
                </div>
              </div>
            </div>

            {/* Right side - Spacer for negative space on desktop */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Section */}
      <ServicesSection />

      {/* Before & After Section */}
      <BeforeAfterSlider />

      {/* Portfolio/About Section */}
      <PortfolioSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
