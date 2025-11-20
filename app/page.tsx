import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Zap, Shield, Star, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Dermacure Clinic</h1>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Transform Your Skin with
                <span className="text-primary"> Professional Care</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert dermatology and aesthetic treatments tailored to your unique needs. 
                Experience the confidence that comes with healthy, radiant skin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Schedule Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dermatological and aesthetic solutions for all your skin care needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dermatology Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Dermatology</CardTitle>
                <CardDescription>Medical skin treatments and diagnosis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Acne Treatment & Scar Reduction</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eczema & Psoriasis Management</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Skin Cancer Screening</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mole & Lesion Removal</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hyperpigmentation Treatment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Aesthetic Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Aesthetic</CardTitle>
                <CardDescription>Advanced cosmetic procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Botox & Dermal Fillers</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Chemical Peels & Facials</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Laser Hair Removal</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Microneedling & RF Treatments</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Skin Rejuvenation Therapy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real patients. See the transformative power of our treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">Before & After</span>
              </div>
              <CardHeader>
                <CardTitle>Acne Treatment</CardTitle>
                <CardDescription>6-month treatment program showing significant improvement</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-purple-600 font-semibold">Before & After</span>
              </div>
              <CardHeader>
                <CardTitle>Skin Rejuvenation</CardTitle>
                <CardDescription>Laser treatment results after 3 sessions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">Before & After</span>
              </div>
              <CardHeader>
                <CardTitle>Hyperpigmentation</CardTitle>
                <CardDescription>Chemical peel series showing dramatic results</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our satisfied patients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Life-Changing Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;After struggling with acne for years, Dr. Ashfaq&apos;s treatment plan completely transformed my skin. 
                  I finally feel confident without makeup!&quot;
                </p>
                <p className="text-sm font-semibold">— Sarah Mitchell</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Professional & Caring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;The staff is incredibly professional and the clinic is state-of-the-art. 
                  My laser treatment results exceeded all expectations. Highly recommend!&quot;
                </p>
                <p className="text-sm font-semibold">— James Chen</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle>Amazing Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;From consultation to treatment, everything was perfect. The results of my chemical peel 
                  have given me the glowing skin I&apos;ve always wanted.&quot;
                </p>
                <p className="text-sm font-semibold">— Emily Rodriguez</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Map */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Schedule your consultation and take the first step towards healthier, more radiant skin.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">Dermacure Clinic</p>
                      <p className="text-sm text-muted-foreground">123 Medical Plaza, Suite 200</p>
                      <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">info@dermacureclinic.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full" asChild>
                <a href="tel:5551234567">Call Now to Book</a>
              </Button>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[400px] md:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841667917844!2d-73.98823492346639!3d40.75797093515468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Dermacure Clinic Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-secondary/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Dermacure Clinic. All rights reserved.</p>
          <p className="mt-2">Professional dermatology and aesthetic services you can trust.</p>
        </div>
      </footer>
    </div>
  );
}
