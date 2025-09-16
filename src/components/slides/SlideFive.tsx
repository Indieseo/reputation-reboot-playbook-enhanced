import { useState } from 'react';
import { SlideLayout } from './SlideLayout';
import { MapPin, Car, Scale, ExternalLink, Target } from 'lucide-react';
import { VehicleSpecificModal } from '../modals/VehicleSpecificModal';
import { LocationSpecificModal } from '../modals/LocationSpecificModal';
import { CompetitiveAnalysisModal } from '../modals/CompetitiveAnalysisModal';

export const SlideFive = ({ isPresenting }: { isPresenting?: boolean }) => {
  const [activeModal, setActiveModal] = useState<'vehicle' | 'location' | 'competitive' | null>(null);
  return (
    <SlideLayout
      title="Phase 2: Authority Building & Competitive Positioning (Months 3-4)"
      isPresenting={isPresenting}
    >
      <div className="space-y-8">
        {/* Objective */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-blue-50 border border-blue-200'} p-4 rounded-lg`}>
          <p className={`text-lg font-semibold ${isPresenting ? 'text-accent' : 'text-blue-900'}`}>
            <strong>Objective:</strong> Scale our content production to deliver more and better ultra-specific content, establishing Indie Campers as the ultimate authority on campervan and RV road trips across Europe.
          </p>
        </div>

        {/* Content Expansion */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('vehicle')}
          >
            <div className="flex items-center justify-between mb-4">
              <Car className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Vehicle-Specific Content</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Create guides tailored to specific models and traveler personas, such as a guide on the <strong>Active Small</strong> for solo female travelers in Portugal.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-blue-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for complete vehicle strategy</span>
            </div>
          </div>

          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('location')}
          >
            <div className="flex items-center justify-between mb-4">
              <MapPin className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Location-Specific Content</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Develop practical, detailed guides for key operational hubs like our Lisbon location.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-green-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for location intelligence strategy</span>
            </div>
          </div>

          <div
            className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
            onClick={() => setActiveModal('competitive')}
          >
            <div className="flex items-center justify-between mb-4">
              <Scale className={`w-8 h-8 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
              <ExternalLink className={`w-5 h-5 ${isPresenting ? 'text-accent/70' : 'text-primary/70'} group-hover:scale-110 transition-transform`} />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparent Competitive Analysis</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} mb-3`}>
              Proactively create comparison pages with competitors like <strong>McRent</strong> and <strong>Roadsurfer</strong> that honestly acknowledge their strengths.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-orange-500" />
              <span className={`${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>Click for competitive transparency strategy</span>
            </div>
          </div>
        </div>

        {/* Proposed Long-Tail Keywords */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-muted'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Proposed Long-Tail Keywords (Refined for AI Search)
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} flex items-start`}>
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} mr-2`}>•</span>
                "Is the Indie Campers Active Small Perfect for a Solo Female Traveler?"
              </li>
              <li className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} flex items-start`}>
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} mr-2`}>•</span>
                "The Ultimate Family Guide to the Indie Campers Atlas Model"
              </li>
            </ul>
            <ul className="space-y-2">
              <li className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} flex items-start`}>
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} mr-2`}>•</span>
                "Peer-to-Peer vs. Professional: A Comparison of Indie Campers and Yescapa"
              </li>
              <li className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'} flex items-start`}>
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} mr-2`}>•</span>
                "First-Time Campervan Rental Tips: A Stress-Free Guide for Europe"
              </li>
            </ul>
          </div>
        </div>

        {/* Phase 2 Target URLs */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-primary/5 border border-primary/20'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Phase 2 Target URLs
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-3 rounded-lg`}>
                <h4 className="font-semibold text-sm mb-1">Active Small Solo Guide</h4>
                <p className={`text-xs ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <code>indiecampers.com/vehicles/active-small/solo-female-guide/</code>
                </p>
              </div>
              <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-3 rounded-lg`}>
                <h4 className="font-semibold text-sm mb-1">Atlas Family Guide</h4>
                <p className={`text-xs ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <code>indiecampers.com/vehicles/atlas-5-people/family-europe-complete/</code>
                </p>
              </div>
              <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-3 rounded-lg`}>
                <h4 className="font-semibold text-sm mb-1">Lisbon Complete Guide</h4>
                <p className={`text-xs ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <code>indiecampers.com/destinations/portugal/lisbon-complete-guide/</code>
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-3 rounded-lg`}>
                <h4 className="font-semibold text-sm mb-1">vs. McRent Comparison</h4>
                <p className={`text-xs ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <code>indiecampers.com/compare/vs-mcrent-damage-policies/</code>
                </p>
              </div>
              <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-3 rounded-lg`}>
                <h4 className="font-semibold text-sm mb-1">vs. Roadsurfer Analysis</h4>
                <p className={`text-xs ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <code>indiecampers.com/compare/vs-roadsurfer-service-quality/</code>
                </p>
              </div>
              <div className={`${isPresenting ? 'bg-card/20' : 'bg-card'} p-3 rounded-lg`}>
                <h4 className="font-semibold text-sm mb-1">Professional vs P2P</h4>
                <p className={`text-xs ${isPresenting ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  <code>indiecampers.com/compare/professional-vs-peer-to-peer/</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Components */}
      <VehicleSpecificModal
        isOpen={activeModal === 'vehicle'}
        onClose={() => setActiveModal(null)}
      />
      <LocationSpecificModal
        isOpen={activeModal === 'location'}
        onClose={() => setActiveModal(null)}
      />
      <CompetitiveAnalysisModal
        isOpen={activeModal === 'competitive'}
        onClose={() => setActiveModal(null)}
      />
    </SlideLayout>
  );
};