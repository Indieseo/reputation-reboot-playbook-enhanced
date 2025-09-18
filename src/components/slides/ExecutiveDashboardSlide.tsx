import React from 'react';
import ExecutiveDashboard from '../executive/ExecutiveDashboard';
import { SlideLayout } from './SlideLayout';

export const ExecutiveDashboardSlide = ({ isPresenting }: { isPresenting?: boolean }) => {
  return (
    <SlideLayout
      title="Executive KPI Dashboard with Data Sources"
      subtitle="Comprehensive metrics with verified citations and methodology"
      isPresenting={isPresenting}
    >
      <div className="space-y-6">
        <ExecutiveDashboard timeframe="current" />
      </div>
    </SlideLayout>
  );
};