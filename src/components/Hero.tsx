import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional Training Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              Microsoft Certified Training
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Become the Best
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Technical Trainer
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            MCT-ISC.com is here to help you become the best technical trainer and presenter that you can be. 
            Learn from certified experts and advance your career with Microsoft technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              View Courses
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Certified Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80 text-sm">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Training Programs</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute right-10 top-1/4 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-pulse hidden lg:block" />
      <div className="absolute right-32 bottom-1/4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-1000 hidden lg:block" />
    </section>
  );
};

export default Hero;