<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Next.js + Tailwind v4 + shadcn/ui + Radix 통합 보일러플레이트와 토큰 설계(OKLCH) 예시, CVA로 버튼/알럿 변형 구성, 데이터 속성(data-[state=open]) 기반 상호작용 스타일링 샘플을 제공

다음 보일러플레이트는 Next.js 15 + Tailwind v4 + shadcn/ui + Radix를 통합하고, OKLCH 토큰 설계, CVA로 버튼/알럿 변형, 그리고 Radix data 속성 기반 상호작용 스타일링(data-[state=open])까지 한 번에 보여준다. 모든 예시는 v4의 CSS-first(@theme) 방식과 shadcn의 v4 가이드를 따른다.[^1][^2][^3]

## 프로젝트 초기화

- Next.js 15 앱 생성 후 Tailwind v4 업그레이드 가이드를 따른다. v4는 CSS에서 `@import "tailwindcss"` + `@theme`로 토큰과 유틸리티를 구성한다.[^2][^3]
- shadcn/ui는 v4와 React 19를 지원하며 `@theme inline`, `data-slot`, OKLCH 색 변환 전략을 문서화했다.[^4][^1]

예시 명령

```bash
# Next.js 15 앱
pnpm create next-app@latest my-app
cd my-app

# Tailwind v4 (업그레이드 가이드 참고)
# v3 → v4 마이그레이드 시 codemod 사용
pnpm dlx @tailwindcss/upgrade@next

# shadcn/ui 초기화
pnpm dlx shadcn-ui@latest init

# 필요한 패키지
pnpm add class-variance-authority radix-ui react-hook-form sonner
```


## Tailwind v4 + OKLCH 토큰 설계

- v4에서는 CSS에서 직접 토큰을 정의한다. OKLCH는 명도/채도를 제어하기 쉬워 접근성 있는 색 시스템에 유리하다.[^1]
- shadcn v4 가이드 권고에 따라 `@theme inline`을 활용하고, 런타임 접근을 위해 :root/.dark에는 실제 hsl/oklch 값을 유지한다.[^1]

글로벌 CSS(app/globals.css)

```css
@import "tailwindcss";

:root {
  /* 런타임에서 접근 가능한 실제 값 */
  --brand: oklch(0.67 0.17 260);
  --brand-foreground: oklch(0.98 0.02 260);
  --bg: oklch(0.99 0 0);
  --fg: oklch(0.15 0.02 260);
  --muted: oklch(0.95 0.02 260);
  --muted-foreground: oklch(0.45 0.02 260);
  --destructive: oklch(0.62 0.18 30);
  --destructive-foreground: oklch(0.98 0.02 30);
  --ring: oklch(0.65 0.16 260);
}

.dark {
  --bg: oklch(0.17 0.02 260);
  --fg: oklch(0.98 0.02 260);
  --muted: oklch(0.22 0.02 260);
  --muted-foreground: oklch(0.80 0.02 260);
  --destructive: oklch(0.55 0.20 30);
  --destructive-foreground: oklch(0.98 0.02 30);
  --ring: oklch(0.70 0.16 260);
}

/* Tailwind v4 테마 토큰 매핑 */
@theme inline {
  /* 색 토큰 */
  --color-background: var(--bg);
  --color-foreground: var(--fg);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-primary: var(--brand);
  --color-primary-foreground: var(--brand-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-ring: var(--ring);

  /* spacing, radius, etc. */
  --radius: 0.5rem;
}

html, body, :root { height: 100%; }
```


## shadcn/ui 설치와 기본 레이아웃

- shadcn CLI로 컴포넌트를 선택 설치하면 로컬 코드로 소유 가능하며 토큰·접근성 정책을 팀 컨벤션에 맞춰 커스터마이즈 가능하다.[^5][^1]
- 최신 변경사항: React 19 호환, `data-slot` 도입, HSL→OKLCH 전환, 토스트는 sonner 권장 등은 참고한다.[^4][^1]

