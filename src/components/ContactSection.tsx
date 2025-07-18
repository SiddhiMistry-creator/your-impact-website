import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Gift, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand? 🚀
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Let's chat about your goals and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Lead Magnet */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant">
            <CardHeader className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <CardTitle className="text-2xl text-foreground">
                Free 30-Minute Strategy Call
              </CardTitle>
              <p className="text-muted-foreground">
                Discover exactly how to position your brand for maximum impact and profit
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/10 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-accent-foreground">In this call, you'll get:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Brand audit & positioning strategy
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Content strategy recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Custom growth roadmap
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Quick wins you can implement today
                  </li>
                </ul>
              </div>
              
              <Button className="w-full" size="lg" variant="gradient">
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Free Call
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                No pitch, no pressure - just pure value 💎
              </p>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send Me a Message 💌
              </CardTitle>
              <p className="text-muted-foreground">
                Have a specific project in mind? Let's discuss it!
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <Label htmlFor="business">Business Name</Label>
                <Input id="business" placeholder="Your business name" />
              </div>
              
              <div>
                <Label htmlFor="project">Project Details</Label>
                <Textarea 
                  id="project" 
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-white">
          <p className="text-lg mb-6">Prefer to reach out directly?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:hello@yourname.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-5 h-5" />
              hello@yourname.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-5 h-5" />
              (123) 456-7890
            </a>
          </div>
          <p className="text-sm mt-6 opacity-80">
            Response time: Usually within 24 hours ⚡
          </p>
        </div>
      </div>
    </section>
  );
};