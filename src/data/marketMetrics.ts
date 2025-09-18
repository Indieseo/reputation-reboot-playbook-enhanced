import { DataSources } from '../types/executive.types';
import { getCitationById } from './citations';

export const marketMetrics: DataSources['marketOpportunity'] = {
  aiSearchVolume: {
    volume: 127500,
    difficulty: 68,
    cpc: 2.34,
    trends: [
      { month: "Jan 2024", volume: 89200 },
      { month: "Feb 2024", volume: 95300 },
      { month: "Mar 2024", volume: 108400 },
      { month: "Apr 2024", volume: 118600 },
      { month: "May 2024", volume: 125900 },
      { month: "Jun 2024", volume: 127500 },
      { month: "Jul 2024", volume: 142800 },
      { month: "Aug 2024", volume: 158200 },
      { month: "Sep 2024", volume: 145600 }
    ]
  },
  conversionRates: {
    current: 5.36, // Travel industry average from WordStream/LocaliQ
    projected: 5.36, // Conservative estimate based on industry benchmarks
    improvementFactor: 1.0 // Realistic baseline without speculation
  },
  trafficValue: {
    current: 450000, // EUR annually (estimated)
    projected: 495000, // EUR annually (7.81% growth rate)
    timeframe: "12 months",
    confidence: 75
  }
};

// Verified AI Search Statistics from PDF Sources
export const aiSearchResearch = {
  chatgptVisits: 1770000000, // 1.77B worldwide visits March 2024 (Similarweb)
  perplexityUsers: 10000000, // ~10M monthly active users May 2024 (Reuters)
  voiceAdoption: 34, // 34% US smart-speaker ownership (Edison Research)
  sessionDuration: {
    chatgpt: "7:05", // 425 seconds average visit time (Similarweb)
    traditional: "1:37" // Traditional search baseline
  },
  conversionRate: 5.36, // Travel industry average (WordStream/LocaliQ)
  marketShare: {
    google: 91, // 90-91% global search market share (StatCounter)
    ai: 10 // Emerging but growing
  }
};

export const reputationMetrics: DataSources['reputationMetrics'] = {
  overall: {
    platform: "Trustpilot (Primary Platform)",
    averageRating: 4.0, // Source: Travel_Rental_Reputation_Analysis_Sept_2025.pdf
    totalReviews: 19587, // Source: Travel_Rental_Reputation_Analysis_Sept_2025.pdf
    sentiment: {
      positive: 66, // 66% 5-star ratings - Source: Indie_Campers_Analysis_Report.pdf
      neutral: 14, // 14% 4-star ratings - Source: Indie_Campers_Analysis_Report.pdf
      negative: 14 // 14% 1-star ratings - Source: Indie_Campers_Analysis_Report.pdf
    },
    trends: [
      { date: "2024-01", rating: 3.2, volume: 45 },
      { date: "2024-02", rating: 2.8, volume: 52 },
      { date: "2024-03", rating: 2.1, volume: 67 },
      { date: "2024-04", rating: 1.6, volume: 74 },
      { date: "2024-05", rating: 1.3, volume: 68 },
      { date: "2024-06", rating: 1.1, volume: 69 }
    ]
  },
  trustpilot: {
    platform: "Trustpilot",
    averageRating: 4.0,
    totalReviews: 19587,
    sentiment: {
      positive: 60,
      neutral: 20,
      negative: 20
    },
    trends: [
      { date: "2024-01", rating: 3.8, volume: 1200 },
      { date: "2024-02", rating: 3.9, volume: 1350 },
      { date: "2024-03", rating: 3.9, volume: 1420 },
      { date: "2024-04", rating: 3.9, volume: 1380 },
      { date: "2024-05", rating: 3.9, volume: 1450 },
      { date: "2024-06", rating: 3.9, volume: 1400 }
    ]
  },
  reddit: {
    platform: "Reddit",
    overallSentiment: "negative",
    score: -0.68,
    mentions: 284,
    keywords: {
      positive: ["good locations", "nice vehicles", "easy booking"],
      negative: ["damage fees", "scam", "avoid", "terrible service", "hidden costs", "deposit theft"]
    }
  },
  googleReviews: {
    platform: "Google Reviews",
    averageRating: 3.4,
    totalReviews: 1247,
    sentiment: {
      positive: 35,
      neutral: 28,
      negative: 37
    },
    trends: [
      { date: "2024-01", rating: 4.1, volume: 89 },
      { date: "2024-02", rating: 3.9, volume: 94 },
      { date: "2024-03", rating: 3.7, volume: 112 },
      { date: "2024-04", rating: 3.5, volume: 128 },
      { date: "2024-05", rating: 3.3, volume: 134 },
      { date: "2024-06", rating: 3.4, volume: 127 }
    ]
  }
};

// Market Intelligence Data - From Verified PDF Research
export const marketIntelligence = {
  totalMarketSize: 261.7, // European RV rental market: €261.7 million (2024) - Source: European_Rv_Rental_Market_PDF.pdf (VMR)
  globalGrowthRate: 7.81, // CAGR 2024-2031 from Verified Market Research - Source: European_Rv_Rental_Market_PDF.pdf
  europeanGrowthRate: 7.81, // European market annual growth (VMR) - Source: European_Rv_Rental_Market_PDF.pdf
  indieCampersScale: {
    vehicles: 8000, // 8,000+ owned vehicles from PDF
    locations: 80, // 70-80+ locations on 3 continents from PDF
    annualNights: 1000000 // Over 1 million nights processed annually
  },
  digitalTransformation: {
    chatgptVisits: 1770000000, // 1.77B worldwide visits March 2024
    perplexityUsers: 10000000, // ~10M MAU as of May 2024
    voiceSearchOwnership: 34, // 34% US smart-speaker ownership
    sessionTime: 425 // 425 seconds average ChatGPT visit time
  },
  competitiveGaps: [
    {
      area: "AI Search Optimization",
      currentLeader: "None (First-mover opportunity)",
      opportunity: "100% market share available - Neil Patel confirms very few companies competing"
    },
    {
      area: "Market Leadership",
      currentLeader: "Roadsurfer (4.0★ rating, ~7,062 reviews)",
      opportunity: "Leverage 4.0★ rating with 19,587 reviews for scale advantage"
    },
    {
      area: "Damage Fee Transparency",
      currentLeader: "None (Industry-wide issue)",
      opportunity: "Create €2,500 damage fee educational authority"
    },
    {
      area: "Voice Search Optimization",
      currentLeader: "None",
      opportunity: "90% of users prefer voice - untapped market"
    }
  ],
  // Real Customer Pain Points from Customer Feedback & Reddit Analysis
  customerPainPoints: [
    "€2,500 damage fee controversy (Premium Insurance SCAM complaints)",
    "50-minute WhatsApp response delays",
    "Incredibly unhelpful Live Message staff leaving customers stranded 18+ hours",
    "Vehicle maintenance issues across 70+ locations",
    "Inconsistent service quality despite 1M+ annual nights processed",
    "Poor dispute resolution for damage claims over €10,000",
    "Airport pickup confusion and traffic navigation issues"
  ],
  
  // HubSpot Success Model Application
  hubspotStrategy: {
    approach: "Create 100-300 ultra-specific pages instead of 3 broad ones",
    focus: "Bottom-funnel buying intent content, not educational content",
    methodology: "AI to scale content creation for every possible customer scenario",
    result: "Majority of CRM-related ChatGPT responses + customers calling saying 'ChatGPT told me you were the best'",
    indieCampersApplication: "Transform damage fee crisis into transparent educational authority"
  }
};