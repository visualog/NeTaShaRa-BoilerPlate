export default function LayoutGridPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Layout & Grid</h1>
        <p className="text-muted-foreground">
          애플리케이션 레이아웃 구조화 및 그리드 시스템 사용 원칙입니다.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">메인 레이아웃 구조</h2>
        <p>
          메인 애플리케이션 레이아웃은 왼쪽에 고정 너비 사이드바와 오른쪽에 유연한 메인 콘텐츠 영역을 가진 수직 플렉스 컨테이너로 구성됩니다. 이는 <code>app/layout.tsx</code>에 정의되어 있습니다.
        </p>
        <div className="flex h-48 rounded-lg border">
          <div className="w-32 bg-muted p-4">
            <p className="text-sm font-semibold">Sidebar</p>
          </div>
          <div className="flex-1 bg-background p-4">
            <p className="text-sm font-semibold">Main Content</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">콘텐츠 컨테이너</h2>
        <p>
          메인 페이지 콘텐츠의 경우, <code>container</code> 클래스를 사용하여 콘텐츠를 중앙에 배치하고 최대 너비를 적용합니다. 이는 큰 화면에서의 가독성을 보장합니다.
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <div className="container bg-background p-4">
            <p className="text-sm">This is inside a <code>.container</code></p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">그리드 시스템</h2>
        <p>
          유연한 레이아웃을 생성하려면 Tailwind의 반응형 그리드 유틸리티(예: <code>grid</code>, <code>grid-cols-*</code>, <code>gap-*</code>)를 사용하세요。
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-primary/20 p-4 rounded-lg text-center">Col 1</div>
          <div className="bg-primary/20 p-4 rounded-lg text-center">Col 2</div>
          <div className="bg-primary/20 p-4 rounded-lg text-center">Col 3</div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">브레이크포인트</h2>
        <p>
          다양한 화면 크기에 맞게 디자인을 조정하려면 반응형 접두사를 사용하세요. 기본 브레이크포인트는 다음과 같습니다:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li><code>sm</code>: 640px</li>
          <li><code>md</code>: 768px</li>
          <li><code>lg</code>: 1024px</li>
          <li><code>xl</code>: 1280px</li>
          <li><code>2xl</code>: 1536px</li>
        </ul>
      </div>
    </div>
  );
}
