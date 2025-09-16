import { SlideLayout } from './SlideLayout';
import { CheckCircle, Settings } from 'lucide-react';

export const SlideSeven = ({ isPresenting }: { isPresenting?: boolean }) => {
  return (
    <SlideLayout
      title="Technical & Foundational Requirements"
      isPresenting={isPresenting}
    >
      <div className="space-y-8">
        {/* Four Critical AI Visibility Factors */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-muted'} p-6 rounded-lg`}>
          <h3 className={`text-2xl font-bold mb-6 ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Four Critical AI Visibility Factors
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 ${isPresenting ? 'text-accent' : 'text-success'} flex-shrink-0 mt-1`} />
                <div>
                  <h4 className="font-bold">1. Authority Signals</h4>
                  <p className={`text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    AI prioritizes citations from respected publications, not just vendor pages.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 ${isPresenting ? 'text-accent' : 'text-success'} flex-shrink-0 mt-1`} />
                <div>
                  <h4 className="font-bold">2. Content Intelligence</h4>
                  <p className={`text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    Content must directly answer specific questions with original data, structured for AI parsing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 ${isPresenting ? 'text-accent' : 'text-success'} flex-shrink-0 mt-1`} />
                <div>
                  <h4 className="font-bold">3. The Specificity Strategy</h4>
                  <p className={`text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    We must create ultra-specific content to capture a wider range of AI queries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className={`w-6 h-6 ${isPresenting ? 'text-accent' : 'text-success'} flex-shrink-0 mt-1`} />
                <div>
                  <h4 className="font-bold">4. Reputation Network</h4>
                  <p className={`text-sm ${isPresenting ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    Context and thoroughness of mentions are far more important than domain authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Actions */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-card border border-border'} p-6 rounded-lg shadow-card`}>
          <div className="flex items-center mb-6">
            <Settings className={`w-6 h-6 mr-3 ${isPresenting ? 'text-accent' : 'text-primary'}`} />
            <h3 className={`text-2xl font-bold ${isPresenting ? 'text-accent' : 'text-primary'}`}>
              Required Actions
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
                <div>
                  <strong>Content Architecture:</strong> Restructure all pages for AI consumption using a clear hierarchy (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.).
                </div>
              </li>
              <li className="flex items-start">
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
                <div>
                  <strong>Structured Data:</strong> Implement <strong>rental property schema markup</strong> to help AI understand and cite our content effectively.
                </div>
              </li>
            </ul>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
                <div>
                  <strong>Voice Search:</strong> Optimize for conversational queries, including FAQs that mirror natural speech patterns.
                </div>
              </li>
              <li className="flex items-start">
                <span className={`${isPresenting ? 'text-accent' : 'text-primary'} font-bold mr-2`}>•</span>
                <div>
                  <strong>Bing Optimization:</strong> Submit all content to Bing Webmaster Tools as Bing is a key data source for ChatGPT.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Visibility Research Insights */}
        <div className={`${isPresenting ? 'bg-card/10 backdrop-blur-sm text-primary-foreground' : 'bg-muted'} p-6 rounded-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${isPresenting ? 'text-accent' : 'text-primary'}`}>
            Key Research Insights from AI Industry Thought Leaders' 500,000 ChatGPT Query Analysis
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-semibold mb-3 ${isPresenting ? 'text-primary-foreground' : 'text-foreground'}`}>
                What AI Values Most
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className={`${isPresenting ? 'text-accent' : 'text-success'} font-bold mr-2`}>•</span>
                  <span><strong>Context:</strong> 9.1/10 importance score</span>
                </li>
                <li className="flex items-start">
                  <span className={`${isPresenting ? 'text-accent' : 'text-success'} font-bold mr-2`}>•</span>
                  <span><strong>Thoroughness:</strong> 8.7/10 importance score</span>
                </li>
                <li className="flex items-start">
                  <span className={`${isPresenting ? 'text-accent' : 'text-success'} font-bold mr-2`}>•</span>
                  <span><strong>Authority Signals:</strong> Citations from respected publications</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-3 ${isPresenting ? 'text-primary-foreground' : 'text-foreground'}`}>
                What AI Ignores
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className={`${isPresenting ? 'text-destructive' : 'text-destructive'} font-bold mr-2`}>•</span>
                  <span><strong>Domain Authority:</strong> Only 2.6/10 importance score</span>
                </li>
                <li className="flex items-start">
                  <span className={`${isPresenting ? 'text-destructive' : 'text-destructive'} font-bold mr-2`}>•</span>
                  <span><strong>Vendor Pages:</strong> Only 2% of AI citations</span>
                </li>
                <li className="flex items-start">
                  <span className={`${isPresenting ? 'text-destructive' : 'text-destructive'} font-bold mr-2`}>•</span>
                  <span><strong>Sales Content:</strong> AI prefers educational over promotional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};