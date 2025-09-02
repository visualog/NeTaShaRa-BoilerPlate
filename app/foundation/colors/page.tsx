import { ColorSwatch } from "@/components/ui/color-swatch";
import { oklchToHex, parseOklch } from "@/lib/color-converter"; // Import converter functions

interface ColorItem {
  name: string;
  variable: string;
  oklchValue: string;
  hexValue?: string; // hexValue is added later
}

// Helper function to add hexValue to color objects
const addHexValue = (colors: ColorItem[]) => {
  return colors.map(color => {
    const parsed = parseOklch(color.oklchValue);
    if (parsed) {
      const hex = oklchToHex(parsed.L, parsed.C, parsed.h, parsed.alpha);
      return { ...color, hexValue: hex };
    }
    return { ...color, hexValue: "#ERROR" }; // Fallback for parsing error
  });
};

const primaryPalette = [
  { name: "Brand", variable: "var(--brand)", oklchValue: "oklch(62% 0.1906 258.2)", hexValue: "#3182f6" },
  { name: "Brand Foreground", variable: "var(--brand-foreground)", oklchValue: "oklch(100% 0 0)", hexValue: "#ffffff" },
  { name: "Background", variable: "var(--bg)", oklchValue: "oklch(99.2% 0.0031 256.4)", hexValue: "#fbfcfe" },
  { name: "Foreground", variable: "var(--fg)", oklchValue: "oklch(24.5% 0.023 256.4)", hexValue: "#19212b" },
  { name: "Muted", variable: "var(--muted)", oklchValue: "oklch(95.6% 0.0102 256.4)", hexValue: "#ecf1f7" },
  { name: "Muted Foreground", variable: "var(--muted-foreground)", oklchValue: "oklch(50.5% 0.0275 256.4)", hexValue: "#5b6675" },
  { name: "Ring", variable: "var(--ring)", oklchValue: "oklch(80.9% 0.0907 258.2)", hexValue: "#9dc3fb" },
];

const functionalPalette = [
    { name: "Destructive", variable: "var(--destructive)", oklchValue: "oklch(62.8% 0.166 28.8)", hexValue: "#ef4444" },
    { name: "Destructive Foreground", variable: "var(--destructive-foreground)", oklchValue: "oklch(100% 0 0)", hexValue: "#ffffff" },
];

const brandScale = addHexValue([
  { name: "Brand 1", variable: "var(--blue-1)", oklchValue: "oklch(99.3% 0.0032 258.2)" },
  { name: "Brand 2", variable: "var(--blue-2)", oklchValue: "oklch(98.2% 0.0097 258.2)" },
  { name: "Brand 3", variable: "var(--blue-3)", oklchValue: "oklch(96% 0.0202 258.2)" },
  { name: "Brand 4", variable: "var(--blue-4)", oklchValue: "oklch(93.7% 0.0378 258.2)" },
  { name: "Brand 5", variable: "var(--blue-5)", oklchValue: "oklch(90.6% 0.0548 258.2)" },
  { name: "Brand 6", variable: "var(--blue-6)", oklchValue: "oklch(86.4% 0.0706 258.2)" },
  { name: "Brand 7", variable: "var(--blue-7)", oklchValue: "oklch(80.9% 0.0907 258.2)" },
  { name: "Brand 8", variable: "var(--blue-8)", oklchValue: "oklch(73.4% 0.1238 258.2)" },
  { name: "Brand 9", variable: "var(--blue-9)", oklchValue: "oklch(62% 0.1906 258.2)" },
  { name: "Brand 10", variable: "var(--blue-10)", oklchValue: "oklch(57.8% 0.1939 258.2)" },
  { name: "Brand 11", "variable": "var(--blue-11)", oklchValue: "oklch(55.4% 0.1906 258.2)" },
  { name: "Brand 12", variable: "var(--blue-12)", oklchValue: "oklch(32.3% 0.099 258.2)" },
]);

const grayAlphaScale = addHexValue([
  { name: "Gray Alpha 1", variable: "var(--gray-a1)", oklchValue: "oklch(0.0235 0.2667 0.7569 / 0.016)" },
  { name: "Gray Alpha 2", variable: "var(--gray-a2)", oklchValue: "oklch(0.0235 0.302 0.7216 / 0.028)" },
  { name: "Gray Alpha 3", variable: "var(--gray-a3)", oklchValue: "oklch(0.0078 0.2275 0.5059 / 0.071)" },
  { name: "Gray Alpha 4", variable: "var(--gray-a4)", oklchValue: "oklch(0.0039 0.1882 0.4824 / 0.106)" },
  { name: "Gray Alpha 5", variable: "var(--gray-a5)", oklchValue: "oklch(0.0078 0.2 0.4784 / 0.142)" },
  { name: "Gray Alpha 6", variable: "var(--gray-a6)", oklchValue: "oklch(0.0039 0.1647 0.4353 / 0.173)" },
  { name: "Gray Alpha 7", variable: "var(--gray-a7)", oklchValue: "oklch(0.0039 0.1647 0.4118 / 0.22)" },
  { name: "Gray Alpha 8", variable: "var(--gray-a8)", oklchValue: "oklch(0.0039 0.1569 0.3882 / 0.306)" },
  { name: "Gray Alpha 9", variable: "var(--gray-a9)", oklchValue: "oklch(0.0039 0.0902 0.2392 / 0.483)" },
  { name: "Gray Alpha 10", variable: "var(--gray-a10)", oklchValue: "oklch(0 0.0863 0.2039 / 0.522)" },
  { name: "Gray Alpha 11", variable: "var(--gray-a11)", oklchValue: "oklch(0 0.0549 0.1412 / 0.636)" },
  { name: "Gray Alpha 12", variable: "var(--gray-a12)", oklchValue: "oklch(0 0.0275 0.0667 / 0.895)" },
]);

