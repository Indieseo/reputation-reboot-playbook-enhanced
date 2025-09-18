import React, { useState } from 'react';
import { Citation as CitationType } from '../../types/executive.types';
import { formatCitation } from '../../data/citations';
import { Badge } from './badge';
import { Card, CardContent } from './card';
import { Button } from './button';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';

interface CitationProps {
  citation: CitationType;
  showExpanded?: boolean;
  compact?: boolean;
}

interface CitationListProps {
  citations: CitationType[];
  title?: string;
  compact?: boolean;
}

interface InlineCitationProps {
  citationIds: string[];
  citations: CitationType[];
}

export const Citation: React.FC<CitationProps> = ({
  citation,
  showExpanded = false,
  compact = false
}) => {
  const [isExpanded, setIsExpanded] = useState(showExpanded);

  const getReliabilityColor = (reliability: CitationType['reliability']) => {
    switch (reliability) {
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: CitationType['type']) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'industry_report': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'government': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'company_data': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'benchmark': return 'bg-teal-100 text-teal-800 border-teal-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded px-2 py-1">
        <Badge variant="outline" className={`text-xs ${getTypeColor(citation.type)}`}>
          {citation.type.replace('_', ' ')}
        </Badge>
        <span>{formatCitation(citation)}</span>
      </div>
    );
  }

  return (
    <Card className="border-l-4 border-l-blue-500">
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-medium text-sm">{formatCitation(citation)}</h4>
              {citation.url && (
                <a
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  View Source
                </a>
              )}
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className={`text-xs ${getTypeColor(citation.type)}`}>
                {citation.type.replace('_', ' ')}
              </Badge>
              <Badge variant="outline" className={`text-xs ${getReliabilityColor(citation.reliability)}`}>
                {citation.reliability}
              </Badge>
            </div>
          </div>

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 p-0 h-auto"
            >
              {isExpanded ? <ChevronDownIcon className="w-3 h-3" /> : <ChevronRightIcon className="w-3 h-3" />}
              Details
            </Button>
            {isExpanded && (
              <div className="mt-2 space-y-2">
                {citation.methodology && (
                  <div>
                    <span className="text-xs font-medium text-gray-700">Methodology:</span>
                    <span className="text-xs text-gray-600 ml-2">{citation.methodology}</span>
                  </div>
                )}
                {citation.sampleSize && (
                  <div>
                    <span className="text-xs font-medium text-gray-700">Sample Size:</span>
                    <span className="text-xs text-gray-600 ml-2">{citation.sampleSize}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs font-medium text-gray-700">Key Findings:</span>
                  <ul className="text-xs text-gray-600 ml-4 mt-1">
                    {citation.keyFindings.map((finding, index) => (
                      <li key={index} className="list-disc">{finding}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const CitationList: React.FC<CitationListProps> = ({
  citations,
  title = "Sources",
  compact = false
}) => {
  if (citations.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <div className={`space-y-2 ${compact ? 'space-y-1' : ''}`}>
        {citations.map((citation) => (
          <Citation
            key={citation.id}
            citation={citation}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
};

export const InlineCitation: React.FC<InlineCitationProps> = ({
  citationIds,
  citations
}) => {
  const relevantCitations = citations.filter(citation =>
    citationIds.includes(citation.id)
  );

  if (relevantCitations.length === 0) return null;

  return (
    <span className="inline-flex items-center gap-1">
      {relevantCitations.map((citation, index) => (
        <React.Fragment key={citation.id}>
          <sup className="text-xs text-blue-600 hover:text-blue-800 cursor-help"
               title={formatCitation(citation)}>
            [{index + 1}]
          </sup>
          {index < relevantCitations.length - 1 && <span className="text-xs">,</span>}
        </React.Fragment>
      ))}
    </span>
  );
};