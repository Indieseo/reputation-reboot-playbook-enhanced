import { SlideLayout } from './SlideLayout';
import { BarChart3, Target, Calendar } from 'lucide-react';

export const SlideEight = ({ isPresenting }: { isPresenting?: boolean }) => {
  return (
    <SlideLayout
      title="Our Metrics, Tools & Milestones"
      isPresenting={isPresenting}
    >
      <div className="space-y-8">
        {/* Tools for Measurement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card`}>
            <BarChart3 className={`w-8 h-8 mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className="text-xl font-bold mb-3">Tools for Measurement</h3>
            <ul className={`space-y-2 text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              <li>• <strong>Bing Webmaster Tools:</strong> Monitor ChatGPT-relevant keyword performance</li>
              <li>• <strong>AI Mention Tracking (Brand24):</strong> Track brand citations frequency</li>
              <li>• <strong>Schema Markup Validation:</strong> Ensure proper structured data</li>
            </ul>
          </div>

          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card`}>
            <Target className={`w-8 h-8 mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className="text-xl font-bold mb-3">Key Performance Indicators</h3>
            <ul className={`space-y-2 text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              <li>• <strong>AI Search Visibility Score:</strong> Brand citation frequency in AI responses</li>
              <li>• <strong>Brand Sentiment Analysis:</strong> Tone of citations (positive, neutral, negative)</li>
              <li>• <strong>AI-Referred Traffic Value:</strong> ROI vs traditional traffic</li>
            </ul>
          </div>

          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card`}>
            <Calendar className={`w-8 h-8 mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className="text-xl font-bold mb-3">Roadmap Milestones</h3>
            <ul className={`space-y-2 text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              <li>• <strong>30-Day:</strong> Complete Bing indexation; first ChatGPT citations</li>
              <li>• <strong>90-Day:</strong> 50+ ultra-specific pages; Portugal queries dominance</li>
              <li>• <strong>6-Month:</strong> Complete brand reputation transformation</li>
            </ul>
          </div>
        </div>

        {/* Detailed Timeline */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-gradient-secondary'} p-8 rounded-lg`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Detailed Timeline & Targets
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className={`${isPresenting ? 'text-primary-foreground' : 'text-foreground'} text-center`}>
              <div className={`${isPresenting ? 'bg-accent' : 'bg-warning'} text-white text-lg font-bold py-2 px-4 rounded-full mb-4 inline-block`}>
                30 Days
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Complete Bing indexation of Phase 1 content</li>
                <li>✓ Achieve first ChatGPT citations for damage prevention queries</li>
                <li>✓ Launch damage prevention authority hub</li>
              </ul>
            </div>
            
            <div className={`${isPresenting ? 'text-primary-foreground' : 'text-foreground'} text-center`}>
              <div className={`${isPresenting ? 'bg-accent' : 'bg-primary'} text-white text-lg font-bold py-2 px-4 rounded-full mb-4 inline-block`}>
                90 Days
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ 50+ ultra-specific pages live and generating citations</li>
                <li>✓ Regular appearances in Portugal campervan rental AI queries</li>
                <li>✓ Competitive analysis pages launched</li>
              </ul>
            </div>
            
            <div className={`${isPresenting ? 'text-primary-foreground' : 'text-foreground'} text-center`}>
              <div className={`${isPresenting ? 'bg-accent' : 'bg-success'} text-white text-lg font-bold py-2 px-4 rounded-full mb-4 inline-block`}>
                6 Months
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Dominate AI search presence for vehicle-specific queries</li>
                <li>✓ Complete brand reputation transformation</li>
                <li>✓ AI-powered chatbot fully operational</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI & Value Proposition */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-success/5 border border-success/20'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${isPresenting ? 'text-accent' : 'text-success'}`}>
            Expected ROI & Value Proposition
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-semibold mb-3 ${isPresenting ? 'text-primary-foreground' : 'text-foreground'}`}>
                Traffic Value Multiplier
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Traditional Google Traffic</span>
                  <span className={`font-bold ${isPresenting ? 'text-primary-foreground' : 'text-muted-foreground'}`}>1x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Search Traffic</span>
                  <span className={`font-bold ${isPresenting ? 'text-accent' : 'text-success'}`}>4.4x</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className={`font-semibold mb-3 ${isPresenting ? 'text-primary-foreground' : 'text-foreground'}`}>
                Engagement Improvements
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Engagement Rate</span>
                  <span className={`font-bold ${isPresenting ? 'text-accent' : 'text-success'}`}>72.5% vs 60.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Session Duration</span>
                  <span className={`font-bold ${isPresenting ? 'text-accent' : 'text-success'}`}>2:13 vs 1:37</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};