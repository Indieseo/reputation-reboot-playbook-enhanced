import React from 'react';
import { motion } from 'framer-motion';
import { X, Users, Clock, Phone, AlertTriangle, CheckCircle, MapPin, MessageCircle } from 'lucide-react';

interface FirstTimeRenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FirstTimeRenterModal: React.FC<FirstTimeRenterModalProps> = ({ isOpen, onClose }) => {
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
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">First-Time Renter Survival Guide</h2>
              <p className="text-sm text-gray-600">Transform first-timer anxiety into preparation confidence</p>
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
          {/* Current Service Issues */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Current Service Quality Issues (PDF Data)</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Customer Service Delays</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-700">WhatsApp Response:</span>
                      <span className="font-bold text-red-800">50 minutes average</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Live Message Staff:</span>
                      <span className="font-bold text-red-800">"Incredibly unhelpful"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Emergency Response:</span>
                      <span className="font-bold text-red-800">18-hour delays reported</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Operational Challenges</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-700">Vehicle Fleet:</span>
                      <span className="font-bold text-red-800">7,000+ vehicles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Locations:</span>
                      <span className="font-bold text-red-800">70+ European cities</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Service Quality:</span>
                      <span className="font-bold text-red-800">Varies by location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Strategy Solution */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Transparency-First Solution Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Target Content URL</h4>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-2">
                  indiecampers.com/guides/first-time-rental-survival/
                </code>
                <p className="text-sm text-green-700">
                  AI-Optimized Title: "First-time Indie Campers rental survival guide avoid hidden fees customer service response times pickup process Portugal"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Honest Approach</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Acknowledge current service challenges</li>
                    <li>• Provide realistic response time expectations</li>
                    <li>• Share actual pickup process timelines</li>
                    <li>• Address common first-timer concerns</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Value Creation</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Convert anxiety into confidence</li>
                    <li>• Provide actionable preparation steps</li>
                    <li>• Build trust through transparency</li>
                    <li>• Create AI search authority</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Survival Guide Content */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Complete First-Timer Guide Structure</h3>
            </div>

            <div className="space-y-6">
              {/* Pre-Rental Preparation */}
              <div>
                <h4 className="font-bold text-blue-800 mb-3">1. Pre-Rental Preparation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold mb-2">Document Checklist</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Valid driver's license (2+ years experience)</li>
                      <li>• Credit card with €2,500+ available limit</li>
                      <li>• Travel insurance documentation</li>
                      <li>• Emergency contact information</li>
                      <li>• Route planning and GPS coordinates</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold mb-2">Booking Expectations</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Confirmation 48 hours before pickup</li>
                      <li>• Location-specific pickup instructions</li>
                      <li>• Vehicle model availability variations</li>
                      <li>• Weather-dependent pickup delays</li>
                      <li>• Peak season availability limitations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pickup Process Reality */}
              <div>
                <h4 className="font-bold text-blue-800 mb-3">2. Pickup Process - What to Really Expect</h4>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded">
                      <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="font-bold text-green-600">60-90 min</div>
                      <div className="text-sm text-green-700">Pickup Process Duration</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded">
                      <MessageCircle className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                      <div className="font-bold text-yellow-600">50 min</div>
                      <div className="text-sm text-yellow-700">WhatsApp Response Time</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-blue-700">Emergency Support</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div><strong>Step 1:</strong> Document collection and ID verification (15-20 minutes)</div>
                    <div><strong>Step 2:</strong> Vehicle exterior inspection with photos (20-30 minutes)</div>
                    <div><strong>Step 3:</strong> Interior walkthrough and equipment demo (20-25 minutes)</div>
                    <div><strong>Step 4:</strong> Insurance explanation and damage excess hold (5-10 minutes)</div>
                    <div><strong>Step 5:</strong> Final questions and departure briefing (5-10 minutes)</div>
                  </div>
                </div>
              </div>

