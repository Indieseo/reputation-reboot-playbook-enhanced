import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Pause, Crown } from 'lucide-react';
import { SlideOne } from './slides/SlideOne';
import { SlideTwo } from './slides/SlideTwo';
import { SlideThree } from './slides/SlideThree';
import { SlideFour } from './slides/SlideFour';
import { SlideFive } from './slides/SlideFive';
import { SlideSix } from './slides/SlideSix';
import { SlideSeven } from './slides/SlideSeven';
import { SlideEight } from './slides/SlideEight';
import { SlideNine } from './slides/SlideNine';
import { BlogStrategySlide } from './slides/BlogStrategySlide';
import { ExecutiveSummarySlide } from './slides-enterprise/ExecutiveSummarySlide';
import { MarketIntelligenceSlide } from './slides-enterprise/MarketIntelligenceSlide';
import { SourcesSlide } from './slides/SourcesSlide';
import { ExecutiveDashboardSlide } from './slides/ExecutiveDashboardSlide';
import { DivisionOfLaborSlide } from './slides/DivisionOfLaborSlide';
import PresentationController from './presentation/PresentationController';
import { usePresentationStore } from '../store/presentationStore';

const slides = [
  { id: 1, component: ExecutiveSummarySlide, title: "Executive Summary", enterprise: true },
  { id: 2, component: SlideNine, title: "Execution Roadmap & Next Steps" },
  { id: 3, component: MarketIntelligenceSlide, title: "Market Intelligence Deep Dive", enterprise: true },
  { id: 4, component: ExecutiveDashboardSlide, title: "Executive KPI Dashboard", enterprise: true },
  { id: 5, component: SlideThree, title: "Strategic Framework Validation" },
  { id: 6, component: SlideFour, title: "Phase 1: Crisis Response (2 Months)" },
  { id: 7, component: SlideFive, title: "Phase 2: Authority Building (6 Months)" },
  { id: 8, component: SlideSix, title: "Phase 3: AI Integration (12 Months)" },
  { id: 9, component: BlogStrategySlide, title: "Blog Strategy Framework", enterprise: true },
  { id: 10, component: SlideSeven, title: "Technical Architecture & Implementation" },
  { id: 11, component: SlideEight, title: "Metrics, Analytics & ROI Tracking" },
  { id: 12, component: DivisionOfLaborSlide, title: "Division of Labor Plan", enterprise: true },
  { id: 13, component: SourcesSlide, title: "Data Sources & Citations", enterprise: true },
];

const classicSlides = [
  { id: 1, component: SlideOne, title: "Title & Executive Summary" },
  { id: 2, component: SlideTwo, title: "Strategic Imperative" },
  { id: 3, component: SlideThree, title: "Foundational Blueprint" },
  { id: 4, component: SlideFour, title: "Phase 1: Crisis Response" },
  { id: 5, component: SlideFive, title: "Phase 2: Authority Building" },
  { id: 6, component: SlideSix, title: "Phase 3: AI-Powered Experience" },
  { id: 7, component: BlogStrategySlide, title: "Blog Strategy Framework" },
  { id: 8, component: SlideSeven, title: "Technical Requirements" },
  { id: 9, component: SlideEight, title: "Metrics & Milestones" },
  { id: 10, component: SlideNine, title: "The Vision" },
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [enterpriseMode, setEnterpriseMode] = useState(true);
  
  const {
    slideManagement,
    setCurrentSlide: setStoreSlide,
    nextSlide: storeNextSlide,
    previousSlide: storePrevSlide
  } = usePresentationStore();
  
  const activeSlides = enterpriseMode ? slides : classicSlides;

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % activeSlides.length;
    setCurrentSlide(newSlide);
    setStoreSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + activeSlides.length) % activeSlides.length;
    setCurrentSlide(newSlide);
    setStoreSlide(newSlide);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setStoreSlide(index);
  };

  const CurrentSlideComponent = activeSlides[currentSlide].component;

  if (isPresenting) {
    return (
      <PresentationController>
        <div className="slide-container slide-enter">
          <CurrentSlideComponent isPresenting={isPresenting} />
        </div>
      </PresentationController>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Presentation Header */}
      <div className="bg-card shadow-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-foreground">
                {enterpriseMode ? 'Enterprise AI Strategy Presentation' : 'AI Search Domination Playbook'}
              </h1>
              <div className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} of {activeSlides.length}
              </div>
              {enterpriseMode && (
                <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  <Crown className="w-3 h-3" />
                  <span>Enterprise Mode</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEnterpriseMode(!enterpriseMode)}
                className="flex items-center space-x-2"
              >
                <Crown className="w-4 h-4" />
                <span>{enterpriseMode ? 'Classic' : 'Enterprise'}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPresenting(!isPresenting)}
                className="flex items-center space-x-2"
              >
                {isPresenting ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPresenting ? 'Exit' : 'Present'}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Slide Navigation Sidebar */}
        {!isPresenting && (
          <div className="w-80 bg-card border-r border-border shadow-card">
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-4">Slides</h3>
              <div className="space-y-2">
                {activeSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      currentSlide === index
                        ? 'bg-primary text-primary-foreground shadow-card'
                        : 'bg-muted hover:bg-neutral-100 text-foreground'
                    }`}
                  >
                    <div className="text-sm font-medium">
                      {slide.id}. {slide.title}
                      {slide.enterprise && (
                        <span className="ml-2 text-xs bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded">
                          ENTERPRISE
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Slide Area */}
        <div className="flex-1 flex flex-col">
          {/* Slide Content */}
          <div className={`flex-1 ${isPresenting ? 'p-0' : 'p-8'}`}>
            <div className={`${isPresenting ? 'h-screen' : 'h-full max-w-5xl mx-auto'}`}>
              <CurrentSlideComponent isPresenting={isPresenting} />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-card border-t border-border p-4">
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              <Button
                variant="outline"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              <div className="flex items-center space-x-2">
                {activeSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index
                        ? 'bg-primary'
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextSlide}
                disabled={currentSlide === activeSlides.length - 1}
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
