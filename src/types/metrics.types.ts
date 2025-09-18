export interface MetricsTimeRange {
  label: string;
  value: 'week' | 'month' | 'quarter' | 'year';
  days: number;
}

export interface RegionalFilter {
  label: string;
  code: string;
  flag: string;
}

export interface MetricsKPI {
  id: string;
  title: string;
  value: number | string;
  previousValue?: number | string;
  unit?: string;
  trend: 'up' | 'down' | 'stable';
  changePercentage?: number;
  description: string;
  icon: string;
  category: 'seo' | 'reputation' | 'business' | 'ai_search';
  metabaseQuery?: string;
  targetValue?: number;
  status: 'good' | 'warning' | 'critical';
}

export interface MetricsVisualization {
  id: string;
  type: 'line' | 'bar' | 'pie' | 'gauge' | 'heatmap';
  title: string;
  data: any[];
  metabaseQuery?: string;
  config: {
    xAxis?: string;
    yAxis?: string;
    colors?: string[];
    showLegend?: boolean;
    showGrid?: boolean;
  };
}

export interface MetabaseConnection {
  baseUrl: string;
  apiKey?: string;
  isConnected: boolean;
  lastSync?: Date;
}

export interface ExecutiveDashboardState {
  timeRange: MetricsTimeRange;
  selectedRegions: RegionalFilter[];
  viewMode: 'overview' | 'detailed' | 'executive';
  metabaseConnection: MetabaseConnection;
  kpis: MetricsKPI[];
  visualizations: MetricsVisualization[];
}