              {/* Location-Specific Intelligence */}
              <div>
                <h4 className="font-bold text-blue-800 mb-3">3. Location-Specific Intelligence (Portugal Focus)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold mb-2">Lisbon Hub Challenges</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Airport pickup: Traffic delays common</li>
                      <li>• Height restrictions in city center</li>
                      <li>• Limited parking for large vehicles</li>
                      <li>• GPS navigation issues in old town</li>
                      <li>• Language barriers with staff</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold mb-2">Porto Hub Benefits</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Better staff training reported</li>
                      <li>• Faster pickup process efficiency</li>
                      <li>• Cleaner vehicle maintenance standards</li>
                      <li>• More helpful customer service</li>
                      <li>• Better English communication</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hidden Costs Reality Check */}
              <div>
                <h4 className="font-bold text-blue-800 mb-3">4. Hidden Costs & Fee Transparency</h4>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded">
                      <div className="font-bold text-red-600">€2,500</div>
                      <div className="text-sm text-red-700">Damage Excess Hold</div>
                      <div className="text-xs text-red-600 mt-1">Released if no damage</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded">
                      <div className="font-bold text-orange-600">€199</div>
                      <div className="text-sm text-orange-700">Premium Insurance</div>
                      <div className="text-xs text-orange-600 mt-1">Reduces excess to €500</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded">
                      <div className="font-bold text-yellow-600">€150</div>
                      <div className="text-sm text-yellow-700">Deep Cleaning Fee</div>
                      <div className="text-xs text-yellow-600 mt-1">If returned dirty</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <h5 className="font-semibold text-blue-800 mb-2">Additional Fees to Expect</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
                      <div>• Late return: €50/hour</div>
                      <div>• Fuel not full: €2.50/liter + €25 service</div>
                      <div>• Tolls/fines: Full amount + €25 admin</div>
                      <div>• Kitchen kit rental: €25 (optional)</div>
                      <div>• Extra driver: €5/day</div>
                      <div>• Young driver (21-24): €15/day</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Procedures */}
              <div>
                <h4 className="font-bold text-blue-800 mb-3">5. Emergency & Support Procedures</h4>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Contact Hierarchy (Realistic Response Times)</h5>
                      <ul className="text-sm text-blue-700 space-y-2">
                        <li><strong>WhatsApp:</strong> 50 minutes average (PDF data)</li>
                        <li><strong>Phone Support:</strong> 15-30 minutes hold time</li>
                        <li><strong>Emergency Line:</strong> 24/7 but 2-4 hour response</li>
                        <li><strong>Live Chat:</strong> Often unhelpful (PDF feedback)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Self-Help Strategies</h5>
                      <ul className="text-sm text-blue-700 space-y-2">
                        <li><strong>Minor Issues:</strong> Document with photos first</li>
                        <li><strong>Breakdown:</strong> Local mechanic + receipt keeping</li>
                        <li><strong>Accidents:</strong> Police report mandatory</li>
                        <li><strong>Lost Keys:</strong> Locksmith + €200+ cost expectation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories & Testimonials */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Success Stories from Well-Prepared First-Timers</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">"Prepared for the Reality"</h4>
                <p className="text-sm text-green-700 italic mb-2">
                  "Thanks to reading this guide, I knew to expect the 90-minute pickup and 50-minute WhatsApp delays. I brought snacks and a book. When the €2,500 hold appeared on my card, I wasn't shocked because I understood it was temporary."
                </p>
                <p className="text-xs text-green-600">- Sarah M., First-time Portugal trip</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">"Transparency Built Trust"</h4>
                <p className="text-sm text-green-700 italic mb-2">
                  "Other companies hide these details, but Indie Campers telling me upfront about potential issues actually made me more confident in my booking. I knew what I was getting into."
                </p>
                <p className="text-xs text-green-600">- Miguel R., Business traveler</p>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Content Launch & Optimization Timeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-lg font-bold text-blue-600 mb-1">Week 1</div>
                <div className="text-sm text-gray-600">Content Creation</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-lg font-bold text-green-600 mb-1">Week 2</div>
                <div className="text-sm text-gray-600">AI Optimization</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Week 3</div>
                <div className="text-sm text-gray-600">Bing Submission</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-lg font-bold text-orange-600 mb-1">Week 4</div>
                <div className="text-sm text-gray-600">Citation Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};