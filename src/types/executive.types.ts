// Executive Dashboard Types for Enterprise Presentation
export interface CompetitorMetrics {
  name: string;
  rating: number;
  reviewCount: number;
  marketShare: number;
  pricing: {
    average: number;
    currency: string;
  };
  strengths: string[];
  weaknesses: string[];
  reputation: {
    overall: number;
    trustpilot: number;
    google: number;
  };
}

export interface ReviewData {
  platform: string;
  averageRating: number;
  totalReviews: number;
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  trends: {
    date: string;
    rating: number;
    volume: number;
  }[];
}

export interface SentimentData {
  platform: string;
  overallSentiment: 'positive' | 'neutral' | 'negative';
  score: number;
  mentions: number;
  keywords: {
    positive: string[];
    negative: string[];
  };
}

export interface SearchMetrics {
  volume: number;
  difficulty: number;
  cpc: number;
  trends: {
    month: string;
    volume: number;
  }[];
}

export interface ConversionData {
  current: number;
  projected: number;
  improvementFactor: number;
}

export interface RevenueData {
  current: number;
  projected: number;
  timeframe: string;
  confidence: number;
}

export interface DataSources {
  competitorAnalysis: {
    mcrent: CompetitorMetrics;
    roadsurfer: CompetitorMetrics;
    yescapa: CompetitorMetrics;
  };
  reputationMetrics: {
    overall: ReviewData;
    trustpilot: ReviewData;
    reddit: SentimentData;
    googleReviews: ReviewData;
  };
  marketOpportunity: {
    aiSearchVolume: SearchMetrics;
    conversionRates: ConversionData;
    trafficValue: RevenueData;
  };
}

export interface ExecutiveSummary {
  keyMetrics: {
    currentCrisis: { 
      rating: number; 
      reviewCount: number; 
      platform: string; 
    };
    opportunitySize: { 
      trafficValue: string; 
      engagementRate: string; 
    };
    timeToImpact: { 
      phase1: string; 
      fullImplementation: string; 
    };
    investmentROI: { 
      initialCost: number; 
      projectedRevenue: number; 
    };
  };
  strategicImperative: string;
  competitiveAdvantage: string[];
  executionTimeline: Phase[];
}

export interface Phase {
  id: number;
  name: string;
  duration: string;
  objectives: string[];
  deliverables: string[];
  risks: RiskFactor[];
  expectedOutcome: string;
  budget: number;
  success_metrics: string[];
}

export interface RiskFactor {
  category: 'technical' | 'market' | 'competitive' | 'resource';
  description: string;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
}

export interface ExecutiveKPIs {
  financialMetrics: {
    revenueImpact: TimeSeries;
    costAvoidance: number;
    marketShareGrowth: number;
    customerAcquisitionROI: number;
  };
  operationalMetrics: {
    brandSentimentImprovement: number;
    customerServiceEfficiency: number;
    competitivePositioning: RankingData;
  };
  strategicMetrics: {
    aiSearchDominance: number;
    firstMoverAdvantage: number;
    marketBarrierCreation: number;
  };
}

export interface TimeSeries {
  date: string;
  value: number;
}

export interface RankingData {
  current: number;
  projected: number;
  competitors: {
    name: string;
    rank: number;
  }[];
}

export interface PresentationController {
  slideManagement: {
    currentSlide: number;
    totalSlides: number;
    timePerSlide: number[];
    presenterNotes: string[];
  };
  interactivity: {
    livePolling: boolean;
    audienceQuestions: Question[];
    realTimeDataRefresh: boolean;
  };
  analytics: {
    slideViewTime: number[];
    interactionHeatmap: Point[];
    executiveEngagement: EngagementMetrics;
  };
}

export interface Question {
  id: string;
  question: string;
  askedBy: string;
  timestamp: Date;
  answered: boolean;
  answer?: string;
}

export interface Point {
  x: number;
  y: number;
  intensity: number;
}

export interface EngagementMetrics {
  attentionScore: number;
  interactionRate: number;
  questionVolume: number;
  decisionPoints: number;
}

export interface ContentMetrics {
  title: string;
  expectedTraffic: number;
  conversionRate: number;
  revenueImpact: number;
  timeline: string;
}

export interface CrisisResponseMetrics {
  contentDeployment: {
    damagePreventionHub: ContentMetrics;
    insuranceTransparency: ContentMetrics;
    firstTimeGuide: ContentMetrics;
  };
  expectedOutcomes: {
    sentimentImprovement: number;
    searchVisibilityIncrease: number;
    customerAcquisitionCost: number;
  };
  riskMitigation: RiskFactor[];
}