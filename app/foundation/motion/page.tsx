const durationScale = [
  { name: "duration-75", value: "75ms" },
  { name: "duration-100", value: "100ms" },
  { name: "duration-150", value: "150ms" },
  { name: "duration-200", value: "200ms" },
  { name: "duration-300", value: "300ms" },
  { name: "duration-500", value: "500ms" },
  { name: "duration-700", value: "700ms" },
  { name: "duration-1000", value: "1000ms" },
];

const easingFunctions = [
  { name: "ease-linear", value: "linear" },
  { name: "ease-in", value: "cubic-bezier(0.4, 0, 1, 1)" },
  { name: "ease-out", value: "cubic-bezier(0, 0, 0.2, 1)" },
  { name: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
];

function MotionSample({ name, value, isDuration = false }: { name: string; value: string; isDuration?: boolean }) {
  return (
    <div className="flex items-center space-x-4 border-b py-4">
      <div className="w-48 text-sm font-semibold">{name}</div>
      <div className="flex-1 text-sm text-muted-foreground">{value}</div>
      {isDuration && (
        <div className="flex-1">
          <div 
            className="h-4 w-4 rounded-full bg-primary transition-transform duration-1000 ease-in-out hover:translate-x-16"
            style={{ transitionDuration: value }}
          />
        </div>
      )}
    </div>
  );
}

export default function MotionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Motion & Animation</h1>
        <p className="text-muted-foreground">
          모션 시스템은 애니메이션의 타이밍과 이징을 정의합니다.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">지속 시간</h2>
        <div className="flex flex-col">
          {durationScale.map((duration) => (
            <MotionSample key={duration.name} {...duration} isDuration />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">이징 함수</h2>
        <div className="flex flex-col">
          {easingFunctions.map((easing) => (
            <MotionSample key={easing.name} {...easing} />
          ))}
        </div>
      </div>
    </div>
  );
}
