import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  unit?: string;
  status?: 'success' | 'warning' | 'error' | 'info';
  subtitle?: string;
}

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral',
  unit,
  status = 'info',
  subtitle 
}: MetricCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'error': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-info text-info-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (changeType) {
      case 'increase': return <TrendingUp className="h-4 w-4" />;
      case 'decrease': return <TrendingDown className="h-4 w-4" />;
      default: return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case 'increase': return 'text-success';
      case 'decrease': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Badge className={getStatusColor()}>
          {status.toUpperCase()}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}{unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
        {change !== undefined && (
          <div className={`flex items-center space-x-1 text-sm ${getTrendColor()}`}>
            {getTrendIcon()}
            <span>{Math.abs(change)}%</span>
            <span className="text-muted-foreground">from last period</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};