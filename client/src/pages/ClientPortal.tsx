import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard, FileText, DollarSign, MessageSquare, Calendar,
  Download, Upload, TrendingUp, CheckCircle, Clock, AlertCircle,
  ArrowRight, FileCheck, Briefcase, Shield
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const mockProjects = [
  { name: "Lagos Luxury Homes", status: "In Progress", progress: 75, lastUpdate: "2 days ago" },
  { name: "PayFlow Dashboard", status: "Completed", progress: 100, lastUpdate: "1 week ago" },
  { name: "MedCare Portal", status: "Review", progress: 90, lastUpdate: "5 days ago" },
];

const mockInvoices = [
  { id: "INV-001", amount: "₦350,000", status: "Paid", date: "Jan 1, 2026" },
  { id: "INV-002", amount: "₦150,000", status: "Pending", date: "Feb 15, 2026" },
  { id: "INV-003", amount: "₦750,000", status: "Paid", date: "Mar 1, 2026" },
];

const mockTickets = [
  { id: "TKT-001", subject: "Update homepage hero section", status: "Resolved", priority: "Medium" },
  { id: "TKT-002", subject: "Add new blog post category", status: "In Progress", priority: "Low" },
  { id: "TKT-003", subject: "Fix contact form submission", status: "Open", priority: "High" },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Review: "bg-amber-100 text-amber-700",
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-amber-100 text-amber-700",
    Resolved: "bg-green-100 text-green-700",
    Open: "bg-red-100 text-red-700",
  };
  return (
    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${colors[status] || "bg-gray-100 text-gray-700"}`}>
      {status}
    </span>
  );
}

function PortalDashboard({ user }: { user: any }) {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Projects", value: "2", icon: Briefcase, color: "text-blue-600" },
          { label: "Pending Invoices", value: "1", icon: DollarSign, color: "text-amber-600" },
          { label: "Open Tickets", value: "1", icon: MessageSquare, color: "text-red-600" },
          { label: "Upcoming Meetings", value: "2", icon: Calendar, color: "text-green-600" },
        ].map((stat) => (
          <Card key={stat.label} className="glass-card border-0 p-5">
            <CardContent className="p-0 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="projects">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="mt-6">
          <div className="space-y-4">
            {mockProjects.map((project) => (
              <Card key={project.name} className="glass-card border-0 p-5">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-xs text-muted-foreground">Last updated: {project.lastUpdate}</p>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-brand-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{project.progress}% complete</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="mt-6">
          <div className="space-y-4">
            {mockInvoices.map((invoice) => (
              <Card key={invoice.id} className="glass-card border-0 p-5">
                <CardContent className="p-0 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{invoice.id}</p>
                    <p className="text-xs text-muted-foreground">{invoice.date}</p>
                  </div>
                  <p className="font-bold text-brand-secondary">{invoice.amount}</p>
                  <StatusBadge status={invoice.status} />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="mt-6">
          <div className="space-y-4">
            {mockTickets.map((ticket) => (
              <Card key={ticket.id} className="glass-card border-0 p-5">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{ticket.subject}</p>
                      <p className="text-xs text-muted-foreground">{ticket.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={ticket.status} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="files" className="mt-6">
          <div className="space-y-4">
            <Card className="glass-card border-0 p-6 text-center">
              <CardContent className="p-0">
                <Upload size={32} className="text-muted-foreground mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Upload Files</h4>
                <p className="text-sm text-muted-foreground mb-4">Upload documents, assets, or files for your project.</p>
                <Button variant="default">Choose Files</Button>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 p-5">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-brand-secondary" />
                    <div>
                      <p className="text-sm font-medium">Project Brief.pdf</p>
                      <p className="text-xs text-muted-foreground">2.4 MB</p>
                    </div>
                  </div>
                  <Download size={16} className="text-muted-foreground cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="mt-6">
          <div className="space-y-4">
            <Card className="glass-card border-0 p-6 text-center">
              <CardContent className="p-0">
                <Calendar size={32} className="text-muted-foreground mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Schedule a Meeting</h4>
                <p className="text-sm text-muted-foreground mb-4">Book a call with our team to discuss your project.</p>
                <Button variant="default">Schedule Meeting</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function ClientPortal() {
  const sectionRef = useScrollReveal();
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <div className="w-8 h-8 border-2 border-brand-secondary border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div ref={sectionRef}>
        <PageHeader
          title="Client Portal"
          description="Access your project dashboard, invoices, files, and support tickets in one secure place."
          breadcrumb={[{ label: "Client Portal", href: "/portal" }]}
        />
        <section className="py-20">
          <div className="container max-w-md">
            <Card className="glass-card border-0 p-10 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} className="text-brand-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Client Portal</h2>
                <p className="text-muted-foreground mb-8">
                  Sign in to access your project dashboard, invoices, files, support tickets, and meeting scheduler.
                </p>
                <Button onClick={() => startLogin()} className="w-full" size="lg">
                  Sign In to Portal
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Don't have an account? Contact us to get access.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Client Portal"
        description={`Welcome back, ${user.name || "Client"}! Manage your projects, invoices, and support from one place.`}
        breadcrumb={[{ label: "Portal", href: "/portal" }]}
      />
      <section className="py-12">
        <div className="container max-w-5xl">
          <PortalDashboard user={user} />
        </div>
      </section>
    </div>
  );
}
