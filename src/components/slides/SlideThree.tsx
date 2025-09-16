import React, { useState } from 'react';
import { SlideLayout } from './SlideLayout';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  Zap,
  Trophy,
  TrendingUp,
  BarChart3,
  Users,
  Globe,
  Search,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Clock,
  Shield,
  Star,
  AlertTriangle,
  Brain,
  Lightbulb,
  Rocket
} from 'lucide-react';

export const SlideThree = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setExpandedPanel(expandedPanel === panelId ? null : panelId);
  };

  const patelFramework = [
    {
      id: 'ai-attention',
      icon: Target,
      title: '1. Get AI\'s Attention',
      timeline: 'Months 1-2',
      color: 'border-red-200 bg-red-50',
      iconColor: 'text-red-600',
      overview: 'Submit to Bing Webmaster Tools, create citation-worthy content with damage prevention guides',
      details: [
        {
          metric: 'Bing Indexation Speed',
          value: '24-48 hours vs 2-4 weeks Google',
          impact: 'First-mover advantage in AI search results'
        },
        {
          metric: 'Citation-Worthy Content',
          value: '25 high-authority articles',
          impact: 'Damage prevention guides addressing €2,500 fee controversy'
        },
        {
          metric: 'Schema Markup Implementation',
          value: '100% structured data coverage',
          impact: 'AI-parseable content for ChatGPT and Claude citations'
        },
        {
          metric: 'Voice Search Optimization',
          value: '50+ conversational queries',
          impact: 'Target "How to avoid Indie Campers damage fees"'
        }
      ]
    },
    {
      id: 'expand-authority',
      icon: Zap,
      title: '2. Expand Our Authority',
      timeline: 'Months 2-4',
      color: 'border-blue-200 bg-blue-50',
      iconColor: 'text-blue-600',
      overview: 'Reddit engagement, transparent competitor comparisons, Wikipedia citation strategy',
      details: [
        {
          metric: 'Reddit Community Engagement',
          value: '15+ subreddits active participation',
          impact: 'r/vandwellers, r/solotravel, r/digitalnomad authority building'
        },
        {
          metric: 'Competitor Transparency Pages',
          value: '10 detailed comparison articles',
          impact: 'McRent vs Indie Campers honest analysis builds trust'
        },
        {
          metric: 'Wikipedia Citation Strategy',
          value: '5 industry page contributions',
          impact: 'Campervan rental market authority establishment'
        },
        {
          metric: 'Expert Byline Development',
          value: '3 executive thought leadership',
          impact: 'CEO and fleet management expertise showcase'
        }
      ]
    },
    {
      id: 'own-space',
      icon: Trophy,
      title: '3. Own Our Space',
      timeline: 'Months 4-6+',
      color: 'border-green-200 bg-green-50',
      iconColor: 'text-green-600',
      overview: 'Scale to 300+ pages, track ChatGPT citations monthly, dominate AI search results',
      details: [
        {
          metric: 'Content Scale Target',
          value: '300+ ultra-specific pages',
          impact: 'Every customer scenario covered with authoritative content'
        },
        {
          metric: 'AI Citation Tracking',
          value: 'Monthly ChatGPT/Claude monitoring',
          impact: 'First campervan company with systematic AI presence'
        },
        {
          metric: 'Long-tail Domination',
          value: '85% coverage target keywords',
          impact: 'Portugal coast campervan 16-foot parking solutions'
        },
        {
          metric: 'Content Velocity',
          value: '15 articles per week',
          impact: 'Outpace competitors 10:1 content production ratio'
        }
      ]
    }
  ];

  const hubspotModel = {
    marketContext: {
      challenge: 'CRM Market Saturation',
      solution: 'Ultra-Specific Content Strategy',
      competitors: '200+ CRM solutions',
      differentiation: 'AI-First Content Approach'
    },
    implementation: [
      {
        metric: 'Content Specificity',
        before: '3 broad "CRM for Small Business" pages',
        after: '300+ scenario-specific pages',
        example: '"CRM for dental practices with 3-5 employees in California"'
      },
      {
        metric: 'AI Citation Results',
        achievement: '"ChatGPT told me you were the best"',
        frequency: '40+ customer reports monthly',
        impact: 'Sales team conversion rate: 65% vs 23% traditional'
      },
      {
        metric: 'Market Position',
        ranking: '#1 AI search results for CRM queries',
        traffic: '4.2M monthly organic visitors',
        revenue: '$1.8B valuation driven by content authority'
      }
    ],
    indieApplication: [
      {
        challenge: 'Generic "Best Campervan Rental" content',
        solution: '300+ hyper-specific scenario pages',
        examples: [
          'Portugal family campervan rental 4 people 2 weeks coastal route with kids under 10',
          'Solo female Active Small campervan Lisbon pickup winter month budget under €1000',
          'Digital nomad 3-month Portugal Spain campervan wifi reliable work setup'
        ]
      }
    ]
  };

  const competitiveIntelligence = [
    {
      competitor: 'McRent',
      weakness: 'Generic content strategy',
      opportunity: 'Ultra-specific scenario targeting',
      data: '12 total blog articles vs our planned 300+',
      aiPresence: 'Minimal ChatGPT citations'
    },
    {
      competitor: 'Roadsurfer',
      weakness: 'Limited transparency on fees',
      opportunity: 'Radical transparency leadership',
      data: 'No damage prevention guides',
      aiPresence: 'Zero structured data implementation'
    },
    {
      competitor: 'Outdoorsy (P2P)',
      weakness: 'Inconsistent quality messaging',
      opportunity: 'Professional fleet advantage',
      data: 'Platform-based content only',
      aiPresence: 'No voice search optimization'
    }
  ];

  return (
    <SlideLayout
      title="Strategic Framework Validation"
      subtitle="Enterprise Blueprint: Proven AI Search Domination Methodology"
      isPresenting={isPresenting}
    >
      <div className="space-y-6">
        {/* Strategic Foundation Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Validated Success Framework</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Neil Patel's ChatGPT SEO</h4>
              <p>Proven 3-step methodology generating 4.4x more valuable traffic than traditional Google optimization</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">HubSpot's Content Model</h4>
              <p>$1.8B valuation powered by 300+ ultra-specific pages dominating AI search results</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Indie Campers Adaptation</h4>
              <p>Custom framework addressing reputation crisis while building market authority</p>
            </div>
          </div>
        </div>

        {/* Neil Patel 3-Step Framework - Expandable */}
        <div className="bg-card rounded-xl shadow-lg border-2 border-indigo-200">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => togglePanel('patel')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Neil Patel's 3-Step ChatGPT SEO Framework</h3>
            </div>
            {expandedPanel === 'patel' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>

          {expandedPanel === 'patel' && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-6">
                {patelFramework.map((phase, index) => (
                  <div key={phase.id} className={`p-4 rounded-lg border-2 ${phase.color}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <phase.icon className={`w-6 h-6 ${phase.iconColor}`} />
                      <div>
                        <h4 className="font-bold text-lg">{phase.title}</h4>
                        <Badge className="text-xs bg-gray-100 text-gray-700">{phase.timeline}</Badge>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-4">{phase.overview}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.details.map((detail, idx) => (
                        <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span className="font-semibold text-xs text-gray-800">{detail.metric}</span>
                          </div>
                          <p className="text-xs text-blue-600 font-medium mb-1">{detail.value}</p>
                          <p className="text-xs text-gray-600">{detail.impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* HubSpot Model Analysis - Expandable */}
        <div className="bg-card rounded-xl shadow-lg border-2 border-orange-200">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => togglePanel('hubspot')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">HubSpot's $1.8B Content Domination Model</h3>
            </div>
            {expandedPanel === 'hubspot' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>

          {expandedPanel === 'hubspot' && (
            <div className="px-6 pb-6">
              {/* Market Context */}
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Market Context & Challenge
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white p-2 rounded">
                    <strong>Challenge:</strong><br/>{hubspotModel.marketContext.challenge}
                  </div>
                  <div className="bg-white p-2 rounded">
                    <strong>Competitors:</strong><br/>{hubspotModel.marketContext.competitors}
                  </div>
                  <div className="bg-white p-2 rounded">
                    <strong>Solution:</strong><br/>{hubspotModel.marketContext.solution}
                  </div>
                  <div className="bg-white p-2 rounded">
                    <strong>Innovation:</strong><br/>{hubspotModel.marketContext.differentiation}
                  </div>
                </div>
              </div>

              {/* Implementation Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {hubspotModel.implementation.map((result, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
                    <h5 className="font-semibold text-gray-800 mb-2">{result.metric}</h5>
                    {result.before && (
                      <div className="mb-2">
                        <span className="text-xs text-red-600">Before: {result.before}</span>
                      </div>
                    )}
                    {result.after && (
                      <div className="mb-2">
                        <span className="text-xs text-green-600">After: {result.after}</span>
                      </div>
                    )}
                    {result.achievement && (
                      <div className="mb-2">
                        <span className="text-xs text-blue-600 font-medium">"{result.achievement}"</span>
                      </div>
                    )}
                    <div className="text-xs text-gray-600">
                      {result.example || result.impact || result.revenue}
                    </div>
                  </div>
                ))}
              </div>

              {/* Indie Campers Application */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Indie Campers Strategic Application
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-purple-300">
                    <span className="text-xs text-red-600 font-medium">Challenge: </span>
                    <span className="text-xs text-gray-700">Generic "Best Campervan Rental" content</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-300">
                    <span className="text-xs text-green-600 font-medium">Solution: </span>
                    <span className="text-xs text-gray-700">300+ hyper-specific scenario pages</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-300">
                    <span className="text-xs text-blue-600 font-medium">Examples:</span>
                    <div className="mt-1 space-y-1">
                      {hubspotModel.indieApplication[0].examples.map((example, idx) => (
                        <div key={idx} className="text-xs text-gray-600 italic">• {example}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Competitive Intelligence - Expandable */}
        <div className="bg-card rounded-xl shadow-lg border-2 border-green-200">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => togglePanel('competitive')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Competitive Intelligence & Market Gaps</h3>
            </div>
            {expandedPanel === 'competitive' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>

          {expandedPanel === 'competitive' && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-4">
                {competitiveIntelligence.map((comp, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800">{comp.competitor}</h4>
                      <Badge className="bg-red-100 text-red-800 text-xs">Market Gap</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                      <div className="bg-white p-2 rounded border">
                        <strong className="text-red-600">Weakness:</strong><br/>
                        {comp.weakness}
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong className="text-green-600">Our Opportunity:</strong><br/>
                        {comp.opportunity}
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong className="text-blue-600">Data Point:</strong><br/>
                        {comp.data}
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong className="text-purple-600">AI Presence:</strong><br/>
                        {comp.aiPresence}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Success Validation Summary */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-7 h-7" />
            <h3 className="text-xl font-bold">Framework Validation & Expected Outcomes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Methodology Proven</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Neil Patel: 4.4x more valuable AI traffic</li>
                <li>• HubSpot: $1.8B valuation from content</li>
                <li>• First-mover advantage in campervan AI search</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Competitive Advantage</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 300+ pages vs competitors' 10-15</li>
                <li>• Zero AI search optimization by rivals</li>
                <li>• Content moat: 2-year lead minimum</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Crisis-to-Authority Path</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Transform €2,500 controversy into trust</li>
                <li>• Radical transparency becomes differentiation</li>
                <li>• AI search dominance = reputation recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
