import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "MasterTools BD - Premium access to top platforms",
  description: "Premium access to top platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
