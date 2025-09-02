"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Collapsible from "@radix-ui/react-collapsible";
import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";

interface SidebarGroupProps {
  group: {
    name: string;
    items: { name: string; href: string }[];
  };
}

export function SidebarGroup({ group }: SidebarGroupProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(true);

  return (
    <Collapsible.Root key={group.name} open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="w-full text-left flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">{group.name}</h3>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </Collapsible.Trigger>
      <Collapsible.Content className="mt-2">
        <div className="pl-4 border-l border-muted-foreground/30">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium",
                pathname === item.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
