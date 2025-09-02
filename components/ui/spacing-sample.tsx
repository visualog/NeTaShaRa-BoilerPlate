interface SpacingSampleProps {
  name: string;
  size: string;
  pixels: string;
}

export function SpacingSample({ name, size, pixels }: SpacingSampleProps) {
  return (
    <div className="flex items-center space-x-4 border-b py-4">
      <div className="w-32 text-sm font-semibold">{name}</div>
      <div className="flex flex-1 items-center space-x-4">
        <div className="bg-primary" style={{ width: size, height: size }} />
        <div className="text-sm text-muted-foreground">{size}</div>
        <div className="text-sm text-muted-foreground">({pixels})</div>
      </div>
    </div>
  );
}
