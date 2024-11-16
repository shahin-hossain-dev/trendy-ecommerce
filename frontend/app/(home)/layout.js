import theme from "@/components/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Lato, Oswald } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StoreProvider from "../StoreProvider";
import Footer from "@/components/Footer/Footer";

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

export const metadata = {
  title: "Trendy",
  description: "app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${oswald.variable}`}>
      <body className={lato.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
