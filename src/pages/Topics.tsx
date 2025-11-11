import { useState } from "react";
import { Plus, Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

// Mock data
const mockClients = [
  { id: "CLT-001", name: "Zuhd Dental" },
  { id: "CLT-002", name: "Tech Startup Co" },
];

const mockCategories = [
  { id: "CAT-001", name: "Dental & Aesthetic Care", clientId: "CLT-001" },
  { id: "CAT-002", name: "Product Launch", clientId: "CLT-002" },
];

const mockTopics = [
  {
    id: "TOP-001",
    categoryId: "CAT-001",
    title: "Benefits of Modern Cosmetic Dentistry",
    description: "Highlight how modern techniques enhance natural smiles and confidence.",
  },
  {
    id: "TOP-002",
    categoryId: "CAT-001",
    title: "Teeth Whitening: What to Expect",
    description: "A detailed guide on professional teeth whitening procedures.",
  },
  {
    id: "TOP-003",
    categoryId: "CAT-002",
    title: "New Product Features",
    description: "Showcase the latest features in our product lineup.",
  },
];

export default function Topics() {
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newTopic, setNewTopic] = useState({
    title: "",
    description: "",
  });

  const filteredCategories = mockCategories.filter(
    (cat) => cat.clientId === selectedClient
  );

  const filteredTopics = selectedCategory
    ? mockTopics.filter((topic) => topic.categoryId === selectedCategory)
    : [];

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      toast({
        title: "Category Created",
        description: `"${newCategoryName}" has been added successfully.`,
      });
      setNewCategoryName("");
      setIsAddCategoryOpen(false);
    }
  };

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopic.title.trim() && newTopic.description.trim()) {
      toast({
        title: "Topic Created",
        description: `"${newTopic.title}" has been added successfully.`,
      });
      setNewTopic({ title: "", description: "" });
      setIsAddTopicOpen(false);
    }
  };

  const handleDeleteTopic = (topicId: string, title: string) => {
    toast({
      title: "Topic Removed",
      description: `"${title}" has been deleted.`,
    });
  };

  const handleTopicClick = (topic: typeof mockTopics[0]) => {
    toast({
      title: "Opening Posts",
      description: `Loading posts for "${topic.title}"...`,
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Topics</h1>
        <p className="text-muted-foreground mt-1">
          Manage content topics and categories for your clients
        </p>
      </div>

      {/* Top Panel */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4 items-end">
            {/* Select Client */}
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="client-select">Select Client</Label>
              <Select value={selectedClient} onValueChange={setSelectedClient}>
                <SelectTrigger id="client-select">
                  <SelectValue placeholder="Choose a client..." />
                </SelectTrigger>
                <SelectContent>
                  {mockClients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Select Category - Only shown after client selection */}
            {selectedClient && (
              <>
                <div className="flex-1 min-w-[200px]">
                  <Label htmlFor="category-select">Select Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category-select">
                      <SelectValue placeholder="Choose a category..." />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Add Category */}
                {isAddCategoryOpen ? (
                  <div className="flex gap-2 items-end">
                    <div>
                      <Label htmlFor="new-category">New Category</Label>
                      <Input
                        id="new-category"
                        placeholder="Category name..."
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleAddCategory();
                          if (e.key === "Escape") setIsAddCategoryOpen(false);
                        }}
                      />
                    </div>
                    <Button onClick={handleAddCategory} size="sm">
                      Save
                    </Button>
                    <Button
                      onClick={() => setIsAddCategoryOpen(false)}
                      variant="ghost"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => setIsAddCategoryOpen(true)}
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                )}

                {/* Add Topic */}
                <Dialog open={isAddTopicOpen} onOpenChange={setIsAddTopicOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Topic
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form onSubmit={handleAddTopic}>
                      <DialogHeader>
                        <DialogTitle>Add New Topic</DialogTitle>
                        <DialogDescription>
                          Create a new content topic for your selected category
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="topic-title">Title *</Label>
                          <Input
                            id="topic-title"
                            placeholder="Enter topic title..."
                            value={newTopic.title}
                            onChange={(e) =>
                              setNewTopic({ ...newTopic, title: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="topic-description">Description *</Label>
                          <Textarea
                            id="topic-description"
                            placeholder="Describe the topic..."
                            value={newTopic.description}
                            onChange={(e) =>
                              setNewTopic({ ...newTopic, description: e.target.value })
                            }
                            required
                          />
                        </div>
                        {selectedCategory && (
                          <div className="text-sm text-muted-foreground">
                            Category:{" "}
                            <span className="font-medium">
                              {filteredCategories.find((c) => c.id === selectedCategory)?.name}
                            </span>
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save Topic</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Topics Grid */}
      {selectedClient && selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map((topic) => (
            <Card
              key={topic.id}
              className="group cursor-pointer hover:shadow-lg transition-all relative"
              onClick={() => handleTopicClick(topic)}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTopic(topic.id, topic.title);
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" />
                  <span>
                    {filteredCategories.find((c) => c.id === topic.categoryId)?.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add Topic Card */}
          <Card
            className="border-dashed cursor-pointer hover:border-primary hover:bg-accent/50 transition-all flex items-center justify-center min-h-[200px]"
            onClick={() => setIsAddTopicOpen(true)}
          >
            <CardContent className="text-center py-8">
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium">Add New Topic</p>
                <p className="text-sm text-muted-foreground">Create a content topic</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Empty State */}
      {!selectedClient && (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Select a client to get started</p>
          </CardContent>
        </Card>
      )}

      {selectedClient && !selectedCategory && (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              Select or create a category to view topics
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