const successScale = addHexValue([
  { name: "Success 1", variable: "var(--success-1)", oklchValue: "oklch(97% 0.02 140)" },
  { name: "Success 2", variable: "var(--success-2)", oklchValue: "oklch(90% 0.08 140)" },
  { name: "Success 3", variable: "var(--success-3)", oklchValue: "oklch(80% 0.15 140)" },
  { name: "Success 4", variable: "var(--success-4)", oklchValue: "oklch(70% 0.2 140)" },
  { name: "Success 5", variable: "var(--success-5)", oklchValue: "oklch(60% 0.22 140)" },
  { name: "Success 6", variable: "var(--success-6)", oklchValue: "oklch(50% 0.2 140)" },
  { name: "Success 7", variable: "var(--success-7)", oklchValue: "oklch(40% 0.18 140)" },
  { name: "Success 8", variable: "var(--success-8)", oklchValue: "oklch(30% 0.15 140)" },
  { name: "Success 9", variable: "var(--success-9)", oklchValue: "oklch(20% 0.1 140)" },
  { name: "Success 10", variable: "var(--success-10)", oklchValue: "oklch(10% 0.05 140)" },
]);

const warningScale = addHexValue([
  { name: "Warning 1", variable: "var(--warning-1)", oklchValue: "oklch(97% 0.02 80)" },
  { name: "Warning 2", variable: "var(--warning-2)", oklchValue: "oklch(90% 0.08 80)" },
  { name: "Warning 3", variable: "var(--warning-3)", oklchValue: "oklch(80% 0.15 80)" },
  { name: "Warning 4", variable: "var(--warning-4)", oklchValue: "oklch(70% 0.2 80)" },
  { name: "Warning 5", variable: "var(--warning-5)", oklchValue: "oklch(60% 0.22 80)" },
  { name: "Warning 6", variable: "var(--warning-6)", oklchValue: "oklch(50% 0.2 80)" },
  { name: "Warning 7", variable: "var(--warning-7)", oklchValue: "oklch(40% 0.18 80)" },
  { name: "Warning 8", variable: "var(--warning-8)", oklchValue: "oklch(30% 0.15 80)" },
  { name: "Warning 9", variable: "var(--warning-9)", oklchValue: "oklch(20% 0.1 80)" },
  { name: "Warning 10", variable: "var(--warning-10)", oklchValue: "oklch(10% 0.05 80)" },
]);

const errorScale = addHexValue([
  { name: "Error 1", variable: "var(--error-1)", oklchValue: "oklch(97% 0.02 30)" },
  { name: "Error 2", variable: "var(--error-2)", oklchValue: "oklch(90% 0.08 30)" },
  { name: "Error 3", variable: "var(--error-3)", oklchValue: "oklch(80% 0.15 30)" },
  { name: "Error 4", variable: "var(--error-4)", oklchValue: "oklch(70% 0.2 30)" },
  { name: "Error 5", variable: "var(--error-5)", oklchValue: "oklch(60% 0.22 30)" },
  { name: "Error 6", variable: "var(--error-6)", oklchValue: "oklch(50% 0.2 30)" },
  { name: "Error 7", variable: "var(--error-7)", oklchValue: "oklch(40% 0.18 30)" },
  { name: "Error 8", variable: "var(--error-8)", oklchValue: "oklch(30% 0.15 30)" },
  { name: "Error 9", variable: "var(--error-9)", oklchValue: "oklch(20% 0.1 30)" },
  { name: "Error 10", variable: "var(--error-10)", oklchValue: "oklch(10% 0.05 30)" },
]);

const infoScale = addHexValue([
  { name: "Info 1", variable: "var(--info-1)", oklchValue: "oklch(97% 0.02 220)" },
  { name: "Info 2", variable: "var(--info-2)", oklchValue: "oklch(90% 0.08 220)" },
  { name: "Info 3", variable: "var(--info-3)", oklchValue: "oklch(80% 0.15 220)" },
  { name: "Info 4", variable: "var(--info-4)", oklchValue: "oklch(70% 0.2 220)" },
  { name: "Info 5", variable: "var(--info-5)", oklchValue: "oklch(60% 0.22 220)" },
  { name: "Info 6", variable: "var(--info-6)", oklchValue: "oklch(50% 0.2 220)" },
  { name: "Info 7", variable: "var(--info-7)", oklchValue: "oklch(40% 0.18 220)" },
  { name: "Info 8", variable: "var(--info-8)", oklchValue: "oklch(30% 0.15 220)" },
  { name: "Info 9", variable: "var(--info-9)", oklchValue: "oklch(20% 0.1 220)" },
  { name: "Info 10", variable: "var(--info-10)", oklchValue: "oklch(10% 0.05 220)" },
]);

