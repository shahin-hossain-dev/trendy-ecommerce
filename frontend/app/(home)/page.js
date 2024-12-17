import RecentOrder from "@/components/Dashboard/DashboardHome/RecentOrder/RecentOrder";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Home/HomePage/Features/Features";
import ProductContainer from "@/components/Product/ProductContainer";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`w-[95%] mx-auto ${inter.className}`}>
      <Hero />
      {/* features items  */}
      <Features />
      <ProductContainer />
    </div>
  );
}
