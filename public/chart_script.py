import plotly.graph_objects as go

# Data
severity = ['High Pri', 'Med Pri', 'Low Pri']
count = [4, 8, 0]
colors = ['#DB4545', '#D2BA4C', '#2E8B57']

fig = go.Figure(go.Bar(
    y=severity,
    x=count,
    orientation='h',
    marker=dict(color=colors),
    text=[f'{c}' if c > 0 else '0' for c in count],
    textposition='auto',
    hovertemplate='%{y}: %{x} issues'
))

fig.update_layout(
    title_text='SEO Issues Indie Campers',
    showlegend=False
)
fig.update_xaxes(title_text='Issue Cnt')
fig.update_yaxes(title_text='Severity', categoryorder='array', categoryarray=['High Pri', 'Med Pri', 'Low Pri'])

fig.write_image('seo_issues_severity.png')
