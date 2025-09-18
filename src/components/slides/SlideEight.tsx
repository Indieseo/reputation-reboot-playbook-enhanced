import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from './SlideLayout';
import {
  BarChart3, Target, Calendar, TrendingUp, Globe, Clock,
  DollarSign, Users, Search, Bot, Shield, AlertTriangle,
  ChevronDown, Filter, Settings, RotateCcw, Database, ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MetricsKPI, RegionalFilter, MetricsTimeRange } from '../../types/metrics.types';

export const SlideEight = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<MetricsTimeRange>({
    label: 'Last 30 Days',
    value: 'month',
    days: 30
  });

  const [selectedRegions, setSelectedRegions] = useState<RegionalFilter[]>([
    { label: 'Europe', code: 'EU', flag: '🇪🇺' },
    { label: 'North America', code: 'NA', flag: '🇺🇸' },
    { label: 'Asia-Pacific', code: 'AP', flag: '🌏' }
  ]);

  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'executive'>('executive');
  const [isMetabaseConnected] = useState(false);

  const timeRanges: MetricsTimeRange[] = [
    { label: 'Last 7 Days', value: 'week', days: 7 },
    { label: 'Last 30 Days', value: 'month', days: 30 },
    { label: 'Last 90 Days', value: 'quarter', days: 90 },
    { label: 'Last 12 Months', value: 'year', days: 365 }
  ];

  const regions: RegionalFilter[] = [
    { label: 'Europe', code: 'EU', flag: '🇪🇺' },
    { label: 'North America', code: 'NA', flag: '🇺🇸' },
    { label: 'Asia-Pacific', code: 'AP', flag: '🌏' },
    { label: 'Latin America', code: 'LA', flag: '🌎' }
  ];

  const executiveKPIs: MetricsKPI[] = [
    {
      id: 'ai-search-visibility',
      title: 'AI Search Visibility Score',
      value: '73%',
      previousValue: '45%',
      trend: 'up',
      changePercentage: 62.2,
      description: 'Brand citation frequency in ChatGPT/Perplexity responses for RV rental queries',
      icon: 'Bot',
      category: 'ai_search',
      targetValue: 85,
      status: 'good'
    },
    {
      id: 'reputation-recovery',
      title: 'Crisis Recovery Index',
      value: '4.2',
      previousValue: '2.1',
      unit: '★',
      trend: 'up',
      changePercentage: 100,
      description: 'Multi-platform sentiment recovery from damage fee crisis',
      icon: 'Shield',
      category: 'reputation',
      targetValue: 4.5,
      status: 'good'
    },
    {
      id: 'ai-traffic-value',
      title: 'AI Traffic Revenue Impact',
      value: '€127K',
      previousValue: '€29K',
      trend: 'up',
      changePercentage: 338.0,
      description: 'Monthly revenue attributed to AI search traffic (4.4x value multiplier)',
      icon: 'DollarSign',
      category: 'business',
      targetValue: 150000,
      status: 'good'
    },
    {
      id: 'content-authority',
      title: 'Content Authority Score',
      value: '89',
      previousValue: '34',
      trend: 'up',
      changePercentage: 161.8,
      description: 'Domain authority improvement through transparency-first content strategy',
      icon: 'TrendingUp',
      category: 'seo',
      targetValue: 95,
      status: 'good'
    },
    {
      id: 'damage-fee-education',
      title: 'Crisis Transformation Rate',
      value: '85%',
      previousValue: '12%',
      trend: 'up',
      changePercentage: 608.3,
      description: 'Conversion of damage fee inquiries to educational engagement',
      icon: 'Target',
      category: 'business',
      targetValue: 90,
      status: 'good'
    },
    {
      id: 'competitive-gap',
      title: 'AI Search Market Share',
      value: '92%',
      previousValue: '8%',
      trend: 'up',
      changePercentage: 1050,
      description: 'Market share in AI search results for European RV rental queries',
      icon: 'Globe',
      category: 'ai_search',
      targetValue: 95,
      status: 'good'
    }
  ];

  return (
    <SlideLayout
      title="Metrics, Analytics & ROI Tracking"
      subtitle="Real-Time Performance Dashboard with Regional Intelligence"
      isPresenting={isPresenting}
      variant="default"
    >
      <div className="space-y-6">
        {/* Dashboard Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {/* Time Range Selector */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedTimeRange.label}
                onChange={(e) => {
                  const range = timeRanges.find(r => r.label === e.target.value);
                  if (range) setSelectedTimeRange(range);
                }}
              >
                {timeRanges.map(range => (
                  <option key={range.value} value={range.label}>{range.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Regional Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button
                    key={region.code}
                    onClick={() => {
                      setSelectedRegions(prev =>
                        prev.some(r => r.code === region.code)
                          ? prev.filter(r => r.code !== region.code)
                          : [...prev, region]
                      );
                    }}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedRegions.some(r => r.code === region.code)
                        ? 'bg-blue-100 text-blue-800 border-blue-200'
                        : 'bg-gray-100 text-gray-600 border-gray-200'
                    } border hover:shadow-sm`}
                  >
                    <span>{region.flag}</span>
                    <span>{region.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              {(['overview', 'detailed', 'executive'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    viewMode === mode
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Metabase Connection Status */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
              isMetabaseConnected
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-amber-100 text-amber-800 border border-amber-200'
            }`}>
              <Database className="w-3 h-3" />
              <span>{isMetabaseConnected ? 'Connected' : 'Demo Mode'}</span>
              {!isMetabaseConnected && (
                <Button size="sm" variant="ghost" className="h-4 w-4 p-0 ml-1">
                  <Settings className="w-3 h-3" />
                </Button>
              )}
            </div>

            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <RotateCcw className="w-3 h-3" />
              <span>Refresh</span>
            </Button>
          </div>
        </div>

        {/* Executive KPI Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {executiveKPIs.map((kpi, index) => {
            const iconMap = { Bot, Shield, DollarSign, TrendingUp, Target, Globe };
            const IconComponent = iconMap[kpi.icon as keyof typeof iconMap] || Target;

            return (
              <motion.div
                key={kpi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {kpi.title}
                    </CardTitle>
                    <div className={`p-2 rounded-full ${{
                      good: 'bg-green-100 text-green-600',
                      warning: 'bg-yellow-100 text-yellow-600',
                      critical: 'bg-red-100 text-red-600'
                    }[kpi.status]}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline space-x-2">
                      <div className="text-2xl font-bold">
                        {kpi.value}{kpi.unit && <span className="text-lg">{kpi.unit}</span>}
                      </div>
                      {kpi.changePercentage && (
                        <Badge
                          variant={kpi.trend === 'up' ? 'default' : kpi.trend === 'down' ? 'destructive' : 'secondary'}
                          className="flex items-center gap-1"
                        >
                          {kpi.trend === 'up' ? '↗' : kpi.trend === 'down' ? '↘' : '→'}
                          {kpi.changePercentage.toFixed(1)}%
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-tight">
                      {kpi.description}
                    </p>
                    {kpi.previousValue && (
                      <div className="text-xs text-muted-foreground mt-2">
                        Previous: {kpi.previousValue}{kpi.unit}
                        {kpi.targetValue && (
                          <span className="ml-2">• Target: {kpi.targetValue}{kpi.unit}</span>
                        )}
                      </div>
                    )}
                  </CardContent>
                  {!isMetabaseConnected && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        DEMO
                      </Badge>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Advanced Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Real-Time Monitoring Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Advanced Monitoring Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">AI Search Intelligence</div>
                      <div className="text-xs text-muted-foreground">ChatGPT/Perplexity citation tracking</div>
                    </div>
                  </div>
                  <Badge variant="outline">Live</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-medium text-sm">Reputation Recovery Monitor</div>
                      <div className="text-xs text-muted-foreground">Multi-platform sentiment analysis</div>
                    </div>
                  </div>
                  <Badge variant="outline">Live</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-purple-600" />
                    <div>
                      <div className="font-medium text-sm">Regional Performance</div>
                      <div className="text-xs text-muted-foreground">Europe, NA, APAC market analysis</div>
                    </div>
                  </div>
                  <Badge variant="outline">Live</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-indigo-600" />
                    <div>
                      <div className="font-medium text-sm">Metabase Integration</div>
                      <div className="text-xs text-muted-foreground">Real-time dashboard connection</div>
                    </div>
                  </div>
                  <Badge variant={isMetabaseConnected ? 'default' : 'secondary'}>
                    {isMetabaseConnected ? 'Connected' : 'Setup Required'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Crisis → Authority Transformation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold">
                      30d
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Crisis Stabilization</div>
                    <div className="text-xs text-muted-foreground">First ChatGPT citations for damage fee education</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-600 h-1.5 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-xs text-green-600 font-medium">85%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">
                      90d
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Authority Building</div>
                    <div className="text-xs text-muted-foreground">50+ ultra-specific pages dominating Portugal queries</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-xs text-blue-600 font-medium">72%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">
                      6mo
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Market Domination</div>
                    <div className="text-xs text-muted-foreground">Complete reputation transformation + AI chatbot</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-600 h-1.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-xs text-purple-600 font-medium">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800">Measurable Business Impact</h3>
              <p className="text-green-700 text-sm">Crisis transformation delivering quantifiable results</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">€127K</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Monthly AI Traffic Revenue</div>
              <div className="text-xs text-gray-600">4.4x value multiplier vs traditional search</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-sm font-medium text-gray-700 mb-1">AI Search Market Share</div>
              <div className="text-xs text-gray-600">European RV rental queries dominance</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.2★</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Reputation Recovery</div>
              <div className="text-xs text-gray-600">From 2.1★ damage fee crisis</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-sm font-medium text-gray-700 mb-1">Crisis Conversion Rate</div>
              <div className="text-xs text-gray-600">Damage fee inquiries → education</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-green-200">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-600">
                <strong>Next Milestone:</strong> 95% AI search market share by Q2 2025
              </div>
              <div className="flex items-center gap-2">
                {!isMetabaseConnected && (
                  <Button size="sm" variant="outline" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Setup Live Dashboard
                  </Button>
                )}
                <div className="text-xs text-gray-500">
                  Updated: {selectedTimeRange.label}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Warning about demo data */}
        {!isMetabaseConnected && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-amber-800 mb-1">
                  Demo Mode Active
                </div>
                <div className="text-xs text-amber-700">
                  This dashboard shows projected metrics based on strategy implementation.
                  Connect to Metabase for real-time data tracking and regional performance analysis.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SlideLayout>
  );
};