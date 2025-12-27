import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

// Admin Pages
import Index from "./pages/Index";
import Posts from "./pages/Posts";
import CreateBusiness from "./pages/CreateBusiness";
import Clients from "./pages/Clients";
import Topics from "./pages/Topics";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import NotFound from "./pages/NotFound";

// Client Pages
import ClientLogin from "./pages/client/ClientLogin";
import ClientDashboard from "./pages/client/ClientDashboard";
import ClientPosts from "./pages/client/ClientPosts";
import ClientAnalytics from "./pages/client/ClientAnalytics";
import ClientImages from "./pages/client/ClientImages";
import ClientProfile from "./pages/client/ClientProfile";
import ClientSettings from "./pages/client/ClientSettings";
import { ClientLayout } from "./components/client/ClientLayout";

const queryClient = new QueryClient();

// Admin Layout Component
const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 overflow-x-hidden">
        <header className="sticky top-0 z-10 flex h-12 sm:h-14 items-center border-b bg-background px-3 sm:px-4">
          <SidebarTrigger />
        </header>
        {children}
      </main>
    </div>
  </SidebarProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Client Routes (Root) */}
          <Route path="/" element={<ClientLogin />} />
          <Route element={<ClientLayout />}>
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/posts" element={<ClientPosts />} />
            <Route path="/analytics" element={<ClientAnalytics />} />
            <Route path="/images" element={<ClientImages />} />
            <Route path="/profile" element={<ClientProfile />} />
            <Route path="/settings" element={<ClientSettings />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminLayout>
                <Index />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/posts"
            element={
              <AdminLayout>
                <Posts />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/topics"
            element={
              <AdminLayout>
                <Topics />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/clients"
            element={
              <AdminLayout>
                <Clients />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/calendar"
            element={
              <AdminLayout>
                <Calendar />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <AdminLayout>
                <Analytics />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/create-business"
            element={
              <AdminLayout>
                <CreateBusiness />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/connect-social"
            element={
              <AdminLayout>
                <Index />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/help"
            element={
              <AdminLayout>
                <Index />
              </AdminLayout>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
