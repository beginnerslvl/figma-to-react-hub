import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";

const overviewStats = [
  { label: "Total Reach", value: "12.4K", change: "+12%", icon: Eye },
  { label: "Engagement Rate", value: "4.8%", change: "+2.3%", icon: Heart },
  { label: "Comments", value: "234", change: "+18%", icon: MessageCircle },
  { label: "Shares", value: "89", change: "+5%", icon: Share2 },
];

const topPosts = [
  { title: "5 Tips for Better Engagement", reach: "3.2K", engagement: "8.2%" },
  { title: "Behind the Scenes", reach: "2.8K", engagement: "6.5%" },
  { title: "Product Launch Announcement", reach: "2.1K", engagement: "5.8%" },
];

export default function ClientAnalytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">
          Analytics
        </h2>
        <p className="text-muted-foreground mt-1">
          Track your content performance and audience growth.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat) => (
          <Card key={stat.label} className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-display font-bold text-foreground mt-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Engagement Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Engagement chart will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Top Performing Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {topPosts.map((post, index) => (
              <div key={index} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-display font-bold text-muted-foreground">
                    #{index + 1}
                  </span>
                  <span className="font-medium text-foreground">{post.title}</span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <p className="text-muted-foreground">Reach</p>
                    <p className="font-medium">{post.reach}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Engagement</p>
                    <p className="font-medium text-green-600">{post.engagement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audience Insights Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display flex items-center gap-2">
            <Users className="h-5 w-5" />
            Audience Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Connect your social accounts to see audience demographics.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
