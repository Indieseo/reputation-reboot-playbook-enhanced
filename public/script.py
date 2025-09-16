# Let me analyze the data we've collected about IndeCampers.com and compile SEO issues
import pandas as pd

# Create a comprehensive list of SEO issues found
seo_issues = [
    {
        'Category': 'Technical SEO',
        'Issue': 'Limited robots.txt access',
        'Severity': 'Medium',
        'Description': 'Unable to access robots.txt file which may indicate server configuration issues or blocking',
        'Impact': 'Search engines may have difficulty understanding crawling permissions',
        'Recommendation': 'Ensure robots.txt is accessible and properly configured'
    },
    {
        'Category': 'Technical SEO', 
        'Issue': 'Limited sitemap.xml access',
        'Severity': 'Medium',
        'Description': 'Unable to access sitemap.xml file which may indicate server configuration issues',
        'Impact': 'Search engines may have difficulty discovering all pages',
        'Recommendation': 'Ensure sitemap.xml is accessible and properly submitted to search engines'
    },
    {
        'Category': 'International SEO',
        'Issue': 'Multiple language domains without clear hreflang strategy',
        'Severity': 'High',
        'Description': 'Found DE, IT language versions (de.indiecampers.com, indiecampers.com/it) but unclear hreflang implementation',
        'Impact': 'Risk of duplicate content penalties and poor international rankings',
        'Recommendation': 'Implement proper hreflang tags across all language versions'
    },
    {
        'Category': 'Content Quality',
        'Issue': 'Repetitive content across language versions',
        'Severity': 'Medium',
        'Description': 'Similar content structure and reviews repeated across different language versions',
        'Impact': 'May be seen as duplicate content by search engines',
        'Recommendation': 'Create unique, culturally relevant content for each market'
    },
    {
        'Category': 'User Experience & Reviews',
        'Issue': 'Significant negative review volume',
        'Severity': 'High',
        'Description': 'Multiple negative reviews on Reddit and Trustpilot citing poor service, hidden fees, broken vehicles',
        'Impact': 'Negative reviews impact local SEO, click-through rates, and brand trust signals',
        'Recommendation': 'Implement comprehensive review management strategy and address service issues'
    },
    {
        'Category': 'Brand Authority/E-E-A-T',
        'Issue': 'Trust and authority signals compromised',
        'Severity': 'High',
        'Description': 'Widespread complaints about customer service, hidden charges, and vehicle quality issues',
        'Impact': 'Poor E-E-A-T signals for travel/YMYL content; reduced search visibility',
        'Recommendation': 'Address operational issues and implement transparent pricing/policies'
    },
    {
        'Category': 'Competitive Analysis',
        'Issue': 'Traffic underperformance vs competitors',
        'Severity': 'High',
        'Description': 'SimilarWeb shows 829.6K visits vs Outdoorsy (2.2M), RVshare (2M), Roadsurfer (2.3M)',
        'Impact': 'Lower market share and reduced organic visibility',
        'Recommendation': 'Implement comprehensive SEO strategy focusing on content and technical improvements'
    },
    {
        'Category': 'Local SEO',
        'Issue': 'Inconsistent location coverage',
        'Severity': 'Medium',
        'Description': 'Claims 70+ locations but unclear local landing page strategy for each market',
        'Impact': 'Missing local search opportunities in key markets',
        'Recommendation': 'Create dedicated location pages with local content and GMB optimization'
    },
    {
        'Category': 'Content Strategy',
        'Issue': 'Limited informational content',
        'Severity': 'Medium',
        'Description': 'Homepage focused on rentals but lacks comprehensive travel guides, itineraries, and educational content',
        'Impact': 'Missing opportunities to rank for informational queries that drive awareness',
        'Recommendation': 'Develop content hub with destination guides, travel tips, and route planning'
    },
    {
        'Category': 'Technical Performance',
        'Issue': 'Potential Core Web Vitals issues',
        'Severity': 'Medium',
        'Description': 'Marketplace sites often struggle with loading speeds due to inventory feeds and images',
        'Impact': 'Poor page experience signals affecting rankings',
        'Recommendation': 'Conduct Core Web Vitals audit and optimize loading speeds'
    },
    {
        'Category': 'URL Structure',
        'Issue': 'Inconsistent URL patterns across markets',
        'Severity': 'Medium',
        'Description': 'Different URL structures for different language versions (subdomain vs subfolder)',
        'Impact': 'Confused site architecture affecting crawlability and user experience',
        'Recommendation': 'Standardize URL structure across all markets'
    },
    {
        'Category': 'Schema Markup',
        'Issue': 'Unknown structured data implementation',
        'Severity': 'Medium',
        'Description': 'Cannot verify if proper schema markup exists for vehicles, reviews, locations, organization',
        'Impact': 'Missing rich snippets and enhanced SERP features',
        'Recommendation': 'Implement comprehensive schema markup for all relevant entities'
    }
]

# Convert to DataFrame for better visualization
df = pd.DataFrame(seo_issues)

# Display the issues by category and severity
print("=== INDIE CAMPERS SEO AUDIT FINDINGS ===\n")

# Group by category
for category in df['Category'].unique():
    print(f"\n🔍 {category.upper()}")
    print("=" * 50)
    category_issues = df[df['Category'] == category]
    
    for _, issue in category_issues.iterrows():
        severity_emoji = {"High": "🔴", "Medium": "🟡", "Low": "🟢"}
        print(f"\n{severity_emoji[issue['Severity']]} {issue['Issue']} ({issue['Severity']} Priority)")
        print(f"   Description: {issue['Description']}")
        print(f"   Impact: {issue['Impact']}")
        print(f"   Recommendation: {issue['Recommendation']}")

# Summary statistics
print(f"\n\n📊 SUMMARY STATISTICS")
print("=" * 50)
severity_counts = df['Severity'].value_counts()
print(f"Total Issues Found: {len(df)}")
print(f"High Priority: {severity_counts.get('High', 0)}")
print(f"Medium Priority: {severity_counts.get('Medium', 0)}")
print(f"Low Priority: {severity_counts.get('Low', 0)}")

# Export to CSV
df.to_csv('indie_campers_seo_audit.csv', index=False)
print(f"\n✅ Full audit exported to: indie_campers_seo_audit.csv")