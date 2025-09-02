interface ColorSwatchProps {
  name: string;
  variable: string;
  oklchValue: string; // This is the OKLCH value
  hexValue: string; // New prop for HEX value
}

export function ColorSwatch({ name, variable, oklchValue, hexValue }: ColorSwatchProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="h-24 w-full" style={{ backgroundColor: variable }} />
      <div className="p-4">
        <h3 className="text-[16px] font-semibold leading-normal">{name}</h3>
        <code className="block text-sm text-muted-foreground mt-1">{variable}</code>
        <code className="block text-sm text-muted-foreground">{oklchValue}</code>
        <code className="block text-sm text-muted-foreground">{hexValue}</code>
      </div>
    </div>
  );
}
