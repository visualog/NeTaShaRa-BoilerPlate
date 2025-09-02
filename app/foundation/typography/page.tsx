import { TypeVariantSample } from "@/components/ui/type-variant-sample";

const typographyRoles = [
  {
    role: "Display",
    description: "영웅적 정보, 브랜드 모멘트",
    variants: [
      { size: "Large", className: "text-[64px] font-bold leading-tight tracking-normal", fontSize: "4rem (64px)", fontWeight: "700", lineHeight: "1.25", letterSpacing: "normal" },
      { size: "Medium", className: "text-[48px] font-bold leading-tight tracking-normal", fontSize: "3rem (48px)", fontWeight: "700", lineHeight: "1.25", letterSpacing: "normal" },
      { size: "Small", className: "text-[32px] font-bold leading-tight tracking-normal", fontSize: "2rem (32px)", fontWeight: "700", lineHeight: "1.25", letterSpacing: "normal" },
    ],
  },
  {
    role: "Headline",
    description: "페이지/섹션 제목",
    variants: [
      { size: "Large", className: "text-[28px] font-bold leading-snug tracking-normal", fontSize: "1.75rem (28px)", fontWeight: "700", lineHeight: "1.375", letterSpacing: "normal" },
      { size: "Medium", className: "text-[24px] font-bold leading-snug tracking-normal", fontSize: "1.5rem (24px)", fontWeight: "700", lineHeight: "1.375", letterSpacing: "normal" },
      { size: "Small", className: "text-[20px] font-bold leading-snug tracking-normal", fontSize: "1.25rem (20px)", fontWeight: "700", lineHeight: "1.375", letterSpacing: "normal" },
    ],
  },
  {
    role: "Title",
    description: "계층적 내비게이션",
    variants: [
      { size: "Large", className: "text-[24px] font-semibold leading-normal tracking-normal", fontSize: "1.5rem (24px)", fontWeight: "600", lineHeight: "1.5", letterSpacing: "normal" },
      { size: "Medium", className: "text-[20px] font-semibold leading-normal tracking-normal", fontSize: "1.25rem (20px)", fontWeight: "600", lineHeight: "1.5", letterSpacing: "normal" },
      { size: "Small", className: "text-[16px] font-semibold leading-normal tracking-normal", fontSize: "1rem (16px)", fontWeight: "600", lineHeight: "1.5", letterSpacing: "normal" },
    ],
  },
  {
    role: "Body",
    description: "본문 텍스트",
    variants: [
      { size: "Large", className: "text-[20px] leading-relaxed tracking-normal", fontSize: "1.25rem (20px)", fontWeight: "400", lineHeight: "1.625", letterSpacing: "normal" },
      { size: "Medium", className: "text-[16px] leading-relaxed tracking-normal", fontSize: "1rem (16px)", fontWeight: "400", lineHeight: "1.625", letterSpacing: "normal" },
      { size: "Small", className: "text-[14px] leading-relaxed tracking-normal", fontSize: "0.875rem (14px)", fontWeight: "400", lineHeight: "1.625", letterSpacing: "normal" },
    ],
  },
  {
    role: "Label",
    description: "버튼/컴포넌트 레이블",
    variants: [
      { size: "Large", className: "text-[16px] font-medium leading-normal tracking-normal", fontSize: "1rem (16px)", fontWeight: "500", lineHeight: "1.5", letterSpacing: "normal" },
      { size: "Medium", className: "text-[14px] font-medium leading-normal tracking-normal", fontSize: "0.875rem (14px)", fontWeight: "500", lineHeight: "1.5", letterSpacing: "normal" },
      { size: "Small", className: "text-[12px] font-medium leading-normal tracking-normal", fontSize: "0.75rem (12px)", fontWeight: "500", lineHeight: "1.5", letterSpacing: "normal" },
    ],
  },
  {
    role: "Caption",
    description: "메타데이터, 보조 정보",
    variants: [
      { size: "Large", className: "text-[14px] leading-normal tracking-normal", fontSize: "0.875rem (14px)", fontWeight: "400", lineHeight: "1.5", letterSpacing: "normal" },
      { size: "Medium", className: "text-[12px] leading-normal tracking-normal", fontSize: "0.75rem (12px)", fontWeight: "400", lineHeight: "1.5", letterSpacing: "normal" },
      { size: "Small", className: "text-[11px] text-muted-foreground leading-normal tracking-normal", fontSize: "0.6875rem (11px)", fontWeight: "400", lineHeight: "1.5", letterSpacing: "normal" },
    ],
  },
];

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-bold">타이포그래피</h1>
        <p className="text-muted-foreground">
          사이즈 변형을 포함하는 역할 기반의 계층적 타이포그래피 시스템입니다.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">폰트 패밀리</h2>
        <p>
          기본 폰트 패밀리는 <a href="https://github.com/orioncactus/pretendard" target="_blank" rel="noopener noreferrer" className="text-primary underline">Pretendard</a>를 사용합니다. Pretendard는 한글과 영문 모두에서 뛰어난 가독성과 심미성을 제공하는 오픈소스 폰트입니다. 다양한 굵기를 지원하여 유연한 타이포그래피 디자인이 가능합니다.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">역할 기반 타입 스케일</h2>
        <div className="flex flex-col">
          {typographyRoles.map((role) => (
            <div key={role.role} className="space-y-4 mb-12">
              <div className="border-b pb-2 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{role.role}</h3>
                <p className="text-muted-foreground text-sm">{role.description}</p>
              </div>
              <div className="flex flex-col">
                {role.variants.map((variant) => (
                  <TypeVariantSample key={variant.size} {...variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">행간 및 자간 고려사항</h2>
        <p className="text-muted-foreground">
          행간(Line-height)과 자간(Letter-spacing)은 텍스트의 가독성과 시각적 균형에 중요한 영향을 미칩니다. 특히 한글과 영문 텍스트의 특성을 고려하여 적절한 값을 적용하는 것이 중요합니다.
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>
            <strong>행간 (Line-height):</strong>
            <ul className="list-circle pl-4">
              <li>일반적으로 폰트 크기가 클수록 행간은 상대적으로 좁게, 작을수록 넓게 설정하여 가독성을 높입니다.</li>
              <li>한글은 영문에 비해 시각적으로 더 꽉 차 보이는 경향이 있어, 동일한 폰트 크기에서 영문보다 약간 더 여유로운 행간이 가독성에 유리할 수 있습니다. 하지만 시스템의 복잡성을 줄이기 위해, 현재는 단일하고 잘 조정된 행간 스케일을 사용합니다.</li>
            </ul>
          </li>
          <li>
            <strong>자간 (Letter-spacing):</strong>
            <ul className="list-circle pl-4">
              <li>한글(Hangul)은 글자 자체가 사각형 공간 안에 조형되어 있어, 음수 자간을 적용하면 가독성이 저해될 가능성이 높습니다. 대부분의 경우 <code>normal</code> (0) 자간을 유지하는 것을 권장합니다.</li>
              <li>영문(Latin)은 디스플레이용 큰 텍스트나 올캡스(ALL CAPS) 텍스트에서 미세한 자간 조정이 시각적 균형을 개선할 수 있습니다.</li>
              <li>현재 시스템에서는 대부분의 경우 <code>normal</code> 자간을 기본으로 적용합니다.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}