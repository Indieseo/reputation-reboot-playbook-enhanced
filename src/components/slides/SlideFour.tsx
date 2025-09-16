import { useState } from 'react';
import { SlideLayout } from './SlideLayout';
import { Shield, MessageSquare, Users, ExternalLink, Target, AlertTriangle } from 'lucide-react';
import { DamagePreventionModal } from '../modals/DamagePreventionModal';
import { InsuranceTransparencyModal } from '../modals/InsuranceTransparencyModal';
import { FirstTimeRenterModal } from '../modals/FirstTimeRenterModal';

export const SlideFour = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [activeModal, setActiveModal] = useState<'damage' | 'insurance' | 'firstTime' | null>(null);
  return (
    <SlideLayout
      title="Phase 1: Immediate Crisis Response (Months 1-2)"
      isPresenting={isPresenting}
    >
      <div className="space-y-8">

        {/* Key Content Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('damage')}
          >
            <div className="flex items-center justify-between mb-4">
              <Shield className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Damage Prevention Authority Hub</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Transform €2,500 damage fee crisis into comprehensive educational resource with step-by-step prevention guide.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-red-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for complete strategy details</span>
            </div>
          </div>

          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('insurance')}
          >
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Insurance Transparency</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Address "Premium Insurance is A SCAM" crisis with complete €199 vs €2,500 coverage analysis and real cost transparency.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-blue-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for complete coverage breakdown</span>
            </div>
          </div>

          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('firstTime')}
          >
            <div className="flex items-center justify-between mb-4">
              <Users className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">First-Time Renter Survival Guide</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Transform first-timer anxiety into confidence with honest guide addressing 50-minute WhatsApp delays and pickup reality.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-green-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for complete survival guide</span>
            </div>
          </div>
        </div>

        {/* Reddit & Forum Tactics */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-muted'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Reddit & Forum Tactics
          </h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
              <span><strong>Be a Helpful Authority:</strong> Our team will provide in-depth, human-like answers in existing, high-ranking Reddit threads instead of just dropping links.</span>
            </li>
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
              <span><strong>Optimize Our Presence:</strong> Our official Reddit profile will be optimized with our brand name, a clear description, and our website URL to build brand recognition and trust.</span>
            </li>
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
              <span><strong>Scalable & Passive:</strong> This strategy can be implemented for as little as an hour a month to continuously build a reputation network.</span>
            </li>
          </ul>
        </div>

        {/* Phase 1 Target URLs */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-primary/5 border border-primary/20'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Phase 1 Target URLs
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-4 rounded-lg`}>
              <h4 className="font-semibold mb-2">Damage Prevention Hub</h4>
              <p className={`text-sm ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <code>indiecampers.com/guides/avoid-damage-fees/</code>
              </p>
            </div>
            <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-4 rounded-lg`}>
              <h4 className="font-semibold mb-2">Insurance Transparency</h4>
              <p className={`text-sm ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <code>indiecampers.com/guides/premium-insurance-reality/</code>
              </p>
            </div>
            <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-4 rounded-lg`}>
              <h4 className="font-semibold mb-2">First-Time Survival Guide</h4>
              <p className={`text-sm ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <code>indiecampers.com/guides/first-time-rental-survival/</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Components */}
      <DamagePreventionModal
        isOpen={activeModal === 'damage'}
        onClose={() => setActiveModal(null)}
      />
      <InsuranceTransparencyModal
        isOpen={activeModal === 'insurance'}
        onClose={() => setActiveModal(null)}
      />
      <FirstTimeRenterModal
        isOpen={activeModal === 'firstTime'}
        onClose={() => setActiveModal(null)}
      />
    </SlideLayout>
  );
};