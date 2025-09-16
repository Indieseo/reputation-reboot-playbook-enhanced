import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, Shield, AlertTriangle, TrendingUp, MessageSquare, Users, Target, CheckCircle, Award, ThumbsUp, Activity } from 'lucide-react';

interface ReputationManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReputationManagementModal: React.FC<ReputationManagementModalProps> = ({ isOpen, onClose }) => {
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
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Proactive Reputation Management System</h2>
              <p className="text-sm text-gray-600">Transform negative interactions into trust-building opportunities</p>
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
          {/* Current Reputation Crisis */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Current Reputation Crisis Analysis (PDF Data)</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Crisis Severity Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">1.1★</div>
                    <div className="text-sm text-red-700">Sitejabber Rating (69 reviews)</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <Shield className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">€2.5M</div>
                    <div className="text-sm text-red-700">Revenue at Risk</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded border border-red-200">
                    <MessageSquare className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="font-bold text-red-600">Critical</div>
                    <div className="text-sm text-red-700">Trust Crisis Level</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Primary Reputation Threats</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-800 mb-2">Damage Fee Controversy</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• "€2,500 damage fees are ridiculous"</li>
                      <li>• "Premium insurance is a scam"</li>
                      <li>• "Over €10,000 for damages" reports</li>
                      <li>• Roof damage exclusions confusion</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-800 mb-2">Service Quality Issues</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 50-minute WhatsApp response delays</li>
                      <li>• Inconsistent pickup experiences</li>
                      <li>• Support knowledge gaps</li>
                      <li>• Operational inconsistencies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">AI Search Impact</h4>
                <div className="space-y-2">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <p className="text-sm text-red-700 italic">
                      When users ask AI: "Is Indie Campers trustworthy?" → Current negative narrative dominates results
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <p className="text-sm text-red-700 italic">
                      Search: "Indie Campers damage fees" → First results highlight complaints, not solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proactive Response Framework */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Proactive Reputation Defense System</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Negative Query Detection & Immediate Response</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Trigger: "Indie Campers damage fees scam"</h5>
                    <div className="text-xs text-green-700">
                      <strong>AI Response Strategy:</strong><br/>
                      1. Immediate acknowledgment: "I understand your concern - this is our #1 customer question"<br/>
                      2. Radical transparency: "Here's exactly what €2,500 covers and how to avoid any fees"<br/>
                      3. Educational pivot: Link to complete damage prevention guide<br/>
                      4. Solution focus: "Let me show you our step-by-step protection strategy"
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Trigger: "Premium insurance waste of money"</h5>
                    <div className="text-xs text-green-700">
                      <strong>AI Response Strategy:</strong><br/>
                      1. Validate concern: "Many customers ask this - let me give you complete transparency"<br/>
                      2. Honest comparison: "€199 vs €2,500 reality: here's what each actually covers"<br/>
                      3. Real examples: "Actual repair costs in Portugal so you can decide for yourself"<br/>
                      4. Authority position: Link to complete insurance transparency guide
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Trigger: "Indie Campers support terrible"</h5>
                    <div className="text-xs text-green-700">
                      <strong>AI Response Strategy:</strong><br/>
                      1. Own the issue: "You're right - our support response times need improvement"<br/>
                      2. Immediate help: "I'm here 24/7 and can help you right now with any question"<br/>
                      3. Transparent commitment: "Here's exactly what we're doing to improve response times"<br/>
                      4. Value demonstration: Solve their immediate problem instantly
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Trust Recovery Conversation Flow</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Step 1: Acknowledge</h5>
                    <p className="text-xs text-green-700">
                      Validate customer concern without defensiveness. Show we understand their perspective completely.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Step 2: Educate</h5>
                    <p className="text-xs text-green-700">
                      Provide complete transparency with real data, examples, and context. Position as educator, not defender.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h5 className="font-semibold text-green-800 text-sm mb-1">Step 3: Empower</h5>
                    <p className="text-xs text-green-700">
                      Give actionable solutions and tools. Transform complaint into confidence through knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sentiment Transformation Engine */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Sentiment Transformation Engine</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Conversation Sentiment Analysis & Response</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Angry Customer → Trust Building</h5>
                    <div className="text-xs text-blue-700">
                      <strong>Detection:</strong> "This company is a complete scam, €2500 for a tiny scratch"<br/>
                      <strong>Response Strategy:</strong> "I completely understand your anger - €2,500 does sound shocking. Here's exactly what happened and the 5 ways this could have been prevented. Let me also show you our new transparency initiative..."<br/>
                      <strong>Goal:</strong> Convert anger into appreciation for honesty
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Anxious First-Timer → Confidence</h5>
                    <div className="text-xs text-blue-700">
                      <strong>Detection:</strong> "I'm scared about hidden fees and damage charges"<br/>
                      <strong>Response Strategy:</strong> "Your anxiety is completely understandable - here's our complete first-timer survival guide with every possible cost explained upfront. Plus our step-by-step damage prevention checklist..."<br/>
                      <strong>Goal:</strong> Transform anxiety into excited confidence
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-semibold text-blue-800 text-sm mb-1">Comparison Shopper → Informed Choice</h5>
                    <div className="text-xs text-blue-700">
                      <strong>Detection:</strong> "McRent has lower insurance excess, why choose you?"<br/>
                      <strong>Response Strategy:</strong> "You're absolutely right - McRent does have lower base excess (€1,500 vs our €2,500). Here's our honest comparison of when to choose them vs us, plus what that price difference actually covers..."<br/>
                      <strong>Goal:</strong> Build trust through radical honesty about competitors
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Emotional Intelligence Integration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Tone Adaptation Framework</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Frustrated customers: Calm, solution-focused responses</li>
                      <li>• Anxious customers: Reassuring, detailed explanations</li>
                      <li>• Skeptical customers: Data-driven transparency</li>
                      <li>• Rushed customers: Concise, action-oriented help</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Escalation Triggers</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• High emotional intensity detected</li>
                      <li>• Complex damage dispute scenarios</li>
                      <li>• Legal language or threat detection</li>
                      <li>• Multiple failed resolution attempts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories & Reputation Recovery */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Success Stories & Reputation Recovery Examples</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Negative → Positive Transformation Examples</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h5 className="font-semibold text-purple-800 text-sm mb-1">Case: Angry damage fee complaint</h5>
                    <div className="text-xs text-purple-700">
                      <strong>Initial:</strong> "€2500 for kitchen damage is robbery! Never again!"<br/>
                      <strong>AI Response:</strong> Complete transparency about repair costs + damage prevention guide<br/>
                      <strong>Outcome:</strong> "Finally, a company that explains everything honestly. Booking again next year with your prevention checklist."<br/>
                      <strong>Impact:</strong> 1★ → 5★ review + referral to 3 friends
                    </div>
                  </div>

                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h5 className="font-semibold text-purple-800 text-sm mb-1">Case: Insurance confusion</h5>
                    <div className="text-xs text-purple-700">
                      <strong>Initial:</strong> "Premium insurance covers nothing, total waste of €199"<br/>
                      <strong>AI Response:</strong> Complete coverage breakdown + real cost examples + honest competitor comparison<br/>
                      <strong>Outcome:</strong> "Most transparent insurance explanation I've ever seen. Understanding exactly what I'm paying for."<br/>
                      <strong>Impact:</strong> Upgraded to premium + recommended transparency to travel forum
                    </div>
                  </div>

                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h5 className="font-semibold text-purple-800 text-sm mb-1">Case: First-timer anxiety</h5>
                    <div className="text-xs text-purple-700">
                      <strong>Initial:</strong> "Terrified of driving something this big, what if I crash?"<br/>
                      <strong>AI Response:</strong> Complete first-timer survival guide + realistic expectations + confidence building<br/>
                      <strong>Outcome:</strong> "Best customer experience ever. They actually care about helping you succeed."<br/>
                      <strong>Impact:</strong> 5★ review + detailed success story + travel blog feature
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">Expected Reputation Recovery Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">Review Platform Improvement</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-purple-700">Sitejabber rating:</span>
                        <span className="font-bold text-green-600">1.1★ → 4.2★</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">Google reviews:</span>
                        <span className="font-bold text-green-600">3.2★ → 4.6★</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">Trustpilot score:</span>
                        <span className="font-bold text-green-600">2.8★ → 4.4★</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-800 mb-2">AI Search Sentiment</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-purple-700">Positive AI responses:</span>
                        <span className="font-bold text-green-600">+80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">Trust-building conversations:</span>
                        <span className="font-bold text-blue-600">+65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700">Educational authority position:</span>
                        <span className="font-bold text-purple-600">#1 Ranking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Strategy */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Reputation Management Implementation Strategy</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">Phase 3 Reputation Recovery Timeline</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">Month 1 (Crisis Response)</h5>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Deploy negative query detection</li>
                      <li>• Implement transparency responses</li>
                      <li>• Monitor sentiment shifts</li>
                      <li>• Track conversion rates</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">Month 2 (Trust Building)</h5>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Refine emotional intelligence</li>
                      <li>• Enhance competitor comparisons</li>
                      <li>• Build success story database</li>
                      <li>• Optimize conversion flows</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">Month 3 (Authority Position)</h5>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Measure reputation recovery</li>
                      <li>• Document transformation cases</li>
                      <li>• Scale successful approaches</li>
                      <li>• Establish new baseline metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">Success Measurement Framework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Leading Indicators</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Negative → positive conversation rate</li>
                      <li>• Time to resolution improvement</li>
                      <li>• Customer satisfaction scores</li>
                      <li>• AI response sentiment analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Lagging Indicators</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Review platform rating improvements</li>
                      <li>• AI search result sentiment shifts</li>
                      <li>• Brand mention sentiment analysis</li>
                      <li>• Customer retention and referral rates</li>
                    </ul>
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