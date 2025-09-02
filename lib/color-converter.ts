export function oklchToHex(L: number, C: number, h: number, alpha?: number): string {
  console.log(`oklchToHex input: L=${L}, C=${C}, h=${h}, alpha=${alpha}`);
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
