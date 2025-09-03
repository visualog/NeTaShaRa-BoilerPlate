"use client";

import * as React from "react";
import { ColorSwatch } from "@/components/ui/color-swatch";

interface ColorItem {
  name: string;
  variable: string;
  description?: string;
  usage?: string[];
}

// Semantic Colors - 의미 기반 핵심 색상
const semanticColors: ColorItem[] = [
  { 
    name: "Background", 
    variable: "var(--bg)", 
    description: "페이지 및 컴포넌트의 기본 배경색",
    usage: ["body 배경", "main 배경", "기본 컨테이너"]
  },
  { 
    name: "Foreground", 
    variable: "var(--fg)", 
    description: "주요 텍스트 및 콘텐츠 색상",
    usage: ["본문 텍스트", "제목", "주요 콘텐츠"]
  },
  { 
    name: "Muted", 
    variable: "var(--muted)", 
    description: "비활성 상태 및 보조 배경색",
    usage: ["카드 배경", "섹션 배경", "비활성 요소"]
  },
  { 
    name: "Muted Foreground", 
    variable: "var(--muted-foreground)", 
    description: "보조 텍스트 및 설명 색상",
    usage: ["보조 텍스트", "설명", "플레이스홀더"]
  },
  { 
    name: "Primary", 
    variable: "var(--brand)", 
    description: "브랜드 주요 색상 및 강조색",
    usage: ["버튼", "링크", "강조 요소", "브랜드 아이덴티티"]
  },
  { 
    name: "Primary Foreground", 
    variable: "var(--brand-foreground)", 
    description: "주요 색상 위에 표시되는 텍스트",
    usage: ["버튼 내 텍스트", "링크 텍스트", "강조 요소 텍스트"]
  },
  { 
    name: "Ring", 
    variable: "var(--ring)", 
    description: "포커스 및 선택 상태 표시 색상",
    usage: ["입력 필드 포커스", "버튼 포커스", "선택 상태"]
  },
];

// Radix Scales - 공식 Radix 색상 스케일
const radixGrayScale: ColorItem[] = [
  { name: "Gray 1", variable: "var(--gray-1)", description: "가장 밝은 그레이", usage: ["배경", "카드", "섹션"] },
  { name: "Gray 2", variable: "var(--gray-2)", description: "매우 밝은 그레이", usage: ["섹션 배경", "구분선"] },
  { name: "Gray 3", variable: "var(--gray-3)", description: "밝은 그레이", usage: ["구분선", "테두리", "입력 필드"] },
  { name: "Gray 4", variable: "var(--gray-4)", description: "중간 밝기 그레이", usage: ["입력 필드 배경", "호버 상태"] },
  { name: "Gray 5", variable: "var(--gray-5)", description: "중간 그레이", usage: ["호버 상태", "선택 상태"] },
  { name: "Gray 6", variable: "var(--gray-6)", description: "중간 어두운 그레이", usage: ["비활성 상태", "보조 요소"] },
  { name: "Gray 7", variable: "var(--gray-7)", description: "어두운 그레이", usage: ["플레이스홀더", "보조 텍스트"] },
  { name: "Gray 8", variable: "var(--gray-8)", description: "매우 어두운 그레이", usage: ["보조 텍스트", "설명"] },
  { name: "Gray 9", variable: "var(--gray-9)", description: "주요 그레이", usage: ["본문 텍스트", "기본 텍스트"] },
  { name: "Gray 10", variable: "var(--gray-10)", description: "강조 그레이", usage: ["제목 텍스트", "강조 텍스트"] },
  { name: "Gray 11", variable: "var(--gray-11)", description: "가장 어두운 그레이", usage: ["강조 텍스트", "중요 텍스트"] },
  { name: "Gray 12", variable: "var(--gray-12)", description: "극한 어두운 그레이", usage: ["최고 대비 텍스트", "중요 제목"] },
];

const radixBlueScale: ColorItem[] = [
  { name: "Blue 1", variable: "var(--blue-1)", description: "가장 밝은 블루", usage: ["블루 배경", "블루 섹션"] },
  { name: "Blue 2", variable: "var(--blue-2)", description: "매우 밝은 블루", usage: ["블루 섹션", "블루 구분선"] },
  { name: "Blue 3", variable: "var(--blue-3)", description: "밝은 블루", usage: ["블루 구분선", "블루 테두리"] },
  { name: "Blue 4", variable: "var(--blue-4)", description: "중간 밝기 블루", usage: ["블루 입력 필드", "블루 호버"] },
  { name: "Blue 5", variable: "var(--blue-5)", description: "중간 블루", usage: ["블루 호버", "블루 선택"] },
  { name: "Blue 6", variable: "var(--blue-6)", description: "중간 어두운 블루", usage: ["블루 비활성", "블루 보조"] },
  { name: "Blue 7", variable: "var(--blue-7)", description: "어두운 블루", usage: ["블루 플레이스홀더", "블루 보조 텍스트"] },
  { name: "Blue 8", variable: "var(--blue-8)", description: "매우 어두운 블루", usage: ["블루 보조 텍스트", "블루 설명"] },
  { name: "Blue 9", variable: "var(--blue-9)", description: "주요 블루", usage: ["블루 본문", "블루 기본"] },
  { name: "Blue 10", variable: "var(--blue-10)", description: "강조 블루", usage: ["블루 제목", "블루 강조"] },
  { name: "Blue 11", variable: "var(--blue-11)", description: "가장 어두운 블루", usage: ["블루 강조", "블루 중요"] },
  { name: "Blue 12", variable: "var(--blue-12)", description: "극한 어두운 블루", usage: ["블루 최고 대비", "블루 중요 제목"] },
];

