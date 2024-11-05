"use client";
import Sidebar from "@/components/Dashboard/Sidebar/page";
import { Lato, Oswald } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const oswald = Oswald({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${oswald.variable}`}>
      <body style={{ margin: "0" }}>
        <main>
          <div style={{ display: "flex !important" }}>
            <section className="min-h-full w-[240px]">
              <Sidebar />
            </section>
            <section>{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
