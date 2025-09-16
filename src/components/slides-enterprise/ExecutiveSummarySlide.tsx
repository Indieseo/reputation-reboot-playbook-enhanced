import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Target, Clock, DollarSign, Star } from 'lucide-react';
import { SlideLayout } from '../slides/SlideLayout';

export const ExecutiveSummarySlide = ({ isPresenting }: { isPresenting?: boolean }) => {
  const keyMetrics = {
    currentCrisis: {
      severity: "Critical",
      impact: "€2.5M Revenue at Risk",
      scope: "1.1★ Sitejabber + €2,500 Fee Crisis"
    },
    opportunitySize: { trafficValue: "4.4x", engagementRate: "72.5% vs 60.4%" },
    timeToImpact: { phase1: "2 months", fullImplementation: "12 months" },
    investmentROI: { initialCost: 255000, projectedRevenue: 1580000 }
  };

  const roiPercentage = ((keyMetrics.investmentROI.projectedRevenue - keyMetrics.investmentROI.initialCost) / keyMetrics.investmentROI.initialCost * 100);

  return (
    <SlideLayout
      title="Executive Summary"
      subtitle="Crisis → Opportunity: AI Search Domination Strategy"
      isPresenting={isPresenting}
      variant="default"
    >
      <div className="space-y-8">

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metric-card text-center"
          >
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-red-600 mb-1">
              {keyMetrics.currentCrisis.severity}
            </div>
            <div className="text-sm text-gray-600">Trust Crisis Level</div>
            <div className="text-xs text-red-500 mt-1">Multi-Touchpoint Impact</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metric-card text-center"
          >
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-600 mb-1">
              {keyMetrics.opportunitySize.trafficValue}
            </div>
            <div className="text-sm text-gray-600">AI Traffic Multiplier</div>
            <div className="text-xs text-green-500 mt-1">Higher Value Traffic</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card text-center"
          >
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {keyMetrics.timeToImpact.phase1}
            </div>
            <div className="text-sm text-gray-600">Time to Impact</div>
            <div className="text-xs text-blue-500 mt-1">Crisis Stabilization</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card text-center"
          >
            <DollarSign className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {roiPercentage.toFixed(0)}%
            </div>
            <div className="text-sm text-gray-600">Projected ROI</div>
            <div className="text-xs text-purple-500 mt-1">12-Month Return</div>
          </motion.div>
        </div>

        {/* Strategic Imperative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="opportunity-indicator"
        >
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-green-600" />
            <div>
              <div className="font-semibold text-green-800">STRATEGIC IMPERATIVE</div>
              <div className="text-green-700">
                Transform multi-touchpoint trust crisis into competitive advantage through AI search domination
              </div>
            </div>
          </div>
        </motion.div>

        {/* Executive Summary Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="executive-card"
          >
            <h3 className="executive-subtitle mb-4">30-Second Business Case</h3>
            <div className="executive-body space-y-3">
              <p>
                <strong>Crisis:</strong> 1.1★ Sitejabber rating from €2,500 damage fee controversy, 50-minute WhatsApp delays,
                and "Premium Insurance is A SCAM" customer feedback creating toxic AI search context.
              </p>
              <p>
                <strong>Opportunity:</strong> Neil Patel's research proves AI search traffic worth 4.4x more with 72.5% engagement
                vs 60.4% traditional search, with 90% less competition currently.
              </p>
              <p>
                <strong>Solution:</strong> HubSpot's proven model: create 300+ ultra-specific pages following
                "transparency-first" approach to transform damage fee crisis into educational market leadership.
              </p>
              <p>
                <strong>ROI:</strong> €255K investment → €1.58M return ({roiPercentage.toFixed(0)}% ROI) 
                in 12 months through trust restoration and AI search capture.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="executive-card"
          >
            <h3 className="executive-subtitle mb-4">Competitive Advantage</h3>
            <div className="space-y-3">
              {[
                "European RV market €462M + 30.14% CAGR growth capture",
                "Transform €2,500 fee crisis into transparency leadership",
                "4.4x premium traffic (Neil Patel validated data)",
                "300+ content pages creating insurmountable competitor barrier",
                "6-month first-mover window before market adaptation"
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="executive-body text-sm">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Domain Consolidation Strategic Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="text-amber-600 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-amber-800 font-semibold mb-2">
                  Strategic Foundation: Domain Consolidation
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  <strong>Critical Implementation Note:</strong> This strategy assumes the planned consolidation of all Indie Campers digital properties into a single indiecampers.com domain with organized subfolders. This architectural decision will dramatically improve domain authority by concentrating link equity, enhance AI search visibility through unified content signals, and create a more coherent user experience. The proposed content structure (e.g., /guides/, /vehicles/, /destinations/, /compare/) requires this unified domain approach to achieve maximum SEO and AI search impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};