import "./globals.css";
import '@radix-ui/themes/styles.css'; // Radix Themes 스타일
import { ReactNode } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider"; // ThemeProvider 임포트

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider> {/* ThemeProvider로 감싸기 */}
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 md:pt-8">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
