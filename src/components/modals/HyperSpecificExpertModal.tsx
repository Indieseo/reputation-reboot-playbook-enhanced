import React from 'react';
import { motion } from 'framer-motion';
import { X, Bot, Brain, Database, MessageSquare, Target, CheckCircle, AlertTriangle, Zap, Star } from 'lucide-react';

interface HyperSpecificExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HyperSpecificExpertModal: React.FC<HyperSpecificExpertModalProps> = ({ isOpen, onClose }) => {
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
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Hyper-Specific AI Expert System</h2>
              <p className="text-sm text-gray-600">Transform crisis conversations into trust-building opportunities</p>
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
          {/* Crisis Response Framework */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Current Crisis Response Challenge</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Critical Support Issues (PDF Data)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-800 mb-2">Response Time Crisis</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• WhatsApp response: 50+ minutes average</li>
                      <li>• Email support: 4-6 hours typical</li>
                      <li>• Phone support: Limited availability</li>
                      <li>• Crisis escalation: Manual process</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-800 mb-2">Knowledge Gaps</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Inconsistent damage fee explanations</li>
                      <li>• Insurance coverage confusion</li>
                      <li>• Location-specific information missing</li>
                      <li>• Vehicle model details incomplete</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Customer Pain Points (Real Feedback)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <p className="text-sm text-red-700 italic mb-2">
                      "I needed to know about damage fees and waited 1 hour for WhatsApp response. Then got generic answer."
                    </p>
                    <p className="text-xs text-red-600 font-medium">Impact: Booking abandoned, negative review</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <p className="text-sm text-red-700 italic mb-2">
                      "Asked about premium insurance, support couldn't explain the difference. Very frustrating."
                    </p>
                    <p className="text-xs text-red-600 font-medium">Impact: Trust erosion, competitor research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Expert System Solution */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Hyper-Specific AI Expert Architecture</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Knowledge Base Integration Strategy</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Phase 1 Content Integration</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Complete damage prevention guide (€2,500 crisis)</li>
                      <li>• Insurance transparency documentation</li>
                      <li>• First-time renter survival guide</li>
                      <li>• Crisis response protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Phase 2 Authority Content</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Vehicle-specific operational guides</li>
                      <li>• Location intelligence database</li>
                      <li>• Competitive analysis transparency</li>
                      <li>• Real customer scenario responses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">AI Training Data Sources</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <Database className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-green-600">300+</div>
                    <div className="text-sm text-green-700">Content Pages</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <MessageSquare className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-green-600">5000+</div>
                    <div className="text-sm text-green-700">Support Interactions</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-green-600">100%</div>
                    <div className="text-sm text-green-700">Crisis Scenarios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crisis-to-Opportunity Conversion */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Crisis-to-Opportunity Response Engine</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Negative Query Detection & Response</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer Query: "Is premium insurance a scam?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response:</strong> "I understand your concern - many customers have asked this exact question. Let me give you complete transparency about our €199 premium vs €2,500 basic excess reality..."
                      <br/><br/>
                      <em>[Links to complete insurance transparency guide with real cost examples]</em>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer Query: "€2500 damage fees are ridiculous"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response:</strong> "You're absolutely right that €2,500 feels shocking. Here's exactly what that covers and our complete step-by-step guide to avoid any damage fees..."
                      <br/><br/>
                      <em>[Links to damage prevention authority hub with photo checklist]</em>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Customer Query: "Why is WhatsApp support so slow?"</h5>
                    <div className="text-xs text-blue-700">
                      <strong>AI Response:</strong> "I can help you immediately with most questions, and I'm available 24/7. For urgent issues, here are our fastest response channels and what to expect..."
                      <br/><br/>
                      <em>[Provides immediate solutions plus escalation path]</em>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Proactive Trust Building Responses</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Transparency-First Approach</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Acknowledge customer concerns immediately</li>
                      <li>• Provide complete context and solutions</li>
                      <li>• Link to comprehensive educational content</li>
                      <li>• Offer multiple resolution pathways</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Educational Authority Position</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Position as travel planning expert</li>
                      <li>• Provide actionable advice beyond booking</li>
                      <li>• Share real customer success stories</li>
                      <li>• Demonstrate competitive knowledge</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Conversation Intelligence */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Advanced Conversation Intelligence</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Context-Aware Response System</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Customer Journey Context</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• First-time visitor vs returning customer</li>
                      <li>• Booking stage: research, consideration, purchase</li>
                      <li>• Previous support interactions and outcomes</li>
                      <li>• Specific vehicle/location interest patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Emotional Intelligence Integration</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Detect frustration and anxiety levels</li>
                      <li>• Adjust tone for crisis vs exploration conversations</li>
                      <li>• Escalate to human when appropriate</li>
                      <li>• Follow up proactively on resolved issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Conversation Flow Examples</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h6 className="font-semibold text-purple-800 text-xs mb-1">Anxious First-Timer → Confidence Building</h6>
                    <p className="text-xs text-purple-700">
                      Detect: "I've never driven anything this big"<br/>
                      Response: Complete driving guide + confidence building + specific model tutorials
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h6 className="font-semibold text-purple-800 text-xs mb-1">Frustrated Customer → Solution Focus</h6>
                    <p className="text-xs text-purple-700">
                      Detect: "This is my third time asking about damage fees"<br/>
                      Response: Immediate acknowledgment + priority escalation + complete resolution path
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h6 className="font-semibold text-purple-800 text-xs mb-1">Comparison Shopper → Transparency</h6>
                    <p className="text-xs text-purple-700">
                      Detect: "How do you compare to McRent?"<br/>
                      Response: Honest competitive analysis + use case recommendations + unique value props
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation & Results */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Implementation Strategy & Expected Results</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Phase 3 Implementation Timeline</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Knowledge base integration</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Crisis response training</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Conversation intelligence setup</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Real-time API integration</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Projected Impact Metrics</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Response time improvement:</span>
                    <span className="font-bold text-green-600">Instant vs 50min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crisis conversation conversion:</span>
                    <span className="font-bold text-blue-600">+65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer confidence increase:</span>
                    <span className="font-bold text-purple-600">+70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support ticket reduction:</span>
                    <span className="font-bold text-orange-600">-40%</span>
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