import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Rocket, DollarSign, Users, MessageSquare, Plane, Zap, Hotel, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import zustLogo from "@/assets/zust-logo.png";

const Waitlist = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    travelStyle: "",
    travelFrequency: "",
    earlyAdopter: false,
    subscribe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll be among the first to experience seamless AI-powered travel.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      travelStyle: "",
      travelFrequency: "",
      earlyAdopter: false,
      subscribe: false
    });
  };

  const benefits = [
    {
      icon: <Rocket className="h-8 w-8 text-secondary" />,
      title: "Priority access when we launch",
      description: "Be among the first to experience the future of travel"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-secondary" />,
      title: "Exclusive discounts for first 5,000 users",
      description: "Special pricing and deals only for early adopters"
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Be part of our founding community",
      description: "Join a select group shaping the travel industry"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-secondary" />,
      title: "Chance to shape features with feedback",
      description: "Your input directly influences our product development"
    }
  ];

  const problemSolutions = [
    {
      icon: <Plane className="h-6 w-6 text-primary" />,
      title: "One App",
      description: "No more juggling multiple apps for different transport modes"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "AI Optimization",
      description: "Smart algorithms find the best routes and deals instantly"
    },
    {
      icon: <Hotel className="h-6 w-6 text-primary" />,
      title: "Integrated Stays",
      description: "Hotels and transport planned together for seamless experience"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "On Time Always",
      description: "Real-time adaptations keep you on schedule, no matter what"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Enter your trip details",
      description: "Tell us your destination, dates, and preferences"
    },
    {
      number: "2", 
      title: "Zust AI generates optimized plan",
      description: "Get personalized transport + accommodation recommendations"
    },
    {
      number: "3",
      title: "Book instantly",
      description: "Complete booking for rides, trains, flights, and hotels"
    },
    {
      number: "4",
      title: "AI adapts in real time",
      description: "Automatic adjustments for delays and cancellations"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
        
        <div className="relative container mx-auto px-6 pt-24 pb-40">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo and Brand - Enhanced Animation */}
            <div className="flex items-center justify-center gap-4 mb-10 animate-bounce-in">
              <div className="relative">
                <img 
                  src={zustLogo} 
                  alt="Zust Logo" 
                  className="h-16 w-16 animate-float shadow-glow rounded-full"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <span className="text-4xl font-bold text-foreground tracking-tight">Zust</span>
            </div>
            
            <Badge 
              variant="outline" 
              className="mb-8 border-primary/30 text-primary bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium animate-fade-in-up shadow-soft hover-lift"
            >
              🚀 AI-Powered Travel Revolution
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="text-foreground">On Time, Every Time –</span>
              <br />
              <span className="gradient-text bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                AI Powered Travel & Stay
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-in-left font-light">
              Zust makes planning and booking trips effortless with real-time AI recommendations across transport and stay.
            </p>

            {/* Enhanced Features Pills */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full border border-border shadow-soft hover-lift transition-bounce">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">Multimodal Planning</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full border border-border shadow-soft hover-lift transition-bounce">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">Real-time Updates</span>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-full border border-border shadow-soft hover-lift transition-bounce">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">AI Optimization</span>
              </div>
            </div>

            {/* Enhanced Trust Indicator */}
            <div className="flex items-center justify-center gap-3 text-muted-foreground mb-12 animate-scale-in">
              <div className="p-2 bg-primary/10 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-medium">10,000+ travelers trust Zust</span>
            </div>
          </div>
        </div>
      </div>

      {/* Problem + Solution Section */}
      <div className="container mx-auto px-6 py-32 bg-gradient-to-b from-transparent to-secondary/5">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 animate-fade-in-up">
            <span className="text-foreground">Travel is </span>
            <span className="gradient-text">Broken.</span>
            <br />
            <span className="text-foreground">We're </span>
            <span className="gradient-text">Fixing It.</span>
          </h2>
          
          <div className="space-y-8 mb-16 text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-in-left">
            <p className="leading-relaxed">Today you juggle multiple apps for cabs, trains, buses, flights, and hotels.</p>
            <p className="leading-relaxed">Plans break with delays, cancellations, and missed connections.</p>
            <div className="text-2xl font-semibold text-foreground p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <span className="gradient-text">Zust gives you one app</span> for your entire journey — AI creates personalized, real-time adaptive plans that <span className="gradient-text">save time, money, and stress.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {problemSolutions.map((item, index) => (
              <div key={index} className="text-center group animate-bounce-in hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-border shadow-soft group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-6 py-32 cream-gradient">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">
            <span className="gradient-text">How Zust Works</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-light">Four simple steps to effortless travel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative mb-8 animate-scale-in">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground mx-auto shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                  {step.number}
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full animate-fade-in-up">
                    <ArrowRight className="h-8 w-8 text-primary/60 mx-auto animate-float" />
                  </div>
                )}
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-border/50">
                <h3 className="font-bold mb-4 text-xl text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Waitlist Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join the </span>
            <span className="gradient-text">Travel Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the future of travel planning. Join thousands who've already discovered effortless, AI-powered journeys.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">Instant Planning</span>
              </div>
              <p className="text-muted-foreground">AI creates perfect trips in seconds</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-secondary" />
                <span className="text-lg font-semibold text-foreground">Trusted Platform</span>
              </div>
              <p className="text-muted-foreground">10,000+ successful travelers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">Always On Time</span>
              </div>
              <p className="text-muted-foreground">98% success rate with real-time adaptation</p>
            </div>
          </div>
        </div>

        {/* Enhanced Waitlist Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elegant border border-border/30 bg-white/90 backdrop-blur-lg animate-scale-in hover-lift">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Join the Revolution</h3>
                <p className="text-lg text-muted-foreground">Be among the first to experience the future of travel</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-foreground font-semibold text-base">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="bg-white border-border/50 text-foreground placeholder:text-muted-foreground py-4 px-4 text-base rounded-xl shadow-soft focus:shadow-card transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground font-semibold text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-border/50 text-foreground placeholder:text-muted-foreground py-4 px-4 text-base rounded-xl shadow-soft focus:shadow-card transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="mobile" className="text-foreground font-semibold text-base">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                      className="bg-white border-border/50 text-foreground placeholder:text-muted-foreground py-4 px-4 text-base rounded-xl shadow-soft focus:shadow-card transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="city" className="text-foreground font-semibold text-base">City</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-white border-border/50 text-foreground placeholder:text-muted-foreground py-4 px-4 text-base rounded-xl shadow-soft focus:shadow-card transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="travelStyle" className="text-foreground font-semibold text-base">Primary Travel Style</Label>
                  <Select value={formData.travelStyle} onValueChange={(value) => setFormData({ ...formData, travelStyle: value })}>
                    <SelectTrigger className="bg-white border-border/50 text-foreground py-4 px-4 text-base rounded-xl shadow-soft">
                      <SelectValue placeholder="Select your primary travel style" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-border/50 rounded-xl shadow-elegant">
                      <SelectItem value="daily-commute">Daily Commute (Work/Study)</SelectItem>
                      <SelectItem value="intercity">Intercity Travel (Meetings/Trips)</SelectItem>
                      <SelectItem value="tourism">Tourism/Leisure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="travelFrequency" className="text-foreground font-semibold text-base">How often do you travel?</Label>
                  <Select value={formData.travelFrequency} onValueChange={(value) => setFormData({ ...formData, travelFrequency: value })}>
                    <SelectTrigger className="bg-white border-border/50 text-foreground py-4 px-4 text-base rounded-xl shadow-soft">
                      <SelectValue placeholder="Select your travel frequency" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-border/50 rounded-xl shadow-elegant">
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="rarely">Rarely</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <Checkbox
                        id="earlyAdopter"
                        checked={formData.earlyAdopter}
                        onCheckedChange={(checked) => setFormData({ ...formData, earlyAdopter: checked as boolean })}
                        className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary w-5 h-5"
                      />
                      <Label htmlFor="earlyAdopter" className="text-base text-foreground cursor-pointer font-medium">
                        Yes, I want early adopter rewards & referrals
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <Checkbox
                        id="subscribe"
                        checked={formData.subscribe}
                        onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                        className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary w-5 h-5"
                      />
                      <Label htmlFor="subscribe" className="text-base text-foreground cursor-pointer font-medium">
                        Subscribe to receive updates from us
                      </Label>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl py-8 bg-gradient-primary hover:shadow-glow text-primary-foreground font-bold rounded-xl shadow-elegant transition-all duration-500 hover:scale-[1.02] hover-glow"
                >
                  <span className="flex items-center justify-center gap-3">
                    Join Waitlist
                    <ArrowRight className="h-6 w-6 animate-float" />
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-primary/30 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-primary/40 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-lg font-medium">
                Join 10,000+ travelers already using Zust
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;