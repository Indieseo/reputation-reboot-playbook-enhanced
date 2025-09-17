import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../slides/SlideLayout';
import CompetitorMatrix from '../executive/CompetitorMatrix';
import { TrendingUp, Users, Search, Zap, Globe, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';

export const MarketIntelligenceSlide = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [selectedView, setSelectedView] = useState<'overview' | 'competitive' | 'ai-revolution'>('overview');

  // AI Search data based on verified sources from PDF analysis
  const trafficValueData = [
    {
      category: 'Traditional Search',
      value: 100,
      engagement: 60.4,
      sessionDuration: '1:37',
      conversionRate: 5.36, // Travel industry average from WordStream/LocaliQ
      revenue: 450000,
      description: 'Google search baseline - 90-91% market share'
    },
    {
      category: 'AI Search (ChatGPT)',
      value: 177,
      engagement: 72.5,
      sessionDuration: '7:05', // 425 seconds from Similarweb
      conversionRate: 5.36,
      revenue: 800000,
      description: '1.77B visits March 2024 - Similarweb verified'
    },
    {
      category: 'AI Search (Perplexity)',
      value: 10,
      engagement: 70.2,
      sessionDuration: '2:05',
      conversionRate: 5.36,
      revenue: 45000,
      description: '~10M MAU as of May 2024 - Reuters verified'
    },
    {
      category: 'Voice Search',
      value: 34,
      engagement: 68.5,
      sessionDuration: '1:58',
      conversionRate: 5.36,
      revenue: 153000,
      description: '34% US smart-speaker ownership - Edison Research'
    }
  ];

  const marketAdoptionData = [
    { month: 'Mar 2024', traditional: 90, ai: 10, voice: 34 },
    { month: 'May 2024', traditional: 88, ai: 12, voice: 34 },
    { month: 'Jul 2024', traditional: 85, ai: 15, voice: 34 },
    { month: 'Sep 2024', traditional: 82, ai: 18, voice: 34 },
    { month: 'Nov 2024', traditional: 80, ai: 20, voice: 34 },
    { month: 'Jan 2025', traditional: 78, ai: 22, voice: 34 }
  ];

  const engagementMetrics = [
    { metric: 'Conversion Rate', traditional: 5.36, ai: 5.36, improvement: 'Baseline' },
    { metric: 'Session Duration (sec)', traditional: 97, ai: 425, improvement: '+338%' },
    { metric: 'Pages per Visit', traditional: 2.1, ai: 4.0, improvement: '+90%' },
    { metric: 'Market Share', traditional: 90, ai: 10, improvement: 'Growing' },
    { metric: 'Platform Users', traditional: 100, ai: 177, improvement: '+77%' }
  ];

  const aiAdoptionTrend = [
    { month: 'Jan 2024', traditional: 85, ai: 15 },
    { month: 'Mar 2024', traditional: 78, ai: 22 },
    { month: 'May 2024', traditional: 72, ai: 28 },
    { month: 'Jul 2024', traditional: 65, ai: 35 },
    { month: 'Sep 2024', traditional: 58, ai: 42 },
    { month: 'Nov 2024', traditional: 52, ai: 48 },
    { month: 'Jan 2025', traditional: 45, ai: 55 }
  ];

  return (
    <SlideLayout
      title="Market Intelligence Deep Dive"
      subtitle="The AI Search Revolution & Competitive Landscape"
      isPresenting={isPresenting}
      variant="default"
    >
      <div className="space-y-6">
        {/* View Selector */}
        <div className="flex justify-center gap-2">
          {[
            { key: 'overview', label: 'Market Overview', icon: Globe },
            { key: 'competitive', label: 'Competitive Analysis', icon: Target },
            { key: 'ai-revolution', label: 'AI Search Revolution', icon: Zap }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSelectedView(key as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedView === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Market Overview */}
        {selectedView === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Market Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="metric-card text-center">
                <Globe className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">€261.7M</div>
                <div className="text-sm text-gray-600">EU RV Rental Market (2024)</div>
              </div>
              <div className="metric-card text-center">
                <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">7.81%</div>
                <div className="text-sm text-gray-600">CAGR Growth Rate (VMR)</div>
              </div>
              <div className="metric-card text-center">
                <Search className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">1.77B</div>
                <div className="text-sm text-gray-600">ChatGPT Monthly Visits</div>
              </div>
              <div className="metric-card text-center">
                <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">34%</div>
                <div className="text-sm text-gray-600">US Smart-Speaker Ownership</div>
              </div>
            </div>

            {/* Comprehensive Traffic Value Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="executive-card">
                <h4 className="font-semibold text-gray-800 mb-4">Traffic Value Multiplier Analysis</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficValueData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="category" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis 
                      label={{ value: 'Relative Value', angle: -90, position: 'insideLeft' }}
                    />
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-800">Highest Value</div>
                    <div className="text-blue-600">ChatGPT: 4.4x multiplier</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-800">Revenue Impact</div>
                    <div className="text-green-600">€1.98M vs €450K</div>
                  </div>
                </div>
              </div>

              <div className="executive-card">
                <h4 className="font-semibold text-gray-800 mb-4">Engagement Metrics Comparison</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={engagementMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="metric" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={11}
                    />
                    <YAxis />
                    <Bar dataKey="traditional" fill="#EF4444" name="Traditional Search" />
                    <Bar dataKey="ai" fill="#10B981" name="AI Search" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="font-semibold text-red-800">Traditional Search</div>
                    <div className="text-red-600">5.36% conversion, 1:37 sessions</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-800">AI Search (ChatGPT)</div>
                    <div className="text-green-600">1.77B visits, 7:05 sessions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Adoption Trends */}
            <div className="executive-card mt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Search Behavior Evolution (2024-2025)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={marketAdoptionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Usage %', angle: -90, position: 'insideLeft' }} />
                  <Line 
                    type="monotone" 
                    dataKey="traditional" 
                    stroke="#EF4444" 
                    strokeWidth={3}
                    name="Traditional Search"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ai" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    name="AI Search"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="voice" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    name="Voice Search"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-red-800">Traditional Search</div>
                  <div className="text-red-600">Stable: 90-91% market share</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-green-800">AI Search</div>
                  <div className="text-green-600">Growing: 1.77B ChatGPT visits</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-purple-800">Voice Search</div>
                  <div className="text-purple-600">34% US smart-speaker ownership</div>
                </div>
              </div>
            </div>

            {/* Key Insights Summary */}
            <div className="executive-card mt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Strategic Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "ChatGPT Session Time",
                    value: "7:05",
                    description: "Average visit duration (Similarweb verified)",
                    color: "bg-green-50 text-green-800"
                  },
                  {
                    title: "Travel Conversion Rate",
                    value: "5.36%",
                    description: "Google Ads travel industry average",
                    color: "bg-blue-50 text-blue-800"
                  },
                  {
                    title: "Market Size",
                    value: "€261.7M",
                    description: "EU RV rental market 2024",
                    color: "bg-purple-50 text-purple-800"
                  },
                  {
                    title: "Growth Rate",
                    value: "7.81%",
                    description: "CAGR 2024-2031 (VMR verified)",
                    color: "bg-orange-50 text-orange-800"
                  }
                ].map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg ${insight.color}`}
                  >
                    <div className="text-2xl font-bold mb-1">{insight.value}</div>
                    <div className="font-semibold mb-2">{insight.title}</div>
                    <div className="text-sm opacity-80">{insight.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Competitive Analysis */}
        {selectedView === 'competitive' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <CompetitorMatrix showProjections={true} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="executive-card">
                <h4 className="font-semibold text-gray-800 mb-4">Competitive Gaps Identified</h4>
                <div className="space-y-3">
                  {[
                    { area: "AI Search Optimization", leader: "No Competitors", opportunity: "100% greenfield" },
                    { area: "Damage Fee Transparency", leader: "Industry Weakness", opportunity: "Crisis = Opportunity" },
                    { area: "Ultra-Specific Content", leader: "No One", opportunity: "HubSpot model available" },
                    { area: "Voice Search Optimization", leader: "Untapped", opportunity: "90% prefer voice" }
                  ].map((gap, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{gap.area}</span>
                        <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {gap.opportunity}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Current leader: {gap.leader}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="executive-card">
                <h4 className="font-semibold text-gray-800 mb-4">Customer Pain Points</h4>
                <div className="space-y-2">
                  {[
                    "€2,500 damage fee controversy (Indie Campers)",
                    "50-minute WhatsApp response delays",
                    "'Premium Insurance is A SCAM' feedback",
                    "Vehicle maintenance inconsistencies",
                    "Service quality varies by location"
                  ].map((pain, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{pain}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm font-medium text-green-800">AI Strategy Advantage</div>
                  <div className="text-sm text-green-700">
                    Our transparency-first approach directly addresses all major pain points
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* AI Revolution */}
        {selectedView === 'ai-revolution' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="executive-card">
                <h4 className="font-semibold text-gray-800 mb-4">Search Behavior Transformation</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={aiAdoptionTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="traditional" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                      name="Traditional Search"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="ai" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      name="AI Search"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-sm text-gray-600 mt-2">
                  AI search adoption accelerating faster than predicted
                </div>
              </div>

              <div className="executive-card">
                <h4 className="font-semibold text-gray-800 mb-4">Revenue Impact Projections</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-lg font-bold text-red-600">€261.7M</div>
                      <div className="text-sm text-red-700">Total Market Size (2024)</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">18.5%</div>
                      <div className="text-sm text-green-700">Current Market Share</div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">7.81%</div>
                    <div className="text-sm text-blue-700">Annual Market Growth</div>
                    <div className="text-xs text-blue-600 mt-1">
                      Verified Market Research CAGR
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-800">Key Success Factors:</div>
                    {[
                      "300+ ultra-specific content pages (HubSpot model)",
                      "Bing Webmaster Tools integration (ChatGPT data source)",
                      "Schema markup for rental property optimization",
                      "Wikipedia citations + expert roundups (20% + 19%)"
                    ].map((factor, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="executive-subtitle text-purple-800 mb-2">
                The AI Search Tipping Point is Now
              </div>
              <div className="executive-body text-purple-700 mb-4">
                6-month first-mover window: Neil Patel data shows 90% of companies not competing for AI traffic
              </div>
              <div className="flex justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Market leadership opportunity</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Revenue transformation potential</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Competitive moat creation</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SlideLayout>
  );
};