import { Citation, CitationDatabase } from '../types/executive.types';

// Citations extracted from new-data PDFs and verified sources
export const citationDatabase: CitationDatabase = {
  hospitalityBenchmarks: [
    {
      id: 'shiji-2023',
      title: 'Guest Experience Benchmark (2019-2023)',
      source: 'Shiji ReviewPro',
      type: 'industry_report',
      date: '2023',
      methodology: '9,500 hotels; 48.6M reviews across 2019-2023; 60 sites; 68 languages',
      sampleSize: '9,500 hotels, 48.6M reviews',
      keyFindings: [
        'Global Review Index (GRI™) of 85.4% in 2023',
        'Google 86.0% rating average',
        'Booking.com 82.4% rating average',
        'Tripadvisor 83.8% rating average',
        '75.1% of sentiment mentions were positive',
        'Hoteliers responded to 62.5% of reviews in 2023',
        'Average response time: ~4.3 days for positive reviews, ~5.6 days for negative reviews'
      ],
      reliability: 'high'
    },
    {
      id: 'cornell-chr-2013',
      title: 'The Impact of Social Media on Lodging Performance',
      source: 'Cornell Center for Hospitality Research (CHR)',
      type: 'academic',
      date: '2013',
      methodology: 'comScore panel of 1,720 hotel purchase sessions; multi-year hotel performance datasets',
      sampleSize: '1,720 purchase sessions',
      keyFindings: [
        '+1 point in review score → +11.2% room price',
        '-9.5% price sensitivity improvement',
        '+1% in GRI™ → +0.89% ADR, +0.54% occupancy, +1.42% RevPAR'
      ],
      reliability: 'high'
    }
  ],

  marketResearch: [
    {
      id: 'vmr-europe-rv-2024',
      title: 'Europe RV Rental Market Report 2024',
      source: 'Verified Market Research',
      type: 'industry_report',
      date: '2024',
      methodology: 'Market analysis with USD to EUR conversion using ECB rates',
      keyFindings: [
        'European RV rental market: €261.7 million (2024)',
        'CAGR 7.81% (2024-2031)',
        'Market projected to reach USD ~271.93m in 2024'
      ],
      reliability: 'high'
    },
    {
      id: 'ecc-net-2023',
      title: 'ECC-Net Report 2023',
      source: 'European Consumer Centres Network',
      type: 'government',
      date: '2023',
      keyFindings: [
        'Assisted 125,000+ consumers in 2023',
        'Directly intervened in 22,500 trader cases',
        'Facilitated €9M+ in refunds/compensation'
      ],
      reliability: 'high'
    }
  ],

  reputationStudies: [
    {
      id: 'proserpio-zervas-2017',
      title: 'Online Reputation Management: Estimating the Impact of Management Responses on Consumer Reviews',
      source: 'Marketing Science (Proserpio & Zervas)',
      type: 'academic',
      date: '2017',
      methodology: 'Large-scale study of Texas hotels on TripAdvisor and Expedia',
      sampleSize: '5,356 TripAdvisor hotels (314,776 reviews); 3,845 Expedia hotels (519,962 reviews); matched sample 2,697 hotels (552,051 reviews)',
      keyFindings: [
        '+0.12 stars average rating improvement after responding',
        '+12% review volume increase',
        '27% of responding hotels increased rounded rating by ≥ 0.5 stars within six months'
      ],
      reliability: 'high'
    },
    {
      id: 'xie-so-wang-2017',
      title: 'Joint Effects of Management Responses and Online Reviews on Hotel Financial Performance',
      source: 'International Journal of Hospitality Management',
      type: 'academic',
      date: '2017',
      methodology: 'Multi-study analysis of management responses and financial performance',
      sampleSize: '22,483 management responses matched to 76,649 TripAdvisor reviews; 26 quarters',
      keyFindings: [
        'Timely and detailed management responses improve future financial performance',
        'Staff-level responses can outperform executive-signed posts',
        'Consistent responses across all reviews perform better than selective responding'
      ],
      reliability: 'high'
    }
  ],

  competitorAnalysis: [
    {
      id: 'trustpilot-roadsurfer-2024',
      title: 'Roadsurfer Trustpilot Analysis',
      source: 'Trustpilot Platform Data',
      type: 'company_data',
      date: '2024',
      keyFindings: [
        '4.0★ rating with ~7,062 reviews',
        '~10,000 vehicles fleet size',
        '90+ stations, 16 countries coverage',
        '"from €85/night" pricing'
      ],
      reliability: 'high'
    },
    {
      id: 'trustpilot-yescapa-2024',
      title: 'Yescapa P2P Marketplace Analysis',
      source: 'Multiple Platform Data',
      type: 'company_data',
      date: '2024',
      keyFindings: [
        '4.2★ rating with ~5,300 Trustpilot reviews',
        '~30,000 vehicles listed (post-merger with Goboony)',
        '10 countries / ~10,000 cities coverage',
        'Typically starts from €85/day'
      ],
      reliability: 'high'
    },
    {
      id: 'indie-campers-trustpilot-2025',
      title: 'Indie Campers Reputation Analysis September 2025',
      source: 'Travel Rental Reputation Analysis Report',
      type: 'company_data',
      date: '2025-09',
      keyFindings: [
        '4.0★ rating with 19,587 reviews on Trustpilot',
        '66% of reviews are 5-star, 14% are 4-star, 14% are 1-star',
        '80% of customers rate the company positively',
        '8,000+ owned vehicles',
        '70-80+ locations on 3 continents',
        'Multiple platform presence with varying feedback patterns'
      ],
      reliability: 'high'
    }
  ],

  financialImpact: [
    {
      id: 'mckinsey-customer-care-2024',
      title: 'Where is customer care in 2024?',
      source: 'McKinsey & Company',
      type: 'industry_report',
      date: '2024',
      keyFindings: [
        'Response time directly correlates with customer satisfaction',
        'Digital care channels becoming increasingly important',
        'Speed and personalization key factors in customer retention'
      ],
      reliability: 'high'
    },
    {
      id: 'retail-waiting-study-2023',
      title: 'The clock is ticking—Or is it? Customer satisfaction response to waiting shorter vs. longer than expected',
      source: 'Journal of Retailing',
      type: 'academic',
      date: '2023',
      methodology: 'Multi-study (experiments + field); service encounter analysis',
      keyFindings: [
        'Waiting shorter than expected increases satisfaction more than equal-length waits that are longer than expected',
        'Service encounter expectations significantly impact customer perception',
        'Response time management can be more important than absolute response time'
      ],
      reliability: 'high'
    }
  ]
};

