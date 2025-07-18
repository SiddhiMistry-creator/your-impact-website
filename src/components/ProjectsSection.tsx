import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      image: project1,
      title: "Social Media Transformation",
      client: "FitLife Coaching",
      goal: "Increase social media engagement and attract fitness clients",
      tools: ["Instagram", "Canva", "Later", "Adobe Creative Suite"],
      results: [
        "400% increase in engagement",
        "50+ new coaching clients",
        "300% follower growth in 3 months"
      ],
      testimonial: {
        text: "Sarah completely transformed our social presence! We went from struggling to get likes to having clients reach out daily. Our revenue tripled!",
        author: "Jessica Martinez",
        title: "Founder, FitLife Coaching"
      },
      rating: 5
    },
    {
      image: project2,
      title: "Complete Brand Makeover",
      client: "Mindful Moments Wellness",
      goal: "Create a premium brand identity that reflects their holistic approach",
      tools: ["Adobe Illustrator", "Figma", "Photoshop", "InDesign"],
      results: [
        "45% increase in premium bookings",
        "Brand recognition improved by 300%",
        "Featured in 3 wellness magazines"
      ],
      testimonial: {
        text: "The brand identity Sarah created perfectly captures our essence. Clients constantly compliment our professional look, and we've doubled our rates!",
        author: "Dr. Amanda Chen",
        title: "Wellness Practitioner"
      },
      rating: 5
    },
    {
      image: project3,
      title: "High-Converting Website",
      client: "Digital Marketing Pro",
      goal: "Build a website that converts visitors into high-value clients",
      tools: ["Webflow", "Figma", "Google Analytics", "Hotjar"],
      results: [
        "180% increase in conversion rate",
        "65% reduction in bounce rate",
        "$50K+ in new client revenue"
      ],
      testimonial: {
        text: "Our new website is a sales machine! The design is stunning and the conversion optimization Sarah implemented has been game-changing for our business.",
        author: "Mike Thompson",
        title: "Marketing Consultant"
      },
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories That Speak 📈
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trusted me to transform their business
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-primary">{project.client}</span>
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">🎯 Project Goal</h4>
                        <p className="text-muted-foreground">{project.goal}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">🛠 Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">📊 Results Achieved</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, i) => (
                            <li key={i} className="text-muted-foreground text-sm">
                              ✅ {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <p className="text-sm italic mb-3 leading-relaxed">
                      "{project.testimonial.text}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold">{project.testimonial.author}</div>
                      <div className="text-muted-foreground">{project.testimonial.title}</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="gradient" className="text-lg px-8 py-6 h-auto">
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};