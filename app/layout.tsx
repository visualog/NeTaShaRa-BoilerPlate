import "./globals.css";
import { ReactNode } from "react";
import { Sidebar } from "@/components/ui/sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <div className="flex min-h-screen">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <main className="flex-1 min-w-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
