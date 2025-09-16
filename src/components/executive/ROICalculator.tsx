import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Target } from 'lucide-react';

interface ROICalculatorProps {
  phase?: 1 | 2 | 3 | 'all';
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ phase = 'all' }) => {
  const [timeframe, setTimeframe] = useState<6 | 12 | 24>(12);
  const [animatedValues, setAnimatedValues] = useState({
    investment: 0,
    revenue: 0,
    roi: 0
  });

  const calculations = {
    phase1: {
      investment: 45000,
      timeframe: 2,
      expectedRevenue: 180000,
      description: "Crisis Response & Content Foundation"
    },
    phase2: {
      investment: 85000,
      timeframe: 6,
      expectedRevenue: 420000,
      description: "Authority Building & SEO Optimization"
    },
    phase3: {
      investment: 125000,
      timeframe: 12,
      expectedRevenue: 980000,
      description: "AI Integration & Market Domination"
    }
  };

  const getPhaseData = () => {
    switch (phase) {
      case 1:
        return calculations.phase1;
      case 2:
        return calculations.phase2;
      case 3:
        return calculations.phase3;
      default:
        return {
          investment: 255000,
          timeframe: 12,
          expectedRevenue: 1580000,
          description: "Complete AI Search Domination Strategy"
        };
    }
  };

  const phaseData = getPhaseData();
  const annualizedRevenue = (phaseData.expectedRevenue / phaseData.timeframe) * 12;
  const timeframedRevenue = (annualizedRevenue / 12) * timeframe;
  const roi = ((timeframedRevenue - phaseData.investment) / phaseData.investment) * 100;
  const paybackMonths = (phaseData.investment / (annualizedRevenue / 12));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        investment: phaseData.investment,
        revenue: timeframedRevenue,
        roi: roi
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [timeframe, phase]);

  const CountUpNumber: React.FC<{ value: number; prefix?: string; suffix?: string; decimals?: number }> = ({ 
    value, prefix = '', suffix = '', decimals = 0 
  }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = value / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }, [value]);

    return (
      <span className="metric-counter">
        {prefix}{displayValue.toFixed(decimals).toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <div className="executive-card w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="executive-subtitle">Investment ROI Analysis</h3>
        <div className="flex gap-2">
          {[6, 12, 24].map((months) => (
            <button
              key={months}
              onClick={() => setTimeframe(months as 6 | 12 | 24)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                timeframe === months
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {months}M
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-6">
        {phaseData.description}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Investment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="kpi-widget text-center"
        >
          <DollarSign className="w-8 h-8 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-600">
            <CountUpNumber value={phaseData.investment} prefix="€" />
          </div>
          <div className="text-sm text-gray-500">Total Investment</div>
        </motion.div>

        {/* Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="kpi-widget text-center"
        >
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">
            <CountUpNumber value={timeframedRevenue} prefix="€" />
          </div>
          <div className="text-sm text-gray-500">Projected Revenue ({timeframe}M)</div>
        </motion.div>

        {/* ROI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="kpi-widget text-center"
        >
          <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className={`text-2xl font-bold ${roi > 200 ? 'text-green-600' : roi > 100 ? 'text-blue-600' : 'text-yellow-600'}`}>
            <CountUpNumber value={roi} suffix="%" decimals={1} />
          </div>
          <div className="text-sm text-gray-500">Return on Investment</div>
        </motion.div>

        {/* Payback Period */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="kpi-widget text-center"
        >
          <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">
            <CountUpNumber value={paybackMonths} decimals={1} />
          </div>
          <div className="text-sm text-gray-500">Payback (Months)</div>
        </motion.div>
      </div>

      {/* ROI Visualization */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-800">ROI Timeline Projection</h4>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            roi > 300 ? 'bg-green-100 text-green-800' :
            roi > 200 ? 'bg-blue-100 text-blue-800' :
            roi > 100 ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {roi > 300 ? 'Exceptional ROI' :
             roi > 200 ? 'Strong ROI' :
             roi > 100 ? 'Good ROI' :
             'Conservative ROI'}
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4 h-20 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(roi / 5, 100)}%` }}
            transition={{ duration: 2, ease: "easeOut" }}
            className={`h-full rounded-lg ${
              roi > 300 ? 'bg-gradient-to-r from-green-400 to-green-600' :
              roi > 200 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
              roi > 100 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
              'bg-gradient-to-r from-red-400 to-red-600'
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {roi.toFixed(1)}% ROI
            </span>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="font-semibold text-green-800">Best Case</div>
          <div className="text-lg font-bold text-green-600">
            {(roi * 1.4).toFixed(0)}% ROI
          </div>
          <div className="text-xs text-green-600">Faster adoption</div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="font-semibold text-blue-800">Expected</div>
          <div className="text-lg font-bold text-blue-600">
            {roi.toFixed(0)}% ROI
          </div>
          <div className="text-xs text-blue-600">Conservative estimate</div>
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="font-semibold text-yellow-800">Worst Case</div>
          <div className="text-lg font-bold text-yellow-600">
            {(roi * 0.6).toFixed(0)}% ROI
          </div>
          <div className="text-xs text-yellow-600">Delayed execution</div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;