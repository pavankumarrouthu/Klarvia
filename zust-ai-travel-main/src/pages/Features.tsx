import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Car, 
  Hotel, 
  Clock, 
  MapPin, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Globe,
  CreditCard,
  Calendar,
  HeadphonesIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "AI-Powered Trip Planning",
      description: "Get personalized recommendations in seconds based on your preferences, budget, urgency, comfort, or sustainability goals.",
      benefits: ["Instant optimization", "Personal preferences", "Budget awareness", "Sustainable options"]
    },
    {
      icon: <Car className="h-10 w-10 text-secondary" />,
      title: "Multimodal Transport Integration",
      description: "Seamlessly plan journeys combining flights, trains, buses, taxis, and rideshares for optimal travel experience.",
      benefits: ["All transport modes", "Seamless connections", "Optimal routing", "Cost comparison"]
    },
    {
      icon: <Hotel className="h-10 w-10 text-secondary" />,
      title: "Smart Accommodation Recommendations",
      description: "AI finds the perfect stays that match your itinerary, budget, and preferences with integrated booking.",
      benefits: ["Perfect location match", "Budget optimization", "Preference alignment", "Integrated booking"]
    },
    {
      icon: <Clock className="h-10 w-10 text-secondary" />,
      title: "Real-Time Adaptability",
      description: "Automatically adjusts plans for delays, cancellations, and finds faster alternatives to keep you on schedule.",
      benefits: ["Delay management", "Alternative routes", "Real-time updates", "Schedule optimization"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Smart Route Optimization",
      description: "Advanced algorithms find the most efficient routes considering traffic, weather, and transportation schedules."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Booking Platform",
      description: "Enterprise-grade security ensures your personal and payment information is always protected."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile-First Experience",
      description: "Optimized mobile app with offline capabilities for seamless travel management on the go."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Predictive Analytics",
      description: "Learn from your travel patterns to provide increasingly personalized recommendations over time."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Coverage",
      description: "Comprehensive transport and accommodation options across major cities and routes worldwide."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Unified Payment System",
      description: "Single payment for all travel components with transparent pricing and instant confirmations."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Trip Management Dashboard",
      description: "Centralized hub to manage all your trips, bookings, and travel history in one place."
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support with AI-powered assistance and human backup when needed."
    }
  ];

  const useCases = [
    {
      title: "Daily Commuters",
      scenario: "Student needs to get from home to university daily",
      solution: "AI optimizes route considering class schedules, traffic patterns, and budget constraints. Suggests bus + metro combination with real-time updates."
    },
    {
      title: "Business Travelers",
      scenario: "Executive traveling from Mumbai to Bangalore for meetings",
      solution: "Books flight + airport transfers + hotel near meeting location. Adapts automatically if flight is delayed, rebooking ground transport accordingly."
    },
    {
      title: "Family Vacations",
      scenario: "Family planning a weekend getaway to Goa",
      solution: "Coordinates flights for all family members, books family-friendly hotel, arranges airport pickup, and suggests local transport options."
    },
    {
      title: "Digital Nomads",
      scenario: "Remote worker planning multi-city trip across India",
      solution: "Creates optimized itinerary with accommodation and transport for each city, ensuring reliable internet and work-friendly environments."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-secondary/30 text-secondary bg-background">
            🚀 Advanced AI Technology
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-foreground">For Seamless Travel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Zust's AI-powered platform revolutionizes every aspect of your travel experience, from planning to execution.
          </p>
        </div>

        {/* Main Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four pillars of intelligent travel planning that set Zust apart
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="shadow-elegant border-0 card-gradient transition-smooth hover:shadow-glow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Additional Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed to enhance every aspect of your travel journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 transition-smooth hover:shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Real-World Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Zust adapts to different travel scenarios and user needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="shadow-card border-0 card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg gradient-text">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Scenario:</h4>
                      <p className="text-muted-foreground text-sm">{useCase.scenario}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Zust Solution:</h4>
                      <p className="text-muted-foreground text-sm">{useCase.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="mb-16 shadow-elegant border-0 bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Our proprietary AI engine combines machine learning, predictive analytics, and real-time data processing to deliver unmatched travel optimization.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold mb-2">ML</div>
                <div className="text-sm text-primary-foreground/80">Machine Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">API</div>
                <div className="text-sm text-primary-foreground/80">Integration Layer</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">RT</div>
                <div className="text-sm text-primary-foreground/80">Real-Time Data</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">AI</div>
                <div className="text-sm text-primary-foreground/80">Artificial Intelligence</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Experience the Future of Travel</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist to be among the first to access these powerful features and transform your travel experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/waitlist">Join Waitlist</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;