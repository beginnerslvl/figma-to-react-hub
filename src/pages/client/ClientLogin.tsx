import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Users,
  ArrowRight 
} from "lucide-react";

export default function ClientLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    navigate("/dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-client-navy dark-theme relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-client-navy via-background to-client-navy" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-client-sky/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Hero content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Create Content That
              <span className="block text-gradient">Drives Results.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              AI-powered content creation platform that helps you create, schedule, 
              and analyze your social media presence with ease.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-white">3.2x</p>
                    <p className="text-sm text-muted-foreground">Avg. Engagement</p>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-client-sky/20">
                    <Clock className="h-5 w-5 text-client-sky" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-white">18h</p>
                    <p className="text-sm text-muted-foreground">Saved Weekly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>AI-powered content generation</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Multi-platform scheduling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login card */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-16">
          <Card className="w-full max-w-md glass-card border-white/10">
            <CardHeader className="text-center pb-2">
              <h2 className="font-display text-2xl font-semibold text-white">
                Welcome Back
              </h2>
              <p className="text-muted-foreground text-sm">
                Sign in to access your dashboard
              </p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/5">
                  <TabsTrigger value="login" className="text-white data-[state=active]:bg-primary">
                    Login
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="text-white data-[state=active]:bg-primary">
                    Sign Up
                  </TabsTrigger>
                  <TabsTrigger value="forgot" className="text-white data-[state=active]:bg-primary">
                    Forgot
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="mt-6">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="text-white">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-white">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-white">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="forgot" className="mt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="forgot-email" className="text-white">Email</Label>
                      <Input
                        id="forgot-email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Send Reset Link
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
