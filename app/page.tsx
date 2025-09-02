import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">NeTaShaRa 디자인 시스템</h1>
        <p className="text-muted-foreground max-w-2xl">
          일관된 UI를 빠르게 구축할 수 있도록 토큰, 컴포넌트, 가이드를 제공합니다. 아래 빠른 시작을 통해 주요 섹션으로 이동하세요.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">빠른 시작</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickStartCard
            title="색상 시스템"
            description="OKLCH 기반 팔레트와 토큰, 접근성 대비"
            href="/foundation/colors"
          />
          <QuickStartCard
            title="타이포그래피"
            description="역할 기반 타입 스케일과 사용 가이드"
            href="/foundation/typography"
          />
          <QuickStartCard
            title="간격 시스템"
            description="스페이싱 스케일과 레이아웃 간격 규칙"
            href="/foundation/spacing"
          />
          <QuickStartCard
            title="보더 & 라디우스"
            description="계층/여백 기반 굴곡률 가이드"
            href="/foundation/borders-radius"
          />
          <QuickStartCard
            title="그리드 & 레이아웃"
            description="반응형 컬럼/거터/컨테이너 규칙"
            href="/foundation/layout-grid"
          />
          <QuickStartCard
            title="쉐도우 & 모션"
            description="심도 체계와 인터랙션 모션"
            href="/foundation/shadows"
          />
        </div>
      </section>
    </div>
  );
}

function QuickStartCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="text-sm font-medium text-primary">바로가기 →</div>
      </div>
    </Link>
  );
}