// Brand System - NeTaShaRa 브랜드 색상
const brandBlueScale: ColorItem[] = [
  { name: "Brand Blue 1", variable: "var(--brnad-blue-1)", description: "브랜드 블루 최고 밝기", usage: ["브랜드 배경", "브랜드 섹션"] },
  { name: "Brand Blue 2", variable: "var(--brnad-blue-2)", description: "브랜드 블루 매우 밝음", usage: ["브랜드 섹션", "브랜드 구분선"] },
  { name: "Brand Blue 3", variable: "var(--brnad-blue-3)", description: "브랜드 블루 밝음", usage: ["브랜드 구분선", "브랜드 테두리"] },
  { name: "Brand Blue 4", variable: "var(--brnad-blue-4)", description: "브랜드 블루 중간 밝기", usage: ["브랜드 입력 필드", "브랜드 호버"] },
  { name: "Brand Blue 5", variable: "var(--brnad-blue-5)", description: "브랜드 블루 중간", usage: ["브랜드 호버", "브랜드 선택"] },
  { name: "Brand Blue 6", variable: "var(--brnad-blue-6)", description: "브랜드 블루 중간 어두움", usage: ["브랜드 비활성", "브랜드 보조"] },
  { name: "Brand Blue 7", variable: "var(--brnad-blue-7)", description: "브랜드 블루 어두움", usage: ["브랜드 플레이스홀더", "브랜드 보조 텍스트"] },
  { name: "Brand Blue 8", variable: "var(--brnad-blue-8)", description: "브랜드 블루 매우 어두움", usage: ["브랜드 보조 텍스트", "브랜드 설명"] },
  { name: "Brand Blue 9", variable: "var(--brnad-blue-9)", description: "브랜드 블루 주요", usage: ["브랜드 본문", "브랜드 기본"] },
  { name: "Brand Blue 10", variable: "var(--brnad-blue-10)", description: "브랜드 블루 강조", usage: ["브랜드 제목", "브랜드 강조"] },
  { name: "Brand Blue 11", variable: "var(--brnad-blue-11)", description: "브랜드 블루 가장 어두움", usage: ["브랜드 강조", "브랜드 중요"] },
  { name: "Brand Blue 12", variable: "var(--brnad-blue-12)", description: "브랜드 블루 극한 어두움", usage: ["브랜드 최고 대비", "브랜드 중요 제목"] },
];

const brandBlueAlphaScale: ColorItem[] = [
  { name: "Brand Blue A1", variable: "var(--brnad-blue-a1)", description: "브랜드 블루 알파 최고 밝기", usage: ["브랜드 오버레이", "브랜드 배경"] },
  { name: "Brand Blue A2", variable: "var(--brnad-blue-a2)", description: "브랜드 블루 알파 매우 밝음", usage: ["브랜드 섹션 오버레이", "브랜드 구분선"] },
  { name: "Brand Blue A3", variable: "var(--brnad-blue-a3)", description: "브랜드 블루 알파 밝음", usage: ["브랜드 구분선 오버레이", "브랜드 테두리"] },
  { name: "Brand Blue A4", variable: "var(--brnad-blue-a4)", description: "브랜드 블루 알파 중간 밝기", usage: ["브랜드 입력 필드 오버레이", "브랜드 호버"] },
  { name: "Brand Blue A5", variable: "var(--brnad-blue-a5)", description: "브랜드 블루 알파 중간", usage: ["브랜드 호버 오버레이", "브랜드 선택"] },
  { name: "Brand Blue A6", variable: "var(--brnad-blue-a6)", description: "브랜드 블루 알파 중간 어두움", usage: ["브랜드 비활성 오버레이", "브랜드 보조"] },
  { name: "Brand Blue A7", variable: "var(--brnad-blue-a7)", description: "브랜드 블루 알파 어두움", usage: ["브랜드 플레이스홀더 오버레이", "브랜드 보조 텍스트"] },
  { name: "Brand Blue A8", variable: "var(--brnad-blue-a8)", description: "브랜드 블루 알파 매우 어두움", usage: ["브랜드 보조 텍스트 오버레이", "브랜드 설명"] },
  { name: "Brand Blue A9", variable: "var(--brnad-blue-a9)", description: "브랜드 블루 알파 주요", usage: ["브랜드 본문 오버레이", "브랜드 기본"] },
  { name: "Brand Blue A10", variable: "var(--brnad-blue-a10)", description: "브랜드 블루 알파 강조", usage: ["브랜드 제목 오버레이", "브랜드 강조"] },
  { name: "Brand Blue A11", variable: "var(--brnad-blue-a11)", description: "브랜드 블루 알파 가장 어두움", usage: ["브랜드 강조 오버레이", "브랜드 중요"] },
  { name: "Brand Blue A12", variable: "var(--brnad-blue-a12)", description: "브랜드 블루 알파 극한 어두움", usage: ["브랜드 최고 대비 오버레이", "브랜드 중요 제목"] },
];

