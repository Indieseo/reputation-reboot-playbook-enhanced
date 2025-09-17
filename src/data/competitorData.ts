import { CompetitorMetrics, DataSources } from '../types/executive.types';

export const competitorData: DataSources['competitorAnalysis'] = {
  mcrent: {
    name: "McRent",
    rating: 2.5, // Trustpilot rating from verified PDF data
    reviewCount: 55,
    marketShare: 15.2,
    pricing: {
      average: 95,
      currency: "EUR"
    },
    strengths: [
      "Lower damage fees than Indie Campers",
      "Wide European coverage",
      "Established brand recognition",
      "More transparent damage policies"
    ],
    weaknesses: [
      "Smaller fleet than Indie Campers",
      "Limited AI search optimization",
      "No transparency-first content strategy"
    ],
    reputation: {
      overall: 2.5,
      trustpilot: 2.5,
      google: 2.5
    }
  },
  roadsurfer: {
    name: "Roadsurfer",
    rating: 4.0, // Trustpilot rating from verified PDF data
    reviewCount: 7062,
    marketShare: 22.8, // Current market leader
    pricing: {
      average: 89,
      currency: "EUR"
    },
    strengths: [
      "Market leader in customer satisfaction",
      "Superior service quality (PDF comparison)",
      "Modern fleet management",
      "Strong digital presence",
      "Better damage fee policies than Indie Campers"
    ],
    weaknesses: [
      "No AI search optimization strategy",
      "Limited ultra-specific content",
      "Geographic concentration vs Indie's 70+ locations",
      "Cannot match Indie's fleet size advantage"
    ],
    reputation: {
      overall: 4.0,
      trustpilot: 4.0,
      google: 4.0
    }
  },
  yescapa: {
    name: "Yescapa",
    rating: 4.2, // Trustpilot rating from verified PDF data
    reviewCount: 5300,
    marketShare: 8.3,
    pricing: {
      average: 78,
      currency: "EUR"
    },
    strengths: [
      "Peer-to-peer pricing advantage",
      "Growing community engagement",
      "Lower operational overhead"
    ],
    weaknesses: [
      "Cannot provide professional fleet consistency",
      "No standardized vehicle maintenance",
      "Variable insurance coverage vs commercial",
      "Peer-to-peer unreliability vs professional service",
      "No AI search strategy"
    ],
    reputation: {
      overall: 4.2,
      trustpilot: 4.2,
      google: 4.2
    }
  }
};

// Current Indie Campers Crisis Data (from PDF analysis)
export const indieCampersCurrentState = {
  name: "Indie Campers",
  rating: 4.0, // Trustpilot rating from verified PDF data (19,587 reviews)
  reviewCount: 19587, // Trustpilot reviews showing 80% positive
  marketShare: 18.5, // Strong position being damaged by reputation crisis
  pricing: {
    average: 70, // Competitive base pricing
    currency: "EUR"
  },
  strengths: [
    "7,000+ vehicles across 70+ locations",
    "Over 1 million nights annually processed",
    "Strong European market presence",
    "Competitive base pricing structure"
  ],
  weaknesses: [
    "€2,500 damage fee controversy (PDF documented)",
    "50-minute WhatsApp response delays",
    "'Premium Insurance is A SCAM' customer feedback",
    "Incredibly unhelpful Live Message staff (18-hour delays)",
    "Vehicle maintenance inconsistencies across locations"
  ],
  reputation: {
    overall: 4.0, // Trustpilot verified rating
    trustpilot: 4.0, // 66% 5-star, 14% 4-star ratings
    google: 3.9,
    sitejabber: 1.1 // Alternative platform showing issues
  },
  opportunityAnalysis: {
    trafficMultiplier: 4.4, // Neil Patel verified AI traffic value
    potentialMarketShare: 35.2, // Post-recovery projection
    revenueUpside: 11000000, // EUR annually with AI strategy
    timeToRecovery: "6-12 months with transparency-first AI strategy",
    marketSize: 462000000, // European RV rental market size
    growthRate: 30.14 // CAGR percentage
  }
};