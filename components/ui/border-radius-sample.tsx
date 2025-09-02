interface BorderRadiusSampleProps {
  name: string;
  radius: string;
  className: string;
}

export function BorderRadiusSample({ name, radius, className }: BorderRadiusSampleProps) {
  return (
    <div className="flex items-center space-x-4 border-b py-4">
      <div className="w-32 text-sm font-semibold">{name}</div>
      <div className="flex flex-1 items-center space-x-4">
        <div
          className={`h-16 w-16 bg-muted border-2 border-primary ${className}`}
        />
        <div className="text-sm text-muted-foreground">{radius}</div>
      </div>
    </div>
  );
}
