import theme from "@/components/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Lato, Oswald, Playfair, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StoreProvider from "../StoreProvider";
import Footer from "@/components/Footer/Footer";
import HandlerProvider from "@/lib/providers/HandlerProvider";

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

const playfair = Playfair_Display({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: ["--font-playfair"],
});

export const metadata = {
  title: "Trendy",
  description: "app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <body className={lato.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
              <HandlerProvider>
                <Header />
                <main>{children}</main>
                <Footer />
              </HandlerProvider>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
