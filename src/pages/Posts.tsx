import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Copy, RefreshCw, Check, Sparkles, Trash2, CheckCircle } from "lucide-react";

interface Client {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface Topic {
  id: string;
  name: string;
}

interface Post {
  image: string;
  caption: string;
  isFinalized: boolean;
}

interface SavedPost {
  post_id: string;
  caption: string;
  image_url: string;
  isFinalized: boolean;
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
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [caption, setCaption] = useState("");
  
  // Saved posts feed
  const [savedPosts, setSavedPosts] = useState<SavedPost[]>([
    {
      post_id: "POST-20251104-01",
      caption: "Transform your smile with precision and confidence ✨\n\n#DentalCare #SmileTransformation #HealthySmile",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXvyEn3bYGdR9opBEj19y5Ro9VrOzM6gXwQ&s",
      isFinalized: false,
    },
    {
      post_id: "POST-20251104-02",
      caption: "Your journey to a confident smile starts here 🦷\n\n#DentalExcellence #ConfidentSmile #DentalHealth",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXvyEn3bYGdR9opBEj19y5Ro9VrOzM6gXwQ&s",
      isFinalized: true,
    },
    {
      post_id: "POST-20251104-03",
      caption: "Experience the difference that expertise makes 💎\n\n#ProfessionalCare #DentalExperts #SmileMakeover",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXvyEn3bYGdR9opBEj19y5Ro9VrOzM6gXwQ&s",
      isFinalized: false,
    },
  ]);

  // Fetch clients
  useEffect(() => {
    fetch("https://5d3221f9a372.ngrok-free.app/all-clients")
      .then(res => res.json())
      .then(data => {
        if (data.clients) {
          setClients(data.clients);
        }
      })
      .catch(err => console.error("Failed to fetch clients:", err));
  }, []);

  // Fetch categories
  useEffect(() => {
    fetch("https://1c582916dab5.ngrok-free.app/get-all-categories")
      .then(res => res.json())
      .then(data => {
        if (data.categories) {
          setCategories(data.categories);
        }
      })
      .catch(err => console.error("Failed to fetch categories:", err));
  }, []);

  // Fetch topics
  useEffect(() => {
    fetch("https://1c582916dab5.ngrok-free.app/get-all-topics")
      .then(res => res.json())
      .then(data => {
        if (data.topics) {
          setTopics(data.topics);
        }
      })
      .catch(err => console.error("Failed to fetch topics:", err));
  }, []);

  const generatePost = () => {
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

    // Simulate API call
    setTimeout(() => {
      const newPost = {
        image: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=600&h=600&fit=crop",
        caption: "Transform your smile with our state-of-the-art dental care. ✨\n\nExperience the difference that expertise and compassion make. Book your consultation today!\n\n#DentalCare #SmileTransformation #HealthySmile",
        isFinalized: false,
      };
      setPost(newPost);
      setCaption(newPost.caption);
      setIsGenerating(false);
    }, 2000);
  };

  const regeneratePost = () => {
    setIsRegenerating(true);

    setTimeout(() => {
      const newPost = {
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=600&fit=crop",
        caption: "Your journey to a confident smile starts here. 🦷\n\nDiscover personalized dental solutions tailored just for you. Let's create something beautiful together!\n\n#DentalExcellence #ConfidentSmile #DentalHealth",
        isFinalized: false,
      };
      setPost(newPost);
      setCaption(newPost.caption);
      setIsRegenerating(false);
    }, 1500);
  };

  const copyCaption = () => {
    navigator.clipboard.writeText(caption);
    toast({
      title: "Caption Copied",
      description: "Caption has been copied to clipboard.",
    });
  };

  const finalizePost = () => {
    if (post) {
      setPost({ ...post, isFinalized: true });
      toast({
        title: "Post Finalized",
        description: "Post finalized and sent for review.",
      });
    }
  };

  const finalizeSavedPost = (postId: string) => {
    setSavedPosts(savedPosts.map(p => 
      p.post_id === postId ? { ...p, isFinalized: true } : p
    ));
    toast({
      title: "Post Finalized",
      description: "Post finalized and sent for review.",
    });
  };

  const deleteSavedPost = (postId: string) => {
    setSavedPosts(savedPosts.filter(p => p.post_id !== postId));
    toast({
      title: "Post Deleted",
      description: "Post has been removed.",
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Generate Posts</h1>
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
                {clients.map((client) => (
                  <SelectItem key={client.id} value={client.id}>
                    {client.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic.id} value={topic.id}>
                    {topic.name}
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

            <Button 
              onClick={generatePost} 
              disabled={isGenerating}
              className="w-full"
            >
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Post Feed Area */}
      <div className="space-y-6">
        {isGenerating && (
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <Skeleton className="w-full aspect-square mb-4" />
              <Skeleton className="h-32 w-full mb-4" />
              <div className="flex gap-2">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
              </div>
            </CardContent>
          </Card>
        )}

        {post && !isGenerating && (
          <Card 
            className={`animate-fade-in transition-all duration-500 ${
              post.isFinalized ? "ring-2 ring-green-500/50 shadow-lg shadow-green-500/20" : ""
            }`}
          >
            <CardContent className="p-6 relative">
              {post.isFinalized && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2 animate-scale-in">
                  <Check className="h-5 w-5" />
                </div>
              )}

              {isRegenerating ? (
                <Skeleton className="w-full aspect-square mb-4" />
              ) : (
                <img
                  src={post.image}
                  alt="Generated post"
                  className="w-full aspect-square object-cover rounded-lg mb-4 animate-fade-in"
                />
              )}

              <Textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Caption will appear here..."
                className="min-h-[120px] mb-4 resize-none"
                disabled={post.isFinalized}
              />

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={copyCaption}
                  className="flex-1"
                  disabled={post.isFinalized}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Caption
                </Button>

                <Button
                  variant="outline"
                  onClick={regeneratePost}
                  className="flex-1"
                  disabled={isRegenerating || post.isFinalized}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRegenerating ? "animate-spin" : ""}`} />
                  Regenerate
                </Button>

                <Button
                  onClick={finalizePost}
                  className="flex-1"
                  disabled={post.isFinalized}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Finalize Post
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {!post && !isGenerating && (
          <Card className="border-dashed">
            <CardContent className="p-12 text-center text-muted-foreground">
              <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Select options above and click Generate to create a post</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Saved Posts Feed */}
      {savedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Your Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedPosts.map((savedPost) => (
              <Card 
                key={savedPost.post_id}
                className={`animate-fade-in transition-all duration-300 hover:shadow-lg relative ${
                  savedPost.isFinalized ? "ring-2 ring-green-500/30" : ""
                }`}
              >
                <CardContent className="p-0">
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={() => finalizeSavedPost(savedPost.post_id)}
                      disabled={savedPost.isFinalized}
                    >
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => deleteSavedPost(savedPost.post_id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Finalized Badge */}
                  {savedPost.isFinalized && (
                    <div className="absolute top-3 left-3 z-10 animate-scale-in">
                      <div className="bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                        <Check className="h-4 w-4" />
                      </div>
                    </div>
                  )}

                  {/* Post Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={savedPost.image_url}
                      alt={`Post ${savedPost.post_id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    <p className="text-sm text-foreground whitespace-pre-line line-clamp-4">
                      {savedPost.caption}
                    </p>
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
