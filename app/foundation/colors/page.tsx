"use client";

import * as React from "react";
import { ColorScaleDisplay } from "@/components/ui/color-scale-display";

// 간단한 className 유틸리티 함수
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Radix UI 색상 스케일 목록
const colorScales = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "brown",
  "orange",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
  "gold",
  "bronze"
];

// 색상 스케일의 12단계 색상
const colorSteps = Array.from({ length: 12 }, (_, i) => i + 1);

const tabs = [
  {
    id: "scale",
    label: "Scale",
    description: "Radix Color Scales",
  },
  {
    id: "usage",
    label: "Usage",
    description: "How to use color scales",
  },
] as const;

type TabId = typeof tabs[number]["id"];

export default function ColorsPage() {
  const [activeTab, setActiveTab] = React.useState<TabId>("scale");

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Color System</h1>
        <p className="text-muted-foreground">
          Radix UI의 색상 스케일을 기반으로 한 디자인 시스템 컬러로, OKLCH 색상 모델을 활용하여 일관된 명도와 채도를 제공합니다.
        </p>
        <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
          <h3 className="text-lg font-semibold mb-2">Radix Colors</h3>
          <p className="text-sm text-muted-foreground">
            이 색상 시스템은 <strong>Radix Colors</strong>의 공식 스케일을 사용합니다. 
            각 색상은 12단계 스케일로 구성되어 있으며, OKLCH 색상 모델의 지각적 균일성을 활용하여 
            다크 모드와 테마 변경 시에도 일관된 색상 경험을 제공합니다.
          </p>
        </div>
      </div>

      <div className="border-b mb-8">
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

      {activeTab === "scale" && (
        <div className="space-y-12">
          {colorScales.map((scale) => (
            <div key={scale} className="space-y-8">
              <h2 className="text-2xl font-semibold capitalize border-b pb-2">{scale}</h2>
              <ColorScaleDisplay scaleName={scale} />
            </div>
          ))}
        </div>
      )}

      {activeTab === "usage" && (
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">색상 사용 가이드라인</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">스케일 기반 사용법:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-md bg-gray-2 mr-2 mt-0.5"></span>
                    <div>
                      <strong>1-3단계:</strong> 배경, 카드, 섹션 배경
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-md bg-gray-4 mr-2 mt-0.5"></span>
                    <div>
                      <strong>4-6단계:</strong> 입력 필드, 호버 상태, 구분선
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-md bg-gray-7 mr-2 mt-0.5"></span>
                    <div>
                      <strong>7-9단계:</strong> 플레이스홀더, 보조 텍스트, 본문
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-md bg-gray-11 mr-2 mt-0.5"></span>
                    <div>
                      <strong>10-12단계:</strong> 제목, 강조 텍스트, 최고 대비
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">CSS 변수 사용법:</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium mb-1">배경 색상:</p>
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      background-color: var(--gray-1);
                    </code>
                  </div>
                  <div>
                    <p className="font-medium mb-1">텍스트 색상:</p>
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      color: var(--gray-12);
                    </code>
                  </div>
                  <div>
                    <p className="font-medium mb-1">테두리 색상:</p>
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      border-color: var(--gray-6);
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}