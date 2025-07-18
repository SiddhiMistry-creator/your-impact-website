import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Zap } from "lucide-react";

export const WhoIHelpSection = () => {
  const audiences = [
    {
      icon: Users,
      title: "Small Business Owners",
      description: "Ready to scale but struggling with brand consistency and professional presence",
      problems: ["Inconsistent branding", "Low online visibility", "Limited marketing budget"],
      emoji: "🏢"
    },
    {
      icon: TrendingUp,
      title: "Coaches & Consultants",
      description: "Passionate experts who need to build trust and attract ideal clients",
      problems: ["Building credibility", "Standing out in crowded market", "Converting leads"],
      emoji: "🎯"
    },
    {
      icon: Zap,
      title: "Content Creators",
      description: "Creative souls wanting to monetize their passion and build a loyal community",
      problems: ["Monetizing content", "Audience growth", "Brand partnerships"],
      emoji: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who I Help Succeed 🎯
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I specialize in working with ambitious entrepreneurs who are ready to take their business to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">{audience.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Common Challenges:</h4>
                  <ul className="text-sm space-y-1">
                    {audience.problems.map((problem, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <strong>Sound familiar?</strong> You're in the right place! 👇
          </p>
        </div>
      </div>
    </section>
  );
};