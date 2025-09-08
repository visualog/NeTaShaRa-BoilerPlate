import React from 'react';

// 간단한 className 유틸리티 함수
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface ColorScaleDisplayProps {
  scaleName: string; // e.g., 'gray', 'blue'
}

const ColorSwatch = ({ color, name, variant }: { 
  color: string; 
  name: string; 
  variant: 'light' | 'dark' | 'lightAlpha' | 'darkAlpha' 
}) => {
  const isAlpha = variant.includes('Alpha');
  const isDark = variant.includes('dark');
  const step = name.replace(/\D/g, '');
  const stepNumber = parseInt(step || '1', 10);
  const textColor = (stepNumber <= 5 && !isDark) || (stepNumber >= 8 && isDark) 
    ? 'text-gray-900' 
    : 'text-white';
  
  // Generate proper CSS variable name
  const cssVar = `--${color.toLowerCase()}${isAlpha ? '-a' : ''}${step}`;
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`w-16 h-16 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center`}
        style={{
          backgroundColor: `var(${cssVar})`,
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <span className={`text-xs font-mono ${textColor}`}>{step}</span>
      </div>
      <div className="mt-1 text-xs text-center font-mono text-gray-500 dark:text-gray-400">
        {name}
      </div>
      <div className="text-[10px] text-gray-400 break-all w-16 text-center">
        {cssVar}
      </div>
    </div>
  );
};

export const ColorScaleDisplay: React.FC<ColorScaleDisplayProps> = ({ scaleName }) => {
  const colors = Array.from({ length: 12 }, (_, i) => i + 1);
  
  const variants = [
    { 
      name: 'Light', 
      variant: 'light' as const,
      getDisplayName: (step: number) => `${step}`,
    },
    { 
      name: 'Light Alpha', 
      variant: 'lightAlpha' as const,
      getDisplayName: (step: number) => `a${step}`,
    },
    { 
      name: 'Dark', 
      variant: 'dark' as const,
      getDisplayName: (step: number) => `${step}`,
    },
    { 
      name: 'Dark Alpha', 
      variant: 'darkAlpha' as const,
      getDisplayName: (step: number) => `a${step}`,
    },
  ];

  return (
    <div className="space-y-8">
      {variants.map((variant) => (
        <div key={variant.name} className="space-y-4">
          <h3 className="text-lg font-semibold capitalize">
            {scaleName} {variant.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {colors.map((step) => {
              const displayName = `${scaleName}${variant.getDisplayName(step)}`;
              return (
                <ColorSwatch
                  key={`${variant.variant}-${step}`}
                  color={scaleName}
                  name={displayName}
                  variant={variant.variant}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
