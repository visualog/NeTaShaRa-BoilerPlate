"use client";

import { useState, useEffect, useRef } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import { oklchToHex, rgbToOklch } from '@/lib/color-converter';

interface ColorSwatchProps {
  name: string;
  variable: string;
  description?: string;
  usage?: string[];
}

export function ColorSwatch({ name, variable, description, usage }: ColorSwatchProps) {
  const colorRef = useRef<HTMLDivElement>(null);
  const [displayOklch, setDisplayOklch] = useState<string>('');
  const [displayHex, setDisplayHex] = useState<string>('');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    if (colorRef.current) {
      const computedColor = window.getComputedStyle(colorRef.current).backgroundColor;
      const oklch = rgbToOklch(computedColor);
      if (oklch) {
        const { L, C, h, alpha } = oklch;
        setDisplayOklch(`oklch(${L.toFixed(1)}% ${C.toFixed(4)} ${h.toFixed(1)}${alpha !== undefined ? ` / ${alpha.toFixed(2)}` : ''})`);
        setDisplayHex(oklchToHex(L, C, h, alpha));
      } else {
        setDisplayOklch('N/A');
        setDisplayHex('N/A');
      }
    }
  }, [variable]);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  };

  const CopyButton = ({ text, type, label }: { text: string; type: string; label: string }) => (
    <button
      onClick={() => copyToClipboard(text, type)}
      className="flex items-center gap-2 px-2 py-1 text-xs rounded hover:bg-muted transition-colors"
      title={`${label} 복사`}
    >
      {copiedType === type ? (
        <Check className="h-3 w-3 text-green-600" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {label}
    </button>
  );

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div ref={colorRef} className="h-24 w-full" style={{ backgroundColor: variable }} />
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-[16px] font-semibold leading-normal">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        
        {usage && usage.length > 0 && (
          <div className="flex items-start gap-2 p-2 bg-muted/50 rounded text-xs">
            <Info className="h-3 w-3 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="text-muted-foreground">
              <span className="font-medium">사용:</span> {usage.join(', ')}
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <code className="text-sm text-muted-foreground">{variable}</code>
            <CopyButton text={variable} type="css" label="CSS" />
          </div>
          
          <div className="flex items-center justify-between">
            <code className="text-sm text-muted-foreground">{displayOklch}</code>
            <CopyButton text={displayOklch} type="oklch" label="OKLCH" />
          </div>
          
          <div className="flex items-center justify-between">
            <code className="text-sm text-muted-foreground">{displayHex}</code>
            <CopyButton text={displayHex} type="hex" label="HEX" />
          </div>
        </div>
      </div>
    </div>
  );
}