const brandGrayScale: ColorItem[] = [
  { name: "Brand Gray 1", variable: "var(--brnad-gray-1)", description: "브랜드 그레이 최고 밝기", usage: ["브랜드 그레이 배경", "브랜드 그레이 섹션"] },
  { name: "Brand Gray 2", variable: "var(--brnad-gray-2)", description: "브랜드 그레이 매우 밝음", usage: ["브랜드 그레이 섹션", "브랜드 그레이 구분선"] },
  { name: "Brand Gray 3", variable: "var(--brnad-gray-3)", description: "브랜드 그레이 밝음", usage: ["브랜드 그레이 구분선", "브랜드 그레이 테두리"] },
  { name: "Brand Gray 4", variable: "var(--brnad-gray-4)", description: "브랜드 그레이 중간 밝기", usage: ["브랜드 그레이 입력 필드", "브랜드 그레이 호버"] },
  { name: "Brand Gray 5", variable: "var(--brnad-gray-5)", description: "브랜드 그레이 중간", usage: ["브랜드 그레이 호버", "브랜드 그레이 선택"] },
  { name: "Brand Gray 6", variable: "var(--brnad-gray-6)", description: "브랜드 그레이 중간 어두움", usage: ["브랜드 그레이 비활성", "브랜드 그레이 보조"] },
  { name: "Brand Gray 7", variable: "var(--brnad-gray-7)", description: "브랜드 그레이 어두움", usage: ["브랜드 그레이 플레이스홀더", "브랜드 그레이 보조 텍스트"] },
  { name: "Brand Gray 8", variable: "var(--brnad-gray-8)", description: "브랜드 그레이 매우 어두움", usage: ["브랜드 그레이 보조 텍스트", "브랜드 그레이 설명"] },
  { name: "Brand Gray 9", variable: "var(--brnad-gray-9)", description: "브랜드 그레이 주요", usage: ["브랜드 그레이 본문", "브랜드 그레이 기본"] },
  { name: "Brand Gray 10", variable: "var(--brnad-gray-10)", description: "브랜드 그레이 강조", usage: ["브랜드 그레이 제목", "브랜드 그레이 강조"] },
  { name: "Brand Gray 11", variable: "var(--brnad-gray-11)", description: "브랜드 그레이 가장 어두움", usage: ["브랜드 그레이 강조", "브랜드 그레이 중요"] },
  { name: "Brand Gray 12", variable: "var(--brnad-gray-12)", description: "브랜드 그레이 극한 어두움", usage: ["브랜드 그레이 최고 대비", "브랜드 그레이 중요 제목"] },
];

// Functional Colors - 상태 및 기능 색상
const functionalColors: ColorItem[] = [
  { 
    name: "Success", 
    variable: "var(--success-5)", 
    description: "성공 상태 및 완료 액션",
    usage: ["성공 메시지", "완료 상태", "긍정적 피드백"]
  },
  { 
    name: "Warning", 
    variable: "var(--warning-5)", 
    description: "경고 상태 및 주의 사항",
    usage: ["경고 메시지", "주의 사항", "중요 알림"]
  },
  { 
    name: "Error", 
    variable: "var(--error-5)", 
    description: "에러 상태 및 실패 액션",
    usage: ["에러 메시지", "실패 상태", "문제 알림"]
  },
  { 
    name: "Info", 
    variable: "var(--info-5)", 
    description: "정보 상태 및 알림",
    usage: ["정보 메시지", "알림", "도움말"]
  },
  { 
    name: "Destructive", 
    variable: "var(--destructive)", 
    description: "삭제 및 위험 액션",
    usage: ["삭제 버튼", "위험 액션", "취소"]
  },
  { 
    name: "Destructive Foreground", 
    variable: "var(--destructive-foreground)", 
    description: "삭제 색상 위에 표시되는 텍스트",
    usage: ["삭제 버튼 내 텍스트", "위험 액션 텍스트"]
  },
];

