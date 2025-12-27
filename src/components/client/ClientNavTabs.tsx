import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Image, 
  User, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Posts", path: "/posts", icon: FileText },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Images", path: "/images", icon: Image },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

export function ClientNavTabs() {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                )}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
