import { BorderRadiusSample } from "@/components/ui/border-radius-sample";

const borderRadiusScale = [
  { name: "radius-sm", radius: "0.25rem", className: "rounded-sm" },
  { name: "radius-md", radius: "0.5rem", className: "rounded-md" },
  { name: "radius-lg", radius: "0.75rem", className: "rounded-lg" },
  { name: "radius-full", radius: "9999px", className: "rounded-full" },
];

const borderWidths = [
    { name: "border-1", width: "1px" },
    { name: "border-2", width: "2px" },
    { name: "border-4", width: "4px" },
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
        <h2 className="text-xl font-semibold">모서리 굴곡률</h2>
        <div className="flex flex-col">
          {borderRadiusScale.map((radius) => (
            <BorderRadiusSample key={radius.name} {...radius} />
          ))}
        </div>
      </div>
    </div>
  );
}