const tabs = [
  { 
    id: "semantic", 
    label: "Semantic", 
    description: "의미 기반 핵심 색상",
    icon: "🎨"
  },
  { 
    id: "radix", 
    label: "Radix Scales", 
    description: "공식 Radix 색상 스케일",
    icon: "🔧"
  },
  { 
    id: "brand", 
    label: "Brand System", 
    description: "NeTaShaRa 브랜드 색상",
    icon: "🏷️"
  },
  { 
    id: "functional", 
    label: "Functional", 
    description: "상태 및 기능 색상",
    icon: "⚡"
  },
] as const;

type TabId = typeof tabs[number]["id"];

export default function ColorsPage() {
  const [activeTab, setActiveTab] = React.useState<TabId>("semantic");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Colors</h1>
        <p className="text-muted-foreground">
          Radix Colors 기반의 체계적인 색상 시스템으로, OKLCH 색상 모델을 활용하여 일관된 명도와 채도를 제공합니다.
        </p>
        <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
          <h3 className="text-lg font-semibold mb-2">Radix Colors + Custom Brand</h3>
          <p className="text-sm text-muted-foreground">
            이 색상 시스템은 <strong>Radix Colors</strong>의 공식 스케일과 <strong>NeTaShaRa 브랜드 색상</strong>을 결합합니다. 
            각 색상은 12단계 스케일로 구성되어 있으며, 의미있는 별칭을 통해 사용됩니다. 
            OKLCH 색상 모델의 지각적 균일성을 활용하여 다크 모드와 테마 변경 시에도 일관된 색상 경험을 제공합니다.
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
              <span className="mr-2">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "semantic" && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">시맨틱 컬러 (Semantic Colors)</h2>
            <p className="text-sm text-muted-foreground">
              의미있는 별칭을 통해 사용되는 핵심 색상들입니다. 가장 자주 사용되는 색상들로 구성되어 있습니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {semanticColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "radix" && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Radix Gray Scale</h2>
            <p className="text-sm text-muted-foreground">
              Radix UI의 공식 그레이 스케일입니다. 12단계로 체계적으로 구성되어 있으며, 배경부터 텍스트까지 모든 용도에 활용할 수 있습니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {radixGrayScale.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Radix Blue Scale</h2>
            <p className="text-sm text-muted-foreground">
              Radix UI의 공식 블루 스케일입니다. 기본 브랜드 컬러로 사용되며, 다양한 강조 요소에 활용할 수 있습니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {radixBlueScale.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "brand" && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">브랜드 블루 스케일</h2>
            <p className="text-sm text-muted-foreground">
              NeTaShaRa 브랜드 전용 블루 스케일입니다. Radix 블루를 기반으로 커스터마이징되어 브랜드 아이덴티티를 강화합니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {brandBlueScale.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">브랜드 블루 알파 스케일</h2>
            <p className="text-sm text-muted-foreground">
              투명도가 적용된 브랜드 블루 스케일입니다. 오버레이, 반투명 요소, 그리고 다양한 배경 위에서 사용할 수 있습니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {brandBlueAlphaScale.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">브랜드 그레이 스케일</h2>
            <p className="text-sm text-muted-foreground">
              NeTaShaRa 브랜드 전용 그레이 스케일입니다. Radix 그레이를 기반으로 커스터마이징되어 브랜드와 조화를 이룹니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {brandGrayScale.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "functional" && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">기능적 색상 (Functional Colors)</h2>
            <p className="text-sm text-muted-foreground">
              특정 상태나 기능을 나타내는 색상들입니다. 사용자에게 명확한 피드백을 제공하는 데 활용됩니다.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {functionalColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 색상 사용 가이드라인</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <h4 className="font-semibold mb-2">스케일 기반 사용법:</h4>
                <ul className="space-y-1">
                  <li>• <strong>1-3단계:</strong> 배경, 카드, 섹션 배경</li>
                  <li>• <strong>4-6단계:</strong> 입력 필드, 호버 상태, 구분선</li>
                  <li>• <strong>7-9단계:</strong> 플레이스홀더, 보조 텍스트, 본문</li>
                  <li>• <strong>10-12단계:</strong> 제목, 강조 텍스트, 최고 대비</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">컨텍스트별 사용법:</h4>
                <ul className="space-y-1">
                  <li>• <strong>배경:</strong> --bg, --muted, 그레이 1-4</li>
                  <li>• <strong>텍스트:</strong> --fg, --muted-foreground, 그레이 9-12</li>
                  <li>• <strong>브랜드:</strong> --brand, --primary, 블루 9-11</li>
                  <li>• <strong>상태:</strong> --success, --warning, --error, --info</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}