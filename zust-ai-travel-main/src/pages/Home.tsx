import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Plane, Train, Car, Hotel, Zap, Clock, Shield, MapPin, Star, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import zustLogo from "@/assets/zust-logo.png";

const Home = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "AI-Powered Trip Planning",
      description: "Get personalized recommendations in seconds based on your preferences, budget, and travel style."
    },
    {
      icon: <Car className="h-8 w-8 text-secondary" />,
      title: "Multimodal Transport Integration",
      description: "Seamlessly plan journeys from daily commutes to intercity travel with all transport modes."
    },
    {
      icon: <Hotel className="h-8 w-8 text-secondary" />,
      title: "Smart Accommodation",
      description: "AI finds the perfect stays that match your itinerary, budget, and preferences."
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Real-Time Adaptability",
      description: "Automatically adjusts plans for delays, cancellations, and finds faster alternatives."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Enter Your Destination",
      description: "Tell us where you want to go and your preferences for budget, comfort, and timing."
    },
    {
      step: "02", 
      title: "AI Generates Your Plan",
      description: "Zust AI instantly creates the best travel + stay combination for your entire journey."
    },
    {
      step: "03",
      title: "Travel Stress-Free",
      description: "Book everything in one place and let AI adapt your plans in real-time. Always on time."
    }
  ];

  const comparisons = [
    {
      feature: "AI-Powered Planning",
      zust: true,
      others: false
    },
    {
      feature: "Real-Time Adaptability", 
      zust: true,
      others: false
    },
    {
      feature: "Multimodal Integration",
      zust: true,
      others: false
    },
    {
      feature: "One-Stop Booking",
      zust: true,
      others: false
    },
    {
      feature: "Static Booking Only",
      zust: false,
      others: true
    }
  ];

  const testimonials = [
    {
      quote: "Zust made my last trip so smooth, I never opened 3 apps again.",
      author: "Sarah Chen",
      role: "Business Traveler",
      rating: 5
    },
    {
      quote: "The AI recommendations saved me hours of planning and found better deals.",
      author: "Mike Rodriguez", 
      role: "Frequent Flyer",
      rating: 5
    },
    {
      quote: "Real-time updates kept me informed when my flight was delayed.",
      author: "Priya Patel",
      role: "Tourism Guide",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-background/80">
              🚀 Now in Beta - Join Early Access
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">On Time, Every Time</span>
              <br />
              <span className="text-foreground">AI Powered Travel Planning</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Zust makes planning and booking trips effortless with real-time AI recommendations across transport and stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <AlertDialog open={showComingSoon} onOpenChange={setShowComingSoon}>
                <AlertDialogTrigger asChild>
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    Plan My Trip
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-center gradient-text">Coming Soon!</AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                      We're putting the finishing touches on our platform. Join our waitlist to be among the first to experience seamless AI-powered travel planning.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex justify-center mt-4">
                    <Button variant="hero" asChild>
                      <Link to="/waitlist">Join Waitlist</Link>
                    </Button>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of travel with AI-powered planning and real-time adaptability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 card-gradient transition-smooth hover:shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to stress-free travel planning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6 shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose Zust?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Zust compares to traditional booking platforms
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div className="font-semibold text-muted-foreground">Feature</div>
                  <div className="flex items-center justify-center gap-2">
                    <img src={zustLogo} alt="Zust" className="h-6 w-6" />
                    <span className="font-bold gradient-text">Zust</span>
                  </div>
                  <div className="font-semibold text-muted-foreground">Others</div>
                </div>
                {comparisons.map((comparison, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-t border-border">
                    <div className="text-sm">{comparison.feature}</div>
                    <div className="flex justify-center">
                      {comparison.zust ? (
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted"></div>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {comparison.others ? (
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted"></div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What Our Users Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of travelers who have transformed their journey experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0 card-gradient transition-smooth hover:shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-orange text-accent-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travel without friction. On Time, Every Time.
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands who are revolutionizing their travel experience
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;