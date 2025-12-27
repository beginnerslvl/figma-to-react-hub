import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Link2, 
  Instagram, 
  Facebook, 
  Linkedin,
  Twitter,
  CheckCircle,
  XCircle
} from "lucide-react";

const socialAccounts = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    connected: true, 
    handle: "@yourbrand",
    color: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    connected: true, 
    handle: "Your Brand",
    color: "bg-blue-600"
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    connected: false, 
    handle: null,
    color: "bg-blue-700"
  },
  { 
    name: "X (Twitter)", 
    icon: Twitter, 
    connected: false, 
    handle: null,
    color: "bg-black"
  },
];

export default function ClientSettings() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">
          Settings
        </h2>
        <p className="text-muted-foreground mt-1">
          Manage your account and connected platforms.
        </p>
      </div>

      {/* Connected Accounts */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display flex items-center gap-2">
            <Link2 className="h-5 w-5" />
            Connected Accounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {socialAccounts.map((account) => (
              <div
                key={account.name}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${account.color} text-white`}>
                    <account.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{account.name}</p>
                    {account.connected ? (
                      <p className="text-sm text-muted-foreground">{account.handle}</p>
                    ) : (
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {account.connected ? (
                    <>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                      <Button variant="outline" size="sm">
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <>
                      <Badge variant="secondary" className="text-muted-foreground">
                        <XCircle className="h-3 w-3 mr-1" />
                        Not Connected
                      </Badge>
                      <Button size="sm">
                        Connect
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive updates about your posts and analytics
              </p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium text-foreground">Change Password</p>
              <p className="text-sm text-muted-foreground">
                Update your account password
              </p>
            </div>
            <Button variant="outline" size="sm">
              Update
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20">
            <div>
              <p className="font-medium text-destructive">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
