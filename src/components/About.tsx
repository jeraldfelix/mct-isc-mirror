import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from Microsoft Certified Trainers with real-world experience and industry expertise.",
      icon: "👨‍🏫"
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our courses cover everything from basic concepts to advanced implementation strategies.",
      icon: "📚"
    },
    {
      title: "Hands-on Learning",
      description: "Practice with real scenarios and lab environments to build practical skills.",
      icon: "💻"
    },
    {
      title: "Career Support",
      description: "Get guidance on certification paths and career advancement opportunities.",
      icon: "🚀"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About MCT-ISC
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Excellence in Technical Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are dedicated to empowering technical professionals with the skills and knowledge needed 
            to excel as Microsoft Certified Trainers and technical presenters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card hover:shadow-hover transition-smooth group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-bounce">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To bridge the gap between technical knowledge and effective teaching, creating a community 
                of skilled trainers who can inspire and educate the next generation of technology professionals.
              </p>
              <Button variant="premium" size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;