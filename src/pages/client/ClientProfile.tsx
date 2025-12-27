import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Palette, 
  MessageSquare, 
  Phone, 
  Share2,
  Save
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function ClientProfile() {
  const [brandColors, setBrandColors] = useState({
    primary: "#3B82F6",
    secondary: "#8B5CF6",
    accent: "#10B981",
    background: "#FFFFFF",
  });

  const handleSave = () => {
    toast({
      title: "Profile Saved",
      description: "Your profile settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            Profile Settings
          </h2>
          <p className="text-muted-foreground mt-1">
            Customize your brand identity and preferences.
          </p>
        </div>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="branding" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="branding" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Branding</span>
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Voice & Tone</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Social Media</span>
          </TabsTrigger>
        </TabsList>

        {/* Branding Tab */}
        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Brand Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(brandColors).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label className="capitalize">{key} Color</Label>
                    <div className="flex gap-2">
                      <div
                        className="w-10 h-10 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: value }}
                      />
                      <Input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          setBrandColors((prev) => ({ ...prev, [key]: e.target.value }))
                        }
                        className="flex-1"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label>Logo URL</Label>
                <Input placeholder="https://example.com/logo.png" />
              </div>

              <div className="space-y-2">
                <Label>Brand Name</Label>
                <Input placeholder="Your Brand Name" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Voice & Tone Tab */}
        <TabsContent value="voice">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Voice & Tone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Brand Voice Description</Label>
                <Textarea
                  placeholder="Describe your brand's voice and tone. E.g., Professional yet friendly, innovative and forward-thinking..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Target Audience</Label>
                <Textarea
                  placeholder="Describe your target audience. E.g., Young professionals aged 25-40 interested in technology..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Key Messages</Label>
                <Textarea
                  placeholder="List your key brand messages or value propositions..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="contact@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Website</Label>
                <Input type="url" placeholder="https://www.example.com" />
              </div>

              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea placeholder="Enter your business address..." rows={2} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Social Media Tab */}
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Social Media Handles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Instagram</Label>
                <Input placeholder="@yourbrand" />
              </div>
              <div className="space-y-2">
                <Label>Facebook</Label>
                <Input placeholder="facebook.com/yourbrand" />
              </div>
              <div className="space-y-2">
                <Label>LinkedIn</Label>
                <Input placeholder="linkedin.com/company/yourbrand" />
              </div>
              <div className="space-y-2">
                <Label>X (Twitter)</Label>
                <Input placeholder="@yourbrand" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
