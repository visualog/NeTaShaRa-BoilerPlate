export function oklchToHex(L: number, C: number, h: number, alpha?: number): string {
  // The L value is usually in the range [0, 100], but the conversion formula expects [0, 1].
  L /= 100;

  // 1. Oklch to Oklab
  // Convert hue from degrees to radians
  const hRad = h * Math.PI / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);

  // 2. Oklab to Linear sRGB (via intermediate lms-like space)
  // Intermediate l', m', s' values
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613423 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  // Cube these values to get linear LMS
  const L_linear = l_ * l_ * l_;
  const M_linear = m_ * m_ * m_;
  const S_linear = s_ * s_ * s_;

  // Convert linear LMS to linear sRGB
  const R_linear = 4.0767416621 * L_linear - 3.3077115913 * M_linear + 0.2309699292 * S_linear;
  const G_linear = -1.2684380046 * L_linear + 2.6097574011 * M_linear - 0.3413193965 * S_linear;
  const B_linear = -0.0041960863 * L_linear - 0.7034186147 * M_linear + 1.7076147007 * S_linear;

  // 3. Linear sRGB to sRGB (gamma correction)
  // Apply sRGB companding function and clamp values
  const sRGB_transfer = (val: number) => {
    const sign = val < 0 ? -1 : 1;
    val = Math.abs(val);
    if (val <= 0.0031308) {
      return sign * val * 12.92;
    } else {
      return sign * (1.055 * Math.pow(val, 1 / 2.4) - 0.055);
    }
  };

  let R_sRGB = sRGB_transfer(R_linear);
  let G_sRGB = sRGB_transfer(G_linear);
  let B_sRGB = sRGB_transfer(B_linear);

  // Clamp sRGB values to [0, 1]
  R_sRGB = Math.max(0, Math.min(1, R_sRGB));
  G_sRGB = Math.max(0, Math.min(1, G_sRGB));
  B_sRGB = Math.max(0, Math.min(1, B_sRGB));

  // 4. sRGB to Hex
  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(R_sRGB)}${toHex(G_sRGB)}${toHex(B_sRGB)}${alpha !== undefined ? toHex(alpha) : ''}`;
}

export function parseOklch(oklchString: string): { L: number; C: number; h: number; alpha?: number } | null {
  const match = oklchString.match(/oklch\(([^ ]+) ([^ ]+) ([^ ]+)(?: \/ ([^)]+))?\)/);
  if (!match) {
    console.log(`parseOklch: No match for string: ${oklchString}`);
    return null;
  }

  let L = parseFloat(match[1]);
  if (L > 1) { // Assuming L is a percentage if > 1
    L /= 100;
  }
  const C = parseFloat(match[2]);
  const h = parseFloat(match[3]);
  const alpha = match[4] ? parseFloat(match[4]) : undefined;

  console.log(`parseOklch: Input: ${oklchString}, Parsed: L=${L}, C=${C}, h=${h}, alpha=${alpha}`);

  return { L, C, h, alpha };
}

// Helper function to convert sRGB to linear sRGB
function srgbToLinear(c: number): number {
  c = c / 255;
  return c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;
}

// Add new helper function to parse various CSS color strings
function parseCssColor(colorString: string): { r: number; g: number; b: number; alpha?: number; isP3?: boolean } | null {
  // Try matching rgba/rgb first
  let match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      alpha: match[4] ? parseFloat(match[4]) : undefined,
      isP3: false
    };
  }

  // Try matching color(display-p3 ...)
  match = colorString.match(/color\(display-p3\s*(\d*\.?\d+)\s*(\d*\.?\d+)\s*(\d*\.?\d+)(?: \/ (\d*\.?\d+))?\)/);
  if (match) {
    return {
      r: parseFloat(match[1]) * 255, // Scale 0-1 to 0-255
      g: parseFloat(match[2]) * 255,
      b: parseFloat(match[3]) * 255,
      alpha: match[4] ? parseFloat(match[4]) : undefined,
      isP3: true // Indicate that this was a display-p3 color
    };
  }

  return null;
}

// Modify rgbToOklch to use the new parseCssColor function
export function rgbToOklch(rgbString: string): { L: number; C: number; h: number; alpha?: number } | null {
  const parsedColor = parseCssColor(rgbString);
  if (!parsedColor) {
    console.error(`rgbToOklch: Invalid RGB/RGBA/Display-P3 string: ${rgbString}`);
    return null;
  }

  const { r, g, b, alpha } = parsedColor;

  // Convert sRGB to linear sRGB
  const r_linear = srgbToLinear(r);
  const g_linear = srgbToLinear(g);
  const b_linear = srgbToLinear(b);

  // Convert linear sRGB to Oklab (simplified for demonstration)
  // This is a highly simplified conversion and may not be perfectly accurate.
  // For accurate conversion, a full color space conversion matrix is needed.
  // This approximation focuses on L, C, h for display purposes.

  // Approximate L (Lightness)
  const L = 0.4122214708 * r_linear + 0.5363325363 * g_linear + 0.0514459929 * b_linear;

  // Approximate a and b (chroma components)
  const a_oklab = 0.2119034982 * r_linear - 0.320680431 * g_linear + 0.1087769327 * b_linear;
  const b_oklab = 0.0883024619 * r_linear - 0.1332518734 * g_linear + 0.0449494115 * b_linear;

  // Convert Oklab a, b to Chroma (C) and Hue (h)
  const C = Math.sqrt(a_oklab * a_oklab + b_oklab * b_oklab);
  let h = Math.atan2(b_oklab, a_oklab) * 180 / Math.PI;
  if (h < 0) {
    h += 360;
  }

  // Normalize L to 0-100 range for OKLCH string, C and h as is
  return { L: L * 100, C, h, alpha };
}