import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syrine Elayeb | Full-Stack Developer",
  description:
    "Portfolio of Syrine Elayeb, Full-Stack Developer focused on modern web applications, AI, and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
