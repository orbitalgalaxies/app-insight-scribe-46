import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, Eye } from "lucide-react";

interface ReportData {
  id: string;
  title: string;
  period: string;
  status: 'completed' | 'generating' | 'scheduled';
  overallScore: number;
  metrics: {
    performance: number;
    reliability: number;
    security: number;
    accessibility: number;
  };
  issues: number;
  improvements: number;
  generatedAt?: Date;
}

interface ReportSummaryProps {
  report: ReportData;
}

export const ReportSummary = ({ report }: ReportSummaryProps) => {
  const getStatusColor = () => {
    switch (report.status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'generating': return 'bg-warning text-warning-foreground';
      case 'scheduled': return 'bg-info text-info-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>{report.title}</span>
            </CardTitle>
            <CardDescription>{report.period}</CardDescription>
          </div>
          <Badge className={getStatusColor()}>
            {report.status.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor(report.overallScore)}`}>
              {report.overallScore}
            </div>
            <div className="text-xs text-muted-foreground">Overall Score</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor(report.metrics.performance)}`}>
              {report.metrics.performance}
            </div>
            <div className="text-xs text-muted-foreground">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-destructive">{report.issues}</div>
            <div className="text-xs text-muted-foreground">Issues Found</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-info">{report.improvements}</div>
            <div className="text-xs text-muted-foreground">Improvements</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Reliability</span>
            <span className={getScoreColor(report.metrics.reliability)}>{report.metrics.reliability}%</span>
          </div>
          <Progress value={report.metrics.reliability} className="h-2" />
          
          <div className="flex justify-between text-sm">
            <span>Security</span>
            <span className={getScoreColor(report.metrics.security)}>{report.metrics.security}%</span>
          </div>
          <Progress value={report.metrics.security} className="h-2" />
          
          <div className="flex justify-between text-sm">
            <span>Accessibility</span>
            <span className={getScoreColor(report.metrics.accessibility)}>{report.metrics.accessibility}%</span>
          </div>
          <Progress value={report.metrics.accessibility} className="h-2" />
        </div>

        {report.status === 'completed' && (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        )}

        {report.generatedAt && (
          <p className="text-xs text-muted-foreground">
            Generated on {report.generatedAt.toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
};