const grayScale = addHexValue([
  { name: "Gray 1", variable: "var(--gray-1)", oklchValue: "oklch(99.2% 0.0031 256.4)" },
  { name: "Gray 2", variable: "var(--gray-2)", oklchValue: "oklch(98.3% 0.0056 256.4)" },
  { name: "Gray 3", variable: "var(--gray-3)", oklchValue: "oklch(95.6% 0.0102 256.4)" },
  { name: "Gray 4", variable: "var(--gray-4)", oklchValue: "oklch(93.2% 0.0134 256.4)" },
  { name: "Gray 5", variable: "var(--gray-5)", oklchValue: "oklch(90.9% 0.0173 256.4)" },
  { name: "Gray 6", variable: "var(--gray-6)", oklchValue: "oklch(88.6% 0.0199 256.4)" },
  { name: "Gray 7", variable: "var(--gray-7)", oklchValue: "oklch(85.4% 0.0245 256.4)" },
  { name: "Gray 8", variable: "var(--gray-8)", oklchValue: "oklch(79.4% 0.0332 256.4)" },
  { name: "Gray 9", variable: "var(--gray-9)", oklchValue: "oklch(64.6% 0.0335 256.4)" },
  { name: "Gray 10", variable: "var(--gray-10)", oklchValue: "oklch(61.1% 0.0318 256.4)" },
  { name: "Gray 11", variable: "var(--gray-11)", oklchValue: "oklch(50.5% 0.0275 256.4)" },
  { name: "Gray 12", variable: "var(--gray-12)", oklchValue: "oklch(24.5% 0.023 256.4)" },
]);

const brandAlphaScale = addHexValue([
  { name: "Brand Alpha 1", variable: "var(--blue-a1)", oklchValue: "oklch(62% 0.1906 258.2 / 0.1)" },
  { name: "Brand Alpha 2", variable: "var(--blue-a2)", oklchValue: "oklch(62% 0.1906 258.2 / 0.2)" },
  { name: "Brand Alpha 3", variable: "var(--blue-a3)", oklchValue: "oklch(62% 0.1906 258.2 / 0.3)" },
  { name: "Brand Alpha 4", variable: "var(--blue-a4)", oklchValue: "oklch(62% 0.1906 258.2 / 0.4)" },
  { name: "Brand Alpha 5", variable: "var(--blue-a5)", oklchValue: "oklch(62% 0.1906 258.2 / 0.5)" },
  { name: "Brand Alpha 6", variable: "var(--blue-a6)", oklchValue: "oklch(62% 0.1906 258.2 / 0.6)" },
  { name: "Brand Alpha 7", variable: "var(--blue-a7)", oklchValue: "oklch(62% 0.1906 258.2 / 0.7)" },
  { name: "Brand Alpha 8", variable: "var(--blue-a8)", oklchValue: "oklch(62% 0.1906 258.2 / 0.8)" },
  { name: "Brand Alpha 9", variable: "var(--blue-a9)", oklchValue: "oklch(62% 0.1906 258.2 / 0.9)" },
  { name: "Brand Alpha 10", variable: "var(--blue-a10)", oklchValue: "oklch(62% 0.1906 258.2 / 1)" },
  { name: "Brand Alpha 11", variable: "var(--blue-a11)", oklchValue: "oklch(55.4% 0.1906 258.2 / 1)" },
  { name: "Brand Alpha 12", variable: "var(--blue-a12)", oklchValue: "oklch(32.3% 0.099 258.2 / 1)" },
]);


export default function ColorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Colors</h1>
        <p className="text-muted-foreground">
          색상 시스템은 일관된 명도와 채도를 위해 OKLCH 색상 모델을 기반으로 합니다.
        </p>
        <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
          <h3 className="text-lg font-semibold mb-2">OKLCH란?</h3>
          <p className="text-sm text-muted-foreground">
            OKLCH는 인간의 시각적 인지에 가깝게 설계된 색상 모델입니다. L(Lightness: 밝기), C(Chroma: 채도), H(Hue: 색상) 세 가지 요소를 사용하여 색상을 정의하며, 각 요소를 독립적으로 조절할 때 색상이 예측 가능하게 변하는 &apos;지각적 균일성&apos;이 특징입니다. 이는 디자인 시스템에서 일관된 색상 스케일을 만들고, 다크 모드나 테마 변경 시 색상을 조절하는 데 매우 유리합니다.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">기본 팔레트</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {primaryPalette.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">기능 팔레트</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {functionalPalette.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">브랜드 컬러 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">브랜드 알파 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandAlphaScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">그레이 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grayScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">그레이 알파 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grayAlphaScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">성공 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {successScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">경고 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {warningScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">오류 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {errorScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">정보 스케일</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {infoScale.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>
    </div>
  );
}