import { Home, Settings, Search, User, ChevronsRight } from "lucide-react";

const icons = [
  { name: "Home", Icon: Home },
  { name: "Settings", Icon: Settings },
  { name: "Search", Icon: Search },
  { name: "User", Icon: User },
  { name: "ChevronsRight", Icon: ChevronsRight },
];

export default function IconographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Iconography</h1>
        <p className="text-muted-foreground">
          일관되고 현대적인 디자인을 위해 <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Lucide</a> 아이콘 라이브러리를 사용합니다.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">사용법</h2>
        <p>
          아이콘을 사용하려면 <code>lucide-react</code> 패키지에서 직접 임포트하세요.
        </p>
        <pre className="bg-muted p-4 rounded-md text-sm">
          <code>
            {`import { Home } from "lucide-react";\n\n<Home className=\"h-4 w-4\" />`}
          </code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">자주 사용되는 아이콘</h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {icons.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <Icon className="h-8 w-8" />
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
