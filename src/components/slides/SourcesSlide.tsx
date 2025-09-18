import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { citationDatabase, getCitationSummary } from '../../data/citations';
import { CitationList } from '@/components/ui/Citation';

export const SourcesSlide: React.FC = () => {
  const summary = getCitationSummary();
  const allCitations = Object.values(citationDatabase).flat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Data Sources & Citations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All data in this presentation is backed by verified industry reports,
            academic research, government data, and comprehensive market analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Citation Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Sources:</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {summary.total}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">By Type:</h4>
                  {Object.entries(summary.byType).map(([type, count]) => (
                    <div key={type} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 capitalize">
                        {type.replace('_', ' ')}:
                      </span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Reliability:</h4>
                  {Object.entries(summary.byReliability).map(([reliability, count]) => (
                    <div key={reliability} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 capitalize">{reliability}:</span>
                      <Badge
                        variant="outline"
                        className={
                          reliability === 'high' ? 'bg-green-50 text-green-700' :
                          reliability === 'medium' ? 'bg-yellow-50 text-yellow-700' :
                          'bg-red-50 text-red-700'
                        }
                      >
                        {count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Key Academic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {citationDatabase.reputationStudies.slice(0, 2).map((citation) => (
                  <div key={citation.id} className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-sm text-blue-900 mb-1">
                      {citation.source}
                    </div>
                    <div className="text-xs text-blue-700">
                      {citation.title}
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs bg-blue-100 text-blue-800">
                      {citation.date}
                    </Badge>
                  </div>
                ))}
                {citationDatabase.hospitalityBenchmarks.slice(0, 1).map((citation) => (
                  <div key={citation.id} className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium text-sm text-purple-900 mb-1">
                      {citation.source}
                    </div>
                    <div className="text-xs text-purple-700">
                      {citation.title}
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs bg-purple-100 text-purple-800">
                      {citation.date}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Market Research</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {citationDatabase.marketResearch.map((citation) => (
                  <div key={citation.id} className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-sm text-green-900 mb-1">
                      {citation.source}
                    </div>
                    <div className="text-xs text-green-700">
                      {citation.title}
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs bg-green-100 text-green-800">
                      {citation.date}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Methodology & Data Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Data Collection Standards</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Industry reports from PwC, Deloitte, McKinsey, and Verified Market Research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Peer-reviewed academic papers from Marketing Science and hospitality journals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Government consumer protection data from European Consumer Centres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Company-verified platform data from Trustpilot, Google Reviews, and market analysis</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Sample Sizes & Coverage</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>48.6M reviews</strong> from 9,500 hotels across 68 languages (Shiji ReviewPro)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>552K+ reviews</strong> analyzed across multiple hotel platforms (Academic studies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>125K+ consumers</strong> assisted by European Consumer Centres (2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>32K+ reviews</strong> from major RV rental platforms verified September 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            All data verified and extracted from PDF sources in the new-data directory.
            Citations available on request for detailed methodology and sample information.
          </p>
        </div>
      </div>
    </div>
  );
};