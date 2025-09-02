"use client";

import * as React from "react";
import { ColorSwatch } from "@/components/ui/color-swatch";

interface ColorItem {
  name: string;
  variable: string;
}

const primaryPalette: ColorItem[] = [
  { name: "Brand", variable: "var(--brand)" },
  { name: "Brand Foreground", variable: "var(--brand-foreground)" },
  { name: "Background", variable: "var(--bg)" },
  { name: "Foreground", variable: "var(--fg)" },
  { name: "Muted", variable: "var(--muted)" },
  { name: "Muted Foreground", variable: "var(--muted-foreground)" },
  { name: "Ring", variable: "var(--ring)" },
];

const functionalPalette: ColorItem[] = [
  { name: "Destructive", variable: "var(--destructive)" },
  { name: "Destructive Foreground", variable: "var(--destructive-foreground)" },
];

const brandScale: ColorItem[] = [
  { name: "Brand 1", variable: "var(--blue-1)" },
  { name: "Brand 2", variable: "var(--blue-2)" },
  { name: "Brand 3", variable: "var(--blue-3)" },
  { name: "Brand 4", variable: "var(--blue-4)" },
  { name: "Brand 5", variable: "var(--blue-5)" },
  { name: "Brand 6", variable: "var(--blue-6)" },
  { name: "Brand 7", variable: "var(--blue-7)" },
  { name: "Brand 8", variable: "var(--blue-8)" },
  { name: "Brand 9", variable: "var(--blue-9)" },
  { name: "Brand 10", variable: "var(--blue-10)" },
  { name: "Brand 11", variable: "var(--blue-11)" },
  { name: "Brand 12", variable: "var(--blue-12)" },
];

const grayAlphaScale: ColorItem[] = [
  { name: "Gray Alpha 1", variable: "var(--gray-a1)" },
  { name: "Gray Alpha 2", variable: "var(--gray-a2)" },
  { name: "Gray Alpha 3", variable: "var(--gray-a3)" },
  { name: "Gray Alpha 4", variable: "var(--gray-a4)" },
  { name: "Gray Alpha 5", variable: "var(--gray-a5)" },
  { name: "Gray Alpha 6", variable: "var(--gray-a6)" },
  { name: "Gray Alpha 7", variable: "var(--gray-a7)" },
  { name: "Gray Alpha 8", variable: "var(--gray-a8)" },
  { name: "Gray Alpha 9", variable: "var(--gray-a9)" },
  { name: "Gray Alpha 10", variable: "var(--gray-a10)" },
  { name: "Gray Alpha 11", variable: "var(--gray-a11)" },
  { name: "Gray Alpha 12", variable: "var(--gray-a12)" },
];

const successScale: ColorItem[] = [
  { name: "Success 1", variable: "var(--success-1)" },
  { name: "Success 2", variable: "var(--success-2)" },
  { name: "Success 3", variable: "var(--success-3)" },
  { name: "Success 4", variable: "var(--success-4)" },
  { name: "Success 5", variable: "var(--success-5)" },
  { name: "Success 6", variable: "var(--success-6)" },
  { name: "Success 7", variable: "var(--success-7)" },
  { name: "Success 8", variable: "var(--success-8)" },
  { name: "Success 9", variable: "var(--success-9)" },
  { name: "Success 10", variable: "var(--success-10)" },
];

const warningScale: ColorItem[] = [
  { name: "Warning 1", variable: "var(--warning-1)" },
  { name: "Warning 2", variable: "var(--warning-2)" },
  { name: "Warning 3", variable: "var(--warning-3)" },
  { name: "Warning 4", variable: "var(--warning-4)" },
  { name: "Warning 5", variable: "var(--warning-5)" },
  { name: "Warning 6", variable: "var(--warning-6)" },
  { name: "Warning 7", variable: "var(--warning-7)" },
  { name: "Warning 8", variable: "var(--warning-8)" },
  { name: "Warning 9", variable: "var(--warning-9)" },
  { name: "Warning 10", variable: "var(--warning-10)" },
];

