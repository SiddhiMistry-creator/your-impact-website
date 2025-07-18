export const ClientLogosSection = () => {
  const clients = [
    { name: "FitLife Coaching", logo: "💪" },
    { name: "Mindful Moments", logo: "🧘" },
    { name: "Digital Pro", logo: "💻" },
    { name: "Green Earth Co", logo: "🌱" },
    { name: "Creative Studio", logo: "🎨" },
    { name: "Tech Solutions", logo: "⚡" },
    { name: "Wellness Hub", logo: "🌟" },
    { name: "Local Bistro", logo: "🍽️" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Trusted by Amazing Brands 🤝
          </h2>
          <p className="text-muted-foreground">
            Join these successful businesses who've transformed their brand with my help
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-4xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                {client.logo}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Ready to see your logo here? Let's make it happen! ✨
          </p>
        </div>
      </div>
    </section>
  );
};