import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Creative workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-medium">Trusted by 50+ happy clients</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          I Help Creative 
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
            Businesses Shine ✨
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Transforming small businesses, coaches, and creators into unforgettable brands 
          through strategic design and powerful storytelling.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="accent" className="text-lg px-8 py-6 h-auto">
            Get Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-white/30 text-white hover:bg-white/10">
            View My Work
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-8 justify-center items-center opacity-80">
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2.5x</div>
            <div className="text-sm">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};