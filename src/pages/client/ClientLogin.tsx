import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Users,
  ArrowRight,
  LogIn,
  UserPlus,
  KeyRound,
  Wand2,
  LayoutDashboard,
  CalendarCheck,
  Check,
  Star,
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Wand2,
    title: "AI-generated captions & images",
    description: "Create scroll-stopping content with AI that understands your brand voice."
  },
  {
    icon: LayoutDashboard,
    title: "Multi-client dashboards",
    description: "Manage all your clients from one powerful, unified workspace."
  },
  {
    icon: CalendarCheck,
    title: "One-click scheduling",
    description: "Schedule posts across all platforms with a single click."
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect Your Accounts",
    description: "Link your social media profiles in seconds. We support Instagram, Facebook, LinkedIn, and X."
  },
  {
    step: "02",
    title: "Generate Content",
    description: "Let AI create engaging posts tailored to your brand voice and audience preferences."
  },
  {
    step: "03",
    title: "Schedule & Publish",
    description: "Set your posting schedule and watch your content go live automatically."
  },
  {
    step: "04",
    title: "Analyze & Optimize",
    description: "Track performance metrics and let AI suggest improvements for better engagement."
  },
];

const benefits = [
  {
    icon: Zap,
    title: "10x Faster Content Creation",
    description: "What used to take hours now takes minutes with AI-powered generation."
  },
  {
    icon: TrendingUp,
    title: "Higher Engagement Rates",
    description: "AI-optimized content consistently outperforms manually created posts."
  },
  {
    icon: Shield,
    title: "Brand Consistency",
    description: "Maintain your unique voice across all platforms and posts automatically."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and AI recommendations."
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    content: "This tool has completely transformed how we manage social media for our clients. The AI-generated content is incredible.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Social Media Manager",
    company: "Creative Agency",
    content: "I used to spend 20 hours a week on content. Now it's 2 hours. The ROI is unbelievable.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    company: "Bloom Boutique",
    content: "As a solo entrepreneur, this is like having a full marketing team. Game changer!",
    rating: 5
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 social accounts",
      "100 AI-generated posts/month",
      "Basic analytics",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing agencies and businesses",
    features: [
      "Up to 25 social accounts",
      "Unlimited AI-generated posts",
      "Advanced analytics & reporting",
      "Priority support",
      "Team collaboration",
      "Custom brand voices"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited social accounts",
      "Unlimited everything",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee"
    ],
    popular: false
  },
];

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI analyzes your brand voice, audience preferences, and trending topics to generate unique, engaging content. You can review, edit, and approve posts before they go live."
  },
  {
    question: "Which social media platforms do you support?",
    answer: "We currently support Instagram, Facebook, LinkedIn, and X (Twitter). We're constantly adding new platforms based on user demand."
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and never share your data with third parties. We're SOC 2 compliant and GDPR ready."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  },
];

