import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, Shield, CheckCircle2, Users, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Premium Corporate Security Aesthetic
 * Design Philosophy: Trust through clarity and precision
 * Color Palette: Deep navy (#0F1929) + Electric Blue (#0066FF) + Warm Amber (#D4A574)
 * Typography: Playfair Display (headlines) + Inter (body)
 * Layout: Asymmetric grid with staggered sections and generous whitespace
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Spartan</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">Why Us</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">Get Quote</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/40">
                <span className="text-sm font-semibold text-primary">Trusted Security Partner</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Protect What Matters
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Spartan Executive Consultant provides specialized security assessments, active shooter drills, and comprehensive protection protocols for corporations, schools, and high-net-worth individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565725990/AqtWqoa53LUg6ZTriaRpnt/hero-security-background-jUwJs5ZLGFDB5BpUtX4Xst.webp"
                alt="Security Protection"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Organizations Protected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Successful Drills Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your organization's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Assessments */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="mb-6">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565725990/AqtWqoa53LUg6ZTriaRpnt/service-assessments-Civ6zzwfytsqicz9R83xgw.webp"
                  alt="Security Assessments"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Security Assessments</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive evaluation of your facility's security vulnerabilities and protection requirements with detailed recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Physical security audit</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Threat analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Protocol recommendations</span>
                </li>
              </ul>
            </Card>

            {/* Drills */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="mb-6">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565725990/AqtWqoa53LUg6ZTriaRpnt/service-drills-9xReBRzkAKx8msEipCgZa8.webp"
                  alt="Active Shooter Drills"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Active Shooter Drills</h3>
              <p className="text-muted-foreground mb-4">
                Detailed, realistic training exercises conducted by highly trained professionals to prepare your team for emergency situations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Realistic scenario training</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Staff preparation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Performance evaluation</span>
                </li>
              </ul>
            </Card>

            {/* Protection */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="mb-6">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565725990/AqtWqoa53LUg6ZTriaRpnt/service-protection-c4QVPgaTvJFpUzjjmCiEf5.webp"
                  alt="Workplace Protection"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Workplace Protection</h3>
              <p className="text-muted-foreground mb-4">
                Ongoing protection services and specialized security advice to ensure safety for all staff and patrons in your facility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>On-site security personnel</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>24/7 monitoring support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Emergency response protocols</span>
                </li>
              </ul>
            </Card>

            {/* Recommendations */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="mb-6">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565725990/AqtWqoa53LUg6ZTriaRpnt/service-recommendations-PXdLQv2eBULk4iD.webp"
                  alt="Security Recommendations"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Security Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Strategic advice and protocols to ensure safety during normal business operations and emergency situations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Policy development</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Staff training programs</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Continuous improvement</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-32 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Spartan</h2>
                <p className="text-lg text-muted-foreground">
                  We combine decades of security expertise with a commitment to your organization's safety and peace of mind.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Highly Trained Professionals</h4>
                    <p className="text-muted-foreground">Our team consists of certified security experts with extensive field experience.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Customized Solutions</h4>
                    <p className="text-muted-foreground">Every organization is unique. We tailor our services to your specific needs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Proven Track Record</h4>
                    <p className="text-muted-foreground">Trusted by 500+ organizations nationwide with 100% client satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">Comprehensive Approach</h4>
                  <p className="text-sm text-muted-foreground">Assessment, training, and ongoing support in one partnership.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Available anytime for emergencies and urgent consultations.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2">Industry Certified</h4>
                  <p className="text-sm text-muted-foreground">All professionals maintain current certifications and training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Decades of combined security expertise and commitment to excellence
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Nicholas Arhakos</h3>
                  <p className="text-primary font-semibold mb-4">Chief Executive Officer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nicholas brings 15+ years of security consulting experience to Spartan Executive Consultant. His expertise spans corporate security, threat assessment, and emergency preparedness. Nicholas is dedicated to helping organizations create safer environments for their employees and patrons.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to enhance your organization's security? Contact us today for a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">146 Holly Ave</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+13477268382" className="text-primary hover:underline">(347) 726-8382</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@spartanexecutiveconsultant.com" className="text-primary hover:underline">
                      info@spartanexecutiveconsultant.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 9:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Sat-Sun: 11:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  type="tel"
                  placeholder="(347) 726-8382"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your security needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="text-lg font-bold">Spartan</span>
              </div>
              <p className="text-white/70 text-sm">Executive security consulting for organizations nationwide.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Assessments</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Drills</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Protection</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Recommendations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#why-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="tel:+13477268382" className="hover:text-white transition-colors">(347) 726-8382</a></li>
                <li><a href="mailto:info@spartanexecutiveconsultant.com" className="hover:text-white transition-colors">Email Us</a></li>
                <li>146 Holly Ave</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/60">
              &copy; 2026 Spartan Executive Consultant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
