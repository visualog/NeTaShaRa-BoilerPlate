import { BorderRadiusSample } from "@/components/ui/border-radius-sample";

const borderRadiusScale = [
  { name: "radius-none", radius: "0px", className: "rounded-none" },
  { name: "radius-xs", radius: "0.125rem", className: "rounded-[0.125rem]" },
  { name: "radius-sm", radius: "0.25rem", className: "rounded-sm" },
  { name: "radius-md", radius: "0.375rem", className: "rounded-md" },
  { name: "radius-lg", radius: "0.5rem", className: "rounded-lg" },
  { name: "radius-xl", radius: "0.75rem", className: "rounded-xl" },
  { name: "radius-2xl", radius: "1rem", className: "rounded-2xl" },
  { name: "radius-full", radius: "9999px", className: "rounded-full" },
];

const borderWidths = [
  { name: "border-1", width: "1px" },
  { name: "border-2", width: "2px" },
  { name: "border-4", width: "4px" },
];

const radiusHierarchy = [
  {
    level: "Container",
    description: "페이지, 섹션, 대형 카드",
    recommended: "radius-xl (0.75rem)",
  },
  {
    level: "Card",
    description: "일반 카드, 패널",
    recommended: "radius-lg (0.5rem)",
  },
  {
    level: "Button / Input",
    description: "버튼, 입력 필드, 탭",
    recommended: "radius-md (0.375rem)",
  },
  {
    level: "Small Element",
    description: "태그, 배지, 작은 요소",
    recommended: "radius-sm (0.25rem)",
  },
];

const paddingRadiusRelationship = [
  {
    paddingLabel: "xs",
    padding: "0.5rem",
    containerRadius: "radius-sm (0.25rem)",
    innerRadius: "radius-xs (0.125rem)",
    exampleClasses: {
      container: "p-2 rounded-sm",
      inner: "px-2 py-1 rounded-[0.125rem]",
    },
  },
  {
    paddingLabel: "sm",
    padding: "0.75rem",
    containerRadius: "radius-md (0.375rem)",
    innerRadius: "radius-sm (0.25rem)",
    exampleClasses: {
      container: "p-3 rounded-md",
      inner: "px-3 py-1.5 rounded-sm",
    },
  },
  {
    paddingLabel: "md",
    padding: "1rem",
    containerRadius: "radius-lg (0.5rem)",
    innerRadius: "radius-md (0.375rem)",
    exampleClasses: {
      container: "p-4 rounded-lg",
      inner: "px-4 py-2 rounded-md",
    },
  },
  {
    paddingLabel: "lg",
    padding: "1.5rem",
    containerRadius: "radius-xl (0.75rem)",
    innerRadius: "radius-lg (0.5rem)",
    exampleClasses: {
      container: "p-6 rounded-xl",
      inner: "px-4 py-2 rounded-lg",
    },
  },
  {
    paddingLabel: "xl",
    padding: "2rem",
    containerRadius: "radius-2xl (1rem)",
    innerRadius: "radius-xl (0.75rem)",
    exampleClasses: {
      container: "p-8 rounded-2xl",
      inner: "px-5 py-2.5 rounded-xl",
    },
  },
];

export default function BordersRadiusPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Borders & Radius</h1>
        <p className="text-muted-foreground">
          테두리 및 모서리 굴곡률에 대한 규칙입니다.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">테두리 두께</h2>
        <div className="flex flex-col">
          {borderWidths.map((border) => (
            <div key={border.name} className="flex items-center space-x-4 border-b py-4">
              <div className="w-32 text-sm font-semibold">{border.name}</div>
              <div className="flex-1 flex items-center space-x-4">
                <div className="h-8 w-full bg-muted" style={{ borderBottomWidth: border.width, borderColor: 'var(--color-primary)' }} />
                <div className="text-sm text-muted-foreground">{border.width}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">모서리 굴곡률 스케일</h2>
        <div className="flex flex-col">
          {borderRadiusScale.map((radius) => (
            <BorderRadiusSample key={radius.name} {...radius} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">계층별 권장 굴곡률</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {radiusHierarchy.map((row) => (
            <div key={row.level} className="rounded-lg border p-4 bg-card">
              <div className="text-sm text-muted-foreground">{row.level}</div>
              <div className="mt-1 font-semibold">{row.recommended}</div>
              <div className="mt-1 text-sm text-muted-foreground">{row.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">여백-굴곡률 관계 가이드</h2>
        <p className="text-sm text-muted-foreground">
          내부 여백이 커질수록 컨테이너의 굴곡률도 비례해 증가합니다. 내부 요소(버튼/입력)는 컨테이너보다 한 단계 작은 굴곡률을 권장합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paddingRadiusRelationship.map((row) => (
            <div key={row.paddingLabel} className="rounded-lg border p-4 space-y-3 bg-card">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Padding: {row.paddingLabel} ({row.padding})</div>
                <div className="text-xs text-muted-foreground">컨테이너: {row.containerRadius} / 내부: {row.innerRadius}</div>
              </div>
              <div className={`border bg-muted/40 ${row.exampleClasses.container}`}>
                <div className={`inline-flex items-center bg-primary text-primary-foreground ${row.exampleClasses.inner}`}>
                  예시 버튼
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
