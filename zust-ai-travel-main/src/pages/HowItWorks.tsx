import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Zap, 
  CreditCard, 
  Clock, 
  ArrowRight,
  Smartphone,
  CheckCircle,
  Calendar,
  Route
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Your Destination & Preferences",
      description: "Simply tell us where you want to go, when you want to travel, and your preferences for budget, comfort level, and sustainability.",
      icon: <MapPin className="h-8 w-8 text-secondary" />,
      details: [
        "Input your origin and destination",
        "Set travel dates and times",
        "Choose budget range",
        "Select comfort preferences",
        "Pick sustainability options"
      ]
    },
    {
      number: "02",
      title: "Zust Generates the Best Travel + Stay Plan Instantly",
      description: "Our AI analyzes thousands of transport and accommodation options to create the perfect personalized itinerary in seconds.",
      icon: <Zap className="h-8 w-8 text-secondary" />,
      details: [
        "AI processes millions of combinations",
        "Optimizes for your preferences",
        "Compares all transport modes",
        "Matches ideal accommodations",
        "Creates unified itinerary"
      ]
    },
    {
      number: "03",
      title: "Book & Travel Stress-Free – Always On Time",
      description: "Complete your booking in one click and let our AI monitor and adapt your journey in real-time for a perfect travel experience.",
      icon: <CreditCard className="h-8 w-8 text-secondary" />,
      details: [
        "One-click booking for everything",
        "Unified payment system",
        "Real-time journey monitoring",
        "Automatic plan adjustments",
        "24/7 support availability"
      ]
    }
  ];

  const process = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Smart Input Processing",
      description: "Natural language processing understands your travel needs even from casual descriptions."
    },
    {
      icon: <Route className="h-6 w-6 text-primary" />,
      title: "Multi-Modal Route Planning",
      description: "Considers all transport options: flights, trains, buses, taxis, rideshares, and walking routes."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Dynamic Scheduling",
      description: "Optimizes timing across all bookings to minimize waiting times and maximize efficiency."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Real-Time Adaptation",
      description: "Continuously monitors conditions and automatically adjusts plans when disruptions occur."
    }
  ];

  const scenarios = [
    {
      title: "Business Trip to Bangalore",
      scenario: "Mumbai to Bangalore for a 2-day business meeting",
      steps: [
        "Enter: Mumbai → Bangalore, 2 days, business comfort",
        "AI suggests: Flight + hotel near meeting venue + airport transfers",
        "Books: All components with meeting schedule optimization",
        "Adapts: Flight delay? Automatically reschedules ground transport"
      ]
    },
    {
      title: "Daily University Commute",
      scenario: "Student traveling from home to university daily",
      steps: [
        "Enter: Home → University, recurring daily, budget-friendly",
        "AI suggests: Bus + metro combination with student discounts",
        "Books: Monthly passes for optimal savings",
        "Adapts: Traffic jam? Suggests alternate route via local train"
      ]
    },
    {
      title: "Weekend Family Getaway",
      scenario: "Family vacation to Goa for the weekend",
      steps: [
        "Enter: Delhi → Goa, family of 4, leisure travel",
        "AI suggests: Flight + family resort + local taxi bookings",
        "Books: Coordinated family bookings with child-friendly options",
        "Adapts: Weather changes? Suggests indoor activities and transport"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-secondary/30 text-secondary bg-background">
            ⚡ Intelligent Process
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How Zust Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience seamless travel planning in three simple steps. Our AI does the heavy lifting while you focus on your journey.
          </p>
        </div>

        {/* Main Steps */}
        <div className="mb-20">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="shadow-elegant border-0 card-gradient">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-glow">
                          {step.number}
                        </div>
                        {step.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-secondary" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`lg:w-1/2 text-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-hero rounded-full mx-auto flex items-center justify-center shadow-glow">
                      <div className="text-6xl">
                        {index === 0 && "📍"}
                        {index === 1 && "🤖"}
                        {index === 2 && "✈️"}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="h-8 w-8 text-secondary" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Behind the Scenes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI processes that make seamless travel planning possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="shadow-card border-0 transition-smooth hover:shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real Scenarios */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Real-World Examples</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Zust handles different travel scenarios with intelligent planning
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="shadow-card border-0 card-gradient">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{scenario.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{scenario.scenario}</p>
                  <div className="space-y-3">
                    {scenario.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-bold text-secondary mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <p className="text-sm text-muted-foreground flex-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Advantage */}
        <Card className="mb-16 shadow-elegant border-0 bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Why AI Makes the Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">10M+</div>
                <div className="text-sm text-primary-foreground/80">Combinations analyzed per query</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">&lt;3s</div>
                <div className="text-sm text-primary-foreground/80">Average planning time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-primary-foreground/80">Real-time monitoring</div>
              </div>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Traditional booking platforms show you what's available. Zust's AI shows you what's optimal for your specific needs, budget, and preferences.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Experience Seamless Travel?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist and be among the first to experience AI-powered travel planning that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/waitlist">Join Waitlist</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;