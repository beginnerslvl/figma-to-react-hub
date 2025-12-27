import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockPosts = [
  { 
    id: 1, 
    title: "5 Tips for Better Social Media Engagement", 
    status: "published", 
    date: "2024-01-15",
    platform: "Instagram"
  },
  { 
    id: 2, 
    title: "Behind the Scenes: Our Creative Process", 
    status: "scheduled", 
    date: "2024-01-20",
    platform: "Facebook"
  },
  { 
    id: 3, 
    title: "New Product Launch Announcement", 
    status: "draft", 
    date: "2024-01-22",
    platform: "LinkedIn"
  },
  { 
    id: 4, 
    title: "Customer Success Story: How We Helped...", 
    status: "published", 
    date: "2024-01-10",
    platform: "Twitter"
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "published":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "scheduled":
      return <Calendar className="h-4 w-4 text-amber-500" />;
    case "draft":
      return <Clock className="h-4 w-4 text-muted-foreground" />;
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "published":
      return <Badge variant="secondary" className="bg-green-100 text-green-700">Published</Badge>;
    case "scheduled":
      return <Badge variant="secondary" className="bg-amber-100 text-amber-700">Scheduled</Badge>;
    case "draft":
      return <Badge variant="secondary">Draft</Badge>;
    default:
      return null;
  }
};

export default function ClientPosts() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = mockPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            My Posts
          </h2>
          <p className="text-muted-foreground mt-1">
            Create and manage your content posts.
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Posts List */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display flex items-center gap-2">
            <FileText className="h-5 w-5" />
            All Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="py-4 flex items-center justify-between gap-4 hover:bg-muted/50 -mx-4 px-4 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {getStatusIcon(post.status)}
                  <div className="min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {post.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.platform} • {post.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(post.status)}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No posts found. Create your first post!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
