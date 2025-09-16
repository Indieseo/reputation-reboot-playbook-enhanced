import { SlideLayout } from './SlideLayout';

export const SlideOne = ({ isPresenting }: { isPresenting?: boolean }) => {
  return (
    <SlideLayout
      title="The Indie Campers AI Search Domination Playbook"
      subtitle="Transforming Reputation Crisis into Market Leadership"
      isPresenting={isPresenting}
      variant="title"
    >
      <div className={`${isPresenting ? 'text-center text-primary-foreground' : 'text-foreground'} space-y-8`}>
        <div className={`${isPresenting ? 'text-xl' : 'text-lg'} font-medium`}>
          A strategic roadmap to capture the new, more valuable AI search market and establish a lasting competitive advantage.
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm' : 'bg-muted'} p-6 rounded-lg`}>
            <h3 className={`${isPresenting ? 'text-accent' : 'text-primary'} text-xl font-bold mb-3`}>
              The Challenge
            </h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              Indie Campers faces a broader trust crisis with multiple operational challenges, including the €2,500 damage fee controversy, service delays, and inconsistent quality across 70+ locations.
            </p>
          </div>
          
          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm' : 'bg-muted'} p-6 rounded-lg`}>
            <h3 className={`${isPresenting ? 'text-accent' : 'text-primary'} text-xl font-bold mb-3`}>
              The Opportunity
            </h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              AI search traffic is <strong>4.4x more valuable</strong> than traditional Google traffic, with higher engagement, longer sessions, and better conversion rates.
            </p>
          </div>
          
          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm' : 'bg-muted'} p-6 rounded-lg`}>
            <h3 className={`${isPresenting ? 'text-accent' : 'text-primary'} text-xl font-bold mb-3`}>
              Our Solution
            </h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              Implement a proactive, transparency-led content strategy based on AI industry thought leaders' frameworks to "hijack the negative search narrative."
            </p>
          </div>
        </div>

        {/* Domain Consolidation Strategic Note */}
        <div className={`mt-12 pt-8 border-t ${isPresenting ? 'border-primary-foreground/20' : 'border-border'}`}>
          <div className={`${isPresenting ? 'bg-amber-500/10 border-amber-500/30' : 'bg-amber-50 border-amber-200'} border rounded-lg p-6`}>
            <div className="flex items-start space-x-3">
              <div className={`${isPresenting ? 'text-amber-400' : 'text-amber-600'} mt-1`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`${isPresenting ? 'text-amber-300' : 'text-amber-800'} font-semibold mb-2`}>
                  Strategic Foundation: Domain Consolidation
                </h4>
                <p className={`${isPresenting ? 'text-amber-100' : 'text-amber-700'} text-sm leading-relaxed`}>
                  <strong>Critical Implementation Note:</strong> This strategy assumes the planned consolidation of all Indie Campers digital properties into a single indiecampers.com domain with organized subfolders. This architectural decision will dramatically improve domain authority by concentrating link equity, enhance AI search visibility through unified content signals, and create a more coherent user experience. The proposed content structure (e.g., /guides/, /vehicles/, /destinations/, /compare/) requires this unified domain approach to achieve maximum SEO and AI search impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
