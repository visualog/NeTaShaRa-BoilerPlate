"use client";

import { useState, useEffect, useRef } from 'react';
import { oklchToHex, rgbToOklch } from '@/lib/color-converter'; // Import rgbToOklch

interface ColorSwatchProps {
  name: string;
  variable: string;
}

export function ColorSwatch({ name, variable }: ColorSwatchProps) {
  const colorRef = useRef<HTMLDivElement>(null);
  const [displayOklch, setDisplayOklch] = useState<string>('');
  const [displayHex, setDisplayHex] = useState<string>('');

  useEffect(() => {
    if (colorRef.current) {
      const computedColor = window.getComputedStyle(colorRef.current).backgroundColor;
      // computedColor will be in rgb(r, g, b) or rgba(r, g, b, a) format

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
  }, [variable]); // Recalculate if the variable changes

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div ref={colorRef} className="h-24 w-full" style={{ backgroundColor: variable }} />
      <div className="p-4">
        <h3 className="text-[16px] font-semibold leading-normal">{name}</h3>
        <code className="block text-sm text-muted-foreground mt-1">{variable}</code>
        <code className="block text-sm text-muted-foreground">{displayOklch}</code>
        <code className="block text-sm text-muted-foreground">{displayHex}</code>
      </div>
    </div>
  );
}