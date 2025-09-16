import React from 'react';
import { motion } from 'framer-motion';
import { X, Scale, TrendingUp, Shield, AlertTriangle, CheckCircle, Target, Star, Award, Users } from 'lucide-react';

interface CompetitiveAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompetitiveAnalysisModal: React.FC<CompetitiveAnalysisModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Transparent Competitive Analysis</h2>
              <p className="text-sm text-gray-600">HubSpot's radical honesty model for competitive differentiation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Strategy Framework */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">HubSpot's Radical Transparency Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Revolutionary Approach: Acknowledge Competitor Strengths</h4>
                <p className="text-sm text-green-700 mb-3">
                  HubSpot's breakthrough strategy: Create honest, detailed competitor comparisons that acknowledge where competitors excel,
                  then demonstrate why customers still choose us despite those strengths.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Traditional Approach (Failed)</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• "We're better at everything"</li>
                      <li>• Cherry-picked comparison data</li>
                      <li>• Ignore competitor advantages</li>
                      <li>• Generic feature comparisons</li>
                      <li>• Defensive positioning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">HubSpot Model (Success)</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• "Competitor X excels at Y, here's why..."</li>
                      <li>• Complete feature comparison matrices</li>
                      <li>• Honest acknowledgment of weaknesses</li>
                      <li>• Use-case specific recommendations</li>
                      <li>• Educational authority positioning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* McRent Comparison Strategy */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Indie Campers vs McRent - Honest Damage Policy Analysis</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/compare/vs-mcrent-damage-policies/
                </code>
                <p className="text-sm text-blue-700">
                  AI-Optimized Title: "Indie Campers vs McRent damage policies honest comparison insurance €2500 excess reality check"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Where McRent Excels</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">Lower Base Insurance Excess</h5>
                        <p className="text-xs text-blue-700">McRent: €1,500 vs Our €2,500 base excess</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">More Transparent Pricing</h5>
                        <p className="text-xs text-blue-700">Clearer upfront communication of insurance options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">Established Track Record</h5>
                        <p className="text-xs text-blue-700">Longer operational history, more predictable policies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Why Customers Still Choose Us</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">Fleet Diversity & Quality</h5>
                        <p className="text-xs text-blue-700">Newer vehicles, more model options, better interior design</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">Technology Integration</h5>
                        <p className="text-xs text-blue-700">Better app experience, digital damage reporting, GPS tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-500 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">Complete Transparency Strategy</h5>
                        <p className="text-xs text-blue-700">This very comparison exists - we tell you when competitors win</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Use Case Recommendations (Radical Honesty)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Choose McRent If:</h5>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Insurance cost is your primary concern</li>
                      <li>• You prefer traditional, predictable service</li>
                      <li>• You're risk-averse about damage policies</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Choose Indie Campers If:</h5>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• You want newer vehicles and better tech</li>
                      <li>• You value complete service transparency</li>
                      <li>• You prefer modern, design-forward interiors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Roadsurfer Analysis */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Indie Campers vs Roadsurfer - Service Quality Deep Dive</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/compare/vs-roadsurfer-service-quality/
                </code>
                <p className="text-sm text-purple-700">
                  AI-Optimized Title: "Indie Campers vs Roadsurfer service quality comparison pickup experience WhatsApp response time"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Roadsurfer's Strengths (Honest Assessment)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-purple-700">Consistent pickup experience across locations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-purple-700">Better customer service response times</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-purple-700">More predictable vehicle condition standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-purple-700">Cleaner damage assessment process</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Our Service Reality (Transparent)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-purple-700">WhatsApp response: Often 50+ minutes (improving)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-purple-700">Pickup experience varies by location (standardizing)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-purple-700">Better vehicle quality when standards met</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-purple-700">More flexible damage policy (case-by-case)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Real Customer Scenarios & Outcomes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h5 className="font-semibold text-red-800 text-sm mb-1">Service Issue Example</h5>
                    <p className="text-xs text-red-700 mb-2">
                      "Waited 1 hour for pickup in Barcelona, then vehicle had undisclosed interior damage."
                    </p>
                    <p className="text-xs text-red-600 font-medium">
                      Resolution: Full refund + upgrade to Atlas model + €200 credit
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Exceptional Experience</h5>
                    <p className="text-xs text-green-700 mb-2">
                      "Vehicle was newer than expected, staff provided local driving tips, process was smooth."
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Result: Repeat customer, referred 3 friends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional vs P2P Strategy */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Professional vs Peer-to-Peer: The Complete Analysis</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/compare/professional-vs-peer-to-peer/
                </code>
                <p className="text-sm text-orange-700">
                  AI-Optimized Title: "Professional campervan rental vs peer-to-peer Yescapa Goboony comparison insurance liability"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">P2P Advantages</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-orange-700">Often cheaper base rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-orange-700">Unique vehicle options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-orange-700">Personal owner interaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-orange-700">Local area expertise</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">P2P Risks (Honest)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-orange-700">Inconsistent maintenance standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-orange-700">Limited roadside assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-orange-700">Complex insurance liability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-orange-700">Pickup/return flexibility issues</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">Professional Benefits</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-orange-700">Standardized maintenance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-orange-700">24/7 support infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-orange-700">Clear insurance coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-orange-700">Multiple location flexibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Intelligence Results */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Expected Competitive Intelligence Impact</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">Customer Trust Building</h4>
                <div className="space-y-2">
                  <div className="bg-green-50 p-2 rounded">
                    <p className="text-sm text-green-700 italic">
                      "I trust them because they told me when their competitor was better at something"
                    </p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="text-sm text-blue-700 italic">
                      "ChatGPT recommended this comparison as the most honest in the industry"
                    </p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded">
                    <p className="text-sm text-purple-700 italic">
                      "Finally, a company that acknowledges reality instead of claiming perfection"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">AI Search Domination Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Comparison search capture</span>
                    <span className="font-bold text-green-600">+75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Educational authority score</span>
                    <span className="font-bold text-blue-600">Top 1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Customer decision confidence</span>
                    <span className="font-bold text-purple-600">+60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Competitive differentiation</span>
                    <span className="font-bold text-orange-600">Unique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};