export default function ClientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[hsl(222,47%,8%)] font-body overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-semibold text-lg text-white">
                Social Media AI Manager
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Product</a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
              <Link to="/admin">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[hsl(222,47%,8%)]">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,8%)] via-[hsl(222,47%,11%)] to-[hsl(222,47%,8%)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(200,80%,60%)]/15 rounded-full blur-[100px] opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">New · AI-powered social scheduling</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Automate your social media with{" "}
                <span className="text-gradient">AI-driven content</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                Generate, schedule, and publish high-converting posts for every client 
                — from one smart dashboard.
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {features.map((feature) => (
                  <div key={feature.title} className="glass-card rounded-xl p-4 hover:bg-white/[0.06] transition-colors">
                    <feature.icon className="h-6 w-6 text-primary mb-3" />
                    <p className="text-sm font-medium text-white">{feature.title}</p>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[hsl(222,47%,8%)]" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 border-2 border-[hsl(222,47%,8%)]" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-[hsl(222,47%,8%)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Trusted by agencies and creators</p>
                    <p className="text-sm font-medium text-white">Join 500+ active users</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <span className="text-3xl font-display font-bold text-white">3.2x</span>
                  </div>
                  <p className="text-sm text-gray-400">More engagement</p>
                </div>
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-3xl font-display font-bold text-white">18h</span>
                  </div>
                  <p className="text-sm text-gray-400">Saved per week</p>
                </div>
              </div>
            </div>

            {/* Right Content - Login Card */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Card className="bg-white border-0 shadow-2xl shadow-black/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="font-display text-2xl font-bold text-gray-900">Welcome</h2>
                    <p className="text-gray-500 text-sm mt-1">Log in or create your workspace</p>
                  </div>

                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 mb-6">
                      <TabsTrigger value="login" className="flex items-center gap-1.5 data-[state=active]:bg-white">
                        <LogIn className="h-4 w-4" />
                        Login
                      </TabsTrigger>
                      <TabsTrigger value="signup" className="flex items-center gap-1.5 data-[state=active]:bg-white">
                        <UserPlus className="h-4 w-4" />
                        Sign Up
                      </TabsTrigger>
                      <TabsTrigger value="forgot" className="flex items-center gap-1.5 data-[state=active]:bg-white">
                        <KeyRound className="h-4 w-4" />
                        Forgot
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-50 border-gray-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-gray-700">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border-gray-200"
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          <LogIn className="h-4 w-4 mr-2" />
                          Sign In
                        </Button>
                        <p className="text-center text-sm text-primary hover:underline cursor-pointer">
                          Forgot your password?
                        </p>
                        <p className="text-center text-sm text-gray-500">
                          Don't have an account?{" "}
                          <span className="text-primary hover:underline cursor-pointer">Sign up</span>
                        </p>
                      </form>
                    </TabsContent>

                    <TabsContent value="signup">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-gray-700">Full Name</Label>
                          <Input placeholder="John Doe" className="bg-gray-50 border-gray-200" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-700">Email</Label>
                          <Input type="email" placeholder="name@example.com" className="bg-gray-50 border-gray-200" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-700">Password</Label>
                          <Input type="password" placeholder="Create a password" className="bg-gray-50 border-gray-200" />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Create Account
                        </Button>
                        <p className="text-center text-sm text-gray-500">
                          By signing up, you agree to our{" "}
                          <span className="text-primary hover:underline cursor-pointer">Terms</span> and{" "}
                          <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
                        </p>
                      </form>
                    </TabsContent>

                    <TabsContent value="forgot">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-gray-700">Email</Label>
                          <Input type="email" placeholder="name@example.com" className="bg-gray-50 border-gray-200" />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Reset Link
                        </Button>
                        <p className="text-center text-sm text-gray-500">
                          Remember your password?{" "}
                          <span className="text-primary hover:underline cursor-pointer">Sign in</span>
                        </p>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[hsl(222,47%,11%)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">HOW IT WORKS</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get started in minutes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined process gets you from signup to publishing in no time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all h-full">
                  <span className="text-5xl font-display font-bold text-primary/20">{item.step}</span>
                  <h3 className="font-display text-xl font-semibold text-white mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-[hsl(222,47%,8%)] relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">BENEFITS</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why teams choose us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of marketers who have transformed their social media strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card rounded-2xl p-8 hover:bg-white/[0.06] transition-all group">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[hsl(222,47%,11%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">TESTIMONIALS</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Loved by marketers worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass-card rounded-2xl p-8 hover:bg-white/[0.06] transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[hsl(222,47%,8%)] relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[hsl(200,80%,60%)]/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">PRICING</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start free for 14 days. No credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-2xl p-8 transition-all ${
                  plan.popular 
                    ? "bg-primary text-white ring-2 ring-primary scale-105" 
                    : "glass-card hover:bg-white/[0.06]"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display text-xl font-semibold mb-2 ${plan.popular ? "text-white" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-gray-400"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-display font-bold ${plan.popular ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/80" : "text-gray-400"}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className={`h-5 w-5 ${plan.popular ? "text-white" : "text-primary"}`} />
                      <span className={plan.popular ? "text-white/90" : "text-gray-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-white text-primary hover:bg-white/90" 
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[hsl(222,47%,11%)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[hsl(222,47%,8%)] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your social media?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of marketers who are saving time and growing their audience with AI-powered content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[hsl(222,47%,6%)] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-display font-semibold text-white">Social Media AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                The all-in-one platform for AI-powered social media management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
                <li className="hover:text-white cursor-pointer">Changelog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  <Twitter className="h-5 w-5 text-gray-400" />
                </div>
                <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-400" />
                </div>
                <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  <Instagram className="h-5 w-5 text-gray-400" />
                </div>
                <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  <Facebook className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Social Media AI Manager. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
