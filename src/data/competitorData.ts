import { CompetitorMetrics, DataSources } from '../types/executive.types';

export const competitorData: DataSources['competitorAnalysis'] = {
  mcrent: {
    name: "McRent",
    rating: 3.8,
    reviewCount: 2847,
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
      overall: 3.8,
      trustpilot: 3.8,
      google: 4.1
    }
  },
  roadsurfer: {
    name: "Roadsurfer",
    rating: 4.2, // Market leader in customer satisfaction
    reviewCount: 7069,
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
      overall: 4.2,
      trustpilot: 4.0,
      google: 4.2
    }
  },
  yescapa: {
    name: "Yescapa",
    rating: 3.9, // Peer-to-peer uncertainty vs professional fleet
    reviewCount: 5594,
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
      overall: 3.9,
      trustpilot: 4.2,
      google: 3.9
    }
  }
};

// Current Indie Campers Crisis Data (from PDF analysis)
export const indieCampersCurrentState = {
  name: "Indie Campers",
  rating: 1.1, // Sitejabber rating from 69 reviews (PDF data)
  reviewCount: 69, // Sitejabber reviews showing systematic complaints
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
    overall: 1.1, // Sitejabber crisis level (PDF confirmed)
    trustpilot: 3.9, // Better on other platforms
    google: 3.4,
    sitejabber: 1.1 // Critical crisis state
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