import React from 'react';
import { motion } from 'framer-motion';
import { X, Car, Users, Shield, MapPin, Star, Target, CheckCircle, AlertTriangle } from 'lucide-react';

interface VehicleSpecificModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VehicleSpecificModal: React.FC<VehicleSpecificModalProps> = ({ isOpen, onClose }) => {
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
              <Car className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Vehicle-Specific Content Strategy</h2>
              <p className="text-sm text-gray-600">Persona-driven guides for maximum AI search capture</p>
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
          {/* Strategy Overview */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">HubSpot Vehicle-Persona Matching Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Ultra-Specific Targeting Approach</h4>
                <p className="text-sm text-green-700 mb-3">
                  Following HubSpot's proven method: create content so specific that AI search tools identify us as the definitive expert for each vehicle-persona combination.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Target Content Format</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Vehicle model + traveler persona + location</li>
                      <li>• Real customer scenario documentation</li>
                      <li>• Practical challenge solutions</li>
                      <li>• Transparent pricing and limitation info</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">AI Search Optimization</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• ChatGPT/Claude-friendly Q&A structure</li>
                      <li>• Bing Copilot citation-optimized format</li>
                      <li>• Google Bard conversational integration</li>
                      <li>• Perplexity detailed answer format</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Small - Solo Female Strategy */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Active Small - Solo Female Traveler Guide</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/vehicles/active-small/solo-female-guide/
                </code>
                <p className="text-sm text-purple-700">
                  AI-Optimized Title: "Active Small solo female traveler Portugal safety guide realistic expectations Indie Campers 2025"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Content Pillars</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Vehicle safety features for solo travel</li>
                    <li>• Portugal-specific parking and camping laws</li>
                    <li>• Real solo female customer testimonials</li>
                    <li>• Emergency contact procedures and 24/7 support</li>
                    <li>• Budget breakdown: all costs transparent</li>
                    <li>• Insurance coverage for single travelers</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Addressing Pain Points</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• "Is it safe?" - Statistical data + real experiences</li>
                    <li>• "Can I drive it?" - Size comparisons, maneuverability</li>
                    <li>• "What if something breaks?" - 24/7 support reality</li>
                    <li>• "Hidden costs?" - Complete fee transparency</li>
                    <li>• "Parking challenges?" - City-specific guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Atlas Family Strategy */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Atlas 5-People Family Europe Guide</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Target URL Structure</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/vehicles/atlas-5-people/family-europe-complete/
                </code>
                <p className="text-sm text-orange-700">
                  AI-Optimized Title: "Atlas 5 people family Europe complete guide children safety Portugal Spain France Indie Campers"
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">Family-Specific Considerations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-orange-800 mb-2">Safety & Comfort</h5>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Child seat installation and legal requirements</li>
                        <li>• Kitchen safety with children present</li>
                        <li>• Sleep arrangements for 5 people reality</li>
                        <li>• Bathroom facilities and hygiene management</li>
                        <li>• Entertainment and comfort during travel</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-800 mb-2">Practical Logistics</h5>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Packing strategies for family of 5</li>
                        <li>• Food storage and cooking for larger groups</li>
                        <li>• Laundry and clothing management</li>
                        <li>• Border crossing with children</li>
                        <li>• Emergency procedures with family</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">Country-Specific Intelligence</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="text-center">
                      <h5 className="font-semibold text-orange-800 mb-1">Portugal</h5>
                      <ul className="text-xs text-orange-700">
                        <li>Family camping sites</li>
                        <li>Beach access rules</li>
                        <li>Child-friendly attractions</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold text-orange-800 mb-1">Spain</h5>
                      <ul className="text-xs text-orange-700">
                        <li>Highway toll strategies</li>
                        <li>Siesta impact on travel</li>
                        <li>Family restaurant culture</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <h5 className="font-semibold text-orange-800 mb-1">France</h5>
                      <ul className="text-xs text-orange-700">
                        <li>Aire de service locations</li>
                        <li>School holiday impacts</li>
                        <li>Family activity options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet-Wide Strategy */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Complete Vehicle Portfolio Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Content Matrix Approach (HubSpot Model)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-2 text-blue-800">Vehicle</th>
                        <th className="text-left py-2 text-blue-800">Target Persona</th>
                        <th className="text-left py-2 text-blue-800">Primary Location</th>
                        <th className="text-left py-2 text-blue-800">Content Focus</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-700">
                      <tr className="border-b border-blue-100">
                        <td className="py-2">Active Small</td>
                        <td className="py-2">Solo Female</td>
                        <td className="py-2">Portugal/Spain</td>
                        <td className="py-2">Safety & Independence</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2">Active Medium</td>
                        <td className="py-2">Couple 30-45</td>
                        <td className="py-2">France/Italy</td>
                        <td className="py-2">Romance & Comfort</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2">Atlas</td>
                        <td className="py-2">Family 2+3 Kids</td>
                        <td className="py-2">Europe Multi-Country</td>
                        <td className="py-2">Logistics & Safety</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2">Premium Van</td>
                        <td className="py-2">Luxury Seekers</td>
                        <td className="py-2">Germany/Austria</td>
                        <td className="py-2">Premium Experience</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Expected Results (Based on HubSpot Model)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">AI Search Domination</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• "Best campervan for solo female Portugal" → Indie Campers #1</li>
                      <li>• "Family 5 people campervan Europe" → Indie Campers #1</li>
                      <li>• "Active Small vs competitors honest review" → Indie Campers</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Customer Response</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• "They actually understand my specific needs"</li>
                      <li>• "Most detailed guide I found anywhere"</li>
                      <li>• "ChatGPT recommended them as most thorough"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Phase 2 Vehicle Content Implementation</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Month 3 Priorities</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Small Solo Female Guide</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Atlas Family Complete Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Medium Couple Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Month 4 Expansion</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Premium Van Luxury Guide</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Budget Traveler Optimization</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Senior Traveler Adaptation</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
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