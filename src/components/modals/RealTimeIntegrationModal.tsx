import React from 'react';
import { motion } from 'framer-motion';
import { X, Zap, Database, Globe, Calendar, Euro, MapPin, Clock, Shield, CheckCircle, AlertTriangle, TrendingUp, Users } from 'lucide-react';

interface RealTimeIntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RealTimeIntegrationModal: React.FC<RealTimeIntegrationModalProps> = ({ isOpen, onClose }) => {
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
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Real-Time Data Integration System</h2>
              <p className="text-sm text-gray-600">Live API connections for instant, accurate responses</p>
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
          {/* Current Data Disconnect Problem */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Current Data Disconnect Crisis</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Real Customer Experience Issues</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h5 className="font-semibold text-red-800 text-sm mb-1">Booking Availability Problem</h5>
                    <p className="text-xs text-red-700 mb-2">
                      "Website shows available, I spent 30 minutes planning, then booking fails. Support says vehicle was taken 2 hours ago."
                    </p>
                    <p className="text-xs text-red-600 font-medium">Impact: Frustrated abandonment + negative review</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h5 className="font-semibold text-red-800 text-sm mb-1">Pricing Confusion</h5>
                    <p className="text-xs text-red-700 mb-2">
                      "Chatbot quoted €380, but checkout shows €495. Which is correct? Support couldn't explain the difference."
                    </p>
                    <p className="text-xs text-red-600 font-medium">Impact: Trust erosion + competitor research</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Operational Disconnects (Internal Data)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <Clock className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">2-6 Hours</div>
                    <div className="text-sm text-red-700">Booking system sync delay</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <Euro className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">30%</div>
                    <div className="text-sm text-red-700">Pricing discrepancy rate</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <MapPin className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">Manual</div>
                    <div className="text-sm text-red-700">Location updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time API Architecture */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Live API Integration Architecture</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Core System Connections</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Booking System API</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Real-time vehicle availability (30-second refresh)</li>
                      <li>• Live pricing including all fees and taxes</li>
                      <li>• Location-specific inventory status</li>
                      <li>• Booking conflict prevention</li>
                      <li>• Automatic reservation hold capability</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Operational Intelligence API</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Vehicle maintenance status and ETAs</li>
                      <li>• Location staff availability and contact</li>
                      <li>• Weather-based pickup recommendations</li>
                      <li>• Traffic/event impact on locations</li>
                      <li>• Customer service queue status</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Advanced Data Sources Integration</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-green-600">Live</div>
                    <div className="text-sm text-green-700">Seasonal pricing updates</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <Globe className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-green-600">Multi-Hub</div>
                    <div className="text-sm text-green-700">Cross-location transfers</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-green-600">Real-Time</div>
                    <div className="text-sm text-green-700">Insurance rate updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Conversation Examples */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Real-Time Response Examples</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Dynamic Booking Assistance</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer: "Is Atlas available Aug 15-22 in Lisbon?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response (Live API Check):</strong><br/>
                      "I'm checking availability right now... Yes! Atlas #A847 is available for those dates in Lisbon. Current total: €687 including insurance options. I can hold this for 15 minutes while you decide."
                      <br/><br/>
                      <em>[Shows live pricing breakdown + holds reservation]</em>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer: "Why did the price change from yesterday?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response (Historical Data + Current Rates):</strong><br/>
                      "I can see exactly what happened. Yesterday's quote was €520 for base rate. Today it's €580 because we've entered peak summer pricing (effective Aug 1) plus there are only 2 Atlas vehicles left for your dates."
                      <br/><br/>
                      <em>[Shows transparent pricing factors + alternative dates/vehicles]</em>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer: "Can I extend my rental by 2 days?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response (Live Fleet Check):</strong><br/>
                      "Let me check your current booking #IC2847 and availability... Good news! Your Atlas can be extended through Sept 5th. The additional cost would be €78/day. I can process this extension right now."
                      <br/><br/>
                      <em>[Processes extension immediately or explains conflicts]</em>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Operational Intelligence Responses</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer: "Is my pickup still on time tomorrow?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response (Live Status Check):</strong><br/>
                      "Your Barcelona pickup is confirmed for 10 AM tomorrow. Your vehicle #A234 completed cleaning at 3 PM today and passed inspection. Maria will handle your pickup and she speaks fluent English. Weather is clear, no delays expected."
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer: "Vehicle broke down, what now?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response (Emergency Protocol + Live Logistics):</strong><br/>
                      "I've logged your emergency and dispatched help to your location. Nearest roadside assistance is 23 minutes away. I'm also checking replacement vehicles at Madrid hub - Atlas #A671 can be ready in 2 hours if repair takes longer."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Competitive Differentiation Through Real-Time Intelligence</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Industry Standard vs Indie Campers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Competitor Approach</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Static chatbots with pre-scripted responses</li>
                      <li>• Manual booking confirmation (hours/days)</li>
                      <li>• Generic pricing without real-time factors</li>
                      <li>• No integration with operational systems</li>
                      <li>• "Contact support for current info" responses</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Indie Campers AI System</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Live API integration with all core systems</li>
                      <li>• Instant booking confirmation and holds</li>
                      <li>• Real-time pricing with transparency</li>
                      <li>• Operational intelligence integration</li>
                      <li>• Immediate, accurate answers to any question</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Customer Experience Transformation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h5 className="font-semibold text-purple-800 text-sm mb-1">Before Real-Time Integration</h5>
                    <p className="text-xs text-purple-700">
                      "Let me check with our team and get back to you within 24 hours about availability and pricing."
                    </p>
                    <p className="text-xs text-purple-600 mt-1 font-medium">Result: Customer shops elsewhere</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">After Real-Time Integration</h5>
                    <p className="text-xs text-green-700">
                      "Perfect timing! I can see availability and lock in your preferred dates right now. Here's your complete breakdown with no surprises..."
                    </p>
                    <p className="text-xs text-green-600 mt-1 font-medium">Result: Immediate booking confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Technical Implementation Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">API Integration Priority Matrix</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <h5 className="font-semibold text-orange-800 text-sm mb-2">Phase 1 (Critical)</h5>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Booking system availability</li>
                      <li>• Real-time pricing engine</li>
                      <li>• Customer account integration</li>
                      <li>• Basic reservation holds</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <h5 className="font-semibold text-orange-800 text-sm mb-2">Phase 2 (Enhanced)</h5>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Fleet management integration</li>
                      <li>• Location intelligence feeds</li>
                      <li>• Maintenance status updates</li>
                      <li>• Staff scheduling integration</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <h5 className="font-semibold text-orange-800 text-sm mb-2">Phase 3 (Advanced)</h5>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Predictive availability modeling</li>
                      <li>• Dynamic pricing optimization</li>
                      <li>• Cross-system workflow automation</li>
                      <li>• Advanced analytics integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">Expected Performance Improvements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">Response Time Metrics</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-orange-700">Availability check:</span>
                        <span className="font-bold text-green-600">50ms vs 4+ hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700">Pricing accuracy:</span>
                        <span className="font-bold text-green-600">100% vs 70%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700">Booking confirmation:</span>
                        <span className="font-bold text-green-600">Instant vs hours</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">Business Impact Metrics</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-orange-700">Booking abandonment:</span>
                        <span className="font-bold text-green-600">-50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700">Customer satisfaction:</span>
                        <span className="font-bold text-blue-600">+60%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700">Support ticket reduction:</span>
                        <span className="font-bold text-purple-600">-45%</span>
                      </div>
                    </div>
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