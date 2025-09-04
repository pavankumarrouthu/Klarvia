import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-secondary/30 text-secondary bg-background">
            🚀 Launch Preparation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Pricing Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're putting the finishing touches on our pricing structure to offer you the best value for AI-powered travel planning.
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="shadow-elegant border-0 card-gradient max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow mb-6">
                  <Sparkles className="h-16 w-16 text-primary-foreground animate-pulse" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center shadow-glow">
                  <Rocket className="h-8 w-8 text-accent-orange-foreground" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Coming Soon</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're crafting flexible pricing plans that will make AI-powered travel planning accessible to everyone. From daily commuters to frequent business travelers, we'll have options that fit your travel style and budget.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">Transparent, no-hidden-fees pricing</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">Pay only for successful bookings</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">Special launch pricing for early adopters</span>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-4">
                <span className="gradient-text">Get Early Access Pricing</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our waitlist to be notified when pricing is announced and receive exclusive early adopter discounts.
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/waitlist">Join Waitlist for Special Pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">What You Can Expect</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card border-0 transition-smooth hover:shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold">$</span>
                </div>
                <h3 className="font-semibold mb-2">Value-Based Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Pay based on the value you receive, not arbitrary subscription fees
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 transition-smooth hover:shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold">%</span>
                </div>
                <h3 className="font-semibold mb-2">Commission-Free</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden markups on your bookings - transparent pricing always
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 transition-smooth hover:shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold">∞</span>
                </div>
                <h3 className="font-semibold mb-2">Unlimited Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Plan as many trips as you want with our AI-powered platform
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Want to be the first to know when we launch? Join thousands of travelers on our waitlist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/features">Learn More About Features</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/about">About Zust</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;