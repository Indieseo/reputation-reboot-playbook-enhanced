import { useState } from 'react';
import { SlideLayout } from './SlideLayout';
import { Bot, Zap, Star, ExternalLink, Target } from 'lucide-react';
import { HyperSpecificExpertModal } from '../modals/HyperSpecificExpertModal';
import { RealTimeIntegrationModal } from '../modals/RealTimeIntegrationModal';
import { ReputationManagementModal } from '../modals/ReputationManagementModal';

export const SlideSix = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [activeModal, setActiveModal] = useState<'expert' | 'realtime' | 'reputation' | null>(null);
  return (
    <SlideLayout
      title="Phase 3: The AI-Powered Chatbot & Customer Experience"
      isPresenting={isPresenting}
    >
      <div className="space-y-8">
        {/* Objective */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-blue-50 border border-blue-200'} p-4 rounded-lg`}>
          <p className={`text-lg font-semibold ${isPresenting ? 'text-accent' : 'text-blue-900'}`}>
            <strong>Objective:</strong> Upgrade our existing chatbot to an <strong>"AI-Powered Road Trip Assistant"</strong> to directly address operational challenges and provide a superior, AI-first customer experience.
          </p>
        </div>

        {/* What It Does */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('expert')}
          >
            <div className="flex items-center justify-between mb-4">
              <Bot className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Hyper-Specific Expert</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              The assistant will be trained on our internal documentation (manuals, FAQs, etc.) to provide accurate, brand-sanctioned answers.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-blue-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for crisis-to-opportunity system</span>
            </div>
          </div>

          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('realtime')}
          >
            <div className="flex items-center justify-between mb-4">
              <Zap className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Data Integration</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Connected to our booking system's API for live availability and pricing.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-green-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for live API integration strategy</span>
            </div>
          </div>

          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('reputation')}
          >
            <div className="flex items-center justify-between mb-4">
              <Star className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Proactive Reputation Management</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              The assistant will be programmed to recognize negative queries and immediately provide transparent, solution-oriented answers.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-purple-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for reputation recovery system</span>
            </div>
          </div>
        </div>

        {/* Why It's a Game-Changer */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-gradient-primary text-primary-foreground'} p-8 rounded-lg`}>
          <h3 className="text-2xl font-bold mb-4 text-center">
            Why It's a Game-Changer
          </h3>
          
          <p className="text-lg text-center leading-relaxed">
            This transforms a passive chatbot into an active tool for <strong>lead generation</strong>, <strong>customer support</strong>, and <strong>reputation management</strong>. It positions Indie Campers as an essential part of the travel planning process, a key differentiator in the new AI search landscape.
          </p>
        </div>
      </div>

      {/* Modal Components */}
      <HyperSpecificExpertModal
        isOpen={activeModal === 'expert'}
        onClose={() => setActiveModal(null)}
      />
      <RealTimeIntegrationModal
        isOpen={activeModal === 'realtime'}
        onClose={() => setActiveModal(null)}
      />
      <ReputationManagementModal
        isOpen={activeModal === 'reputation'}
        onClose={() => setActiveModal(null)}
      />
    </SlideLayout>
  );
};