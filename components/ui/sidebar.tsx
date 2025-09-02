"use client";

import * as React from "react";


import { SidebarGroup } from "./sidebar-group";


const navigation = [
  {
    name: "Foundation",
    items: [
      { name: "Colors", href: "/foundation/colors" },
      { name: "Typography", href: "/foundation/typography" },
      { name: "Spacing", href: "/foundation/spacing" },
      { name: "Borders & Radius", href: "/foundation/borders-radius" },
      { name: "Shadows", href: "/foundation/shadows" },
      { name: "Iconography", href: "/foundation/iconography" },
      { name: "Layout & Grid", href: "/foundation/layout-grid" },
      { name: "Motion", href: "/foundation/motion" },
    ],
  },
  {
    name: "Components",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Alert", href: "/components/alert" },
      { name: "Accordion", href: "/components/accordion" },
    ],
  },
];

export function Sidebar() {
  
  const [query, setQuery] = React.useState("");

  const filteredNavigation = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return navigation;
    return navigation
      .map((group) => {
        const filteredItems = group.items.filter((item) =>
          item.name.toLowerCase().includes(q)
        );
        return { ...group, items: filteredItems };
      })
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <aside className="w-64 flex-shrink-0 border-r border-muted/40 p-6">
      <div className="mb-6 space-y-3">
        <h2 className="text-2xl font-bold tracking-tight">MDS</h2>
        <div>
          <label htmlFor="sidebar-search" className="sr-only">
            검색
          </label>
          <input
            id="sidebar-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색 (예: Colors, Button)"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <nav className="flex flex-col space-y-4">
        {filteredNavigation.length > 0 ? (
          filteredNavigation.map((group) => (
            <SidebarGroup key={group.name} group={group} />
          ))
        ) : (
          <div className="text-sm text-muted-foreground px-1">검색 결과가 없습니다.</div>
        )}
      </nav>
    </aside>
  );
}
