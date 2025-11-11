import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Briefcase } from "lucide-react";

export default function CreateBusiness() {
  const [formData, setFormData] = useState({
    client_name: "",
    focus: "",
    services: "",
    business_description: "",
    audience: "",
    writing_instructions: "",
    tagline: "",
    call_to_actions: "",
    caption_ending: "",
    writing_samples: "",
    contact_info: "",
    website: "",
    number: "",
    mail: "",
    brand_colors: "",
    typography: "",
    design_style: "",
    image_mood: "",
    dos_donts: "",
    reference_links: "",
    asset_notes: "",
    format_preferences: "",
    design_checkpoints: "",
    logo_urls: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: "Business creation functionality will be available soon!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Create New Business</h1>
        </div>
        <p className="text-muted-foreground">Fill in the details to create a new business profile</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Core details about the business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="client_name">Client Name *</Label>
                  <Input
                    id="client_name"
                    name="client_name"
                    placeholder="e.g., Zuhd Dental"
                    value={formData.client_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="focus">Focus *</Label>
                  <Input
                    id="focus"
                    name="focus"
                    placeholder="e.g., Cosmetic Dentistry"
                    value={formData.focus}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="services">Services *</Label>
                  <Textarea
                    id="services"
                    name="services"
                    placeholder="e.g., Teeth Whitening, Veneers, Smile Design"
                    value={formData.services}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business_description">Business Description *</Label>
                  <Textarea
                    id="business_description"
                    name="business_description"
                    placeholder="Describe the business..."
                    value={formData.business_description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience *</Label>
                  <Textarea
                    id="audience"
                    name="audience"
                    placeholder="e.g., High-income professionals aged 25–50"
                    value={formData.audience}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="writing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Writing Guidelines</CardTitle>
                <CardDescription>Content and tone specifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="writing_instructions">Writing Instructions *</Label>
                  <Textarea
                    id="writing_instructions"
                    name="writing_instructions"
                    placeholder="e.g., Use a luxury and clean tone"
                    value={formData.writing_instructions}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline *</Label>
                  <Input
                    id="tagline"
                    name="tagline"
                    placeholder="e.g., @zuhddental"
                    value={formData.tagline}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="call_to_actions">Call to Actions (comma-separated) *</Label>
                  <Input
                    id="call_to_actions"
                    name="call_to_actions"
                    placeholder="e.g., Book Now, Get a Consultation"
                    value={formData.call_to_actions}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caption_ending">Caption Ending *</Label>
                  <Input
                    id="caption_ending"
                    name="caption_ending"
                    placeholder="e.g., ✨ Experience refined dental artistry."
                    value={formData.caption_ending}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="writing_samples">Writing Samples (one per line) *</Label>
                  <Textarea
                    id="writing_samples"
                    name="writing_samples"
                    placeholder="https://example.com/sample1"
                    value={formData.writing_samples}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>How to reach the business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact_info">Contact Info *</Label>
                  <Input
                    id="contact_info"
                    name="contact_info"
                    placeholder="e.g., Zuhd Dental Care, Downtown, LA"
                    value={formData.contact_info}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website *</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number">Phone Number *</Label>
                  <Input
                    id="number"
                    name="number"
                    type="tel"
                    placeholder="+1 (872) 258-9898"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mail">Email *</Label>
                  <Input
                    id="mail"
                    name="mail"
                    type="email"
                    placeholder="care@example.com"
                    value={formData.mail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Design Guide</CardTitle>
                <CardDescription>Visual identity and brand guidelines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brand_colors">Brand Colors (comma-separated hex codes) *</Label>
                  <Input
                    id="brand_colors"
                    name="brand_colors"
                    placeholder="e.g., #E9E6DF, #7DA89A, #1C1C1C"
                    value={formData.brand_colors}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="typography">Typography *</Label>
                  <Input
                    id="typography"
                    name="typography"
                    placeholder="e.g., Sans-serif (Lato / Playfair Display)"
                    value={formData.typography}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="design_style">Design Style *</Label>
                  <Input
                    id="design_style"
                    name="design_style"
                    placeholder="e.g., Luxury, Minimalist, Clean"
                    value={formData.design_style}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image_mood">Image Mood *</Label>
                  <Textarea
                    id="image_mood"
                    name="image_mood"
                    placeholder="e.g., Bright, airy, elegant, with warm tones"
                    value={formData.image_mood}
                    onChange={handleChange}
                    rows={2}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dos_donts">Do's and Don'ts *</Label>
                  <Textarea
                    id="dos_donts"
                    name="dos_donts"
                    placeholder="e.g., Avoid clutter and overly smiling stock faces"
                    value={formData.dos_donts}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="design_checkpoints">Design Checkpoints *</Label>
                  <Input
                    id="design_checkpoints"
                    name="design_checkpoints"
                    placeholder="e.g., Spacing, shadows, tone, typography alignment"
                    value={formData.design_checkpoints}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assets" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Assets & References</CardTitle>
                <CardDescription>Logos, references, and format preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo_urls">Logo URLs (one per line) *</Label>
                  <Textarea
                    id="logo_urls"
                    name="logo_urls"
                    placeholder="https://imgbb.com/logo.png"
                    value={formData.logo_urls}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reference_links">Reference Links (one per line) *</Label>
                  <Textarea
                    id="reference_links"
                    name="reference_links"
                    placeholder="https://example.com/reference"
                    value={formData.reference_links}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="asset_notes">Asset Notes *</Label>
                  <Textarea
                    id="asset_notes"
                    name="asset_notes"
                    placeholder="e.g., Use porcelain or natural textures"
                    value={formData.asset_notes}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format_preferences">Format Preferences (comma-separated) *</Label>
                  <Input
                    id="format_preferences"
                    name="format_preferences"
                    placeholder="e.g., 1:1 square, 1080x1080"
                    value={formData.format_preferences}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => toast({ title: "Coming Soon", description: "Cancel functionality coming soon!" })}>
            Cancel
          </Button>
          <Button type="submit">Create Business</Button>
        </div>
      </form>
    </div>
  );
}
