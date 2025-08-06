import { MetricCard } from "@/components/MetricCard";
import { MonitoringChart } from "@/components/MonitoringChart";
import { StatusIndicator } from "@/components/StatusIndicator";
import { ReportSummary } from "@/components/ReportSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Activity, Eye, FileText, Settings, Zap, Shield, Globe } from "lucide-react";

// Mock data for demonstration
const performanceData = [
  { timestamp: '00:00', value: 850 },
  { timestamp: '04:00', value: 920 },
  { timestamp: '08:00', value: 1200 },
  { timestamp: '12:00', value: 1450 },
  { timestamp: '16:00', value: 1380 },
  { timestamp: '20:00', value: 1100 },
  { timestamp: '24:00', value: 950 },
];

const errorRateData = [
  { timestamp: '00:00', value: 0.2 },
  { timestamp: '04:00', value: 0.1 },
  { timestamp: '08:00', value: 0.8 },
  { timestamp: '12:00', value: 1.2 },
  { timestamp: '16:00', value: 0.6 },
  { timestamp: '20:00', value: 0.3 },
  { timestamp: '24:00', value: 0.2 },
];

const mockReport = {
  id: '1',
  title: '7-Day Performance Analysis',
  period: 'Dec 25, 2024 - Jan 1, 2025',
  status: 'completed' as const,
  overallScore: 87,
  metrics: {
    performance: 92,
    reliability: 88,
    security: 85,
    accessibility: 84,
  },
  issues: 3,
  improvements: 12,
  generatedAt: new Date('2025-01-01'),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Observer
              </h1>
              <Badge variant="secondary">v1.0</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <StatusIndicator status="online" label="System Status" />
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Performance</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Reports</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Overview Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Response Time"
                value={245}
                unit="ms"
                change={-12}
                changeType="decrease"
                status="success"
                subtitle="Average response time"
              />
              <MetricCard
                title="Uptime"
                value="99.9"
                unit="%"
                change={0.1}
                changeType="increase"
                status="success"
                subtitle="Last 24 hours"
              />
              <MetricCard
                title="Error Rate"
                value="0.3"
                unit="%"
                change={-15}
                changeType="decrease"
                status="success"
                subtitle="Errors per request"
              />
              <MetricCard
                title="Active Users"
                value="1,247"
                change={8}
                changeType="increase"
                status="info"
                subtitle="Currently online"
              />
            </div>

            {/* Charts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <MonitoringChart
                title="Response Time"
                description="Average response time over the last 24 hours"
                data={performanceData}
                type="area"
                color="hsl(var(--chart-1))"
              />
              <MonitoringChart
                title="Error Rate"
                description="Error percentage over time"
                data={errorRateData}
                type="line"
                color="hsl(var(--chart-5))"
              />
            </div>

            {/* Active Monitoring */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Active Monitoring</span>
                </CardTitle>
                <CardDescription>
                  Real-time status of monitored endpoints and services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <StatusIndicator status="online" label="Main API" />
                  <StatusIndicator status="online" label="Database" />
                  <StatusIndicator status="warning" label="Cache Service" />
                  <StatusIndicator status="online" label="CDN" />
                  <StatusIndicator status="offline" label="Analytics Service" />
                  <StatusIndicator status="pending" label="Backup System" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid gap-6">
              <MonitoringChart
                title="Performance Metrics"
                description="Comprehensive performance analysis over time"
                data={performanceData}
                type="area"
                height={400}
                color="hsl(var(--chart-2))"
              />
              <div className="grid gap-4 md:grid-cols-3">
                <MetricCard
                  title="Page Load Time"
                  value={1.2}
                  unit="s"
                  change={-8}
                  changeType="decrease"
                  status="success"
                />
                <MetricCard
                  title="Time to First Byte"
                  value={180}
                  unit="ms"
                  change={5}
                  changeType="increase"
                  status="warning"
                />
                <MetricCard
                  title="Core Web Vitals"
                  value={95}
                  unit="/100"
                  change={3}
                  changeType="increase"
                  status="success"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Security Score"
                value={92}
                unit="/100"
                status="success"
                subtitle="Overall security rating"
              />
              <MetricCard
                title="Vulnerabilities"
                value={2}
                status="warning"
                subtitle="Critical issues found"
              />
              <MetricCard
                title="SSL Rating"
                value="A+"
                status="success"
                subtitle="Certificate status"
              />
              <MetricCard
                title="Last Scan"
                value="2h ago"
                status="info"
                subtitle="Security audit"
              />
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid gap-6">
              <ReportSummary report={mockReport} />
              
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Reports</CardTitle>
                  <CardDescription>
                    Configure automatic report generation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button>
                      <FileText className="h-4 w-4 mr-2" />
                      Generate New Report
                    </Button>
                    <Button variant="outline">
                      Schedule Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;