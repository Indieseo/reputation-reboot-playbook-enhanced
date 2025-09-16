import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, DollarSign, Users, Target, AlertTriangle } from 'lucide-react';
import { competitorData, indieCampersCurrentState } from '../../data/competitorData';

interface CompetitorMatrixProps {
  showProjections?: boolean;
}

const CompetitorMatrix: React.FC<CompetitorMatrixProps> = ({ showProjections = true }) => {
  const [selectedMetric, setSelectedMetric] = useState<'rating' | 'marketShare' | 'pricing'>('rating');
  const [hoveredCompetitor, setHoveredCompetitor] = useState<string | null>(null);

  // Clean competitor data with correct Trustpilot ratings
  const competitors = [
    {
      name: 'Indie Campers (Current)',
      shortName: 'IC',
      rating: 3.9, // Trustpilot rating
      marketShare: 18.5,
      reviewCount: 19038,
      pricing: 70,
      color: '#ef4444', // Red for crisis
      status: 'crisis'
    },
    {
      name: 'Roadsurfer',
      shortName: 'RS', 
      rating: 4.0, // Trustpilot rating
      marketShare: 22.8,
      reviewCount: 7069,
      pricing: 89,
      color: '#8b5cf6', // Purple for leader
      status: 'leader'
    },
    {
      name: 'McRent',
      shortName: 'MC',
      rating: 3.8, // Trustpilot rating
      marketShare: 15.2,
      reviewCount: 2847,
      pricing: 95,
      color: '#f59e0b', // Orange for moderate
      status: 'moderate'
    },
    {
      name: 'Yescapa',
      shortName: 'YC',
      rating: 4.2, // Trustpilot rating (from reputation.trustpilot)
      marketShare: 8.3,
      reviewCount: 5594,
      pricing: 78,
      color: '#10b981', // Green for growing
      status: 'growing'
    }
  ];

  const targetPosition = {
    name: 'Indie Campers (Target)',
    shortName: 'IC',
    rating: 4.3,
    marketShare: 35.2,
    reviewCount: 25000,
    pricing: 85,
    color: '#059669',
    status: 'target'
  };

  // Calculate position on matrix with X-axis starting from 3.0 and increased height
  const getPosition = (rating: number, marketShare: number) => {
    // X position: rating 3.0-5.0 maps to 0%-100% of width (focused range)
    const x = ((rating - 3) / 2) * 100;
    // Y position: market share 0-40% maps to 100%-0% of height (inverted, full stretch)
    const y = 100 - (marketShare / 40) * 100;
    return { x, y };
  };

  // Get bubble size based on review count
  const getBubbleSize = (reviewCount: number) => {
    const minSize = 20;
    const maxSize = 40;
    const logFactor = Math.log(reviewCount) / Math.log(10000);
    return Math.max(minSize, Math.min(maxSize, minSize + logFactor * (maxSize - minSize)));
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'crisis': return <AlertTriangle className="w-3 h-3" />;
      case 'leader': return <Star className="w-3 h-3" />;
      case 'target': return <Target className="w-3 h-3" />;
      default: return <Users className="w-3 h-3" />;
    }
  };

  return (
    <div className="executive-card w-full">
      {/* Header */}
      <div className="mb-6">
        <h3 className="executive-subtitle">Competitive Positioning Matrix</h3>
        <p className="text-sm text-gray-600 mt-1">Trustpilot ratings vs market share positioning</p>
      </div>

      {/* Matrix Chart */}
      <div className="relative w-full h-[28rem] bg-white rounded-xl border-2 border-gray-200 p-4">
        {/* Grid Lines */}
        <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]">
          {/* Vertical lines for rating scale (3.0-5.0) */}
          {[3, 3.5, 4, 4.5, 5].map((rating) => {
            const x = ((rating - 3) / 2) * 100;
            return (
              <line
                key={rating}
                x1={`${x}%`}
                y1="0%"
                x2={`${x}%`}
                y2="100%"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            );
          })}
          {/* Horizontal lines for market share scale */}
          {[0, 10, 20, 30, 40].map((share) => {
            const y = 100 - (share / 40) * 100;
            return (
              <line
                key={share}
                x1="0%"
                y1={`${y}%`}
                x2="100%"
                y2={`${y}%`}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Axes Labels */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700">
          Trustpilot Rating
        </div>
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-semibold text-gray-700">
          Market Share (%)
        </div>

        {/* Rating Scale */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
          <span>3.0</span>
          <span>3.5</span>
          <span>4.0</span>
          <span>4.5</span>
          <span>5.0</span>
        </div>

        {/* Market Share Scale */}
        <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
          <span>40%</span>
          <span>30%</span>
          <span>20%</span>
          <span>10%</span>
          <span>0%</span>
        </div>

        {/* Competitor Bubbles */}
        {competitors.map((competitor, index) => {
          const position = getPosition(competitor.rating, competitor.marketShare);
          const bubbleSize = getBubbleSize(competitor.reviewCount);
          const isIndie = competitor.name.includes('Indie Campers');
          
          return (
            <motion.div
              key={competitor.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`
              }}
              onMouseEnter={() => setHoveredCompetitor(competitor.name)}
              onMouseLeave={() => setHoveredCompetitor(null)}
            >
              {/* Bubble */}
              <div className="relative">
                <div 
                  className="rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-200 hover:scale-110"
                  style={{
                    width: `${bubbleSize}px`,
                    height: `${bubbleSize}px`,
                    backgroundColor: competitor.color,
                    fontSize: `${Math.max(10, bubbleSize * 0.4)}px`
                  }}
                >
                  {competitor.shortName}
                </div>
                
                {/* Status Icon */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                  {getStatusIcon(competitor.status)}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Tooltips - Separate layer with highest z-index */}
        {competitors.map((competitor) => {
          const position = getPosition(competitor.rating, competitor.marketShare);
          
          return (
            hoveredCompetitor === competitor.name && (
              <motion.div
                key={`tooltip-${competitor.name}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-xl border border-gray-200 min-w-48 z-[99999]"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y + 8}%`
                }}
              >
                <div className="font-semibold text-gray-900 mb-2">{competitor.name}</div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">{competitor.rating.toFixed(1)}/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Market Share:</span>
                    <span className="font-semibold">{competitor.marketShare.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-semibold">€{competitor.pricing}/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reviews:</span>
                    <span className="font-semibold">{competitor.reviewCount.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            )
          );
        })}

        {/* Target Position */}
        {showProjections && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              left: `${getPosition(targetPosition.rating, targetPosition.marketShare).x}%`,
              top: `${getPosition(targetPosition.rating, targetPosition.marketShare).y}%`
            }}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-green-500 border-dashed bg-green-50 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  IC
                </div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-green-600 bg-white px-2 py-1 rounded shadow">
                12-Month Target
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Simple Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span>Indie Campers (Current)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <span>Roadsurfer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span>McRent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>Yescapa</span>
        </div>
        {showProjections && (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-green-500 border-dashed bg-green-50"></div>
            <span>Target Position</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitorMatrix;