import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Navigation, Wifi, Fuel, Shield, Clock, Star, Target, CheckCircle, AlertTriangle } from 'lucide-react';

interface LocationSpecificModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationSpecificModal: React.FC<LocationSpecificModalProps> = ({ isOpen, onClose }) => {
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
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Location-Specific Content Strategy</h2>
              <p className="text-sm text-gray-600">Hub-based practical guides for operational excellence</p>
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
              <h3 className="text-lg font-bold text-green-800">Location Intelligence Strategy (HubSpot Model)</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Hyper-Local Authority Building</h4>
                <p className="text-sm text-green-700 mb-3">
                  Create the most comprehensive, practical guides for each operational hub - addressing every real challenge customers face at specific locations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Content Depth Strategy</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Pickup location specific procedures</li>
                      <li>• Local driving regulations and challenges</li>
                      <li>• City-specific parking and camping rules</li>
                      <li>• Regional fuel, water, waste station locations</li>
                      <li>• Emergency services and repair networks</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">AI Search Optimization</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• "Campervan pickup Lisbon complete guide"</li>
                      <li>• "Indie Campers Porto location reality check"</li>
                      <li>• "Barcelona campervan regulations 2025"</li>
                      <li>• "Madrid pickup experience step by step"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lisbon Complete Guide Strategy */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Navigation className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Lisbon Hub - Complete Operational Guide</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/destinations/portugal/lisbon-complete-guide/
                </code>
                <p className="text-sm text-blue-700">
                  AI-Optimized Title: "Indie Campers Lisbon pickup complete guide parking regulations Sintra access Portugal 2025"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Pre-Arrival Intelligence</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Airport Transfer:</strong> Public transport vs taxi costs to pickup location</li>
                    <li>• <strong>Timing Strategy:</strong> Best pickup times to avoid Lisbon traffic</li>
                    <li>• <strong>Documentation:</strong> Portugal-specific requirements checklist</li>
                    <li>• <strong>Language Barriers:</strong> Key Portuguese phrases for pickup</li>
                    <li>• <strong>Payment Reality:</strong> Accepted methods and deposit procedures</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Lisbon-Specific Challenges</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Parking Reality:</strong> Where can you actually park a campervan</li>
                    <li>• <strong>Tram Lines:</strong> Height restrictions and route planning</li>
                    <li>• <strong>Hill Navigation:</strong> Manual transmission considerations</li>
                    <li>• <strong>Toll Roads:</strong> Via Verde vs manual payment strategies</li>
                    <li>• <strong>Fuel Strategy:</strong> Cheapest stations before leaving city</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Beyond Lisbon - Regional Intelligence</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Sintra Access</h5>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Campervan restrictions in historic center</li>
                      <li>• Parking alternatives outside town</li>
                      <li>• Public transport connections</li>
                      <li>• Best visiting times (crowds)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Cascais Route</h5>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Coastal road regulations</li>
                      <li>• Beach parking policies</li>
                      <li>• Overnight camping legality</li>
                      <li>• Water/waste station locations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">North to Porto</h5>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• A1 highway toll costs breakdown</li>
                      <li>• Recommended overnight stops</li>
                      <li>• Fuel price variations by region</li>
                      <li>• Speed camera locations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Hub Strategy */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Complete Hub Network Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Priority Hub Content Matrix</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-purple-200">
                        <th className="text-left py-2 text-purple-800">Location</th>
                        <th className="text-left py-2 text-purple-800">Primary Challenge</th>
                        <th className="text-left py-2 text-purple-800">Content Focus</th>
                        <th className="text-left py-2 text-purple-800">Target Keywords</th>
                      </tr>
                    </thead>
                    <tbody className="text-purple-700">
                      <tr className="border-b border-purple-100">
                        <td className="py-2">Lisbon</td>
                        <td className="py-2">City navigation</td>
                        <td className="py-2">Urban survival guide</td>
                        <td className="py-2">"Lisbon campervan pickup"</td>
                      </tr>
                      <tr className="border-b border-purple-100">
                        <td className="py-2">Porto</td>
                        <td className="py-2">Historic center access</td>
                        <td className="py-2">Heritage site logistics</td>
                        <td className="py-2">"Porto campervan regulations"</td>
                      </tr>
                      <tr className="border-b border-purple-100">
                        <td className="py-2">Barcelona</td>
                        <td className="py-2">LEZ restrictions</td>
                        <td className="py-2">Environmental zone guide</td>
                        <td className="py-2">"Barcelona LEZ campervan"</td>
                      </tr>
                      <tr className="border-b border-purple-100">
                        <td className="py-2">Madrid</td>
                        <td className="py-2">Central district bans</td>
                        <td className="py-2">Alternative parking strategy</td>
                        <td className="py-2">"Madrid campervan central"</td>
                      </tr>
                      <tr>
                        <td className="py-2">Paris</td>
                        <td className="py-2">Height restrictions</td>
                        <td className="py-2">Peripheral access guide</td>
                        <td className="py-2">"Paris campervan access"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Universal Content Components</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Pickup procedure step-by-step with photos</li>
                    <li>• Local driving laws and enforcement reality</li>
                    <li>• Fuel, water, and waste station networks</li>
                    <li>• Emergency contacts and repair services</li>
                    <li>• Weather-specific considerations by season</li>
                    <li>• Cultural context and local customs</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Competitive Intelligence Integration</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• McRent location comparison (honest assessment)</li>
                    <li>• Roadsurfer hub vs hub analysis</li>
                    <li>• Local competitor advantages/weaknesses</li>
                    <li>• Unique Indie Campers location benefits</li>
                    <li>• Customer preference data by location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Implementation */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Operational Intelligence Integration</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Real-Time Information Strategy</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">Dynamic Content Elements</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Current fuel prices by location</li>
                      <li>• Seasonal regulation changes</li>
                      <li>• Construction and road closures</li>
                      <li>• Event-based parking restrictions</li>
                      <li>• Weather impact on pickup timing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">Customer Experience Integration</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Recent customer feedback integration</li>
                      <li>• Staff recommendations by location</li>
                      <li>• Seasonal crowd management tips</li>
                      <li>• Local partnership benefits</li>
                      <li>• Hidden gem recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Expected Customer Response</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="text-sm text-orange-700 italic">
                      "I've never seen such detailed local information from any campervan company. They know exactly what challenges I'll face picking up in Lisbon."
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="text-sm text-orange-700 italic">
                      "ChatGPT recommended this guide as the most comprehensive for Barcelona pickup. They were right - every question was answered."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Phase 2 Location Content Rollout</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Month 3 - Primary Hubs</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lisbon Complete Guide</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Barcelona LEZ Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Madrid Central Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Month 4 - Secondary Hubs</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Porto Heritage Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Paris Access Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Milan Routes Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Success Metrics</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>AI Search Ranking:</span>
                    <span className="font-bold text-green-600">Top 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Confidence:</span>
                    <span className="font-bold text-blue-600">+40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pickup Complaints:</span>
                    <span className="font-bold text-red-600">-60%</span>
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