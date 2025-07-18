import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

export const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "$1,497",
      period: "one-time",
      description: "Essential brand foundations to launch with confidence",
      features: [
        "Brand strategy session",
        "Logo design + 2 revisions",
        "Color palette & fonts",
        "Basic brand guidelines",
        "Social media templates (5)",
        "Email support"
      ],
      popular: false,
      icon: "🚀",
      cta: "Get Started"
    },
    {
      name: "Growth",
      subtitle: "Most popular choice",
      price: "$2,997",
      period: "one-time",
      description: "Complete brand makeover with marketing assets",
      features: [
        "Everything in Starter",
        "Complete brand identity system",
        "Website design (5 pages)",
        "Social media content (30 posts)",
        "Business card & stationary",
        "Brand photoshoot direction",
        "2 months email support",
        "1 strategy call/month"
      ],
      popular: true,
      icon: "🎯",
      cta: "Most Popular"
    },
    {
      name: "Premium",
      subtitle: "For serious entrepreneurs",
      price: "$4,997",
      period: "one-time",
      description: "Full-service brand transformation + ongoing support",
      features: [
        "Everything in Growth",
        "Advanced website (10+ pages)",
        "E-commerce setup",
        "Marketing automation setup",
        "Video content strategy",
        "PR kit & media assets",
        "6 months ongoing support",
        "Weekly strategy calls",
        "Priority support"
      ],
      popular: false,
      icon: "💎",
      cta: "Go Premium"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment Options 💰
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business stage and growth goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular 
                  ? 'ring-2 ring-primary shadow-elegant scale-105' 
                  : 'hover:shadow-elegant bg-gradient-card'
              } border-0`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular Choice
                </div>
              )}
              
              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="text-5xl mb-4">{pkg.icon}</div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{pkg.subtitle}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.period}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "gradient" : "outline"}
                  size="lg"
                >
                  {pkg.cta}
                  {pkg.popular && <Zap className="w-4 h-4 ml-2" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Not sure which package is right for you?
          </p>
          <Button variant="outline" size="lg">
            Schedule a Free Consultation
          </Button>
          <p className="text-sm text-muted-foreground">
            💸 Payment plans available • 🔒 100% satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
};