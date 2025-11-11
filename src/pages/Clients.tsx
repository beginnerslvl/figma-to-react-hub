import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Users, Mail, Phone, Globe, ExternalLink } from "lucide-react";

interface Client {
  id: string;
  name: string;
  focus: string;
  services: string;
  business_description: string;
  contact_info: string;
  website: string;
  number: string;
  mail: string;
}

const mockClients: Client[] = [
  {
    id: "CLT-20251109-170052",
    name: "Zuhd Dental",
    focus: "Cosmetic Dentistry",
    services: "Teeth Whitening, Veneers, Smile Design",
    business_description: "A luxury dental clinic specializing in advanced cosmetic and restorative treatments, blending aesthetics with comfort.",
    contact_info: "Zuhd Dental Care, Downtown, LA",
    website: "https://zuhddental.com",
    number: "+1 (872) 258-9898",
    mail: "care@zuhddental.com",
  },
  {
    id: "CLT-20251109-165951",
    name: "Sample Business",
    focus: "Digital Marketing",
    services: "SEO, Content Creation, Social Media Management",
    business_description: "A full-service digital marketing agency helping brands grow their online presence.",
    contact_info: "123 Marketing St, New York, NY",
    website: "https://example.com",
    number: "+1 (555) 123-4567",
    mail: "hello@example.com",
  },
];

export default function Clients() {
  const handleClientClick = (clientName: string) => {
    toast({
      title: "Coming Soon",
      description: `Full details for ${clientName} will be available soon!`,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Clients</h1>
              <p className="text-muted-foreground">Manage your business clients</p>
            </div>
          </div>
          <Button onClick={() => toast({ title: "Coming Soon", description: "Add new client functionality coming soon!" })}>
            Add New Client
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockClients.map((client) => (
          <Card 
            key={client.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleClientClick(client.name)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{client.name}</CardTitle>
                  <CardDescription className="text-sm">ID: {client.id}</CardDescription>
                </div>
                <Badge variant="secondary">{client.focus}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Services</p>
                <p className="text-sm text-muted-foreground">{client.services}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1">Description</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{client.business_description}</p>
              </div>

              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground truncate">{client.mail}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{client.number}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href={client.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toast({ title: "Coming Soon", description: "Website link functionality coming soon!" });
                      e.preventDefault();
                    }}
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
