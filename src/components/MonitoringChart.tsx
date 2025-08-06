import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ChartDataPoint {
  timestamp: string;
  value: number;
  label?: string;
}

interface MonitoringChartProps {
  title: string;
  description?: string;
  data: ChartDataPoint[];
  type?: 'line' | 'area';
  color?: string;
  height?: number;
}

export const MonitoringChart = ({ 
  title, 
  description, 
  data, 
  type = 'line',
  color = 'hsl(var(--primary))',
  height = 300 
}: MonitoringChartProps) => {
  const Chart = type === 'area' ? AreaChart : LineChart;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <Chart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="timestamp" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                color: 'hsl(var(--popover-foreground))'
              }}
            />
            {type === 'area' ? (
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fill={color}
                fillOpacity={0.3}
                strokeWidth={2}
              />
            ) : (
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: color }}
              />
            )}
          </Chart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};