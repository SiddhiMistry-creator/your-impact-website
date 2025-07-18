import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Megaphone, Globe, Camera, Edit3, BarChart3 } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand makeovers that make you unforgettable",
      features: ["Logo design & brand guidelines", "Color palette & typography", "Business card & stationary design"],
      price: "Starting at $2,500",
      emoji: "🎨"
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Scroll-stopping content that converts followers into customers",
      features: ["Social media content strategy", "Professional photography direction", "Video content planning"],
      price: "Starting at $1,200/month",
      emoji: "📸"
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Done-for-you social presence that builds community and drives sales",
      features: ["Content calendar & posting", "Community management", "Growth strategy & analytics"],
      price: "Starting at $1,800/month",
      emoji: "📱"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Beautiful, conversion-focused websites that work 24/7",
      features: ["Custom website design", "Mobile optimization", "SEO foundation"],
      price: "Starting at $3,500",
      emoji: "💻"
    },
    {
      icon: Edit3,
      title: "Copy & Messaging",
      description: "Words that connect, convince, and convert your ideal clients",
      features: ["Website copy", "Email sequences", "Sales page copy"],
      price: "Starting at $1,500",
      emoji: "✍️"
    },
    {
      icon: BarChart3,
      title: "Marketing Strategy",
      description: "Data-driven strategies that turn your marketing into a profit center",
      features: ["Marketing audit & strategy", "Campaign planning", "Performance tracking"],
      price: "Starting at $2,000",
      emoji: "📊"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How I Help You Win 🏆
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-service creative solutions designed to elevate your brand and accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4">{service.emoji}</div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-primary mb-3">{service.price}</div>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="gradient" className="text-lg px-8 py-6 h-auto">
            Book a Free Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};