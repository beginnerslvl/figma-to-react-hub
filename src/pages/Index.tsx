import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DashboardCard } from "@/components/DashboardCard";
import { WeeklyEngagementChart } from "@/components/WeeklyEngagementChart";
import { ContentCalendar } from "@/components/ContentCalendar";
import { toast } from "@/hooks/use-toast";
import { FileText, Users, BarChart, Share2, MessageSquare, Youtube, Zap, BookOpen, LifeBuoy } from "lucide-react";

const Index = () => {
  const showComingSoon = (feature: string) => {
    toast({
      title: "Coming Soon",
      description: `${feature} feature will be available soon!`,
    });
  };

  const handleTaskToggle = (taskLabel: string) => {
    showComingSoon(taskLabel);
  };

  const jumpstartTasks = [
    { id: 1, label: "Create my business", completed: false },
    { id: 2, label: "Set up my brand", completed: false },
    { id: 3, label: "Edit a post", completed: false },
    { id: 4, label: "Schedule a post", completed: false },
    { id: 5, label: "Publish a post", completed: false },
  ];

  const quickActions = [
    {
      icon: FileText,
      title: "Generate Posts",
      description: "Create new posts with AI",
    },
    {
      icon: BarChart,
      title: "View Analytics",
      description: "See recent sharing performance",
    },
    {
      icon: Share2,
      title: "Connect Socials",
      description: "Connect your social media accounts",
    },
    {
      icon: Users,
      title: "Invite to Business",
      description: "Invite people to your business",
    },
  ];

  const helpfulLinks = [
    {
      icon: MessageSquare,
      title: "AI content generation: Community",
      description: "Connect with other AI Content generation users, ask questions and share tips.",
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Watch tutorials, feature walkthroughs, and product updates.",
    },
    {
      icon: BookOpen,
      title: "Blog",
      description: "Read the latest news, tips, and inspiration for the AI Content",
    },
    {
      icon: Zap,
      title: "What's New",
      description: "See the latest releases",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description: "Chat with team for faster or technical support",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome to AI Content generation !</h1>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Jumpstart Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Jumpstart Progress</CardTitle>
            <CardDescription>50% complete</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {jumpstartTasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => handleTaskToggle(task.label)}
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  onClick={() => handleTaskToggle(task.label)}
                >
                  {task.label}
                </label>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Efficient & Powerful Card */}
        <Card
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => showComingSoon("Efficient & Powerful dashboard")}
        >
          <CardHeader>
            <CardTitle className="text-white">Efficient & Powerful</CardTitle>
            <CardDescription className="text-blue-50">
              One tool to manage, publish and schedule your content effortlessly and efficiently
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between text-blue-50 mb-4">
                  <div>
                    <div className="text-sm">Posts</div>
                    <div className="text-2xl font-bold text-white">112K</div>
                  </div>
                  <div>
                    <div className="text-sm">Socials</div>
                    <div className="text-2xl font-bold text-white">24</div>
                  </div>
                </div>
              </div>
              <div className="ml-4 w-32 h-32 bg-blue-400/30 rounded-lg flex items-center justify-center">
                <div className="text-blue-200 text-xs text-center">
                  Image
                  <br />
                  Placeholder
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Engagement */}
        <WeeklyEngagementChart />
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => showComingSoon("Create Unlimited Creative Posts")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Create Unlimited Creative Posts</CardTitle>
                    <CardDescription className="text-xs">From text or multimedia content to uploads</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => showComingSoon("Request Live Demo")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Request Live Demo</CardTitle>
                    <CardDescription className="text-xs">An onboarding and walkthrough with our team</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => showComingSoon(action.title)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <action.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{action.title}</CardTitle>
                        <CardDescription className="text-xs">{action.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Helpful Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {helpfulLinks.map((link, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => showComingSoon(link.title)}
                >
                  <CardHeader>
                    <div className="space-y-2">
                      <div className="p-2 bg-primary/10 rounded-lg w-fit">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-sm">{link.title}</CardTitle>
                        <CardDescription className="text-xs">{link.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Content Calendar */}
        <div className="lg:col-span-1">
          <ContentCalendar />
        </div>
      </div>
    </div>
  );
};

export default Index;
