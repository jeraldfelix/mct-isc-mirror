import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      title: "MCT Fundamentals",
      description: "Essential skills for becoming a Microsoft Certified Trainer",
      duration: "5 days",
      level: "Beginner",
      price: "$1,299",
      features: ["Presentation Skills", "Adult Learning Principles", "MCT Requirements", "Certification Prep"],
      popular: false
    },
    {
      title: "Advanced Training Techniques",
      description: "Master advanced methodologies for technical training delivery",
      duration: "3 days", 
      level: "Advanced",
      price: "$899",
      features: ["Interactive Learning", "Virtual Training", "Assessment Design", "Feedback Systems"],
      popular: true
    },
    {
      title: "Azure Training Specialist",
      description: "Specialized training for Azure cloud technologies",
      duration: "7 days",
      level: "Intermediate",
      price: "$1,599",
      features: ["Azure Fundamentals", "Cloud Architecture", "Hands-on Labs", "Certification Path"],
      popular: false
    },
    {
      title: "Training Delivery Mastery",
      description: "Perfect your training delivery and presentation skills",
      duration: "2 days",
      level: "All Levels",
      price: "$599",
      features: ["Public Speaking", "Visual Design", "Engagement Techniques", "Q&A Management"],
      popular: false
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Training Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Upcoming Classes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of training programs designed to elevate your 
            technical training and presentation skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className={`p-6 bg-gradient-card hover:shadow-hover transition-smooth group cursor-pointer relative overflow-hidden ${course.popular ? 'ring-2 ring-primary' : ''}`}>
              {course.popular && (
                <div className="absolute -top-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium transform rotate-12">
                  Popular
                </div>
              )}
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2 text-sm">What you'll learn:</h4>
                <ul className="space-y-1">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>
                <Button 
                  variant={course.popular ? "default" : "outline"} 
                  className="w-full"
                  size="sm"
                >
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Custom Training Solutions
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Need a specialized training program for your organization? We create custom 
              curricula tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Request Custom Training
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;