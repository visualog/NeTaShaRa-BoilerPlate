interface ShadowSampleProps {
  name: string;
  className: string;
}

export function ShadowSample({ name, className }: ShadowSampleProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-8">
      <div
        className={`h-24 w-full bg-background ${className}`}
      />
      <div className="text-sm font-semibold">{name}</div>
    </div>
  );
}
