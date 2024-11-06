"use client";
import Sidebar from "@/components/Dashboard/Sidebar/page";
import SideNavBar from "@/components/Dashboard/Sidebar/SideNavBar";
import { Lato, Oswald } from "next/font/google";
import "../globals.css";
import DashboardHeader from "@/components/Dashboard/Sidebar/Header/DashboardHeader";
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
        <div className="bg-red-400  grid lg:grid-cols-12 ">
          <section className=" lg:col-span-2">
            <SideNavBar />
          </section>
          <section className="lg:col-span-10">
            <DashboardHeader />
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
