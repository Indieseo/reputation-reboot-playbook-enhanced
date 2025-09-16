import React from 'react';
import { motion } from 'framer-motion';
import { X, Shield, Camera, AlertTriangle, CheckCircle, FileText, Clock, Euro, Star } from 'lucide-react';

interface DamagePreventionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DamagePreventionModal: React.FC<DamagePreventionModalProps> = ({ isOpen, onClose }) => {
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
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Damage Prevention Authority Hub</h2>
              <p className="text-sm text-gray-600">Transform €2,500 fee crisis into educational leadership</p>
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
          {/* Crisis Context */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Current Crisis State (PDF Data)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-red-700">Sitejabber Rating:</span>
                  <span className="font-bold text-red-800">1.1★ (69 reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-700">Primary Complaint:</span>
                  <span className="font-bold text-red-800">€2,500 Damage Fees</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-700">Customer Quote:</span>
                  <span className="font-bold text-red-800">"Premium Insurance is A SCAM"</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-red-700">Liability Claims:</span>
                  <span className="font-bold text-red-800">Over €10,000 reported</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-700">Revenue Impact:</span>
                  <span className="font-bold text-red-800">€2.5M at risk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-700">Search Context:</span>
                  <span className="font-bold text-red-800">Toxic AI narrative</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Strategy Transformation */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">AI Search Transformation Strategy</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  indiecampers.com/guides/avoid-damage-fees/
                </code>
                <p className="text-sm text-green-700 mt-2">
                  AI-Optimized Title: "Complete Indie Campers pre-inspection photo checklist avoid €2500 damage fees Atlas Active models step-by-step guide"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Content Strategy</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Transform biggest complaint into comprehensive resource</li>
                    <li>• Step-by-step damage prevention tutorial</li>
                    <li>• Clear photo checklist for all vehicle models</li>
                    <li>• Direct answers structured for AI parsing</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">AI Search Impact</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Convert "damage fees scam" searches</li>
                    <li>• Establish educational authority</li>
                    <li>• Build transparency-based trust</li>
                    <li>• Create competitive differentiation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content Outline */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Complete Content Structure</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-blue-800 mb-3">1. Pre-Rental Vehicle Inspection (Atlas Active Models)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold mb-2">Photo Documentation Checklist</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Exterior damage (all angles)</li>
                      <li>• Interior condition (seats, controls)</li>
                      <li>• Kitchen equipment functionality</li>
                      <li>• Bathroom cleanliness standards</li>
                      <li>• Storage compartment condition</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold mb-2">Common Damage Areas</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Roof damage (climbing warnings)</li>
                      <li>• Awning mechanism issues</li>
                      <li>• Kitchen appliance breakage</li>
                      <li>• Water system problems</li>
                      <li>• Tire and undercarriage damage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-blue-800 mb-3">2. During Rental Best Practices</h4>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Height Restrictions:</strong> GPS navigation tips for 2.9m vehicle height</li>
                    <li>• <strong>Driving Guidelines:</strong> Mountain road safety and parking protocols</li>
                    <li>• <strong>Kitchen Usage:</strong> Proper appliance operation to avoid damage charges</li>
                    <li>• <strong>Water Systems:</strong> Waste tank management and cleaning procedures</li>
                    <li>• <strong>Emergency Contacts:</strong> 24/7 support numbers and response time expectations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-blue-800 mb-3">3. Post-Rental Return Process</h4>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Return Checklist:</strong> Step-by-step vehicle condition verification</li>
                    <li>• <strong>Documentation:</strong> Photo evidence for dispute prevention</li>
                    <li>• <strong>Damage Assessment:</strong> Understanding repair cost transparency</li>
                    <li>• <strong>Insurance Claims:</strong> Premium vs basic coverage reality check</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* HubSpot Model Application */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">HubSpot Success Model Implementation</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-purple-800 mb-3">Traditional Approach (Failed)</h4>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Generic "Campervan Rental Terms"</li>
                    <li>• Hidden damage fee policies</li>
                    <li>• Defensive crisis management</li>
                    <li>• Broad, unhelpful FAQ sections</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-purple-800 mb-3">AI-First Approach (Success)</h4>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Ultra-specific damage prevention guides</li>
                    <li>• Transparent fee breakdown with examples</li>
                    <li>• Educational authority positioning</li>
                    <li>• AI-optimized content structure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200 mt-4">
              <h4 className="font-bold text-purple-800 mb-2">Expected Results</h4>
              <p className="text-sm text-purple-700">
                <strong>"ChatGPT told me you were the most transparent"</strong> - Transform crisis narrative into competitive advantage through radical transparency and educational leadership.
              </p>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Phase 1 Implementation (Months 1-2)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <span className="font-medium">Week 1-2: Content Creation</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <span className="font-medium">Week 3: Bing Webmaster Tools Setup</span>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <span className="font-medium">Week 4-6: Content Launch & Monitoring</span>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                <span className="font-medium">Week 7-8: AI Citation Tracking</span>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};