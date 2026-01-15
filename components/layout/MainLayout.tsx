"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import clsx from "clsx";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      <main className={clsx("flex-1", !isDashboard && "pt-16")}>
        {children}
      </main>
      {!isDashboard && <Footer />}
    </>
  );
}
