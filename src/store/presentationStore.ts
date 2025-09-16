import { create } from 'zustand';
import { PresentationController, Question, EngagementMetrics } from '../types/executive.types';

interface PresentationStore extends PresentationController {
  // Actions
  setCurrentSlide: (slide: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  addQuestion: (question: Omit<Question, 'id' | 'timestamp'>) => void;
  answerQuestion: (id: string, answer: string) => void;
  updateEngagement: (metrics: Partial<EngagementMetrics>) => void;
  recordSlideTime: (slideIndex: number, timeSpent: number) => void;
  togglePresenterMode: () => void;
  
  // Presentation state
  isPresenting: boolean;
  presenterMode: boolean;
  startTime: Date | null;
  
  // Export functionality
  exportMetrics: () => void;
  generateExecutiveSummary: () => void;
}

export const usePresentationStore = create<PresentationStore>((set, get) => ({
  // Initial state
  slideManagement: {
    currentSlide: 0,
    totalSlides: 10,
    timePerSlide: new Array(10).fill(0),
    presenterNotes: [
      "Executive Summary: Focus on crisis urgency and 4.4x opportunity multiplier",
      "Market Intelligence: Emphasize competitive gaps and AI search revolution",
      "Strategic Framework: Validate with AI industry thought leaders' methodology and HubSpot case study",
      "Phase 1 - Crisis Response: 2-month timeline, immediate damage control",
      "Phase 2 - Authority Building: 6-month SEO dominance strategy", 
      "Phase 3 - AI Integration: Full market capture and barrier creation",
      "Technical Architecture: Scalable, enterprise-grade implementation",
      "Metrics & Analytics: Real-time ROI tracking and competitive monitoring",
      "Investment & ROI: 420% ROI with 12-month payback period",
      "Execution Roadmap: Clear milestones, risk mitigation, success metrics"
    ]
  },
  
  interactivity: {
    livePolling: false,
    audienceQuestions: [],
    realTimeDataRefresh: true
  },
  
  analytics: {
    slideViewTime: new Array(10).fill(0),
    interactionHeatmap: [],
    executiveEngagement: {
      attentionScore: 85,
      interactionRate: 12.5,
      questionVolume: 0,
      decisionPoints: 0
    }
  },

  isPresenting: false,
  presenterMode: false,
  startTime: null,

  // Actions
  setCurrentSlide: (slide: number) =>
    set((state) => ({
      slideManagement: {
        ...state.slideManagement,
        currentSlide: Math.max(0, Math.min(slide, state.slideManagement.totalSlides - 1))
      }
    })),

  nextSlide: () =>
    set((state) => {
      const newSlide = Math.min(state.slideManagement.currentSlide + 1, state.slideManagement.totalSlides - 1);
      return {
        slideManagement: {
          ...state.slideManagement,
          currentSlide: newSlide
        }
      };
    }),

  previousSlide: () =>
    set((state) => {
      const newSlide = Math.max(state.slideManagement.currentSlide - 1, 0);
      return {
        slideManagement: {
          ...state.slideManagement,
          currentSlide: newSlide
        }
      };
    }),

  addQuestion: (question) =>
    set((state) => ({
      interactivity: {
        ...state.interactivity,
        audienceQuestions: [
          ...state.interactivity.audienceQuestions,
          {
            ...question,
            id: Date.now().toString(),
            timestamp: new Date(),
            answered: false
          }
        ]
      },
      analytics: {
        ...state.analytics,
        executiveEngagement: {
          ...state.analytics.executiveEngagement,
          questionVolume: state.analytics.executiveEngagement.questionVolume + 1
        }
      }
    })),

  answerQuestion: (id, answer) =>
    set((state) => ({
      interactivity: {
        ...state.interactivity,
        audienceQuestions: state.interactivity.audienceQuestions.map((q) =>
          q.id === id ? { ...q, answered: true, answer } : q
        )
      }
    })),

  updateEngagement: (metrics) =>
    set((state) => ({
      analytics: {
        ...state.analytics,
        executiveEngagement: {
          ...state.analytics.executiveEngagement,
          ...metrics
        }
      }
    })),

  recordSlideTime: (slideIndex, timeSpent) =>
    set((state) => {
      const newTimePerSlide = [...state.slideManagement.timePerSlide];
      newTimePerSlide[slideIndex] = (newTimePerSlide[slideIndex] || 0) + timeSpent;
      
      const newSlideViewTime = [...state.analytics.slideViewTime];
      newSlideViewTime[slideIndex] = (newSlideViewTime[slideIndex] || 0) + timeSpent;

      return {
        slideManagement: {
          ...state.slideManagement,
          timePerSlide: newTimePerSlide
        },
        analytics: {
          ...state.analytics,
          slideViewTime: newSlideViewTime
        }
      };
    }),

  togglePresenterMode: () =>
    set((state) => ({
      presenterMode: !state.presenterMode
    })),

  exportMetrics: () => {
    const state = get();
    const metrics = {
      presentation: {
        totalSlides: state.slideManagement.totalSlides,
        averageTimePerSlide: state.slideManagement.timePerSlide.reduce((a, b) => a + b, 0) / state.slideManagement.totalSlides,
        totalPresentationTime: state.slideManagement.timePerSlide.reduce((a, b) => a + b, 0)
      },
      engagement: state.analytics.executiveEngagement,
      questions: {
        total: state.interactivity.audienceQuestions.length,
        answered: state.interactivity.audienceQuestions.filter(q => q.answered).length,
        pending: state.interactivity.audienceQuestions.filter(q => !q.answered).length
      }
    };
    
    console.log('Presentation Metrics:', metrics);
    // In a real implementation, this would trigger PDF generation or export
  },

  generateExecutiveSummary: () => {
    const state = get();
    const summary = {
      presentedAt: new Date().toISOString(),
      duration: state.slideManagement.timePerSlide.reduce((a, b) => a + b, 0),
      engagementScore: state.analytics.executiveEngagement.attentionScore,
      keyDecisionPoints: state.analytics.executiveEngagement.decisionPoints,
      followUpActions: state.interactivity.audienceQuestions
        .filter(q => !q.answered)
        .map(q => ({ question: q.question, priority: 'high' })),
      nextSteps: [
        'Review competitive analysis findings',
        'Approve Phase 1 budget allocation',
        'Set up project governance structure',
        'Define success metrics and reporting cadence'
      ]
    };
    
    console.log('Executive Summary Generated:', summary);
    // In a real implementation, this would generate a PDF or document
  }
}));