import { SlideLayout } from './SlideLayout';
import { AlertTriangle, TrendingUp } from 'lucide-react';

export const SlideTwo = ({ isPresenting }: { isPresenting?: boolean }) => {
  return (
    <SlideLayout
      title="The Strategic Imperative: Crisis & Opportunity"
      isPresenting={isPresenting}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Current State Analysis */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-destructive/5 border border-destructive/20'} p-6 rounded-lg`}>
          <div className="flex items-center mb-4">
            <AlertTriangle className={`w-6 h-6 mr-3 ${isPresenting ? 'text-warning' : 'text-destructive'}`} />
            <h3 className={`text-xl font-bold ${isPresenting ? 'text-primary-foreground' : 'text-destructive'}`}>
              Current Trust Crisis Analysis
            </h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-warning' : 'text-destructive'} font-bold mr-2`}>•</span>
              <span><strong>Systemic Trust Issues:</strong> Customer feedback reveals broader operational challenges across multiple touchpoints, not isolated incidents.</span>
            </li>
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-warning' : 'text-destructive'} font-bold mr-2`}>•</span>
              <span><strong>Multiple Pain Points:</strong> €2,500 damage fees, 50-minute response delays, unhelpful staff, and inconsistent service quality across 70+ locations.</span>
            </li>
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-warning' : 'text-destructive'} font-bold mr-2`}>•</span>
              <span><strong>AI Amplification:</strong> AI models synthesize these interconnected issues into a comprehensive negative brand narrative that dominates search results.</span>
            </li>
          </ul>
        </div>

        {/* The AI Search Revolution */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-success/5 border border-success/20'} p-6 rounded-lg`}>
          <div className="flex items-center mb-4">
            <TrendingUp className={`w-6 h-6 mr-3 ${isPresenting ? 'text-accent' : 'text-success'}`} />
            <h3 className={`text-xl font-bold ${isPresenting ? 'text-primary-foreground' : 'text-success'}`}>
              The AI Search Revolution
            </h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-accent' : 'text-success'} font-bold mr-2`}>•</span>
              <span><strong>New Class of Visitor:</strong> AI search visitors are pre-qualified and primed to convert.</span>
            </li>
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-accent' : 'text-success'} font-bold mr-2`}>•</span>
              <div>
                <strong>Why They're More Valuable:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• <strong>Engagement Rate:</strong> 72.5% (vs. 60.4% from traditional search)</li>
                  <li>• <strong>Session Duration:</strong> 2:13 (vs. 1:37 from traditional search)</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <span className={`${isPresenting ? 'text-accent' : 'text-success'} font-bold mr-2`}>•</span>
              <span><strong>How AI Works:</strong> AI platforms provide a single, synthesized answer, establishing a brand cited in the response as the authoritative solution.</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};
