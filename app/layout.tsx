import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { LiquidBackground } from "@/components/ui/liquid-background";
import { NavHeader } from "@/components/ui/nav-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Real-time crypto market analytics with Liquid Glass UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LiquidBackground />
          <NavHeader />
          <main className="pt-28 px-6 pb-12 w-full max-w-7xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
