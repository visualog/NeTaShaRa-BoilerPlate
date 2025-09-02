import { SpacingSample } from "@/components/ui/spacing-sample";

const spacingScale = [
  { name: "spacing-1", size: "0.25rem", pixels: "4px" },
  { name: "spacing-2", size: "0.5rem", pixels: "8px" },
  { name: "spacing-3", size: "0.75rem", pixels: "12px" },
  { name: "spacing-4", size: "1rem", pixels: "16px" },
  { name: "spacing-5", size: "1.25rem", pixels: "20px" },
  { name: "spacing-6", size: "1.5rem", pixels: "24px" },
  { name: "spacing-8", size: "2rem", pixels: "32px" },
  { name: "spacing-10", size: "2.5rem", pixels: "40px" },
  { name: "spacing-12", size: "3rem", pixels: "48px" },
  { name: "spacing-16", size: "4rem", pixels: "64px" },
];

export default function SpacingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Spacing</h1>
        <p className="text-muted-foreground">
          간격 스케일은 4px 그리드 시스템을 기반으로 합니다.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col">
          {spacingScale.map((space) => (
            <SpacingSample key={space.name} {...space} />
          ))}
        </div>
      </div>
    </div>
  );
}
