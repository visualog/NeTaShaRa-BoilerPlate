"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { SidebarGroup } from "./sidebar-group";
import { navigation } from "@/lib/menu-config";

export function Sidebar() {
  const [query, setQuery] = React.useState("");
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

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

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background border shadow-lg"
        aria-label="메뉴 열기"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative inset-y-0 left-0 z-50
          w-64 bg-background border-r border-border
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button for mobile */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold tracking-tight">MDS</h2>
            <button
              onClick={closeMobileSidebar}
              className="md:hidden p-1 rounded-md hover:bg-muted"
              aria-label="메뉴 닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Search */}
          <div className="p-6 pb-3">
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

          {/* Navigation */}
          <nav className="flex-1 px-6 pb-6 overflow-y-auto">
            {filteredNavigation.length > 0 ? (
              <div className="space-y-4">
                {filteredNavigation.map((group) => (
                  <SidebarGroup key={group.name} group={group} />
                ))}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground px-1">
                검색 결과가 없습니다.
              </div>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}
