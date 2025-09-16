import { ReactNode } from 'react';

interface SlideLayoutProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  isPresenting?: boolean;
  variant?: 'default' | 'title' | 'content';
}

export const SlideLayout = ({ 
  title, 
  subtitle, 
  children, 
  isPresenting = false,
  variant = 'default'
}: SlideLayoutProps) => {
  const containerClass = isPresenting 
    ? 'h-screen flex flex-col justify-center items-center bg-gradient-hero p-16' 
    : 'h-full bg-card rounded-xl shadow-presentation p-12 flex flex-col';

  const titleClass = isPresenting
    ? variant === 'title' ? 'text-6xl font-bold text-center mb-8' : 'text-5xl font-bold text-center mb-6'
    : variant === 'title' ? 'text-4xl font-bold mb-6' : 'text-3xl font-bold mb-4';

  const subtitleClass = isPresenting
    ? 'text-2xl text-center mb-12 text-primary-foreground/90'
    : 'text-xl mb-6 text-muted-foreground';

  return (
    <div className={containerClass}>
      {title && (
        <h1 className={`${titleClass} ${isPresenting ? 'text-primary-foreground' : 'text-foreground'}`}>
          {title}
        </h1>
      )}
      {subtitle && (
        <p className={subtitleClass}>
          {subtitle}
        </p>
      )}
      <div className={`${isPresenting ? 'flex-1 flex flex-col justify-center w-full max-w-6xl' : 'flex-1'}`}>
        {children}
      </div>
    </div>
  );
};
