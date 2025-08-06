import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";

interface StatusIndicatorProps {
  status: 'online' | 'warning' | 'offline' | 'pending';
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusIndicator = ({ status, label, size = 'md' }: StatusIndicatorProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'online':
        return {
          icon: CheckCircle,
          color: 'text-success',
          bgColor: 'bg-success/10',
          label: 'Online'
        };
      case 'warning':
        return {
          icon: AlertCircle,
          color: 'text-warning',
          bgColor: 'bg-warning/10',
          label: 'Warning'
        };
      case 'offline':
        return {
          icon: XCircle,
          color: 'text-destructive',
          bgColor: 'bg-destructive/10',
          label: 'Offline'
        };
      case 'pending':
        return {
          icon: Clock,
          color: 'text-info',
          bgColor: 'bg-info/10',
          label: 'Pending'
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'h-4 w-4';
      case 'lg': return 'h-6 w-6';
      default: return 'h-5 w-5';
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className="flex items-center space-x-2">
      <div className={`p-1 rounded-full ${config.bgColor}`}>
        <Icon className={`${getSizeClasses()} ${config.color}`} />
      </div>
      <span className="text-sm font-medium">{label}</span>
      <span className={`text-xs ${config.color}`}>({config.label})</span>
    </div>
  );
};