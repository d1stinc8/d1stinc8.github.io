import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedFavicon } from "@/components/AnimatedFavicon";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://d1stinc8.github.io"),
  title: "Anurag Angal — Quantum Systems & Software Architecture",
  description:
    "Personal digital real estate of Anurag Angal. Quantum computing, numerical simulation, and software engineering.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Anurag Angal",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased selection:bg-[#1a1917] selection:text-[#f6f5f0] dark:selection:bg-[#eae8e1] dark:selection:text-[#111110]">
        <AnimatedFavicon/>
        {children}
      </body>
    </html>
  );
}
