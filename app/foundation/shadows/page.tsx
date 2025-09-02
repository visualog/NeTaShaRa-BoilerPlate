import { ShadowSample } from "@/components/ui/shadow-sample";

const shadowScale = [
  { name: "shadow-sm", className: "shadow-sm" },
  { name: "shadow", className: "shadow" },
  { name: "shadow-md", className: "shadow-md" },
  { name: "shadow-lg", className: "shadow-lg" },
  { name: "shadow-xl", className: "shadow-xl" },
  { name: "shadow-2xl", className: "shadow-2xl" },
];

export default function ShadowsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Shadows & Elevation</h1>
        <p className="text-muted-foreground">
          그림자 시스템은 입체감과 깊이를 표현하는 데 사용됩니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {shadowScale.map((shadow) => (
          <ShadowSample key={shadow.name} {...shadow} />
        ))}
      </div>
    </div>
  );
}
