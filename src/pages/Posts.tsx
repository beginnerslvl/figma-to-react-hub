import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Copy, RefreshCw, Check, Sparkles, Trash2, CheckCircle } from "lucide-react";
import { apiFetch } from "@/lib/api";

interface Client {
  id: string;
  name: string;
}
interface Category {
  category_id: string;
  category_name: string;
}
interface Topic {
  topic_id: string;
  title: string;
}
interface Post {
  post_id: string;
  client_id: string;
  category_id: string;
  topics: string[];
  caption: string;
  hashtags: string;
  image_url: string;
  visual_style: string | null;
  finalized: string;
}

export default function Posts() {
  const { toast } = useToast();

  // Dropdown data
  const [clients, setClients] = useState<Client[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  // Selected values
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  // Post state
  const [isGenerating, setIsGenerating] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [caption, setCaption] = useState("");

  // Saved posts feed
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);

  // Fetch clients
  useEffect(() => {
    apiFetch("/clients/all-clients")
      .then((res) => res.json())
      .then((data) => data.clients && setClients(data.clients))
      .catch((err) => console.error("Failed to fetch clients:", err));
  }, []);

  // Fetch saved posts
  useEffect(() => {
    apiFetch("/posts/get-all-posts")
      .then((res) => res.json())
      .then((data) => data.posts && setSavedPosts(data.posts))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  // Fetch categories
  useEffect(() => {
    apiFetch("/get-all-categories")
      .then((res) => res.json())
      .then((data) => data.categories && setCategories(data.categories))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  // Fetch topics
  useEffect(() => {
    apiFetch("/get-all-topics")
      .then((res) => res.json())
      .then((data) => data.topics && setTopics(data.topics))
      .catch((err) => console.error("Failed to fetch topics:", err));
  }, []);

  // Generate Post
  const generatePost = async () => {
    if (!selectedClient || !selectedCategory || !selectedTopic || !selectedStyle) {
      toast({
        title: "Missing Information",
        description: "Please select all options before generating.",
        variant: "destructive",
      });
      return;
    }
    setIsGenerating(true);
    setPost(null);
    try {
      const response = await apiFetch("/posts/create", {
        method: "POST",
        body: JSON.stringify({
          client_id: selectedClient,
          category_id: selectedCategory,
          topics: [selectedTopic],
          number_of_posts: 1,
          visual_style: selectedStyle,
        }),
      });
      const data = await response.json();
      if (data.posts && data.posts.length > 0) {
        const newPost = data.posts[0];
        setPost(newPost);
        setCaption(newPost.caption + (newPost.hashtags ? `\n\n${newPost.hashtags}` : ""));
        // Refresh saved posts
        const postsResponse = await apiFetch("/posts/get-all-posts");
        const postsData = await postsResponse.json();
        if (postsData.posts) setSavedPosts(postsData.posts);
        toast({ title: "Post Generated", description: "Your post has been created successfully." });
      }
    } catch (err) {
      console.error("Failed to generate post:", err);
      toast({
        title: "Generation Failed",
        description: "Failed to generate post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Regenerate post
  const regeneratePost = async () => {
    if (!selectedClient || !selectedCategory || !selectedTopic || !selectedStyle) return;
    setIsGenerating(true);
    try {
      const response = await apiFetch("/posts/create", {
        method: "POST",
        body: JSON.stringify({
          client_id: selectedClient,
          category_id: selectedCategory,
          topics: [selectedTopic],
          number_of_posts: 1,
          visual_style: selectedStyle,
        }),
      });
      const data = await response.json();
      if (data.posts && data.posts.length > 0) {
        const newPost = data.posts[0];
        setPost(newPost);
        setCaption(newPost.caption + (newPost.hashtags ? `\n\n${newPost.hashtags}` : ""));
        const postsResponse = await apiFetch("/posts/get-all-posts");
        const postsData = await postsResponse.json();
        if (postsData.posts) setSavedPosts(postsData.posts);
      }
    } catch (err) {
      console.error("Failed to regenerate post:", err);
      toast({
        title: "Regeneration Failed",
        description: "Failed to regenerate post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Copy caption
  const copyCaption = () => {
    navigator.clipboard.writeText(caption);
    toast({ title: "Caption Copied", description: "Caption has been copied to clipboard." });
  };

  // Finalize post by ID
  const finalizePostById = async (postId: string, clientId: string) => {
    try {
      await apiFetch("/posts/finalize-post", {
        method: "POST",
        body: JSON.stringify({ client_id: clientId, post_ids: [postId] }),
      });
      // Update single generated post
      if (post && post.post_id === postId) setPost({ ...post, finalized: "True" });
      // Update savedPosts
      setSavedPosts((prev) => prev.map((p) => (p.post_id === postId ? { ...p, finalized: "True" } : p)));
      toast({ title: "Post Finalized", description: "Post finalized and sent for review." });
    } catch (err) {
      console.error("Failed to finalize post:", err);
      toast({
        title: "Finalization Failed",
        description: "Failed to finalize post. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Delete post by ID
  const deletePostById = async (postId: string) => {
    try {
      await apiFetch("/posts/remove", {
        method: "DELETE",
        body: JSON.stringify({ post_id: postId }),
      });
      // Remove from savedPosts
      setSavedPosts((prev) => prev.filter((p) => p.post_id !== postId));
      // Remove generated post if it matches
      if (post && post.post_id === postId) setPost(null);
      toast({ title: "Post Deleted", description: "Post has been removed." });
    } catch (err) {
      console.error("Failed to delete post:", err);
      toast({
        title: "Deletion Failed",
        description: "Failed to delete post. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-2xl sm:text-3xl font-bold">Generate Posts</h1>
      </div>

      {/* Top Bar with Dropdowns */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger>
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c.category_id} value={c.category_id}>
                    {c.category_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((t) => (
                  <SelectItem key={t.topic_id} value={t.topic_id}>
                    {t.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStyle} onValueChange={setSelectedStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Visual Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minimalist">Minimalist</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="playful">Playful</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={generatePost} disabled={isGenerating} className="w-full">
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Post */}
      {post && !isGenerating && (
        <Card
          className={`animate-fade-in transition-all duration-500 ${post.finalized === "True" ? "ring-2 ring-green-500/50 shadow-lg shadow-green-500/20" : ""}`}
        >
          <CardContent className="p-6 relative">
            {post.finalized === "True" && (
              <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2 animate-scale-in">
                <Check className="h-5 w-5" />
              </div>
            )}
            <img
              src={post.image_url}
              alt="Generated post"
              className="w-full aspect-square object-cover rounded-lg mb-4 animate-fade-in"
            />
            <Textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption will appear here..."
              className="min-h-[120px] mb-4 resize-none"
              disabled={post.finalized === "True"}
            />
            <div className="flex gap-2">
              <Button variant="outline" onClick={copyCaption} className="flex-1" disabled={post.finalized === "True"}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Caption
              </Button>
              <Button
                variant="outline"
                onClick={regeneratePost}
                className="flex-1"
                disabled={isGenerating || post.finalized === "True"}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isGenerating ? "animate-spin" : ""}`} />
                Regenerate
              </Button>
              <Button
                onClick={() => finalizePostById(post.post_id, post.client_id)}
                className="flex-1"
                disabled={post.finalized === "True"}
              >
                <Check className="h-4 w-4 mr-2" />
                Finalize Post
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Saved Posts */}
      {savedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Your Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {savedPosts.map((savedPost) => (
              <Card
                key={savedPost.post_id}
                className={`animate-fade-in transition-all duration-300 hover:shadow-lg relative ${savedPost.finalized === "True" ? "ring-2 ring-green-500/30" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={() => finalizePostById(savedPost.post_id, savedPost.client_id)}
                      disabled={savedPost.finalized === "True"}
                    >
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => deletePostById(savedPost.post_id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {savedPost.finalized === "True" && (
                    <div className="absolute top-3 left-3 z-10 animate-scale-in">
                      <div className="bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                        <Check className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={savedPost.image_url}
                      alt={`Post ${savedPost.post_id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground whitespace-pre-line line-clamp-4">{savedPost.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
