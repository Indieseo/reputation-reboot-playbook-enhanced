import React, { useState } from 'react';
import { SlideLayout } from './SlideLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  PenTool,
  Target,
  Users,
  TrendingUp,
  Search,
  Globe,
  BookOpen,
  Lightbulb,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Eye,
  Share2,
  FileText,
  Link,
  Calendar,
  MessageSquare,
  Star,
  Layers,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface BlogStrategySlideProps {
  isPresenting?: boolean;
}

export const BlogStrategySlide: React.FC<BlogStrategySlideProps> = ({ isPresenting }) => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setExpandedPanel(expandedPanel === panelId ? null : panelId);
  };

  const contentTypes = [
    {
      icon: Target,
      title: "Crisis Response Content (Phase 1)",
      tone: "Transparent, helpful, solution-oriented",
      color: "bg-red-100 text-red-800",
      details: [
        "Damage Prevention Authority Hub - complete pre-inspection guides",
        "Premium Insurance Transparency - €199 vs €2500 reality check",
        "First-Time Renter Survival Guide - service response times & hidden fees",
        "WhatsApp Support Optimization - 50-minute delay solutions",
        "Premium Insurance Scam Clarity - what's actually covered"
      ]
    },
    {
      icon: BookOpen,
      title: "Authority Building Content (Phase 2)",
      tone: "Expert, comprehensive, authoritative",
      color: "bg-blue-100 text-blue-800",
      details: [
        "Vehicle-Specific Guides - Active Small for solo female travelers",
        "Location-Specific Expertise - Lisbon pickup vs city center navigation",
        "Competitive Analysis - transparent McRent & Roadsurfer comparisons",
        "Ultra-Specific Content - 300+ scenario-based pages",
        "Professional vs Peer-to-Peer - fleet advantage explanations"
      ]
    },
    {
      icon: Globe,
      title: "AI Search Optimized Content",
      tone: "Conversational, natural language, voice-friendly",
      color: "bg-purple-100 text-purple-800",
      details: [
        "Long-tail keyword optimization - 'Portugal coast campervan 16-foot parking'",
        "Voice search queries - 'How to avoid damage fees Indie Campers'",
        "FAQ structured data - schema markup for AI parsing",
        "Conversational titles - 'Is Active Small perfect for solo travel?'",
        "Local SEO integration - 'Lisbon airport vs city center pickup'"
      ]
    },
    {
      icon: Users,
      title: "Community Trust Building",
      tone: "Honest, transparent, community-focused",
      color: "bg-green-100 text-green-800",
      details: [
        "Reddit & Forum Engagement - authentic community participation",
        "Transparency Leadership - addressing criticism head-on",
        "Customer Success Stories - real testimonials and case studies",
        "Behind-the-Scenes Content - operational improvement updates",
        "Community Q&A Sessions - direct executive responses"
      ]
    }
  ];

  const seoFoundations = [
    {
      title: "Topic Cluster Architecture",
      icon: Layers,
      details: [
        "Core pillar pages: 'RV Rental Guide', 'Campervan Destinations Europe', 'Planning Your First Road Trip'",
        "20-30 cluster articles per pillar linking back to main page",
        "Hierarchical content structure boosts domain authority",
        "Internal linking strategy drives 40% more page views"
      ]
    },
    {
      title: "Keyword Strategy & Intent Mapping",
      icon: Search,
      details: [
        "Target long-tail keywords: 'how to organize motorhome kitchen', 'one-way campervan rentals Portugal'",
        "Semantic search optimization for voice queries",
        "Monitor evolving search volumes aligned with seasonal RV trends",
        "High-intent keywords in titles and meta descriptions"
      ]
    },
    {
      title: "Content Calendar & Freshness",
      icon: Calendar,
      details: [
        "Core posts: 800-1,500 words with comprehensive coverage",
        "Pillar content: 3,000+ words for maximum authority",
        "Quarterly content audits for relevance and updates",
        "Seasonal alignment with European travel patterns"
      ]
    }
  ];

  const audiencePersonas = [
    {
      type: "Adventurous Solo Travelers",
      details: "Seek freedom, spontaneity, and authentic experiences. Content: solo safety tips, flexible booking options, social meetup spots",
      pain: "Concerns about safety and meeting like-minded travelers"
    },
    {
      type: "Families Planning RV Holidays",
      details: "Need comprehensive planning, child-friendly features, and safety assurance. Content: family packing lists, kid-friendly destinations, safety protocols",
      pain: "Overwhelming planning process and child safety concerns"
    },
    {
      type: "Digital Nomads",
      details: "Require reliable internet, workspace setup, and long-term rental options. Content: wifi-enabled locations, mobile office setups, extended stay discounts",
      pain: "Connectivity issues and workspace limitations"
    },
    {
      type: "Retirees Seeking Comfort",
      details: "Prioritize comfort, accessibility, and slower-paced travel. Content: accessible van features, comfortable routes, senior discounts",
      pain: "Mobility concerns and comfort requirements"
    },
    {
      type: "International Visitors",
      details: "Need local insights, navigation help, and cultural context. Content: driving laws by country, cultural etiquette, language guides",
      pain: "Navigation confusion and cultural unfamiliarity"
    }
  ];

  return (
    <SlideLayout
      title="Blog Strategy: Core Engine of AI Search Domination"
      subtitle="Content-Powered Reputation Transformation & Authority Building Framework"
      isPresenting={isPresenting}
    >
      <div className="space-y-6">
        {/* Strategic Integration Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Strategic Integration: Blog as AI Search Foundation</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Phase 1: Crisis Response (Months 1-2)</h4>
              <p>Blog delivers 25 high-priority reputation-addressing articles directly targeting damage fee controversy and service delays</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Phase 2: Authority Building (Months 3-6)</h4>
              <p>Scale to 75+ ultra-specific content pieces establishing market leadership through transparency-first approach</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">AI Search Optimization</h4>
              <p>Every blog post structured for AI parsing with schema markup, voice search optimization, and Bing indexation</p>
            </div>
          </div>
        </div>

        {/* Blog URL Structure Integration */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <div className="text-amber-600 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-amber-800 font-semibold mb-2">Domain Consolidation: Blog Integration</h4>
              <p className="text-amber-700 text-sm leading-relaxed mb-3">
                <strong>Critical:</strong> Blog content must be integrated into the unified indiecampers.com domain structure as <strong>indiecampers.com/guides/</strong> to maximize domain authority and AI search visibility. This supports the strategy's content architecture requirements outlined in the technical implementation phase.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-2 rounded border border-amber-300">
                  <strong>Phase 1 URLs:</strong><br/>
                  /guides/avoid-damage-fees/<br/>
                  /guides/premium-insurance-reality/<br/>
                  /guides/first-time-rental-survival/
                </div>
                <div className="bg-white p-2 rounded border border-amber-300">
                  <strong>Phase 2 URLs:</strong><br/>
                  /guides/solo-female-travel-tips/<br/>
                  /guides/family-road-trip-planning/<br/>
                  /guides/portugal-coastal-routes/
                </div>
                <div className="bg-white p-2 rounded border border-amber-300">
                  <strong>AI-Optimized Structure:</strong><br/>
                  /guides/[problem]-[solution]-[location]/<br/>
                  Schema markup integration<br/>
                  Voice search optimization
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Foundations - Expandable */}
        <div className="bg-card rounded-xl shadow-lg border-2 border-blue-200">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => togglePanel('seo')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">SEO & Authority Foundations</h3>
            </div>
            {expandedPanel === 'seo' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>

          {expandedPanel === 'seo' && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {seoFoundations.map((foundation, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <foundation.icon className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-800">{foundation.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {foundation.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Audience Personas - Expandable */}
        <div className="bg-card rounded-xl shadow-lg border-2 border-purple-200">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => togglePanel('personas')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Target Audience Personas</h3>
            </div>
            {expandedPanel === 'personas' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>

          {expandedPanel === 'personas' && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {audiencePersonas.map((persona, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">{persona.type}</h4>
                    <p className="text-xs text-gray-700 mb-2">{persona.details}</p>
                    <div className="flex items-start gap-2">
                      <Star className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-600 font-medium">Pain Point: {persona.pain}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Types - Expandable */}
        <div className="bg-card rounded-xl shadow-lg border-2 border-green-200">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => togglePanel('content')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <PenTool className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Content Types & Voice Guidelines</h3>
            </div>
            {expandedPanel === 'content' ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>

          {expandedPanel === 'content' && (
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentTypes.map((type, index) => (
                  <div key={index} className="bg-gradient-to-b from-white to-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <type.icon className="w-5 h-5 text-gray-600" />
                      <h4 className="font-semibold text-gray-800">{type.title}</h4>
                    </div>
                    <Badge className={`text-xs ${type.color} border-0 mb-3`}>
                      {type.tone}
                    </Badge>
                    <div className="space-y-1">
                      {type.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Editorial Process & Standards */}
        <div className="bg-card p-6 rounded-xl shadow-lg border-2 border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Editorial Process & Standards</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-orange-600" />
                Brand Voice Consistency
              </h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• HubSpot-style Brand Voice Editor integration</li>
                <li>• AI-powered tone adherence checking</li>
                <li>• Consistent "Your road, your rules" messaging</li>
                <li>• Warm, knowledgeable, empowering voice</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-orange-600" />
                Quality Standards
              </h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• 800-1,500 words for core posts</li>
                <li>• 3,000+ words for pillar content</li>
                <li>• Original visuals with alt text</li>
                <li>• Data-backed claims with citations</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                Publishing & Updates
              </h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Quarterly content freshness reviews</li>
                <li>• Seasonal alignment with travel trends</li>
                <li>• A/B testing for headlines & imagery</li>
                <li>• Community feedback integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Results */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-7 h-7" />
            <h3 className="text-xl font-bold">AI Search Domination Metrics & Business Impact</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Crisis Response (2 Months)</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• First ChatGPT citations for damage prevention</li>
                <li>• Transform €2,500 fee controversy into transparency leadership</li>
                <li>• Complete Bing indexation of Phase 1 content</li>
                <li>• Negative search narrative interception</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Authority Building (6 Months)</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 4.4x more valuable AI search traffic vs traditional Google</li>
                <li>• 50+ ultra-specific pages generating AI citations</li>
                <li>• Dominate Portugal campervan rental AI queries</li>
                <li>• 72.5% engagement rate vs 60.4% traditional traffic</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">ROI & Business Impact</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• €255K investment → €1.58M return (520% ROI)</li>
                <li>• First-mover advantage in AI search market</li>
                <li>• Content moat: 300+ pages competitor barrier</li>
                <li>• Trust restoration through radical transparency</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <h4 className="font-semibold">Strategic Blog Integration Success Formula</h4>
            </div>
            <p className="text-sm italic opacity-90">
              "Transform every negative review into an educational opportunity. Turn every customer pain point into authoritative content. 
              Make every competitor weakness your transparency strength. The blog isn't just content—it's our AI search domination engine."
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};