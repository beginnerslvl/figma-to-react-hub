import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

interface LogEntry {
  timestamp: string;
  type: "request" | "response" | "error";
  endpoint: string;
  method: string;
  data?: any;
  status?: number;
}

export default function ApiTest() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clientId, setClientId] = useState("");

  const addLog = (log: Omit<LogEntry, "timestamp">) => {
    setLogs(prev => [{
      ...log,
      timestamp: new Date().toLocaleTimeString()
    }, ...prev]);
  };

  const testCreateClient = async () => {
    setIsLoading(true);
    const testData = {
      client_name: "Test Client " + Date.now(),
      focus: "Test Focus",
      services: "Test Service 1, Test Service 2",
      business_description: "This is a test business description",
      audience: "Test audience aged 25-50",
      writing_instructions: "Test writing instructions",
      tagline: "@testclient",
      call_to_actions: ["Book Now", "Contact Us"],
      caption_ending: "✨ Test caption ending",
      writing_samples: [],
      contact_info: "Test Address, Test City",
      website: "https://test.com",
      number: "+1 (123) 456-7890",
      mail: "test@test.com",
      design_guide: {
        brand_colors: ["#000000", "#FFFFFF"],
        typography: "Test Font",
        design_style: "Modern, Clean",
        image_mood: "Professional",
        dos_donts: "Test guidelines",
        reference_links: [],
        asset_notes: "Test notes",
        format_preferences: ["1:1 square"],
        design_checkpoints: "Test checkpoints"
      },
      logo_urls: []
    };

    addLog({
      type: "request",
      endpoint: "/create",
      method: "POST",
      data: testData
    });

    try {
      const response = await fetch("https://5d3221f9a372.ngrok-free.app/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });

      const data = await response.json();
      
      addLog({
        type: "response",
        endpoint: "/create",
        method: "POST",
        data,
        status: response.status
      });

      if (data.client_id) {
        setClientId(data.client_id);
      }
    } catch (error: any) {
      addLog({
        type: "error",
        endpoint: "/create",
        method: "POST",
        data: { error: error.message }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testGetAllClients = async () => {
    setIsLoading(true);
    addLog({
      type: "request",
      endpoint: "/all-clients",
      method: "GET"
    });

    try {
      const response = await fetch("https://5d3221f9a372.ngrok-free.app/all-clients");
      const data = await response.json();
      
      addLog({
        type: "response",
        endpoint: "/all-clients",
        method: "GET",
        data,
        status: response.status
      });
    } catch (error: any) {
      addLog({
        type: "error",
        endpoint: "/all-clients",
        method: "GET",
        data: { error: error.message }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testDeleteClient = async () => {
    if (!clientId.trim()) {
      addLog({
        type: "error",
        endpoint: "/remove",
        method: "DELETE",
        data: { error: "Please enter a client ID" }
      });
      return;
    }

    setIsLoading(true);
    const url = `https://5d3221f9a372.ngrok-free.app/remove?client_id=${clientId}&delete_all_data=true`;
    
    addLog({
      type: "request",
      endpoint: "/remove",
      method: "DELETE",
      data: { client_id: clientId, delete_all_data: true }
    });

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      const data = await response.json();
      
      addLog({
        type: "response",
        endpoint: "/remove",
        method: "DELETE",
        data,
        status: response.status
      });
    } catch (error: any) {
      addLog({
        type: "error",
        endpoint: "/remove",
        method: "DELETE",
        data: { error: error.message }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearLogs = () => setLogs([]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">API Testing Dashboard</h1>
          <p className="text-muted-foreground mt-2">Test all endpoints and view request/response logs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Client</CardTitle>
              <CardDescription>POST /create</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={testCreateClient} 
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Test Create"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get All Clients</CardTitle>
              <CardDescription>GET /all-clients</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={testGetAllClients} 
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Test Get All"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delete Client</CardTitle>
              <CardDescription>DELETE /remove</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="clientId">Client ID</Label>
                <Input
                  id="clientId"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="CLT-20251112-155300"
                />
              </div>
              <Button 
                onClick={testDeleteClient} 
                disabled={isLoading}
                variant="destructive"
                className="w-full"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Test Delete"}
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Request/Response Logs</CardTitle>
              <CardDescription>Real-time API call logs</CardDescription>
            </div>
            <Button onClick={clearLogs} variant="outline" size="sm">
              Clear Logs
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No logs yet. Test an endpoint to see logs.</p>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          log.type === "error" ? "destructive" : 
                          log.type === "request" ? "secondary" : 
                          "default"
                        }>
                          {log.type.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{log.method}</Badge>
                        <span className="text-sm font-mono text-muted-foreground">{log.endpoint}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                    </div>
                    {log.status && (
                      <div>
                        <span className="text-sm font-medium">Status: </span>
                        <span className={`text-sm ${log.status >= 200 && log.status < 300 ? 'text-green-600' : 'text-red-600'}`}>
                          {log.status}
                        </span>
                      </div>
                    )}
                    {log.data && (
                      <div>
                        <Label className="text-xs">Data:</Label>
                        <Textarea
                          value={JSON.stringify(log.data, null, 2)}
                          readOnly
                          className="font-mono text-xs mt-1"
                          rows={8}
                        />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
