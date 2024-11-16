"use client";
import theme from "@/components/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Lato, Oswald } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/app/StoreProvider";
import DashboardHeader from "@/components/Dashboard/DashboardHeader/DashboardHeader";
import HandlerProvider from "@/lib/providers/HandlerProvider";
import SideNavBar from "@/components/Dashboard/Sidebar/SideNavBar";

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
      <body style={{ margin: "0" }} className="bg-[#F0F0F5]">
        <HandlerProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <StoreProvider>
                <div className="lg:grid lg:grid-cols-12 ">
                  <section className=" lg:col-span-2">
                    <SideNavBar />
                  </section>
                  <section className="lg:col-span-10 ">
                    <DashboardHeader />
                    <div className="my-4 md:my-8 md:px-8 ">{children}</div>
                  </section>
                </div>
              </StoreProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </HandlerProvider>
      </body>
    </html>
  );
}
