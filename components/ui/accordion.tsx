"use client";

import * as Accordion from "@radix-ui/react-accordion";
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
