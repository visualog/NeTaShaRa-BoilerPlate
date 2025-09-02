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
  

  return (
    <aside className="w-64 flex-shrink-0 border-r border-muted/40 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">MDS</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        {navigation.map((group) => (
          <SidebarGroup key={group.name} group={group} />
        ))}
      </nav>
    </aside>
  );
}
