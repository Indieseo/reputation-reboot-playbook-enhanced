import { SlideLayout } from './SlideLayout';
import { Trophy, Shield, Rocket } from 'lucide-react';

export const SlideNine = ({ isPresenting }: { isPresenting?: boolean }) => {
  return (
    <SlideLayout
      title="The Vision"
      isPresenting={isPresenting}
      variant="title"
    >
      <div className="space-y-12">
        {/* Ultimate Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-8 rounded-lg shadow-presentation text-center`}>
            <Shield className={`w-12 h-12 mb-6 mx-auto ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className="text-2xl font-bold mb-4">Build a Content Moat</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              Create a comprehensive, <strong>300+ page content library</strong> that is impossible for competitors to replicate.
            </p>
          </div>

          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-8 rounded-lg shadow-presentation text-center`}>
            <Trophy className={`w-12 h-12 mb-6 mx-auto ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className="text-2xl font-bold mb-4">Achieve Market Leadership</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              Establish Indie Campers as the undisputed leader in the <strong>global rental and sales market</strong> by prioritizing speed, specificity, and authenticity.
            </p>
          </div>

          <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-8 rounded-lg shadow-presentation text-center`}>
            <Rocket className={`w-12 h-12 mb-6 mx-auto ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className="text-2xl font-bold mb-4">Define the Future</h3>
            <p className={`${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              We will be the company that understands and defines the competitive landscape for <strong>the next decade</strong>.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${isPresenting ? 'bg-gradient-hero' : 'bg-gradient-primary'} p-12 rounded-lg text-center text-primary-foreground`}>
          <h2 className={`${isPresenting ? 'text-4xl' : 'text-3xl'} font-bold mb-6`}>
            Transform Crisis into Competitive Advantage
          </h2>
          <p className={`${isPresenting ? 'text-xl' : 'text-lg'} mb-8 max-w-4xl mx-auto leading-relaxed`}>
            The AI search revolution is happening now. Companies that act first will dominate the next decade of digital marketing. 
            We have the roadmap, the tools, and the opportunity to turn our broader trust crisis into our greatest strategic advantage through transparency and educational leadership.
          </p>
          <div className={`${isPresenting ? 'text-lg' : 'text-base'} font-semibold`}>
            Let's make Indie Campers the definitive authority in AI-powered travel search.
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};