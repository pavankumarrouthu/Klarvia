import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Users, Target, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import zustLogo from "@/assets/zust-logo.png";

const About = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "AI-Powered Intelligence",
      description: "Our advanced AI engine personalizes recommendations in real-time based on budget, urgency, comfort, or sustainability preferences."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Diverse User Base",
      description: "Serving daily commuters, students, working professionals, business travelers, families, and tourists with tailored solutions."
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Comprehensive Planning",
      description: "From daily city commutes to intercity travel, including integrated accommodation and detailed stay planning for extended trips."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Real-Time Adaptability",
      description: "Dynamically adapts to delays, cancellations, and finds faster alternatives while maintaining optimal travel experience."
    }
  ];

  const userTypes = [
    {
      title: "Daily Commuters",
      description: "Students and working professionals who need reliable, efficient daily transportation solutions",
      benefits: ["Optimized route planning", "Real-time updates", "Cost-effective options"]
    },
    {
      title: "Business Professionals", 
      description: "Executives and consultants requiring seamless intercity travel with accommodation",
      benefits: ["Time-efficient planning", "Premium options", "Integrated bookings"]
    },
    {
      title: "Families & Tourists",
      description: "Leisure travelers seeking comprehensive trip planning with stays and activities",
      benefits: ["Family-friendly options", "Activity integration", "Budget optimization"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src={zustLogo} alt="Zust" className="h-24 w-24 animate-float" />
          </div>
          <Badge variant="outline" className="mb-6 border-secondary/30 text-secondary bg-background">
            🚀 Revolutionizing Travel with AI
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Zust One</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An AI-powered platform offering comprehensive trip planning and booking solutions that eliminates friction in travel, delivering a seamless, cost-efficient, and stress-free experience.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 shadow-elegant border-0 card-gradient">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Zust One is an AI-powered platform offering comprehensive trip planning and booking solutions. It supports multi-modal journeys, from daily city commutes to intercity travel, and includes integrated accommodation and detailed stay planning for extended trips.
            </p>
            <p className="text-lg font-semibold text-foreground">
              By applying Artificial Intelligence to mobility intelligence, Zust eliminates friction in travel delivering a seamless, cost-efficient, stress-free experience with the motto of <span className="gradient-text">"On Time Every Time"</span>.
            </p>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What Makes Us Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology combined with comprehensive travel solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 card-gradient transition-smooth hover:shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Base */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Who We Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform caters to a diverse user base with tailored solutions for every type of traveler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <Card key={index} className="shadow-card border-0 transition-smooth hover:shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{userType.title}</h3>
                  <p className="text-muted-foreground mb-4">{userType.description}</p>
                  <ul className="space-y-2">
                    {userType.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology & Values */}
        <Card className="mb-16 shadow-elegant border-0 bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Technology That Adapts
                </h2>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Zust one offers structured and organized planning and booking for the whole journey trip. Our AI engine personalizes recommendations in real time based on budget, urgency, comfort, or sustainability, while dynamically adapting to delays, cancellations, and faster alternatives.
                </p>
                <p className="text-lg font-semibold">
                  Zust one eliminates friction in travel delivering a seamless, cost-efficient, and stress-free experience.
                </p>
              </div>
              <div className="text-center">
                <img src={zustLogo} alt="Zust Technology" className="h-32 w-32 mx-auto mb-6" />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-primary-foreground/80">AI Monitoring</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm text-primary-foreground/80">Travel Options</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1</div>
                    <div className="text-sm text-primary-foreground/80">Unified Platform</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-primary-foreground/80">On Time Goal</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Transform Your Travel?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have already discovered the future of seamless, AI-powered journey planning.
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

export default About;