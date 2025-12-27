import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  CheckCircle, 
  Calendar, 
  Image,
  ArrowRight,
  BarChart3,
  Link2
} from "lucide-react";

const stats = [
  { 
    label: "Total Posts", 
    value: "24", 
    icon: FileText, 
    color: "bg-primary/10 text-primary" 
  },
  { 
    label: "Finalized Posts", 
    value: "18", 
    icon: CheckCircle, 
    color: "bg-green-100 text-green-600" 
  },
  { 
    label: "Scheduled Posts", 
    value: "6", 
    icon: Calendar, 
    color: "bg-amber-100 text-amber-600" 
  },
  { 
    label: "Images", 
    value: "42", 
    icon: Image, 
    color: "bg-purple-100 text-purple-600" 
  },
];

const quickActions = [
  { label: "View All Posts", icon: FileText, path: "/posts" },
  { label: "View Analytics", icon: BarChart3, path: "/analytics" },
  { label: "Manage Images", icon: Image, path: "/images" },
  { label: "Connect Social Accounts", icon: Link2, path: "/settings" },
];

export default function ClientDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">
          Welcome back! 👋
        </h2>
        <p className="text-muted-foreground mt-1">
          Here's an overview of your content performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-display font-bold text-foreground mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start gap-2 hover:bg-accent"
                onClick={() => window.location.href = action.path}
              >
                <action.icon className="h-5 w-5 text-primary" />
                <span className="flex items-center gap-1">
                  {action.label}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Your recent posts and activity will appear here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