const errorScale: ColorItem[] = [
  { name: "Error 1", variable: "var(--error-1)" },
  { name: "Error 2", variable: "var(--error-2)" },
  { name: "Error 3", variable: "var(--error-3)" },
  { name: "Error 4", variable: "var(--error-4)" },
  { name: "Error 5", variable: "var(--error-5)" },
  { name: "Error 6", variable: "var(--error-6)" },
  { name: "Error 7", variable: "var(--error-7)" },
  { name: "Error 8", variable: "var(--error-8)" },
  { name: "Error 9", variable: "var(--error-9)" },
  { name: "Error 10", variable: "var(--error-10)" },
];

const infoScale: ColorItem[] = [
  { name: "Info 1", variable: "var(--info-1)" },
  { name: "Info 2", variable: "var(--info-2)" },
  { name: "Info 3", variable: "var(--info-3)" },
  { name: "Info 4", variable: "var(--info-4)" },
  { name: "Info 5", variable: "var(--info-5)" },
  { name: "Info 6", variable: "var(--info-6)" },
  { name: "Info 7", variable: "var(--info-7)" },
  { name: "Info 8", variable: "var(--info-8)" },
  { name: "Info 9", variable: "var(--info-9)" },
  { name: "Info 10", variable: "var(--info-10)" },
];

const grayScale: ColorItem[] = [
  { name: "Gray 1", variable: "var(--gray-1)" },
  { name: "Gray 2", variable: "var(--gray-2)" },
  { name: "Gray 3", variable: "var(--gray-3)" },
  { name: "Gray 4", variable: "var(--gray-4)" },
  { name: "Gray 5", variable: "var(--gray-5)" },
  { name: "Gray 6", variable: "var(--gray-6)" },
  { name: "Gray 7", variable: "var(--gray-7)" },
  { name: "Gray 8", variable: "var(--gray-8)" },
  { name: "Gray 9", variable: "var(--gray-9)" },
  { name: "Gray 10", variable: "var(--gray-10)" },
  { name: "Gray 11", variable: "var(--gray-11)" },
  { name: "Gray 12", variable: "var(--gray-12)" },
];

const brandAlphaScale: ColorItem[] = [
  { name: "Brand Alpha 1", variable: "var(--blue-a1)" },
  { name: "Brand Alpha 2", variable: "var(--blue-a2)" },
  { name: "Brand Alpha 3", variable: "var(--blue-a3)" },
  { name: "Brand Alpha 4", variable: "var(--blue-a4)" },
  { name: "Brand Alpha 5", variable: "var(--blue-a5)" },
  { name: "Brand Alpha 6", variable: "var(--blue-a6)" },
  { name: "Brand Alpha 7", variable: "var(--blue-a7)" },
  { name: "Brand Alpha 8", variable: "var(--blue-a8)" },
  { name: "Brand Alpha 9", variable: "var(--blue-a9)" },
  { name: "Brand Alpha 10", variable: "var(--blue-a10)" },
  { name: "Brand Alpha 11", variable: "var(--blue-a11)" },
  { name: "Brand Alpha 12", variable: "var(--blue-a12)" },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "brand", label: "Brand" },
  { id: "grays", label: "Grays" },
  { id: "status", label: "Status" },
] as const;

type TabId = typeof tabs[number]["id"];

export default function ColorsPage() {
  const [activeTab, setActiveTab] = React.useState<TabId>("overview");

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

      <div className="border-b">
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={
                "px-3 py-2 text-sm font-medium rounded-t-md border-b-2 -mb-px " +
                (activeTab === t.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted")
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-8">
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
        </div>
      )}

      {activeTab === "brand" && (
        <div className="space-y-8">
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
        </div>
      )}

      {activeTab === "grays" && (
        <div className="space-y-8">
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
        </div>
      )}

      {activeTab === "status" && (
        <div className="space-y-8">
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
      )}
    </div>
  );
}