예시 레이아웃(app/layout.tsx)

```tsx
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
```


## CVA로 버튼 변형 구성

- class-variance-authority로 variant/size/상태를 선언하고 Tailwind 유틸리티를 조합한다.[^6]
- 테마 토큰을 이용해 일관된 색/반경/포커스 링을 보장하고, compoundVariants로 조합 상태를 간결히 처리한다.[^6][^1]

components/ui/button.tsx

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[--radius] text-sm font-medium transition-colors outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        outline: "border border-muted-foreground/30 text-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-muted/60",
        destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-6 text-base",
      },
      loading: {
        true: "pointer-events-none opacity-70",
        false: "",
      },
    },
    compoundVariants: [
      { variant: "outline", size: "lg", class: "border-2" },
      { variant: ["default", "destructive"], size: "sm", class: "tracking-tight" },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      loading: "false",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        buttonVariants({ variant, size, loading }),
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
```


## CVA로 알럿 변형 구성

- 의미론적 변형(정보/경고/에러/성공)과 토큰 매핑으로 테마 변경 시 유지보수를 최소화한다.[^6][^1]

components/ui/alert.tsx

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const alertVariants = cva(
  "w-full rounded-[--radius] border p-4 text-sm grid gap-2",
  {
    variants: {
      intent: {
        info: "border-muted bg-muted/40 text-foreground",
        warning: "border-[oklch(0.78_0.16_80)] bg-[oklch(0.96_0.03_80)]",
        error: "border-destructive bg-destructive/10 text-foreground",
        success: "border-[oklch(0.78_0.16_150)] bg-[oklch(0.96_0.03_150)]",
      },
      dense: { true: "p-3 text-xs", false: "" },
    },
    defaultVariants: { intent: "info", dense: false },
  }
);

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert({ className, intent, dense, ...props }: AlertProps) {
  return <div className={cn(alertVariants({ intent, dense }), className)} {...props} />;
}
```


## Radix data 속성 기반 상호작용 스타일링

- Radix는 상태를 `data-state="open"` 등으로 노출하므로 Tailwind의 속성 변형을 사용해 `data-[state=open]:…` 형태로 스타일링한다.[^7][^8]
- 예: 아코디언 컨텐츠가 열릴 때 배경/테두리/아이콘 회전을 상태 기반으로 제어한다.[^9][^7]

components/ui/accordion.tsx

```tsx
"use client";

import * as Accordion from "radix-ui/react-accordion";
import { cn } from "@/lib/cn";

export function FAQ() {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item
        value="item-1"
        className={cn(
          "rounded-[--radius] border p-4 transition-colors",
          "data-[state=open]:bg-muted data-[state=open]:border-foreground/20"
        )}
      >
        <Accordion.Header>
          <Accordion.Trigger
            className={cn(
              "group flex w-full items-center justify-between text-left font-medium",
              "data-[state=open]:text-foreground"
            )}
          >
            무엇이 달라졌나요?
            <svg
              className="size-4 transition-transform group-data-[state=open]:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
            </svg>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="pt-2 text-sm text-muted-foreground">
          Tailwind v4와 OKLCH 토큰, shadcn 업데이트로 테마/접근성이 개선되었습니다.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

DropdownMenu에서의 data 속성 활용 예

```tsx
import * as DropdownMenu from "radix-ui/react-dropdown-menu";

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-3 py-2 rounded-[--radius] border hover:bg-muted">
        Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className={cn(
          "mt-2 min-w-40 rounded-[--radius] border bg-background p-2 shadow-sm",
          // 충돌 방향/정렬에 따라 변하는 data-side/data-align로 애니메이션 원점 제어 가능
          "data-[side=bottom]:animate-in data-[side=top]:animate-in"
        )}
      >
        <DropdownMenu.Item className="rounded px-2 py-1.5 outline-none focus:bg-muted">
          Profile
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

참고: Tailwind가 data-* 선택자 변형을 지원하므로 `data-[state=open]:bg-muted`와 같은 형태가 동작한다. 플러그인을 써서 `data-state-open:bg-muted`와 같은 가독성을 높일 수도 있다.[^10][^8]

## 페이지 예시(app/page.tsx)

- 버튼/알럿/Radix 상호작용 컴포넌트를 한 화면에서 확인할 수 있는 샘플 페이지다.[^7][^5]

```tsx
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { FAQ } from "@/components/ui/accordion";

export default function Page() {
  return (
    <main className="container mx-auto max-w-2xl space-y-8 p-6">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Design System Starter</h1>
        <div className="flex gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button loading="true">Loading</Button>
        </div>
      </section>

      <section className="space-y-2">
        <Alert intent="info">정보 메시지입니다.</Alert>
        <Alert intent="warning">경고 메시지입니다.</Alert>
        <Alert intent="error">에러 메시지입니다.</Alert>
        <Alert intent="success">성공 메시지입니다.</Alert>
      </section>

      <section className="space-y-2">
        <FAQ />
      </section>
    </main>
  );
}
```


## 접근성/테마 실전 팁

- 포커스 가시성: `focus-visible:ring-2 ring-ring ring-offset-2`를 공통 컴포넌트에 기본 포함하고, 디자인 토큰으로 링 색을 제어한다.[^1]
- 상태/변형 일관성: CVA defaultVariants + compoundVariants로 조합 폭발을 제어하고, 토큰만 바꿔 다크모드/리브랜딩에 대응한다.[^6][^1]


## 업그레이드·참고 문서

- Tailwind v4 업그레이드 가이드와 shadcn Tailwind v4 문서를 순서대로 적용하면 마이그레이드 리스크가 낮다.[^2][^1]
- shadcn 변경 로그로 CLI 3.0, OKLCH, `data-slot`, 새 테마(new-york) 채택 등 변경사항을 추적한다.[^4]

필요하다면 레포 템플릿을 생성해 이 구조를 그대로 푸시하고, 색 토큰을 브랜드 팔레트(OKLCH)로 확장하며 Radix Dropdown/Popover/Dialog/Tooltip에 data 속성 변형 세트를 일괄 적용하는 스캐폴딩도 제공 가능하다.[^11][^7][^1]
<span style="display:none">[^12][^13][^14][^15][^16][^17][^18][^19]</span>

<div style="text-align: center">⁂</div>

[^1]: https://ui.shadcn.com/docs/tailwind-v4

[^2]: https://tailwindcss.com/docs/upgrade-guide

[^3]: https://tailwindcss.com

[^4]: https://ui.shadcn.com/docs/changelog

[^5]: https://ui.shadcn.com

[^6]: https://cva.style/docs/getting-started/variants

[^7]: https://www.radix-ui.com/primitives/docs/guides/styling

[^8]: https://github.com/radix-ui/primitives/discussions/1000

[^9]: https://www.radix-ui.com/primitives/docs/components/accordion

[^10]: https://blog.makerx.com.au/styling-radix-ui-components-using-tailwind-css/

[^11]: https://www.radix-ui.com/primitives/docs/components/dropdown-menu

[^12]: https://ui.shadcn.com/docs/components/calendar

[^13]: https://ui.shadcn.com/docs/components/date-picker

[^14]: https://www.radix-ui.com/primitives/docs/components/select

[^15]: https://www.reddit.com/r/nextjs/comments/1jt9i3m/master_the_2025_stack_complete_guide_to_nextjs_15/

[^16]: https://dev.to/darshan_bajgain/setting-up-2025-nextjs-15-with-shadcn-tailwind-css-v4-no-config-needed-dark-mode-5kl

[^17]: https://blog.mohitnagaraj.in/blog/202505/Electron_Shadcn_Guide

[^18]: https://www.shadcnblocks.com/blog/tailwind4-shadcn-themeing/

[^19]: https://dev.to/shubhamtiwari909/button-component-with-cva-and-tailwind-1fn8

