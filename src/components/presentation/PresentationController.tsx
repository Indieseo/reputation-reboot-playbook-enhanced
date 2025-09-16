import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentationStore } from '../../store/presentationStore';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Monitor, 
  FileText, 
  Clock,
  Users,
  MessageSquare,
  Download,
  Settings
} from 'lucide-react';

interface PresentationControllerProps {
  children: React.ReactNode;
}

const PresentationController: React.FC<PresentationControllerProps> = ({ children }) => {
  const {
    slideManagement,
    analytics,
    interactivity,
    presenterMode,
    isPresenting,
    nextSlide,
    previousSlide,
    setCurrentSlide,
    togglePresenterMode,
    recordSlideTime,
    addQuestion,
    exportMetrics,
    generateExecutiveSummary
  } = usePresentationStore();

  const [slideStartTime, setSlideStartTime] = useState<Date>(new Date());
  const [timer, setTimer] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [showNotes, setShowNotes] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isPresenting) {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPresenting]);

  // Record slide viewing time
  useEffect(() => {
    const now = new Date();
    const timeSpent = (now.getTime() - slideStartTime.getTime()) / 1000;
    
    if (timeSpent > 1) { // Only record if more than 1 second
      recordSlideTime(slideManagement.currentSlide, timeSpent);
    }
    
    setSlideStartTime(now);
  }, [slideManagement.currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          previousSlide();
          break;
        case 'f':
        case 'F11':
          e.preventDefault();
          togglePresenterMode();
          break;
        case 'Escape':
          e.preventDefault();
          setShowControls(true);
          break;
        case 'h':
          e.preventDefault();
          setShowControls(!showControls);
          break;
        case 'n':
          e.preventDefault();
          setShowNotes(!showNotes);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, previousSlide, togglePresenterMode, showControls, showNotes]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`relative ${presenterMode ? 'h-screen bg-black' : ''}`}>
      {/* Main Content */}
      <div className={`${presenterMode ? 'grid grid-cols-2 h-full' : ''}`}>
        <div className={`${presenterMode ? 'bg-white' : ''} relative`}>
          {children}
        </div>
        
        {/* Presenter Notes (Presenter Mode Only) */}
        {presenterMode && (
          <div className="bg-gray-900 text-white p-6 overflow-y-auto">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-green-400 mb-2">Presenter Notes</h3>
              <div className="text-sm text-gray-400 mb-4">
                Slide {slideManagement.currentSlide + 1} of {slideManagement.totalSlides}
              </div>
            </div>
            
            <div className="text-gray-100 leading-relaxed mb-6">
              {slideManagement.presenterNotes[slideManagement.currentSlide] || 'No notes for this slide.'}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-sm text-gray-400">Engagement</div>
                <div className="text-lg font-bold text-green-400">
                  {analytics.executiveEngagement.attentionScore}%
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-sm text-gray-400">Questions</div>
                <div className="text-lg font-bold text-blue-400">
                  {interactivity.audienceQuestions.length}
                </div>
              </div>
            </div>

            {/* Recent Questions */}
            {interactivity.audienceQuestions.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Recent Questions</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {interactivity.audienceQuestions.slice(-3).map((q) => (
                    <div key={q.id} className="bg-gray-800 rounded p-2">
                      <div className="text-sm text-gray-300">{q.question}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {q.askedBy} • {q.answered ? 'Answered' : 'Pending'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={previousSlide}
                disabled={slideManagement.currentSlide === 0}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                disabled={slideManagement.currentSlide === slideManagement.totalSlides - 1}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <AnimatePresence>
        {showControls && !presenterMode && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-2xl px-6 py-4 border border-gray-200 z-50"
          >
            <div className="flex items-center gap-4">
              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={previousSlide}
                  disabled={slideManagement.currentSlide === 0}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="px-3 py-1 bg-blue-100 rounded-lg text-sm font-medium text-blue-800">
                  {slideManagement.currentSlide + 1} / {slideManagement.totalSlides}
                </div>
                
                <button
                  onClick={nextSlide}
                  disabled={slideManagement.currentSlide === slideManagement.totalSlides - 1}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="w-px h-6 bg-gray-300"></div>

              {/* Timer */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timer)}</span>
              </div>

              <div className="w-px h-6 bg-gray-300"></div>

              {/* Presenter Mode Toggle */}
              <button
                onClick={togglePresenterMode}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Toggle Presenter Mode (F)"
              >
                <Monitor className="w-5 h-5" />
              </button>

              {/* Notes Toggle */}
              <button
                onClick={() => setShowNotes(!showNotes)}
                className={`p-2 rounded-lg transition-colors ${
                  showNotes ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                title="Toggle Notes (N)"
              >
                <FileText className="w-5 h-5" />
              </button>

              <div className="w-px h-6 bg-gray-300"></div>

              {/* Analytics */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-green-600">
                  <Users className="w-4 h-4" />
                  <span>{analytics.executiveEngagement.attentionScore}%</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <MessageSquare className="w-4 h-4" />
                  <span>{interactivity.audienceQuestions.length}</span>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300"></div>

              {/* Export */}
              <button
                onClick={exportMetrics}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Export Metrics"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notes Panel */}
      <AnimatePresence>
        {showNotes && !presenterMode && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 w-80 bg-white shadow-2xl rounded-2xl p-6 border border-gray-200 z-40 max-h-96 overflow-y-auto"
          >
            <h3 className="font-semibold text-gray-800 mb-3">Speaker Notes</h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              {slideManagement.presenterNotes[slideManagement.currentSlide] || 'No notes for this slide.'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Help */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-white px-3 py-2 rounded-lg shadow-lg border">
        <div>← → : Navigate</div>
        <div>F : Presenter Mode</div>
        <div>H : Hide/Show Controls</div>
        <div>N : Toggle Notes</div>
      </div>
    </div>
  );
};

export default PresentationController;