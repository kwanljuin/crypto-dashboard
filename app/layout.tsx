import type { Metadata } from "next";
import { Unbounded, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainBackground } from "@/components/ui/main-background";
import { Sidebar } from "@/components/layout/sidebar";
import { HUDHeader } from "@/components/layout/hud-header";
import { FooterTicker } from "@/components/layout/footer-ticker";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crypto Terminal | Cinematic Pro",
  description: "Advanced real-time cryptocurrency analytics and market terminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${unbounded.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainBackground />
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen">
              <HUDHeader />
              <main className="flex-1 pl-0 md:pl-20 pt-14 pb-10">
                <div className="max-w-[1600px] mx-auto p-4 md:p-8">
                  {children}
                </div>
              </main>
              <FooterTicker />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
