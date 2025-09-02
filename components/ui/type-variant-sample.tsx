interface TypeVariantSampleProps {
  size: string;
  className: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}

export function TypeVariantSample({ size, className, fontSize, fontWeight, lineHeight, letterSpacing }: TypeVariantSampleProps) {
  return (
    <div className="flex items-start space-x-4 border-b py-4">
      <div className="w-32 text-sm font-semibold flex-shrink-0">{size}</div>
      <div className="flex-1 flex flex-col">
        <p className={className}>The quick brown fox 999!@# 한글 샘플 텍스트</p>
        <div className="flex flex-wrap gap-x-4 text-sm text-muted-foreground mt-2">
          <span>폰트 크기: {fontSize}</span>
          <span>폰트 굵기: {fontWeight}</span>
          <span>행간: {lineHeight}</span>
          <span>자간: {letterSpacing}</span>
        </div>
      </div>
    </div>
  );
}
