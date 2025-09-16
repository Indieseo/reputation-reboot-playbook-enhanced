import React from 'react';
import { motion } from 'framer-motion';
import { X, MessageSquare, Shield, Euro, AlertTriangle, CheckCircle, FileText, BarChart } from 'lucide-react';

interface InsuranceTransparencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InsuranceTransparencyModal: React.FC<InsuranceTransparencyModalProps> = ({ isOpen, onClose }) => {
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
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Premium Insurance Transparency</h2>
              <p className="text-sm text-gray-600">€199 vs €2,500 reality check - Complete coverage analysis</p>
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
          {/* Crisis Analysis */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Current Insurance Crisis (PDF Documentation)</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Customer Feedback Analysis</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-700">Primary Complaint:</span>
                      <span className="font-bold text-red-800">"Premium Insurance is A SCAM"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Liability Issues:</span>
                      <span className="font-bold text-red-800">"Over €10,000 for damages"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Coverage Confusion:</span>
                      <span className="font-bold text-red-800">Roof damage exclusions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Impact Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-700">Sitejabber Rating:</span>
                      <span className="font-bold text-red-800">1.1★ (69 reviews)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Trust Crisis Level:</span>
                      <span className="font-bold text-red-800">Critical</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Revenue Impact:</span>
                      <span className="font-bold text-red-800">€2.5M at risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transparency Strategy */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">AI-Optimized Transparency Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Target Content Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/guides/premium-insurance-reality/
                </code>
                <p className="text-sm text-green-700">
                  AI-Optimized Title: "Indie Campers Premium Insurance €199 vs €2500 reality check what actually covered roof damage exclusions Portugal 2025"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Content Approach</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Complete transparency about coverage gaps</li>
                    <li>• Real damage cost breakdowns with examples</li>
                    <li>• Side-by-side premium vs basic comparison</li>
                    <li>• Portugal-specific regulations and requirements</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">AI Search Benefits</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Address insurance confusion directly</li>
                    <li>• Build educational authority through transparency</li>
                    <li>• Convert negative searches into informed bookings</li>
                    <li>• Establish trust through radical honesty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Insurance Breakdown */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Complete Insurance Coverage Analysis</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">Basic Coverage (Included)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Third Party Liability</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Fire & Theft</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Glass Coverage</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="bg-red-100 p-2 rounded border border-red-200">
                      <div className="flex justify-between items-center">
                        <span className="text-red-700 font-medium">Vehicle Damage Excess</span>
                        <span className="text-red-800 font-bold">€2,500</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">Premium Coverage (+€199)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Reduced Excess</span>
                      <span className="text-green-600 font-medium">€500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Interior Damage</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">24/7 Roadside Assistance</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="bg-red-100 p-2 rounded border border-red-200">
                      <div className="flex justify-between items-center">
                        <span className="text-red-700 font-medium">Roof Damage</span>
                        <span className="text-red-800 font-bold">NOT COVERED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage Exclusions - The Critical Information */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-bold text-orange-800 mb-3">Critical Exclusions (Both Plans)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">Physical Damage Exclusions</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Roof damage from overheight strikes</li>
                      <li>• Awning mechanism damage</li>
                      <li>• Under-chassis damage from poor roads</li>
                      <li>• Tire damage from misuse</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">Usage Exclusions</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Damage from non-authorized repairs</li>
                      <li>• Appliance damage from misuse</li>
                      <li>• Water system damage from freezing</li>
                      <li>• Cleaning fees exceeding €150</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Real Cost Examples */}
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">Real Damage Cost Examples (Market Rates)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <Euro className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">€3,200</div>
                    <div className="text-sm text-red-700">Roof Panel Replacement</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded border border-orange-200">
                    <Euro className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                    <div className="font-bold text-orange-600">€1,800</div>
                    <div className="text-sm text-orange-700">Kitchen Unit Repair</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded border border-yellow-200">
                    <Euro className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <div className="font-bold text-yellow-600">€850</div>
                    <div className="text-sm text-yellow-700">Awning Replacement</div>
                  </div>
                </div>
                <p className="text-sm text-blue-700 text-center mt-4">
                  <strong>Transparency Note:</strong> These are actual Portuguese market repair costs. We provide this information to help you understand real risks and make informed decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Competitive Differentiation Through Transparency</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-purple-800 mb-3">Competitor Approach</h4>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Hidden terms and conditions</li>
                    <li>• Vague coverage descriptions</li>
                    <li>• No real cost transparency</li>
                    <li>• Defensive crisis management</li>
                    <li>• Limited AI search optimization</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-purple-800 mb-3">Our Transparency Strategy</h4>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Complete coverage breakdown with examples</li>
                    <li>• Real market cost data sharing</li>
                    <li>• Honest exclusion documentation</li>
                    <li>• Educational authority positioning</li>
                    <li>• AI-optimized for search dominance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200 mt-4">
              <h4 className="font-bold text-purple-800 mb-2">Expected Customer Response</h4>
              <p className="text-sm text-purple-700">
                <strong>"Finally, a company that tells me exactly what I'm paying for"</strong> - Transform insurance confusion into informed trust and booking confidence.
              </p>
            </div>
          </div>

          {/* Implementation Metrics */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Success Metrics & Timeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">-50%</div>
                <div className="text-sm text-gray-600">Insurance-related complaints</div>
                <div class
name="text-xs text-gray-500 mt-1">Target: Month 2</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">+30%</div>
                <div className="text-sm text-gray-600">Informed booking decisions</div>
                <div className="text-xs text-gray-500 mt-1">Target: Month 3</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">Top 3</div>
                <div className="text-sm text-gray-600">AI search results</div>
                <div className="text-xs text-gray-500 mt-1">Target: Month 4</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};