// Helper functions for working with citations
export const getCitationsByType = (type: Citation['type']): Citation[] => {
  return Object.values(citationDatabase).flat().filter(citation => citation.type === type);
};

export const getCitationById = (id: string): Citation | undefined => {
  return Object.values(citationDatabase).flat().find(citation => citation.id === id);
};

export const getHighReliabilityCitations = (): Citation[] => {
  return Object.values(citationDatabase).flat().filter(citation => citation.reliability === 'high');
};

// Citation formatting helpers
export const formatCitation = (citation: Citation): string => {
  const year = citation.date;
  if (citation.type === 'academic') {
    return `${citation.source} (${year}). ${citation.title}`;
  } else if (citation.type === 'industry_report') {
    return `${citation.source} — ${citation.title} (${year})`;
  } else if (citation.type === 'government') {
    return `${citation.source} — ${citation.title} (${year})`;
  } else {
    return `${citation.title} — ${citation.source} (${year})`;
  }
};

export const getCitationSummary = (): { total: number; byType: Record<Citation['type'], number>; byReliability: Record<Citation['reliability'], number> } => {
  const allCitations = Object.values(citationDatabase).flat();

  const byType = allCitations.reduce((acc, citation) => {
    acc[citation.type] = (acc[citation.type] || 0) + 1;
    return acc;
  }, {} as Record<Citation['type'], number>);

  const byReliability = allCitations.reduce((acc, citation) => {
    acc[citation.reliability] = (acc[citation.reliability] || 0) + 1;
    return acc;
  }, {} as Record<Citation['reliability'], number>);

  return {
    total: allCitations.length,
    byType,
    byReliability
  };
};